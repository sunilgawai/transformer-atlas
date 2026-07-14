export type SceneId = "intro" | "tokenization" | "embeddings" | "position" | "qkv" | "attention" | "softmax" | "matrix" | "heads" | "ffn" | "residual" | "normalization" | "encoder" | "decoder" | "masked" | "cross" | "projection" | "generation" | "pipeline" | "playground";
export type LearningMode = "beginner" | "advanced" | "math";
export type Scene = { id: SceneId; title: string; eyebrow: string; description: string; duration: number; accent: "violet" | "cyan" | "amber" | "rose" };
export type AttentionCell = { source: number; target: number; weight: number };
