import type { NextConfig } from "next";

// Sent on every response. Clickjacking + MIME-sniffing + referrer/permissions
// hardening. Note: a full script-src CSP needs per-request nonces (Next inlines
// scripts), so we ship only frame-ancestors here — it hardens against framing
// without breaking the site's inline styles/JSON-LD.
const securityHeaders = [
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "X-Frame-Options", value: "SAMEORIGIN" },
  { key: "Content-Security-Policy", value: "frame-ancestors 'self'" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=(), browsing-topics=()",
  },
];

const nextConfig: NextConfig = {
  images: {
    // Serve AVIF where supported (≈30% smaller than WebP), WebP otherwise.
    formats: ["image/avif", "image/webp"],
    // Optimized images are immutable per URL — cache them for 30 days.
    minimumCacheTTL: 60 * 60 * 24 * 30,
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
    ],
  },
  async headers() {
    return [
      { source: "/:path*", headers: securityHeaders },
      {
        // Static /public media rarely changes — cache a day, revalidate a week.
        source: "/:all*(webp|png|jpg|jpeg|svg|ico|gif|woff2)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=86400, stale-while-revalidate=604800",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
