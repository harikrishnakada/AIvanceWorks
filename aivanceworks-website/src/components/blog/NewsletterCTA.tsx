'use client';

import { useState } from 'react';
import { Mail, Check, AlertCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

interface NewsletterCTAProps {
  variant?: 'inline' | 'sidebar' | 'footer';
}

export function NewsletterCTA({ variant = 'inline' }: NewsletterCTAProps) {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email || !email.includes('@')) {
      setStatus('error');
      setErrorMessage('Please enter a valid email address');
      return;
    }

    setStatus('loading');
    setErrorMessage('');

    try {
      // TODO: Connect to Resend API in Phase 4
      const response = await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        setStatus('success');
        setEmail('');
      } else {
        const data = await response.json();
        setStatus('error');
        setErrorMessage(data.error || 'Failed to subscribe. Please try again.');
      }
    } catch (error) {
      setStatus('error');
      setErrorMessage('An error occurred. Please try again later.');
    }
  };

  if (variant === 'sidebar') {
    return (
      <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-lg p-6 text-white">
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2 bg-white/20 rounded-lg">
            <Mail className="w-5 h-5" />
          </div>
          <h4 className="font-bold">Newsletter</h4>
        </div>

        <p className="text-sm text-blue-100 mb-4">
          Get the latest insights on AI and cloud development delivered to your inbox.
        </p>

        <form onSubmit={handleSubmit} className="space-y-3">
          <Input
            type="email"
            placeholder="Your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={status === 'loading' || status === 'success'}
            className="bg-white text-gray-900 border-white/20"
          />
          <Button
            type="submit"
            disabled={status === 'loading' || status === 'success'}
            className="w-full bg-white text-blue-600 hover:bg-gray-100"
          >
            {status === 'loading' ? 'Subscribing...' : status === 'success' ? 'Subscribed!' : 'Subscribe'}
          </Button>
        </form>

        {status === 'success' && (
          <div className="mt-3 flex items-center gap-2 text-sm text-green-200">
            <Check className="w-4 h-4" />
            <span>You're subscribed! Check your inbox.</span>
          </div>
        )}

        {status === 'error' && (
          <div className="mt-3 flex items-center gap-2 text-sm text-red-200">
            <AlertCircle className="w-4 h-4" />
            <span>{errorMessage}</span>
          </div>
        )}

        <p className="text-xs text-blue-200 mt-4">
          We respect your privacy. Unsubscribe at any time.
        </p>
      </div>
    );
  }

  if (variant === 'footer') {
    return (
      <div className="bg-gray-50 rounded-lg p-8">
        <div className="max-w-2xl mx-auto text-center">
          <Mail className="w-12 h-12 text-blue-600 mx-auto mb-4" />
          <h3 className="text-2xl font-bold text-gray-900 mb-2">
            Stay Updated
          </h3>
          <p className="text-gray-600 mb-6">
            Join 5,000+ developers and get the latest insights on AI, cloud architecture, and modern software development.
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={status === 'loading' || status === 'success'}
              className="flex-grow"
            />
            <Button
              type="submit"
              disabled={status === 'loading' || status === 'success'}
              className="px-8"
            >
              {status === 'loading' ? 'Subscribing...' : status === 'success' ? 'Subscribed!' : 'Subscribe'}
            </Button>
          </form>

          {status === 'success' && (
            <div className="mt-4 flex items-center justify-center gap-2 text-sm text-green-600">
              <Check className="w-4 h-4" />
              <span>Success! Check your inbox to confirm your subscription.</span>
            </div>
          )}

          {status === 'error' && (
            <div className="mt-4 flex items-center justify-center gap-2 text-sm text-red-600">
              <AlertCircle className="w-4 h-4" />
              <span>{errorMessage}</span>
            </div>
          )}

          <p className="text-xs text-gray-500 mt-4">
            No spam. Unsubscribe at any time.
          </p>
        </div>
      </div>
    );
  }

  // Inline variant (default)
  return (
    <div className="bg-gradient-to-br from-gray-50 to-blue-50/30 rounded-xl p-8 border border-gray-200">
      <div className="flex flex-col md:flex-row md:items-center gap-6">
        <div className="flex-shrink-0">
          <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center">
            <Mail className="w-8 h-8 text-white" />
          </div>
        </div>

        <div className="flex-grow">
          <h3 className="text-xl font-bold text-gray-900 mb-2">
            Get AI & Cloud Insights in Your Inbox
          </h3>
          <p className="text-gray-600 mb-4">
            Weekly articles on AI development, cloud architecture, and software engineering best practices.
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={status === 'loading' || status === 'success'}
              className="flex-grow"
            />
            <Button
              type="submit"
              disabled={status === 'loading' || status === 'success'}
              className="px-8"
            >
              {status === 'loading' ? 'Subscribing...' : status === 'success' ? 'Subscribed!' : 'Subscribe'}
            </Button>
          </form>

          {status === 'success' && (
            <div className="mt-3 flex items-center gap-2 text-sm text-green-600">
              <Check className="w-4 h-4" />
              <span>Success! Check your inbox to confirm.</span>
            </div>
          )}

          {status === 'error' && (
            <div className="mt-3 flex items-center gap-2 text-sm text-red-600">
              <AlertCircle className="w-4 h-4" />
              <span>{errorMessage}</span>
            </div>
          )}

          <p className="text-xs text-gray-500 mt-3">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </div>
      </div>
    </div>
  );
}
