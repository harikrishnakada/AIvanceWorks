import { z } from 'zod';

/**
 * Contact Form Validation Schema
 *
 * Validates contact form submissions with type-safe validation
 * Used on both client (React Hook Form) and server (Server Actions)
 */
export const contactFormSchema = z.object({
  name: z
    .string()
    .min(2, 'Name must be at least 2 characters')
    .max(100, 'Name must be less than 100 characters')
    .trim(),

  email: z
    .string()
    .email('Invalid email address')
    .max(255, 'Email must be less than 255 characters')
    .toLowerCase()
    .trim(),

  company: z
    .string()
    .min(2, 'Company name must be at least 2 characters')
    .max(200, 'Company name must be less than 200 characters')
    .trim(),

  budgetRange: z.enum(['5k-25k', '25k-100k', '100k-500k', '500k-plus'], {
    message: 'Please select a budget range',
  }),

  message: z
    .string()
    .min(10, 'Message must be at least 10 characters')
    .max(2000, 'Message must be less than 2000 characters')
    .trim(),
});

/**
 * Inferred TypeScript type from the schema
 */
export type ContactFormData = z.infer<typeof contactFormSchema>;

/**
 * Budget Range Options
 * Based on pricing tiers from company documentation
 */
export const BUDGET_RANGES = [
  { value: '5k-25k', label: '$5,000 - $25,000', description: 'Small projects (2-4 weeks)' },
  {
    value: '25k-100k',
    label: '$25,000 - $100,000',
    description: 'Medium projects (1-3 months)',
  },
  {
    value: '100k-500k',
    label: '$100,000 - $500,000',
    description: 'Large projects (3-6 months)',
  },
  {
    value: '500k-plus',
    label: '$500,000+',
    description: 'Enterprise projects (6+ months)',
  },
] as const;

/**
 * Newsletter Subscription Schema
 * For footer newsletter signup
 */
export const newsletterSchema = z.object({
  email: z
    .string()
    .email('Invalid email address')
    .max(255, 'Email must be less than 255 characters')
    .toLowerCase()
    .trim(),
});

export type NewsletterFormData = z.infer<typeof newsletterSchema>;
