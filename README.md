# Transformer Atlas

Transformer Atlas is a cinematic, single-page learning studio for exploring the complete Transformer architecture. It pairs a synchronized playback clock with interactive tokens, attention maps, generation controls, and a live model playground.

## Start

```bash
pnpm install
pnpm dev
```

Then open `http://localhost:3000`.

## Scripts

| Command | Purpose |
| --- | --- |
| `pnpm dev` | Start the App Router development server |
| `pnpm build` | Create a production build |
| `pnpm lint` | Run ESLint |
| `pnpm test` | Run math/unit tests |
| `pnpm test:e2e` | Run Playwright interaction tests |

## Architecture

- `components/` — composable interface and visualization surfaces.
- `constants/scenes.ts` — the 20-chapter learning narrative.
- `stores/studio-store.ts` — Zustand source of truth for scene, focus token, playback, and playground inputs.
- `hooks/use-playback.ts` — a shared normalized animation clock. A scene derives its visual state from the clock rather than owning timers.
- `math/attention.ts` — deterministic educational attention calculations, including scaling-compatible softmax behavior and causal masking.
- `types/` — strict shared TypeScript contracts.
- `tests/` and `e2e/` — unit and browser-level coverage.

## Interaction model

All surfaces derive from one store. Selecting a token updates the contextual explanation, attention edges, matrix row, vectors, and focus state. The persistent transport controls call the equivalent of `play`, `pause`, `seek`, and `reset`; the chapter rail is a scene selector. The input and architecture controls recompute derived representations immediately.

## Educational choices

The interface uses compact deterministic values to make relationships repeatable during a demonstration. The attention visualization follows the actual operation: compatibility scores are softmax-normalized per query row, causal masking assigns future scores a pre-softmax negative infinity equivalent, and the resulting distribution weights value vectors. It intentionally labels this as a learning simulation rather than implying its small vectors are weights from a trained model.

## Accessibility and performance

Keyboard-accessible buttons have visible focus affordances and labels. Motion is reduced under `prefers-reduced-motion`. Visual updates use transforms/opacity and a single requestAnimationFrame playback clock; heavy rendering is avoided in the interaction loop. The layout collapses from a three-region studio to a single-column experience for tablet and mobile.

## Deployment

The app is a standard Next.js deployment. Build with `pnpm build`, then deploy to Vercel or any Node-compatible host with `pnpm start`.

## Contributing

Keep new scenes driven by store state; do not introduce independent playback timers. Add test coverage for mathematical helpers or behavior-changing interactions. Run lint, unit tests, and build before opening a change.
