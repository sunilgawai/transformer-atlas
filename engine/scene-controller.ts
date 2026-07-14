import type { SceneId } from "@/types/transformer";

/** A framework-neutral scene contract for future SVG, Canvas, or WebGL scenes. */
export interface SceneController {
  readonly id: SceneId;
  play(): void;
  pause(): void;
  seek(progress: number): void;
  reset(): void;
  speed(multiplier: number): void;
  highlight(tokenIndex: number | null): void;
  selectToken(tokenIndex: number): void;
}

export type SceneEvent =
  | { type: "play" | "pause" | "reset" }
  | { type: "seek"; progress: number }
  | { type: "speed"; multiplier: number }
  | { type: "highlight"; tokenIndex: number | null }
  | { type: "select-token"; tokenIndex: number };

/**
 * Transport adapter: an imperative renderer can subscribe without becoming the
 * source of truth. React/Zustand remains authoritative for the application UI.
 */
export class SceneEventBus {
  private listeners = new Set<(event: SceneEvent) => void>();
  emit(event: SceneEvent) { this.listeners.forEach((listener) => listener(event)); }
  subscribe(listener: (event: SceneEvent) => void) { this.listeners.add(listener); return () => this.listeners.delete(listener); }
}
