import { describe, expect, it } from "vitest";
import { attentionFor, softmax, tokenize } from "@/math/attention";
describe("Transformer math helpers", () => { it("tokenizes words and punctuation", () => expect(tokenize("Hello, world!")).toEqual(["Hello", ",", "world", "!"])); it("normalizes softmax probabilities", () => expect(softmax([1, 2, 3]).reduce((a, b) => a + b, 0)).toBeCloseTo(1)); it("causal attention cannot attend to future tokens", () => expect(attentionFor(["a", "b", "c"], 1, true)[2].weight).toBe(0)); });
