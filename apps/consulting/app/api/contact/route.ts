import { NextRequest, NextResponse } from 'next/server';
import { sendContactEmail } from '../../../lib/mail';
import { rateLimitByIp } from '../../../lib/rateLimit';
import { contactSchema } from '../../../lib/validators';

function getClientIp(request: NextRequest) {
  const forwarded = request.headers.get('x-forwarded-for');
  if (forwarded) {
    return forwarded.split(',')[0]?.trim() || 'unknown';
  }

  return request.headers.get('x-real-ip') || 'unknown';
}

function jsonError(code: string, message: string, status: number, details?: unknown) {
  return NextResponse.json(
    {
      ok: false,
      error: {
        code,
        message,
        details,
      },
    },
    { status },
  );
}

export async function POST(request: NextRequest) {
  const ip = getClientIp(request);
  const rateLimit = rateLimitByIp(ip);

  if (!rateLimit.allowed) {
    return jsonError('RATE_LIMITED', 'Too many requests. Please try again later.', 429, {
      resetAt: rateLimit.resetAt,
    });
  }

  let payload: unknown;
  try {
    payload = await request.json();
  } catch {
    return jsonError('INVALID_JSON', 'Request body must be valid JSON.', 400);
  }

  const parsed = contactSchema.safeParse(payload);

  if (!parsed.success) {
    const flattened = parsed.error.flatten();
    const fieldErrors = Object.values(flattened.fieldErrors).flat();
    const firstError = fieldErrors[0] || flattened.formErrors[0] || 'Invalid request payload.';

    return jsonError('VALIDATION_ERROR', firstError, 400, flattened);
  }

  if (parsed.data.website) {
    return jsonError('SPAM_DETECTED', 'Submission rejected.', 400);
  }

  try {
    await sendContactEmail(parsed.data);
    return NextResponse.json({ ok: true, message: 'Message sent successfully.' }, { status: 200 });
  } catch (error) {
    if (error instanceof Error && error.message.includes('Missing email configuration')) {
      return jsonError('EMAIL_NOT_CONFIGURED', 'Contact form email is not configured on the server.', 500);
    }

    return jsonError('EMAIL_SEND_FAILED', 'Unable to send your message right now.', 500);
  }
}
