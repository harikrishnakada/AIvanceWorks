import { ContactFormData } from './validation';
import { SITE_CONFIG } from './constants';

/**
 * Email Templates
 *
 * HTML templates for transactional emails.
 * Centralized for easy content updates and consistent styling.
 */

/**
 * Base Email Template Wrapper
 * Provides consistent styling and structure for all emails
 */
function emailWrapper(content: string): string {
  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>AIvanceWorks</title>
  <style>
    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
      line-height: 1.6;
      color: #333;
      max-width: 600px;
      margin: 0 auto;
      padding: 20px;
      background-color: #f4f4f4;
    }
    .email-container {
      background-color: #ffffff;
      border-radius: 8px;
      padding: 40px;
      box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    }
    .header {
      text-align: center;
      margin-bottom: 30px;
      padding-bottom: 20px;
      border-bottom: 2px solid #2563eb;
    }
    .logo {
      font-size: 24px;
      font-weight: bold;
      color: #2563eb;
    }
    h1 {
      color: #1e293b;
      font-size: 24px;
      margin-bottom: 20px;
    }
    h2 {
      color: #334155;
      font-size: 18px;
      margin-top: 30px;
      margin-bottom: 15px;
    }
    p {
      margin-bottom: 15px;
      color: #475569;
    }
    .info-box {
      background-color: #f8fafc;
      border-left: 4px solid #2563eb;
      padding: 15px 20px;
      margin: 20px 0;
    }
    .info-label {
      font-weight: 600;
      color: #1e293b;
      display: inline-block;
      min-width: 120px;
    }
    .button {
      display: inline-block;
      background-color: #2563eb;
      color: #ffffff;
      padding: 12px 30px;
      text-decoration: none;
      border-radius: 6px;
      margin: 20px 0;
      font-weight: 600;
    }
    .footer {
      margin-top: 40px;
      padding-top: 20px;
      border-top: 1px solid #e2e8f0;
      text-align: center;
      font-size: 14px;
      color: #64748b;
    }
    .footer a {
      color: #2563eb;
      text-decoration: none;
    }
  </style>
</head>
<body>
  <div class="email-container">
    <div class="header">
      <div class="logo">AIvanceWorks</div>
      <p style="margin: 5px 0 0 0; color: #64748b; font-size: 14px;">Transform Your Ideas Into Intelligent Solutions</p>
    </div>
    ${content}
    <div class="footer">
      <p>
        <strong>AIvanceWorks</strong><br>
        ${SITE_CONFIG.company.email} | ${SITE_CONFIG.company.phone}<br>
        <a href="${SITE_CONFIG.url}">${SITE_CONFIG.url}</a>
      </p>
      <p>
        <a href="${SITE_CONFIG.links.linkedin}">LinkedIn</a> |
        <a href="${SITE_CONFIG.links.twitter}">Twitter</a> |
        <a href="${SITE_CONFIG.links.github}">GitHub</a>
      </p>
    </div>
  </div>
