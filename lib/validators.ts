import { z } from 'zod';

export const contactSchema = z
  .object({
    name: z.string().trim().min(2, 'Name must be at least 2 characters').max(100, 'Name is too long'),
    email: z.string().trim().email('Please provide a valid email address'),
    company: z.string().trim().min(2, 'Company must be at least 2 characters').max(120, 'Company is too long'),
    role: z
      .string()
      .trim()
      .min(2, 'Role must be at least 2 characters')
      .max(120, 'Role is too long')
      .optional()
      .default('Not provided'),
    message: z.string().trim().max(3000, 'Message is too long').optional(),
    executionChallenge: z.string().trim().max(3000, 'Execution challenge is too long').optional(),
    urgency: z.enum(['low', 'medium', 'high', 'urgent']).optional().default('medium'),
    website: z.string().trim().max(0, 'Spam detected').optional().default(''),
  })
  .superRefine((data, ctx) => {
    const messageOrChallenge = data.message || data.executionChallenge;

    if (!messageOrChallenge || messageOrChallenge.trim().length < 10) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: 'Please provide at least 10 characters for message or execution challenge',
        path: ['message'],
      });
    }
  });

export type ContactInput = z.infer<typeof contactSchema>;
