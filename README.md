# DSA Tracker 

A mobile-first web application for tracking Data Structures & Algorithms practice. Built to help developers stay consistent with their interview preparation by organizing problems, monitoring progress, and working through curated problem sheets.

![DSA Tracker](https://img.shields.io/badge/status-active-brightgreen) ![TypeScript](https://img.shields.io/badge/TypeScript-5.8-blue) ![TailwindCSS](https://img.shields.io/badge/Tailwind-4.2-06B6D4)

## Features

- **Problem Tracker** — Browse 50 core DSA problems with difficulty filters and instant search
- **Curated Sheets** — Pre-built collections (SDE Sheet, Blind 75, Striver's A2Z) with progress tracking
- **Progress Dashboard** — Visual breakdowns by difficulty and category with animated progress rings
- **Dark/Light Mode** — System-aware theme with manual toggle
- **Offline-Ready** — PWA support with installable home screen experience
- **Persistent State** — Solved problems and preferences saved to localStorage

## Tech Stack

- **Framework**: (React 19, SSR)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/) with OKLCH color system
- **Routing**: TanStack Router (file-based, type-safe)
- **Language**: TypeScript 5.8
- **Build**: Vite 7
- **Deployment**: Cloudflare Workers

## Project Structure

```
src/
├── components/       # Reusable UI components
│   ├── ui/           # Base primitives (progress bar)
│   ├── BottomNav.tsx
│   ├── DifficultyBadge.tsx
│   ├── DifficultyFilter.tsx
│   ├── ProblemCard.tsx
│   ├── ProgressRing.tsx
│   ├── SearchBar.tsx
│   └── Skeletons.tsx
├── data/             # Static problem & sheet definitions
├── hooks/            # Custom React hooks
│   ├── use-local-storage.ts
│   ├── use-problems.ts
│   └── use-theme.ts
├── lib/              # Utility functions
├── routes/           # File-based route pages
│   ├── __root.tsx
│   ├── index.tsx
│   ├── sheets.tsx
│   ├── progress.tsx
│   └── profile.tsx
└── styles.css        # Design tokens & global styles
```

## Getting Started

### Prerequisites

- Node.js 18+ or Bun
- npm, pnpm, or bun

### Installation

```bash
git clone https://github.com/SowmyaKurapati26/DSA-Tracker.git
cd DSA-Tracker
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:8080](http://localhost:8080) in your browser.

### Production Build

```bash
npm run build
```

## Design Decisions

- **OKLCH color space** for perceptually uniform colors across light/dark themes
- **localStorage** for persistence — keeps the app simple and serverless
- **Mobile-first layout** with a fixed bottom navigation bar and `max-w-lg` container
- **Skeleton loaders** instead of spinners for a more polished loading experience
- **No external state management** — React hooks + localStorage cover all needs

## License

MIT
