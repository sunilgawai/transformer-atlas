"use client";
import { useEffect } from "react";
import { useStudioStore } from "@/stores/studio-store";
/** Shared clock; scenes consume normalized progress rather than own timers. */
export function usePlayback() {
  const playing = useStudioStore((s) => s.playing); const speed = useStudioStore((s) => s.speed); const seek = useStudioStore((s) => s.seek);
  useEffect(() => { if (!playing) return; let frame = 0; let last = performance.now(); const tick = (now: number) => { seek(((now - last) / 16000) * speed); last = now; frame = requestAnimationFrame(tick); }; frame = requestAnimationFrame(tick); return () => cancelAnimationFrame(frame); }, [playing, seek, speed]);
}
