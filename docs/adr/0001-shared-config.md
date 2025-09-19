# ADR 0001: Shared Configuration Standards

**Date:** 2025-09-19  
**Status:** Accepted  
**Context:** Personal Accounting App Monorepo

---

## Context

We are building the **Personal Accounting App** in a monorepo structure using `pnpm` + `Turborepo`.  
To ensure consistency across apps (`apps/web`, `apps/api`) and shared packages (`packages/`), we need unified standards for TypeScript, React, NestJS, linting, and CI/CD.

---

## Decision

### 1. TypeScript

- Use the **latest stable TypeScript (5.x)**.
- Enable `"strict": true` in `tsconfig.base.json`.
- Shared `tsconfig.base.json` at the root.
- Override per-app configs:
  - `apps/web/tsconfig.json` → React + DOM types.
  - `apps/api/tsconfig.json` → Node/NestJS setup.

### 2. React / Next.js

- Use **React 19** across the project.
- JSX setting: `"jsx": "react-jsx"`.
- Enable `"moduleResolution": "bundler"` to align with RSBuild + Next.js App Router.

### 3. Backend (NestJS)

- Use **NestJS v11** (latest stable).
- Use **Node.js 20.x LTS**.
- Shared `tsconfig` extended by the API app.

### 4. Linting & Formatting

- Shared ESLint config (`packages/eslint-config`).
- Shared Prettier config (`packages/prettier-config`).
- CI/CD runs with `--max-warnings=0` → no warnings allowed.

### 5. Turbo Pipeline

- `turbo.json` defines the following tasks:
  ```json
  {
    "pipeline": {
      "lint": { "cache": true },
      "type-check": { "cache": true },
      "build": { "dependsOn": ["^build"], "cache": true },
      "test": { "dependsOn": ["build"], "cache": true },
      "e2e": { "dependsOn": ["build"], "cache": false }
    }
  }
  ```

### 6. CI/CD

- Pin to Node.js 20.x LTS in workflows.
- CI steps:

1. Install (pnpm i --frozen-lockfile).
2. Run pnpm lint.
3. Run pnpm type-check.
4. Run pnpm test.
5. Run pnpm build.
6. dev branch → PR validation.
7. main branch → Release build + deployment.

### 7. Shared Packages

- @acme/ui → shadcn components and custom wrappers.
- @acme/config → eslint/prettier/tsconfig configs.
- @acme/types → shared types across apps.
- Packages are "private": true for now.
- pnpm hoisting enabled; enforce "strict-peer-dependencies": true.

## Consequences

- Developers will work in a strictly typed, consistent environment.
- CI/CD will enforce quality by blocking warnings and ensuring tests/builds pass.
- Turbo caching ensures fast builds locally and in CI.
- Shared packages reduce duplication and improve maintainability.
- Future changes to standards must be documented in new ADRs.

---

## Status

- **Proposed**: Future ADRs may override parts of this decision if new standards arise (e.g., React 20, Next.js major upgrades).
- **Accepted**: In effect and implemented.
- **Deprecated**: No longer recommended.
- **Superseded**: Replaced by another ADR (reference the new ADR number).
