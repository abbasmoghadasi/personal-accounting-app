# Personal & Team Accounting App (PWA + Offline-first)

A modern, privacy‑friendly accounting application designed for individuals and small teams.  
Built as a **resume‑quality** full‑stack project with production‑grade tooling.

## ✨ Highlights

- **PWA + Offline-first** (IndexedDB/SQLite local, sync when online)
- **Multi-currency** with base currency and conversion at entry time
- **Shared Ledger** (multi-user, audit log) – Pro/Team
- **Clean UX** (Dark/Light, keyboard-first flows, i18n: EN/FA/DE)
- **Monorepo** (Next.js + NestJS + Prisma + PostgreSQL)
- **CI/CD** (GitHub Actions, Docker-ready), **Conventional Commits**

> Product planning lives in [`/docs/feature-prioritization.md`](./docs/feature-prioritization.md).

---

## 📦 Tech Stack

**Frontend**: Next.js (App Router), TypeScript, TanStack Query, Zustand, Chakra UI (or shadcn/ui+Tailwind), Zod, i18n  
**Backend**: NestJS, Prisma ORM, PostgreSQL, OpenAPI (Swagger), Socket.IO, BullMQ (jobs)  
**Infra**: pnpm, Turborepo, Docker, Traefik/Caddy, GitHub Actions, (optional: Fly.io/Hetzner)  
**Quality**: ESLint, Prettier, Vitest, Playwright, Husky + lint-staged

---

## 🗂 Repository Layout (planned)
