import { z } from 'zod';

export const contactSchema = z
  .object({
    name: z.string().trim().min(2, 'Name must be at least 2 characters').max(100, 'Name is too long'),
    email: z.string().trim().email('Please provide a valid email address'),
    company: z.string().trim().min(2, 'Company must be at least 2 characters').max(120, 'Company is too long'),
    role: z.string().trim().min(2, 'Role must be at least 2 characters').max(120, 'Role is too long'),
    situationType: z.enum([
      'Investment deployment',
      'Growth inflection',
      'Execution drift',
      'Platform transition',
      'Leadership realignment',
      'Other',
    ]),
    urgency: z.enum(['Exploring', 'Important this quarter', 'Active issue', 'Board/investor pressure']),
    message: z.string().trim().min(10, 'Please provide at least 10 characters').max(3000, 'Message is too long'),
    website: z.string().trim().max(0, 'Spam detected').optional().default(''),
  });

export type ContactInput = z.infer<typeof contactSchema>;
