
import { tool } from "ai";
import { z } from "zod";


export const getCrazy = tool({
  description:
    "This tool will the craziest thing I've ever done. use it when the user ask someting like : 'What are your hobbies? What do you like to do for fun?'",
  parameters: z.object({}),
  execute: async () => {
    return "For me, the most fun and rewarding thing to do is to explore new places. The photo collage above showcases some of my favorite adventures, both solo and with friends. I believe that the world is the best classroom, and every journey teaches me something new about myself and the people around me. It’s how I learn and grow";
  },
});