</body>
</html>
  `.trim();
}

/**
 * Contact Form Notification Template
 * Sent to internal team when a contact form is submitted
 */
export function contactFormNotificationTemplate(data: ContactFormData): string {
  const budgetLabel = {
    '5k-25k': '$5,000 - $25,000',
    '25k-100k': '$25,000 - $100,000',
    '100k-500k': '$100,000 - $500,000',
    '500k-plus': '$500,000+',
  }[data.budgetRange];

  const content = `
    <h1>🎯 New Contact Form Submission</h1>
    <p>A new inquiry has been submitted through the contact form on your website.</p>

    <div class="info-box">
      <p><span class="info-label">Name:</span> ${escapeHtml(data.name)}</p>
      <p><span class="info-label">Email:</span> <a href="mailto:${escapeHtml(data.email)}">${escapeHtml(data.email)}</a></p>
      <p><span class="info-label">Company:</span> ${escapeHtml(data.company)}</p>
      <p><span class="info-label">Budget Range:</span> ${budgetLabel}</p>
    </div>

    <h2>Message:</h2>
    <div class="info-box">
      <p style="white-space: pre-wrap;">${escapeHtml(data.message)}</p>
    </div>

    <p><strong>⏰ Action Required:</strong> Please respond within 24 hours to maintain our response time guarantee.</p>

    <a href="mailto:${escapeHtml(data.email)}?subject=Re: Your Inquiry to AIvanceWorks" class="button">Reply to ${escapeHtml(data.name)}</a>
  `;

  return emailWrapper(content);
}

/**
 * Contact Form Confirmation Template
 * Sent to the user who submitted the contact form
 */
export function contactFormConfirmationTemplate(data: ContactFormData): string {
  const content = `
    <h1>Thank you for contacting AIvanceWorks!</h1>
    <p>Hi ${escapeHtml(data.name)},</p>

    <p>We've received your inquiry and appreciate you reaching out to us. Our team will review your message and respond within 24 hours.</p>

    <div class="info-box">
      <p><strong>What happens next?</strong></p>
      <ul style="margin: 10px 0; padding-left: 20px;">
        <li>Our Solutions Architect will review your requirements</li>
        <li>We'll respond with initial recommendations and next steps</li>
        <li>If appropriate, we'll schedule a free 30-minute discovery call</li>
      </ul>
    </div>

    <h2>Can't wait to get started?</h2>
    <p>Book a free 30-minute discovery call with our team right now:</p>

    <a href="${SITE_CONFIG.url}/book-consultation" class="button">Book Free Consultation</a>

    <h2>In the meantime...</h2>
    <p>Check out our latest insights on AI, cloud engineering, and custom software development:</p>
    <p><a href="${SITE_CONFIG.url}/blog">Read our blog</a></p>

    <p>Looking forward to helping you transform your ideas into intelligent solutions!</p>

    <p>
      Best regards,<br>
      <strong>The AIvanceWorks Team</strong>
    </p>
  `;

  return emailWrapper(content);
}

/**
 * Newsletter Welcome Template
 * Sent when someone subscribes to the newsletter
 */
export function newsletterWelcomeTemplate(email: string): string {
  const content = `
    <h1>Welcome to AIvanceWorks Insights!</h1>
    <p>Thank you for subscribing to our newsletter.</p>

    <p>You'll now receive:</p>
    <div class="info-box">
      <ul style="margin: 10px 0; padding-left: 20px;">
        <li><strong>Weekly insights</strong> on AI, cloud engineering, and software development</li>
        <li><strong>Case studies</strong> showcasing real-world AI implementations</li>
        <li><strong>Technical deep-dives</strong> on RAG frameworks, agentic AI, and more</li>
        <li><strong>Exclusive offers</strong> and early access to new services</li>
      </ul>
    </div>

    <p>Want to discuss a project? Book a free consultation:</p>

    <a href="${SITE_CONFIG.url}/book-consultation" class="button">Book Free Consultation</a>

    <p>
      Best regards,<br>
      <strong>The AIvanceWorks Team</strong>
    </p>

    <p style="font-size: 12px; color: #64748b; margin-top: 30px;">
      You're receiving this email because you signed up at ${SITE_CONFIG.url}.
      <a href="${SITE_CONFIG.url}/unsubscribe?email=${encodeURIComponent(email)}" style="color: #64748b;">Unsubscribe</a>
    </p>
  `;

  return emailWrapper(content);
}

/**
 * Booking Confirmation Template
 * Sent when someone books a consultation (if Cal.com doesn't send one)
 */
export function bookingConfirmationTemplate(data: {
  name: string;
  email: string;
  date: string;
  time: string;
}): string {
  const content = `
    <h1>Your Consultation is Confirmed! 🎉</h1>
    <p>Hi ${escapeHtml(data.name)},</p>

    <p>Your free 30-minute discovery call with AIvanceWorks is confirmed.</p>

    <div class="info-box">
      <p><span class="info-label">Date:</span> ${escapeHtml(data.date)}</p>
      <p><span class="info-label">Time:</span> ${escapeHtml(data.time)}</p>
      <p><span class="info-label">Duration:</span> 30 minutes</p>
      <p><span class="info-label">Format:</span> Video call (Zoom/Teams)</p>
    </div>

    <h2>What to Prepare:</h2>
    <div class="info-box">
      <ul style="margin: 10px 0; padding-left: 20px;">
        <li>Brief overview of your project goals</li>
        <li>Current technical challenges or pain points</li>
        <li>Timeline and budget expectations</li>
        <li>Any specific questions for our team</li>
      </ul>
    </div>

    <p>A calendar invitation with the video call link has been sent separately.</p>

    <p>Looking forward to our conversation!</p>

    <p>
      Best regards,<br>
      <strong>The AIvanceWorks Team</strong>
    </p>
  `;

  return emailWrapper(content);
}

/**
 * Utility function to escape HTML to prevent XSS
 */
function escapeHtml(text: string): string {
  const map: Record<string, string> = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#039;',
  };
  return text.replace(/[&<>"']/g, (char) => map[char]);
}
