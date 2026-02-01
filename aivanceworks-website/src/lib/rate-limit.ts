/**
 * Rate Limiting Utility
 *
 * Simple in-memory rate limiter for preventing spam and abuse.
 * Uses a sliding window algorithm to track requests per IP address.
 *
 * NOTE: This is a basic in-memory implementation suitable for single-server deployments.
 * For multi-server environments, consider Redis-based rate limiting.
 */

interface RateLimitResult {
  success: boolean;
  remaining: number;
  resetAt?: Date;
}

export class RateLimiter {
  // Map of IP addresses to array of request timestamps
  private requests = new Map<string, number[]>();

  /**
   * @param maxRequests - Maximum number of requests allowed in the time window
   * @param windowMs - Time window in milliseconds
   */
  constructor(
    private maxRequests: number,
    private windowMs: number
  ) {}

  /**
   * Check if a request from the given identifier (IP) should be allowed
   *
   * @param identifier - Unique identifier (typically IP address)
   * @returns Rate limit check result
   */
  check(identifier: string): RateLimitResult {
    const now = Date.now();
    const windowStart = now - this.windowMs;

    // Get existing requests for this identifier
    let requestTimes = this.requests.get(identifier) || [];

    // Filter out requests outside the current window (sliding window)
    requestTimes = requestTimes.filter((time) => time > windowStart);

    // Check if limit exceeded
    if (requestTimes.length >= this.maxRequests) {
      const oldestRequest = Math.min(...requestTimes);
      const resetAt = new Date(oldestRequest + this.windowMs);

      return {
        success: false,
        remaining: 0,
        resetAt,
      };
    }

    // Add current request
    requestTimes.push(now);
    this.requests.set(identifier, requestTimes);

    return {
      success: true,
      remaining: this.maxRequests - requestTimes.length,
    };
  }

  /**
   * Clear rate limit data for a specific identifier
   */
  clear(identifier: string): void {
    this.requests.delete(identifier);
  }

  /**
   * Clear all rate limit data
   */
  clearAll(): void {
    this.requests.clear();
  }

  /**
   * Get current request count for an identifier
   */
  getCount(identifier: string): number {
    const now = Date.now();
    const windowStart = now - this.windowMs;
    const requestTimes = this.requests.get(identifier) || [];

    return requestTimes.filter((time) => time > windowStart).length;
  }
}

/**
 * Rate limiter for contact form submissions
 * Allows 5 requests per hour per IP address
 */
export const contactFormLimiter = new RateLimiter(5, 60 * 60 * 1000); // 5 requests per hour

/**
 * Rate limiter for newsletter signups
 * Allows 3 requests per hour per IP address
 */
export const newsletterLimiter = new RateLimiter(3, 60 * 60 * 1000); // 3 requests per hour

/**
 * Helper function to extract client IP from Next.js headers
 * Accepts both Headers and ReadonlyHeaders (Next.js 15+)
 */
export function getClientIp(headers: ReadonlyHeaders | Headers): string {
  // Check various headers for IP address
  const forwarded = headers.get('x-forwarded-for');
  if (forwarded) {
    return forwarded.split(',')[0].trim();
  }

  const realIp = headers.get('x-real-ip');
  if (realIp) {
    return realIp.trim();
  }

  // Fallback to a generic identifier if no IP found
  return 'unknown';
}

// Type import for Next.js 15 compatibility
type ReadonlyHeaders = {
  get(name: string): string | null;
  has(name: string): boolean;
  forEach(callbackfn: (value: string, key: string) => void): void;
  entries(): IterableIterator<[string, string]>;
  keys(): IterableIterator<string>;
  values(): IterableIterator<string>;
};
