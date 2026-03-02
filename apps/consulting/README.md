# Consulting website design

This is a code bundle for Consulting website design. The original project is available at https://www.figma.com/design/gOkwHpCV2sVbrsUfSjOtf4/Consulting-website-design.

## Running the code

Run `npm i` to install the dependencies.

Run `npm run dev` to start the development server.

## Contact form setup (local + Vercel)

The contact form posts to `/api/contact` and sends email via Resend.

Set the following environment variables:

- `RESEND_API_KEY` — API key from Resend.
- `CONTACT_FROM_EMAIL` — sender address (must be from a verified domain in Resend).
- `CONTACT_TO_EMAIL` — optional override destination inbox where form messages should be delivered. Defaults to `info@regressionconsulting.com`.

### Local `.env.local` example

```bash
RESEND_API_KEY=re_xxxxx
CONTACT_FROM_EMAIL=contact@yourdomain.com
CONTACT_TO_EMAIL=info@yourdomain.com
```

### Vercel configuration

In Vercel, go to **Project → Settings → Environment Variables** and add all 3 values above for the environments you use (Production/Preview/Development), then redeploy.

If `RESEND_API_KEY` or `CONTACT_FROM_EMAIL` are missing, the API returns an `EMAIL_NOT_CONFIGURED` error and form submission will fail.
