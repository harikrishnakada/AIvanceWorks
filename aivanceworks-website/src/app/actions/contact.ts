'use server';

/**
 * Contact Form Server Action
 *
 * Handles contact form submission with:
 * - Rate limiting (5 requests/hour per IP)
 * - Zod validation
 * - Email sending via abstraction layer
 * - Error handling and logging
 *
 * IMPORTANT: This is a Server Action (Next.js 15 feature).
 * It runs on the server and provides built-in CSRF protection.
 */

import { z } from 'zod';
import { headers } from 'next/headers';
import { contactFormSchema } from '@/lib/validation';
import { emailProvider } from '@/lib/email';
import { contactFormLimiter, getClientIp } from '@/lib/rate-limit';

/**
 * Server Action Result
 */
interface ActionResult {
  success: boolean;
  message?: string;
  error?: string;
  fieldErrors?: Record<string, string[]>;
}

/**
 * Submit Contact Form
 * Called from ContactForm component on the client
 */
export async function submitContactForm(formData: FormData): Promise<ActionResult> {
  try {
    // Step 1: Rate Limiting
    const headersList = await headers();
    const clientIp = getClientIp(headersList);

    const rateLimitCheck = contactFormLimiter.check(clientIp);

    if (!rateLimitCheck.success) {
      const resetTime = rateLimitCheck.resetAt
        ? new Date(rateLimitCheck.resetAt).toLocaleTimeString()
        : 'soon';

      console.warn(`[Contact Form] Rate limit exceeded for IP: ${clientIp}`);

      return {
        success: false,
        error: `Too many requests. Please try again after ${resetTime} or email us directly at contact@aivanceworks.com.`,
      };
    }

    // Step 2: Extract and Validate Form Data
    const rawData = {
      name: formData.get('name'),
      email: formData.get('email'),
      company: formData.get('company'),
      budgetRange: formData.get('budgetRange'),
      message: formData.get('message'),
    };

    console.log('[Contact Form] Received submission from:', rawData.email);

    // Validate with Zod schema
    const validatedData = contactFormSchema.parse(rawData);

    // Step 3: Send Emails via Abstraction Layer
    // This sends both notification to team AND confirmation to user
    const emailResult = await emailProvider.sendContactForm(validatedData);

    if (!emailResult.success) {
      console.error('[Contact Form] Email send failed:', emailResult.error);

      // Return user-friendly error with fallback option
      return {
        success: false,
        error:
          'We encountered an issue sending your message. Please email us directly at contact@aivanceworks.com or try again later.',
      };
    }

    // Step 4: Log Success (for analytics/monitoring)
    console.log('[Contact Form] Submission successful:', {
      name: validatedData.name,
      company: validatedData.company,
      budgetRange: validatedData.budgetRange,
      timestamp: new Date().toISOString(),
      ip: clientIp,
      messageId: emailResult.messageId,
    });

    // Step 5: Return Success Response
    return {
      success: true,
      message: "Thank you for your message! We'll respond within 24 hours.",
    };
  } catch (error) {
    // Handle Validation Errors (from Zod)
    if (error instanceof z.ZodError) {
      console.warn('[Contact Form] Validation error:', error.flatten());

      return {
        success: false,
        error: 'Invalid form data. Please check your inputs and try again.',
        fieldErrors: error.flatten().fieldErrors as Record<string, string[]>,
      };
    }

    // Handle Unexpected Errors
    console.error('[Contact Form] Unexpected error:', error);

    return {
      success: false,
      error: 'An unexpected error occurred. Please try again or email us at contact@aivanceworks.com.',
    };
  }
}
