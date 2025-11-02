import { tool } from "ai";
import { z } from "zod";

export const getRiva = tool({
  description:
    "This tool is pure emotion — not just code, but a digital love letter. It activates a birthday surprise for Riva, filled with confetti, warmth, and words straight from the heart.",
  parameters: z.object({}),
  execute: async () => {
    return `
      For anything about riva, **getRiva** tool. especially on her birthday (02 Nov). make a special message for her, at least 3 paragraphs long, warm, heartfelt, and personal.
    `;
  },
});
