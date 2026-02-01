/**
 * Email Provider Abstraction Layer
 *
 * This module provides a unified interface for sending emails.
 * Currently uses Resend; can be easily migrated to SendGrid, Postmark, etc.
 *
 * IMPORTANT: Never import Resend or other email clients directly in components or Server Actions.
 * Always use emailProvider from this module.
 *
 * Pattern follows content.ts (CMS abstraction) - enables provider swapping without touching business logic.
 */

import { Resend } from 'resend';
import { ContactFormData, NewsletterFormData } from './validation';
import {
  contactFormNotificationTemplate,
  contactFormConfirmationTemplate,
  newsletterWelcomeTemplate,
} from './email-templates';
import { SITE_CONFIG } from './constants';

/**
 * Email sending parameters
 */
export interface EmailParams {
  to: string | string[];
  from: string;
  subject: string;
  html: string;
  text?: string;
  replyTo?: string;
}

/**
 * Email sending result
 */
export interface EmailResult {
  success: boolean;
  messageId?: string;
  error?: string;
}

/**
 * Email Provider Interface
 * All email providers must implement this interface
 */
export interface EmailProvider {
  /**
   * Send a generic email
   */
  send(params: EmailParams): Promise<EmailResult>;

  /**
   * Send contact form notification and confirmation emails
   */
  sendContactForm(data: ContactFormData): Promise<EmailResult>;

  /**
   * Send newsletter welcome email
   */
  sendNewsletterWelcome(data: NewsletterFormData): Promise<EmailResult>;
}

/**
 * Resend Email Provider Implementation
 * https://resend.com/docs
 */
class ResendEmailProvider implements EmailProvider {
  private client: Resend;

  constructor(apiKey: string) {
    if (!apiKey) {
      throw new Error('Resend API key is required');
    }
    this.client = new Resend(apiKey);
  }

  /**
   * Send a generic email via Resend
   */
  async send(params: EmailParams): Promise<EmailResult> {
    try {
      const { data, error } = await this.client.emails.send({
        from: params.from,
        to: Array.isArray(params.to) ? params.to : [params.to],
        subject: params.subject,
        html: params.html,
        text: params.text,
        replyTo: params.replyTo,
      });

      if (error) {
        console.error('[Email] Resend error:', error);
        return {
          success: false,
          error: error.message || 'Failed to send email',
        };
      }

      return {
        success: true,
        messageId: data?.id,
      };
    } catch (error) {
      console.error('[Email] Unexpected error:', error);
      return {
        success: false,
        error: error instanceof Error ? error.message : 'Unknown error',
      };
    }
  }

  /**
   * Send contact form emails (notification to team + confirmation to user)
   */
  async sendContactForm(data: ContactFormData): Promise<EmailResult> {
    const fromAddress = process.env.EMAIL_FROM_ADDRESS || SITE_CONFIG.company.email;

    try {
      // Send notification to internal team
      const notificationResult = await this.send({
        to: SITE_CONFIG.company.email,
        from: fromAddress,
        subject: `New Contact Form: ${data.company} (${data.budgetRange})`,
        html: contactFormNotificationTemplate(data),
        replyTo: data.email,
      });

      if (!notificationResult.success) {
        console.error('[Email] Failed to send team notification:', notificationResult.error);
        // Continue to send confirmation even if notification fails
      }

      // Send confirmation to user
      const confirmationResult = await this.send({
        to: data.email,
        from: fromAddress,
        subject: 'Thank you for contacting AIvanceWorks',
        html: contactFormConfirmationTemplate(data),
        replyTo: SITE_CONFIG.company.email,
      });

      if (!confirmationResult.success) {
        console.error('[Email] Failed to send user confirmation:', confirmationResult.error);
      }

      // Return overall success (both emails should succeed)
      return {
        success: notificationResult.success && confirmationResult.success,
        messageId: confirmationResult.messageId,
        error:
          !notificationResult.success || !confirmationResult.success
            ? 'One or more emails failed to send'
            : undefined,
      };
    } catch (error) {
      console.error('[Email] Contact form email error:', error);
      return {
        success: false,
        error: error instanceof Error ? error.message : 'Failed to send contact form emails',
      };
    }
  }

  /**
   * Send newsletter welcome email
   */
  async sendNewsletterWelcome(data: NewsletterFormData): Promise<EmailResult> {
    const fromAddress = process.env.EMAIL_FROM_ADDRESS || SITE_CONFIG.company.email;

    return this.send({
      to: data.email,
      from: fromAddress,
      subject: 'Welcome to AIvanceWorks Insights!',
      html: newsletterWelcomeTemplate(data.email),
      replyTo: SITE_CONFIG.company.email,
    });
  }
}

/**
 * SendGrid Email Provider Implementation (Example)
 * Uncomment and implement when switching to SendGrid
 */
// class SendGridEmailProvider implements EmailProvider {
//   private client: any; // @sendgrid/mail

//   constructor(apiKey: string) {
//     // this.client = require('@sendgrid/mail');
//     // this.client.setApiKey(apiKey);
//   }

//   async send(params: EmailParams): Promise<EmailResult> {
//     // Implementation for SendGrid
//     throw new Error('Not implemented');
//   }

//   async sendContactForm(data: ContactFormData): Promise<EmailResult> {
//     // Implementation for SendGrid
//     throw new Error('Not implemented');
//   }

//   async sendNewsletterWelcome(data: NewsletterFormData): Promise<EmailResult> {
//     // Implementation for SendGrid
//     throw new Error('Not implemented');
//   }
// }

/**
 * Factory function to get the configured email provider
 * Switch providers by changing EMAIL_PROVIDER environment variable
 */
function getEmailProvider(): EmailProvider {
  const provider = process.env.EMAIL_PROVIDER || 'resend';

  switch (provider.toLowerCase()) {
    case 'resend':
      return new ResendEmailProvider(process.env.RESEND_API_KEY!);

    // case 'sendgrid':
    //   return new SendGridEmailProvider(process.env.SENDGRID_API_KEY!);

    // case 'postmark':
    //   return new PostmarkEmailProvider(process.env.POSTMARK_API_KEY!);

    default:
      console.warn(`[Email] Unknown provider "${provider}", defaulting to Resend`);
      return new ResendEmailProvider(process.env.RESEND_API_KEY!);
  }
}

/**
 * Singleton email provider instance
 * Import and use this in Server Actions and API routes
 *
 * Example usage:
 * ```
 * import { emailProvider } from '@/lib/email';
 * const result = await emailProvider.sendContactForm(data);
 * ```
 */
export const emailProvider = getEmailProvider();
