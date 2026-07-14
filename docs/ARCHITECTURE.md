# Architecture notes

## Playback and camera contract

`usePlayback` owns the one render-loop clock. State is normalized to `[0,1]`; each visualization maps that range onto its own meaningful transitions. This makes `seek`, pause, speed, reset, chapter switching, and future camera framing deterministic.

The current stage uses shared layout framing rather than a physical camera object. The stage is deliberately isolated so a future camera adapter can implement `focus`, `fit`, `pan`, and `zoom` against the same selected-token store state without rewriting scene content.

## Visualization contract

Visualizations are pure consumers of:

1. input tokens and architecture knobs;
2. selected/pinned token state;
3. scene identity and normalized progress.

`math/attention.ts` is intentionally framework-independent. This is where trained-model inference or imported attention tensors can later replace the deterministic teaching values.

## Extension guide

To add a scene, add metadata to `constants/scenes.ts`, create a focused feature component, then choose it inside `VisualStage`. It must respond to reduced motion and selection state, and its explanation should use the shared `ExplanationPanel` mode. Keep expensive data derived with `useMemo`.
