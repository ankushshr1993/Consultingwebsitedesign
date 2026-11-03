import test from 'node:test';
import assert from 'node:assert/strict';
import { validateContactPayload, enquiryFields } from '../apps/defence-fund/lib/contact.ts';

function intake(kind) {
  return { kind, website: '', fields: Object.fromEntries(enquiryFields[kind].map(field => [field.name,
    field.type === 'email' ? 'person@example.invalid' : field.type === 'url' ? '' : field.options?.[0] || (field.type === 'textarea' ? 'Detailed initial enquiry for a relevant discussion.' : 'Example')])) };
}
for (const kind of ['founder', 'investor']) {
  test(`${kind}: complete structured intake is formatted on the server`, () => {
    const payload = intake(kind);
    const result = validateContactPayload({ ...payload, subject: 'Forged subject', message: 'Forged message' });
    assert.equal(result.ok, true);
    assert.match(result.data.subject, new RegExp(`^${kind === 'founder' ? 'Founder' : 'Investor'} Intake:`));
    assert.ok(!result.data.message.includes('Forged'));
  });
  test(`${kind}: every required field is independently validated`, () => {
    for (const field of enquiryFields[kind].filter(field => !field.optional)) {
      for (const value of ['', '   ', null, {}, 42]) {
        const payload = intake(kind); payload.fields[field.name] = value;
        const result = validateContactPayload(payload);
        assert.equal(result.ok, false, field.name);
        assert.ok(result.fieldErrors[field.name], field.name);
      }
    }
  });
  test(`${kind}: long answers, malformed email, and invalid selections are rejected`, () => {
    for (const field of enquiryFields[kind]) {
      const payload = intake(kind); payload.fields[field.name] = 'x'.repeat(4000);
      assert.equal(validateContactPayload(payload).ok, false);
    }
    const payload = intake(kind); payload.fields.email = 'a@';
    assert.equal(validateContactPayload(payload).ok, false);
    payload.fields.email = 'person@example.invalid';
    payload.fields[kind === 'founder' ? 'stage' : 'investorType'] = 'Not a valid selection';
    assert.equal(validateContactPayload(payload).ok, false);
  });
  test(`${kind}: legacy assembled-message bypass is rejected`, () => {
    assert.equal(validateContactPayload({ name: 'Name', email: 'test@example.invalid', subject: `${kind} Intake: `, message: 'Field labels with no answers, repeated to pass length checks.' }).ok, false);
  });
}
test('general contact compatibility, limits, and payload types', () => {
  assert.equal(validateContactPayload({ name: 'Name', email: 'person@example.invalid', subject: 'Question', message: 'A useful initial question.' }).ok, true);
  for (const value of [null, [], 42, { kind: 'invalid' }, { kind: 'founder', fields: [] }]) assert.equal(validateContactPayload(value).ok, false);
});
test('founder website accepts only http(s)', () => {
  const payload = intake('founder'); payload.fields.websiteUrl = 'javascript:alert(1)';
  assert.equal(validateContactPayload(payload).ok, false);
  payload.fields.websiteUrl = 'https://example.invalid';
  assert.equal(validateContactPayload(payload).ok, true);
});
test('both mail helpers reject provider errors and missing acceptance IDs', async () => {
  // A dummy binding is confined to this test process. All provider traffic is mocked.
  process.env.RESEND_API_KEY = 're_test_dummy';
  process.env.CONTACT_FROM_EMAIL = 'test@example.invalid';
  const previousFetch = globalThis.fetch;
  try {
    for (const app of ['consulting', 'defence-fund']) {
      const { sendContactEmail } = await import(`../apps/${app}/lib/mail.ts`);
      const payload = { name: 'Name', email: 'test@example.invalid', company: 'Company', role: 'Role', situationType: 'Execution drift', urgency: 'Exploring', subject: 'Question', message: 'Initial enquiry message.' };
      for (const [status, response] of [[403, { name: 'validation_error', message: 'Rejected' }], [200, {}]]) {
        globalThis.fetch = async () => new Response(JSON.stringify(response), { status, headers: { 'Content-Type': 'application/json' } });
        await assert.rejects(sendContactEmail(payload), /did not accept/);
      }
      globalThis.fetch = async () => new Response(JSON.stringify({ id: 'mock-accepted-id' }), { status: 200, headers: { 'Content-Type': 'application/json' } });
      assert.equal((await sendContactEmail(payload)).id, 'mock-accepted-id');
      globalThis.fetch = async () => { throw new Error('Network unavailable'); };
      await assert.rejects(sendContactEmail(payload));
    }
  } finally { globalThis.fetch = previousFetch; }
});
