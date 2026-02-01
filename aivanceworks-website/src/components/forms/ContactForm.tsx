'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Loader2, CheckCircle, AlertCircle } from 'lucide-react';
import { contactFormSchema, type ContactFormData, BUDGET_RANGES } from '@/lib/validation';
import { submitContactForm } from '@/app/actions/contact';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/forms/Textarea';
import { Select } from '@/components/forms/Select';

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({ type: null, message: '' });

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: '',
      email: '',
      company: '',
      budgetRange: undefined,
      message: '',
    },
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: '' });

    try {
      // Convert to FormData for Server Action
      const formData = new FormData();
      Object.entries(data).forEach(([key, value]) => {
        formData.append(key, value);
      });

      const result = await submitContactForm(formData);

      if (result.success) {
        setSubmitStatus({
          type: 'success',
          message: result.message || "Thank you! We'll be in touch soon.",
        });

        // Track analytics event
        if (typeof window !== 'undefined' && (window as any).gtag) {
          (window as any).gtag('event', 'form_submission', {
            event_category: 'Lead Generation',
            event_label: 'Contact Form',
            value: 1,
          });
        }

        reset(); // Clear form
      } else {
        setSubmitStatus({
          type: 'error',
          message: result.error || 'Failed to submit form. Please try again.',
        });
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus({
        type: 'error',
        message: 'An unexpected error occurred. Please try again.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6" noValidate>
      {/* Success/Error Messages */}
      {submitStatus.type && (
        <div
          className={`flex items-start space-x-3 rounded-lg p-4 ${
            submitStatus.type === 'success'
              ? 'bg-green-50 text-green-800 dark:bg-green-900/20 dark:text-green-300'
              : 'bg-red-50 text-red-800 dark:bg-red-900/20 dark:text-red-300'
          }`}
          role="alert"
          aria-live="polite"
        >
          {submitStatus.type === 'success' ? (
            <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0" aria-hidden="true" />
          ) : (
            <AlertCircle className="mt-0.5 h-5 w-5 flex-shrink-0" aria-hidden="true" />
          )}
          <p className="text-sm">{submitStatus.message}</p>
        </div>
      )}

      {/* Name Field */}
      <div>
        <label htmlFor="name" className="mb-2 block text-sm font-medium">
          Name <span className="text-red-600" aria-label="required">*</span>
        </label>
        <Input
          id="name"
          type="text"
          {...register('name')}
          aria-invalid={errors.name ? 'true' : 'false'}
          aria-describedby={errors.name ? 'name-error' : undefined}
          disabled={isSubmitting}
          placeholder="John Doe"
        />
        {errors.name && (
          <p id="name-error" className="mt-1 text-sm text-red-600" role="alert">
            {errors.name.message}
          </p>
        )}
      </div>

      {/* Email Field */}
      <div>
        <label htmlFor="email" className="mb-2 block text-sm font-medium">
          Email <span className="text-red-600" aria-label="required">*</span>
        </label>
        <Input
          id="email"
          type="email"
          {...register('email')}
          aria-invalid={errors.email ? 'true' : 'false'}
          aria-describedby={errors.email ? 'email-error' : undefined}
          disabled={isSubmitting}
          placeholder="john@company.com"
        />
        {errors.email && (
          <p id="email-error" className="mt-1 text-sm text-red-600" role="alert">
            {errors.email.message}
          </p>
        )}
      </div>

      {/* Company Field */}
      <div>
        <label htmlFor="company" className="mb-2 block text-sm font-medium">
          Company <span className="text-red-600" aria-label="required">*</span>
        </label>
        <Input
          id="company"
          type="text"
          {...register('company')}
          aria-invalid={errors.company ? 'true' : 'false'}
          aria-describedby={errors.company ? 'company-error' : undefined}
          disabled={isSubmitting}
          placeholder="Acme Inc."
        />
        {errors.company && (
          <p id="company-error" className="mt-1 text-sm text-red-600" role="alert">
            {errors.company.message}
          </p>
        )}
      </div>

      {/* Budget Range Field */}
      <div>
        <label htmlFor="budgetRange" className="mb-2 block text-sm font-medium">
          Budget Range <span className="text-red-600" aria-label="required">*</span>
        </label>
        <Select
          id="budgetRange"
          {...register('budgetRange')}
          options={BUDGET_RANGES}
          placeholder="Select your budget range"
          aria-invalid={errors.budgetRange ? 'true' : 'false'}
          aria-describedby={errors.budgetRange ? 'budgetRange-error' : undefined}
          disabled={isSubmitting}
        />
        {errors.budgetRange && (
          <p id="budgetRange-error" className="mt-1 text-sm text-red-600" role="alert">
            {errors.budgetRange.message}
          </p>
        )}
      </div>

      {/* Message Field */}
      <div>
        <label htmlFor="message" className="mb-2 block text-sm font-medium">
          Message <span className="text-red-600" aria-label="required">*</span>
        </label>
        <Textarea
          id="message"
          {...register('message')}
          rows={6}
          aria-invalid={errors.message ? 'true' : 'false'}
          aria-describedby={errors.message ? 'message-error' : undefined}
          disabled={isSubmitting}
          placeholder="Tell us about your project requirements, timeline, and any specific technologies or features you need..."
        />
        {errors.message && (
          <p id="message-error" className="mt-1 text-sm text-red-600" role="alert">
            {errors.message.message}
          </p>
        )}
        <p className="mt-1 text-xs text-muted-foreground">
          {errors.message ? 0 : 2000} characters remaining
        </p>
      </div>

      {/* Submit Button */}
      <Button
        type="submit"
        size="lg"
        className="w-full"
        disabled={isSubmitting}
        aria-busy={isSubmitting}
      >
        {isSubmitting ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" aria-hidden="true" />
            Sending Message...
          </>
        ) : (
          'Send Message'
        )}
      </Button>

      <p className="text-center text-xs text-muted-foreground">
        By submitting this form, you agree to our privacy policy. We'll respond within 24 hours.
      </p>
    </form>
  );
}
