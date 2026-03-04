import { NextRequest, NextResponse } from 'next/server';
import { validateContactPayload } from '../../../lib/contact';
import { sendContactEmail } from '../../../lib/mail';

function jsonError(code: string, message: string, status: number) {
  return NextResponse.json(
    {
      ok: false,
      error: { code, message },
    },
    { status },
  );
}

export async function POST(request: NextRequest) {
  let payload: unknown;

  try {
    payload = await request.json();
  } catch {
    return jsonError('INVALID_JSON', 'Request body must be valid JSON.', 400);
  }

  const validated = validateContactPayload(payload);

  if (!validated.ok) {
    return jsonError('VALIDATION_ERROR', validated.message, 400);
  }

  if (validated.data.website) {
    return jsonError('SPAM_DETECTED', 'Submission rejected.', 400);
  }

  try {
    await sendContactEmail(validated.data);
    return NextResponse.json({ ok: true, message: 'Message sent successfully.' }, { status: 200 });
  } catch (error) {
    if (error instanceof Error && error.message.includes('Missing email configuration')) {
      return jsonError('EMAIL_NOT_CONFIGURED', 'Contact form email is not configured on the server.', 500);
    }

    return jsonError('EMAIL_SEND_FAILED', 'Unable to send your message right now.', 500);
  }
}
