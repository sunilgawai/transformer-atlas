"use client";
import { usePlayback } from "@/hooks/use-playback";
import { SceneNav } from "@/components/scene-nav";
import { VisualStage } from "@/components/visual-stage";
import { ExplanationPanel } from "@/components/explanation-panel";
import { PlaybackControls } from "@/components/playback-controls";
import { Timeline } from "@/components/timeline";
import { Playground } from "@/components/playground";
export function TransformerStudio() { usePlayback(); return <div className="studio"><a className="skip-link" href="#visualization">Skip to visualization</a><SceneNav/><section className="workspace"><header className="mobile-brand">TRANSFORMER <b>ATLAS</b></header><div id="visualization" className="focus-grid"><VisualStage/><ExplanationPanel/></div><div className="bottom-grid"><div><PlaybackControls/><Timeline/></div><Playground/></div></section></div>; }
