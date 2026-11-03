# Regression Web Monorepo

This repository contains two independent Next.js applications managed from a single monorepo.

## Applications

- `apps/consulting` → production consulting site for `regressionconsulting.com`.
- `apps/defence-fund` → defence technology microsite for `deftech.regressionconsulting.com`.

## Shared packages

- `packages/ui` → reusable, generic UI primitives for both apps.
- `packages/config` → shared metadata/constants (for example SEO defaults).

## Install

```bash
npm install
```

## Run locally

```bash
npm run dev:consulting
npm run dev:defence-fund
```

Each app runs as its own Next.js project from its respective workspace.

## Build

```bash
npm run build
```

This runs both app builds in sequence from the repository root.

## Website map

### Consulting site (`regressionconsulting.com`)

- `/`
- `/about`
- `/approach`
- `/services`
- `/contact`
- `/insights`
- `/insights/[slug]`

### Defence fund microsite (`deftech.regressionconsulting.com`)

- `/`
- `/focus`
- `/criteria`
- `/team`
- `/intake`
- `/legal`

## Vercel multi-project setup

Use two Vercel projects pointed to the same Git repository:

1. **Consulting project**
   - Root Directory: `apps/consulting`
   - Domain: `regressionconsulting.com`
2. **Defence fund project**
   - Root Directory: `apps/defence-fund`
   - Domain: `deftech.regressionconsulting.com`

No route or metadata sharing is required between these deployments.

## Validation

Use Node.js 24 for the regression checks. Run `npm test` for structured intake and mocked email-provider tests. Run `npm run build` to build both applications.

For the full browser checks, start the built consulting app on port 3000 and the built defence app on port 3001, then run `npm run test:browser`. Chromium must be installed; set `CHROME_PATH` if it is not at `/usr/bin/chromium`. Browser form submissions are intercepted and do not send emails.

See [audit remediation](docs/audit-remediation.md) for the implemented recommendations, optional analytics configuration, and owner-supplied material still needed.

The current visual system is the full Hallmark Ink redesign. See [design system](design.md) and [full theme design review](docs/theme-redesign-review.md) for the theme selection, independent review, comparison, and exact validation outcomes.
