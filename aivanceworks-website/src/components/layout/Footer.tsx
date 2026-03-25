'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { SITE_CONFIG, NAVIGATION } from '@/lib/constants';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Linkedin, Github, Twitter, Mail, ArrowRight } from 'lucide-react';

export function Footer() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    // TODO: Implement newsletter signup with your email service
    // For now, just simulate success
    setTimeout(() => {
      setStatus('success');
      setEmail('');
      setTimeout(() => setStatus('idle'), 3000);
    }, 1000);
  };

  const currentYear = new Date().getFullYear();

  const footerLinks = {
    services: {
      title: 'Services',
      links: NAVIGATION.services.slice(0, 6),
    },
    company: {
      title: 'Company',
      links: [
        { label: 'About', href: '/about' },
        { label: 'Team', href: '/team' },
        { label: 'Careers', href: '/careers' },
        { label: 'Case Studies', href: '/case-studies' },
        { label: 'Contact', href: '/contact' },
      ],
    },
    resources: {
      title: 'Resources',
      links: [
        { label: 'Blog', href: '/blog' },
        { label: 'Guides', href: '/resources/guides' },
        { label: 'Whitepapers', href: '/resources/whitepapers' },
        { label: 'Tools', href: '/resources/tools' },
        { label: 'FAQ', href: '/faq' },
      ],
    },
    legal: {
      title: 'Legal',
      links: [
        { label: 'Privacy Policy', href: '/legal/privacy-policy' },
        { label: 'Terms of Service', href: '/legal/terms-of-service' },
      ],
    },
  };

  const socialLinks = [
    {
      name: 'LinkedIn',
      href: SITE_CONFIG.links.linkedin,
      icon: Linkedin,
      ariaLabel: 'Follow us on LinkedIn',
    },
    {
      name: 'Twitter',
      href: SITE_CONFIG.links.twitter,
      icon: Twitter,
      ariaLabel: 'Follow us on Twitter',
    },
    {
      name: 'GitHub',
      href: SITE_CONFIG.links.github,
      icon: Github,
      ariaLabel: 'View our GitHub',
    },
  ];

  return (
    <footer className="bg-surface-dark border-t border-border-subtle">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-8 lg:py-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 lg:gap-8">
            {/* Brand & Newsletter */}
            <div className="lg:col-span-2">
              {/* Logo */}
              <Link href="/" className="inline-flex items-center group">
                <Image
                  src="/logo-mamba.svg"
                  alt={SITE_CONFIG.name}
                  width={180}
                  height={32}
                  className="h-7 w-auto"
                />
              </Link>

              <p className="mt-4 text-sm text-muted-foreground leading-relaxed max-w-sm">
                {SITE_CONFIG.description}
              </p>

              {/* Newsletter Signup */}
              <div className="mt-6">
                <h3 className="text-sm font-semibold text-text-light mb-3">Stay Updated</h3>
                <form onSubmit={handleNewsletterSubmit} className="space-y-3">
                  <div className="flex flex-col sm:flex-row gap-2">
                    <Input
                      type="email"
                      placeholder="Enter your email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      disabled={status === 'loading' || status === 'success'}
                      className="flex-1 bg-surface border-border-subtle text-text-light placeholder:text-muted-foreground"
                      aria-label="Email address for newsletter"
                    />
                    <Button
                      type="submit"
                      disabled={status === 'loading' || status === 'success'}
                      className="bg-accent hover:bg-accent-hover text-text-heading whitespace-nowrap"
                      size="default"
                    >
                      {status === 'loading' ? (
                        'Subscribing...'
                      ) : status === 'success' ? (
                        'Subscribed!'
                      ) : (
                        <>
                          Subscribe
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </>
                      )}
                    </Button>
                  </div>
                  {status === 'success' && (
                    <p className="text-sm text-accent">
                      Thanks for subscribing! Check your inbox.
                    </p>
                  )}
                  {status === 'error' && (
                    <p className="text-sm text-red-600">
                      Something went wrong. Please try again.
                    </p>
                  )}
                </form>
              </div>

              {/* Social Links */}
              <div className="mt-6">
                <h3 className="text-sm font-semibold text-text-light mb-3">Follow Us</h3>
                <div className="flex space-x-3">
                  {socialLinks.map((social) => (
                    <a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.ariaLabel}
                      className="p-2 rounded-lg bg-surface border border-border-subtle text-muted-foreground hover:text-accent hover:border-accent/15 transition-colors"
                    >
                      <social.icon className="h-5 w-5" />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Services Links */}
            <div>
              <h3 className="text-sm font-semibold text-text-light mb-4">
                {footerLinks.services.title}
              </h3>
              <ul className="space-y-3">
                {footerLinks.services.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-accent transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company Links */}
            <div>
              <h3 className="text-sm font-semibold text-text-light mb-4">
                {footerLinks.company.title}
              </h3>
              <ul className="space-y-3">
                {footerLinks.company.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-accent transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources Links */}
            <div>
              <h3 className="text-sm font-semibold text-text-light mb-4">
                {footerLinks.resources.title}
              </h3>
              <ul className="space-y-3">
                {footerLinks.resources.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-accent transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal & Contact */}
            <div>
              <h3 className="text-sm font-semibold text-text-light mb-4">
                {footerLinks.legal.title}
              </h3>
              <ul className="space-y-3 mb-6">
                {footerLinks.legal.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-accent transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>

              <h3 className="text-sm font-semibold text-text-light mb-3">Contact</h3>
              <div className="space-y-2 text-sm text-muted-foreground">
                <a
                  href={`mailto:${SITE_CONFIG.company.email}`}
                  className="flex items-center text-muted-foreground hover:text-accent transition-colors"
                >
                  <Mail className="h-4 w-4 mr-2" />
                  {SITE_CONFIG.company.email}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border-subtle py-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <p className="text-sm text-muted-foreground">
              © {currentYear} {SITE_CONFIG.company.legalName}. All rights reserved.
            </p>
            <p className="text-sm text-muted-foreground">
              Built with precision. Powered by AI.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
