# Agent Operating Notes

## Repository structure

- `apps/consulting`: existing live consulting application.
- `apps/defence-fund`: defence technology microsite.
- `packages/ui`: shared generic UI components.
- `packages/config`: shared constants and metadata.

## Safe modification boundaries

Codex may modify:

- `apps/defence-fund/**`
- `packages/**`
- Root monorepo tooling/docs (`package.json`, `turbo.json`, `README.md`, `AGENTS.md`)

## Critical warning

Do **not** modify `apps/consulting/**` unless explicitly instructed in the task.
The consulting site is live and must remain stable.
