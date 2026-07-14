import type { AttentionCell } from "@/types/transformer";
export const tokenize = (input: string) => input.trim().match(/[\w’'-]+|[^\s\w]/gu) ?? [];
export const softmax = (scores: number[]) => { const max = Math.max(...scores); const exps = scores.map((score) => Math.exp(score - max)); const sum = exps.reduce((a, b) => a + b, 0); return exps.map((value) => value / sum); };
export const seeded = (a: number, b: number) => Math.sin((a + 1) * 19.19 + (b + 1) * 7.31) * 0.5 + 0.5;
export function attentionFor(tokens: string[], source: number, causal = false): AttentionCell[] {
  const scores = tokens.map((_, target) => causal && target > source ? -10000 : (seeded(source, target) * 3.8) - (source === target ? 0.35 : 0));
  return softmax(scores).map((weight, target) => ({ source, target, weight }));
}
export function attentionMatrix(tokens: string[], causal = false) { return tokens.map((_, source) => attentionFor(tokens, source, causal)); }
