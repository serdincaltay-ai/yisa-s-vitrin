type CounterWindow = {
  count: number;
  resetAt: number;
};

const buckets = new Map<string, CounterWindow>();

export function getClientIp(headers: Headers): string {
  const forwarded = headers.get("x-forwarded-for");
  if (forwarded) {
    return forwarded.split(",")[0]?.trim() || "unknown";
  }

  const realIp = headers.get("x-real-ip");
  if (realIp) {
    return realIp.trim();
  }

  return "unknown";
}

export function checkRateLimit(
  key: string,
  options: { limit: number; windowMs: number }
): { allowed: boolean; remaining: number; resetAt: number } {
  const now = Date.now();
  const current = buckets.get(key);

  if (!current || now >= current.resetAt) {
    const resetAt = now + options.windowMs;
    buckets.set(key, { count: 1, resetAt });
    return { allowed: true, remaining: options.limit - 1, resetAt };
  }

  if (current.count >= options.limit) {
    return { allowed: false, remaining: 0, resetAt: current.resetAt };
  }

  current.count += 1;
  buckets.set(key, current);
  return {
    allowed: true,
    remaining: options.limit - current.count,
    resetAt: current.resetAt,
  };
}
