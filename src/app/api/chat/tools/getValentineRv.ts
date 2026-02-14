import { tool } from 'ai';
import { z } from 'zod';

export const getValentineRv = tool({
  description: 'Hidden valentine message for Riva only.',
  parameters: z.object({}), // WAJIB zod object
  execute: async () => {
    return {
      message: `Happy Valentine’s Day, Riva.

        You are the calm in my chaos and the constant in my system.
        No rollback. No downgrade. Just forward — with you.

        Still choosing you. Always. 🤍`,
      image: '/flower.jpeg',
    };
  },
});
