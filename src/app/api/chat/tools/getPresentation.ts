import { tool } from 'ai';
import { z } from 'zod';

export const getPresentation = tool({
  description:
    'This tool returns a concise personal introduction of Hatta Abdillah (always explain me with detail with the card of photo) . It is used to answer the question "Who are you?" or "Tell me about yourself"',
  parameters: z.object({}),
  execute: async () => {
    return {
      presentation:
        "I'm Hatta Abdillah, a software developer with a foundation in Computer Science and a specialization in Artificial Intelligence. My experience includes engineering AI-driven solutions at PT Bukit Makmur Mandiri Utama and contributing to large-scale cloud migration projects at Telkom Indonesia. I am driven by a passion for continuous learning and building practical, data-driven applications.",
    };
  },
});
