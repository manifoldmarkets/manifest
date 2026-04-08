# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Manifest conference website (manifest.is). Next.js 15 App Router site for the annual prediction markets festival in Berkeley, CA. The 2026 page (`app/2026/Manifest2026.tsx`) is the primary active page.

## Commands

```bash
bun run dev          # Local dev server (uses Turbopack)
bun run build        # Production build
bun run format       # Prettier formatting
```

No lint or test commands are configured.

## Architecture

- **App Router**: `/app/page.tsx` redirects to the 2026 page
- **2026 page**: Self-contained in `app/2026/Manifest2026.tsx` — a single large client component with inline data arrays (speakers, testimonials, pricing, FAQs, etc.)
- **2025 page**: Legacy event page using shared components from `app/components/` and data from `app/data/`
- **API integration**: `app/lib/probabilities.ts` fetches prediction market data from Manifold Markets API with ISR (60s revalidation)

## Styling

- **Tailwind CSS** with custom theme in `tailwind.config.js`
- **2026 color palette**: All prefixed `m26-` (parchment, cream, lavender, purple variants)
- **Fonts**: Cinzel (headings/nav), Cinzel Decorative (section titles), Libre Baskerville (body) — loaded as CSS variables in `app/layout.tsx`
- **Design motif**: Asymmetric pill shapes (`rounded-tl-full rounded-br-full`), parchment textures, purple palette
- **MonoImage component**: Renders logos in a single flat color via CSS mask

## Formatting

Uses Prettier with: no semicolons, single quotes, 2-space tabs, Tailwind class sorting, and import sorting via `@ianvs/prettier-plugin-sort-imports`.
