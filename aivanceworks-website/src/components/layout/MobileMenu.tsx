'use client';

import Link from 'next/link';
import { useState } from 'react';
import { NAVIGATION } from '@/lib/constants';
import { Button } from '@/components/ui/button';
import { ChevronDown } from 'lucide-react';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const [isServicesExpanded, setIsServicesExpanded] = useState(false);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-40 lg:hidden"
      role="dialog"
      aria-modal="true"
      aria-label="Mobile menu"
    >
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/50 backdrop-blur-sm animate-in fade-in duration-200"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Menu Panel */}
      <div className="fixed inset-y-0 right-0 w-full max-w-sm bg-white shadow-xl animate-in slide-in-from-right duration-300">
        <div className="flex flex-col h-full">
          {/* Menu Content */}
          <div className="flex-1 overflow-y-auto px-6 py-6 mt-16">
            <nav className="space-y-1" aria-label="Mobile navigation">
              {/* Services Accordion */}
              <div className="border-b border-gray-100 pb-1">
                <button
                  onClick={() => setIsServicesExpanded(!isServicesExpanded)}
                  className="flex items-center justify-between w-full px-4 py-3 text-base font-medium text-gray-900 hover:bg-gray-50 rounded-lg transition-colors"
                  aria-expanded={isServicesExpanded}
                >
                  Services
                  <ChevronDown
                    className={`h-5 w-5 transition-transform ${
                      isServicesExpanded ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {/* Services Submenu */}
                {isServicesExpanded && (
                  <div className="mt-1 space-y-1 pl-4 animate-in slide-in-from-top-2 duration-200">
                    {NAVIGATION.services.map((service) => (
                      <Link
                        key={service.href}
                        href={service.href}
                        onClick={onClose}
                        className="block px-4 py-2.5 text-sm text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                      >
                        {service.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* Main Navigation Links */}
              {NAVIGATION.main.filter((item) => item.label !== 'Services').map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={onClose}
                  className="block px-4 py-3 text-base font-medium text-gray-900 hover:bg-gray-50 rounded-lg transition-colors"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* CTA Buttons */}
          <div className="border-t border-gray-100 p-6 space-y-3 bg-gray-50">
            <Button
              variant="outline"
              className="w-full border-gray-300 hover:border-blue-600 hover:text-blue-600"
              asChild
            >
              <Link href="/contact" onClick={onClose}>
                Contact Us
              </Link>
            </Button>
            <Button
              className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 shadow-sm"
              asChild
            >
              <Link href="/book-consultation" onClick={onClose}>
                Book Consultation
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
