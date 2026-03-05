# Defence fund microsite

## Contact form delivery (Resend)

The `/contact-us` form posts to `/api/contact` and sends email via Resend, using the same environment variable contract as the consulting site.

Required environment variables:

- `RESEND_API_KEY` — API key from Resend.
- `CONTACT_FROM_EMAIL` — sender address (must be from a verified Resend domain).
  - Backward-compatible aliases supported: `RESEND_FROM_EMAIL` and `FROM_EMAIL`.

Optional environment variable:

- `CONTACT_TO_EMAIL` — destination inbox for submissions. Defaults to `info@regressionconsulting.com`.
  - Backward-compatible alias supported: `RESEND_TO_EMAIL`.

### Example `.env.local`

```bash
RESEND_API_KEY=re_xxxxx
CONTACT_FROM_EMAIL=contact@yourdomain.com
CONTACT_TO_EMAIL=info@yourdomain.com
```

### Vercel setup

In Vercel, set these values in **Project → Settings → Environment Variables** for Production/Preview/Development and redeploy.
