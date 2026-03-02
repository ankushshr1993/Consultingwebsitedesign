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

## Vercel multi-project setup

Use two Vercel projects pointed to the same Git repository:

1. **Consulting project**
   - Root Directory: `apps/consulting`
   - Domain: `regressionconsulting.com`
2. **Defence fund project**
   - Root Directory: `apps/defence-fund`
   - Domain: `deftech.regressionconsulting.com`

No route or metadata sharing is required between these deployments.
