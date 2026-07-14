"use client";
import { scenes } from "@/constants/scenes";
import { useStudioStore } from "@/stores/studio-store";
export function SceneNav() { const { sceneId, setScene } = useStudioStore(); return <nav className="scene-nav" aria-label="Learning chapters"><div className="brand"><span className="brand-mark">T</span><span>Transformer<br/><b>Atlas</b></span></div><div className="nav-scroll">{scenes.map((scene, i) => <button key={scene.id} onClick={() => setScene(scene.id)} className={scene.id === sceneId ? "nav-item active" : "nav-item"}><span>{String(i + 1).padStart(2, "0")}</span>{scene.title}</button>)}</div><div className="nav-footer"><span className="live-dot"/> Interactive field guide</div></nav>; }
