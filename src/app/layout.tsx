import type { Metadata } from "next";
import { DM_Sans, Familjen_Grotesk } from "next/font/google";
import "./globals.css";
import { site } from "@/lib/site";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { CustomCursor } from "@/components/custom-cursor";

const sans = DM_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
});

const display = Familjen_Grotesk({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — Enterprise IT Recruitment in Canada`,
    template: `%s · ${site.name}`,
  },
  description: site.description,
  applicationName: site.name,
  authors: [{ name: site.legalName, url: site.url }],
  creator: site.legalName,
  publisher: site.legalName,
  keywords: [
    "IT recruitment Canada",
    "IT staffing Toronto",
    "technology recruitment",
    "enterprise IT talent",
    "tech jobs Canada",
    "IT consulting recruitment",
    "Ceipal jobs Canada",
    "cloud engineer jobs Toronto",
    "data engineer jobs Canada",
    "cybersecurity jobs Canada",
  ],
  openGraph: {
    type: "website",
    locale: "en_CA",
    url: site.url,
    siteName: site.name,
    title: `${site.name} — Enterprise IT Recruitment in Canada`,
    description: site.description,
    images: [{ url: "/querentia-logo.png", width: 1200, height: 630, alt: site.name }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} — Enterprise IT Recruitment in Canada`,
    description: site.description,
    images: ["/querentia-logo.png"],
  },
  alternates: { canonical: site.url },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 } },
  icons: {
    icon: [{ url: "/favicon.png" }],
    apple: [{ url: "/favicon.png" }],
    shortcut: "/favicon.png",
  },
  category: "business",
};

export const viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0a1322" },
  ],
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

const orgSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: site.legalName,
  alternateName: site.name,
  url: site.url,
  description: site.description,
  email: site.email,
  telephone: site.phone,
  sameAs: [site.linkedin, site.facebook, site.instagram, site.twitter],
  address: {
    "@type": "PostalAddress",
    addressLocality: site.locality,
    addressRegion: site.region,
    addressCountry: site.country,
  },
  areaServed: "CA",
  contactPoint: [
    {
      "@type": "ContactPoint",
      contactType: "customer service",
      telephone: site.phone,
      email: site.email,
      areaServed: "CA",
      availableLanguage: ["English"],
    },
    {
      "@type": "ContactPoint",
      contactType: "sales",
      telephone: site.phoneAlt,
      email: site.email,
      areaServed: "CA",
      availableLanguage: ["English"],
    },
  ],
  knowsAbout: [
    "IT Recruitment",
    "Technology Staffing",
    "Cloud Engineering",
    "Data & AI",
    "Cybersecurity",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${sans.variable} ${display.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-page text-ink">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
        />
        <CustomCursor />
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
