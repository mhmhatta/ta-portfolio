import { tool } from 'ai';
import { z } from 'zod';

export const getInternship = tool({
  description:
    "Gives a summary of what kind of internship I'm looking for, plus my contact info and how to reach me. Use this tool when the user asks about my internship search or how to contact me for opportunities.",
  parameters: z.object({}),
  execute: async () => {
    return `Here’s what I’m looking for 👇

- 📅 **Duration**: Available starting **August 2025**
- 🌍 **Location**: Medan, Indonesia or anywhere in the **Jakarta**
- 🧑‍💻 **Focus**: AI development, Software Engineer, Data Management, agentic workflows
- 🛠️ **Stack**: Python, React/Next.js, LLM, RAG, etc.
- 💼 **Visa**: I’m based in Medan
- ✅ **What I bring**: Real experience with AI projects, strong coding skills, and a passion for building impactful solutions
- 🔥 I move fast, learn faster, and I’m HUNGRYYYYY for big challenges

📬 **Contact me** via:
- Email: muhammad.hatta18@gmail.com
- LinkedIn: [linkedin.com/in/muhammadhattaabdillah](https://www.linkedin.com/in/muhammadhattaabdillah/)
- GitHub: [github.com/mhmhatta](https://github.com/mhmhatta)

Let's build something cool together ✌️
    `;
  },
});
