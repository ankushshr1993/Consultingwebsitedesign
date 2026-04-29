import { NextRequest, NextResponse } from 'next/server';
import { validateContactPayload } from '../../../lib/contact';
import { sendContactEmail } from '../../../lib/mail';
import { rateLimitByIp } from '../../../lib/rateLimit';

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
