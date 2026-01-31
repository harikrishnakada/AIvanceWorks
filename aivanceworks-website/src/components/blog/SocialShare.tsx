'use client';

import { useState } from 'react';
import { Facebook, Linkedin, Twitter, Link as LinkIcon, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface SocialShareProps {
  url: string;
  title: string;
}

export function SocialShare({ url, title }: SocialShareProps) {
  const [copied, setCopied] = useState(false);

  const shareUrls = {
    twitter: `https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`,
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
  };

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy link:', err);
    }
  };

  const handleShare = (platform: 'twitter' | 'linkedin' | 'facebook') => {
    window.open(shareUrls[platform], '_blank', 'width=600,height=400');
  };

  // Native share API for mobile
  const handleNativeShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title,
          url,
        });
      } catch (err) {
        // User cancelled or error occurred
        console.error('Native share failed:', err);
      }
    }
  };

  return (
    <div className="bg-white rounded-lg border border-gray-200 p-6">
      <h4 className="font-bold text-gray-900 text-sm uppercase tracking-wide mb-4">
        Share This Article
      </h4>

      <div className="space-y-3">
        {/* Twitter */}
        <Button
          variant="outline"
          className="w-full justify-start gap-3 hover:bg-blue-50 hover:text-blue-600 hover:border-blue-600"
          onClick={() => handleShare('twitter')}
        >
          <Twitter className="w-5 h-5" />
          <span>Share on Twitter</span>
        </Button>

        {/* LinkedIn */}
        <Button
          variant="outline"
          className="w-full justify-start gap-3 hover:bg-blue-50 hover:text-blue-700 hover:border-blue-700"
          onClick={() => handleShare('linkedin')}
        >
          <Linkedin className="w-5 h-5" />
          <span>Share on LinkedIn</span>
        </Button>

        {/* Facebook */}
        <Button
          variant="outline"
          className="w-full justify-start gap-3 hover:bg-blue-50 hover:text-blue-800 hover:border-blue-800"
          onClick={() => handleShare('facebook')}
        >
          <Facebook className="w-5 h-5" />
          <span>Share on Facebook</span>
        </Button>

        {/* Copy Link */}
        <Button
          variant="outline"
          className="w-full justify-start gap-3 hover:bg-gray-50"
          onClick={handleCopyLink}
        >
          {copied ? (
            <>
              <Check className="w-5 h-5 text-green-600" />
              <span className="text-green-600">Link Copied!</span>
            </>
          ) : (
            <>
              <LinkIcon className="w-5 h-5" />
              <span>Copy Link</span>
            </>
          )}
        </Button>

        {/* Native Share (mobile only) */}
        {typeof navigator !== 'undefined' && 'share' in navigator && (
          <Button
            variant="outline"
            className="w-full justify-start gap-3 hover:bg-gray-50 sm:hidden"
            onClick={handleNativeShare}
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
              />
            </svg>
            <span>Share</span>
          </Button>
        )}
      </div>
    </div>
  );
}
