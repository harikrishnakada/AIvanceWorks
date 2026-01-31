import Image from 'next/image';
import Link from 'next/link';
import { Linkedin, Twitter } from 'lucide-react';
import { Author } from '@/types';

interface AuthorBioProps {
  author: Author;
  showFull?: boolean;
}

export function AuthorBio({ author, showFull = false }: AuthorBioProps) {
  const { name, image, role, bio, linkedin, twitter } = author;

  if (!showFull) {
    // Compact version for post cards
    return (
      <div className="flex items-center gap-3">
        <Image
          src={image}
          alt={name}
          width={48}
          height={48}
          className="rounded-full"
        />
        <div>
          <div className="font-medium text-gray-900">{name}</div>
          <div className="text-sm text-gray-600">{role}</div>
        </div>
      </div>
    );
  }

  // Full version for post detail pages
  return (
    <div className="bg-gradient-to-br from-gray-50 to-blue-50/30 rounded-xl p-8">
      <div className="flex flex-col sm:flex-row gap-6">
        {/* Author Image */}
        <div className="flex-shrink-0">
          <Image
            src={image}
            alt={name}
            width={120}
            height={120}
            className="rounded-full"
          />
        </div>

        {/* Author Info */}
        <div className="flex-grow">
          <div className="mb-2">
            <h3 className="text-2xl font-bold text-gray-900">{name}</h3>
            <p className="text-blue-600 font-medium">{role}</p>
          </div>

          <p className="text-gray-700 mb-4 leading-relaxed">{bio}</p>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {linkedin && (
              <a
                href={linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-gray-600 hover:text-blue-600 transition-colors"
                aria-label={`${name} on LinkedIn`}
              >
                <Linkedin className="w-5 h-5" />
                <span className="hidden sm:inline">LinkedIn</span>
              </a>
            )}
            {twitter && (
              <a
                href={twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-gray-600 hover:text-blue-400 transition-colors"
                aria-label={`${name} on Twitter`}
              >
                <Twitter className="w-5 h-5" />
                <span className="hidden sm:inline">Twitter</span>
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
