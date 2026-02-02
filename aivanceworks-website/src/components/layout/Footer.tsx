'use client';

import Link from 'next/link';
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
    <footer className="bg-gradient-to-b from-gray-50 to-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-12 lg:py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 lg:gap-12">
            {/* Brand & Newsletter */}
            <div className="lg:col-span-2">
              {/* Logo */}
              <Link href="/" className="inline-flex items-center space-x-2 group">
                <div className="w-9 h-9 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-lg flex items-center justify-center transform transition-transform group-hover:scale-105">
                  <span className="text-white font-bold text-lg">A</span>
                </div>
                <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                  {SITE_CONFIG.name}
                </span>
              </Link>

              <p className="mt-4 text-sm text-gray-600 leading-relaxed max-w-sm">
                {SITE_CONFIG.description}
              </p>

              {/* Newsletter Signup */}
              <div className="mt-6">
                <h3 className="text-sm font-semibold text-gray-900 mb-3">Stay Updated</h3>
                <form onSubmit={handleNewsletterSubmit} className="space-y-3">
                  <div className="flex flex-col sm:flex-row gap-2">
                    <Input
                      type="email"
                      placeholder="Enter your email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      disabled={status === 'loading' || status === 'success'}
                      className="flex-1"
                      aria-label="Email address for newsletter"
                    />
                    <Button
                      type="submit"
                      disabled={status === 'loading' || status === 'success'}
                      className="bg-blue-600 hover:bg-blue-700 whitespace-nowrap"
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
                    <p className="text-sm text-green-600">
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
                <h3 className="text-sm font-semibold text-gray-900 mb-3">Follow Us</h3>
                <div className="flex space-x-3">
                  {socialLinks.map((social) => (
                    <a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.ariaLabel}
                      className="p-2 rounded-lg bg-white border border-gray-200 text-gray-600 hover:text-blue-600 hover:border-blue-300 transition-colors"
                    >
                      <social.icon className="h-5 w-5" />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Services Links */}
            <div>
              <h3 className="text-sm font-semibold text-gray-900 mb-4">
                {footerLinks.services.title}
              </h3>
              <ul className="space-y-3">
                {footerLinks.services.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-gray-600 hover:text-blue-600 transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company Links */}
            <div>
              <h3 className="text-sm font-semibold text-gray-900 mb-4">
                {footerLinks.company.title}
              </h3>
              <ul className="space-y-3">
                {footerLinks.company.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-gray-600 hover:text-blue-600 transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources Links */}
            <div>
              <h3 className="text-sm font-semibold text-gray-900 mb-4">
                {footerLinks.resources.title}
              </h3>
              <ul className="space-y-3">
                {footerLinks.resources.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-gray-600 hover:text-blue-600 transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal & Contact */}
            <div>
              <h3 className="text-sm font-semibold text-gray-900 mb-4">
                {footerLinks.legal.title}
              </h3>
              <ul className="space-y-3 mb-6">
                {footerLinks.legal.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-gray-600 hover:text-blue-600 transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>

              <h3 className="text-sm font-semibold text-gray-900 mb-3">Contact</h3>
              <div className="space-y-2 text-sm text-gray-600">
                <a
                  href={`mailto:${SITE_CONFIG.company.email}`}
                  className="flex items-center hover:text-blue-600 transition-colors"
                >
                  <Mail className="h-4 w-4 mr-2" />
                  {SITE_CONFIG.company.email}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-200 py-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <p className="text-sm text-gray-500">
              © {currentYear} {SITE_CONFIG.company.legalName}. All rights reserved.
            </p>
            <p className="text-sm text-gray-500">
              Built with precision. Powered by AI.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
