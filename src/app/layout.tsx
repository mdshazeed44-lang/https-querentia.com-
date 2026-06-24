import type { Metadata } from "next";
import { DM_Sans, Familjen_Grotesk } from "next/font/google";
import "./globals.css";
import { site } from "@/lib/site";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { CustomCursor } from "@/components/custom-cursor";
import { ScrollProgress } from "@/components/scroll-progress";
import { ScrollTheme } from "@/components/scroll-theme";

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
    default: `${site.name} — Trusted Recruitment Partner in Canada`,
    template: `%s · ${site.name}`,
  },
  description: site.description,
  applicationName: site.name,
  authors: [{ name: site.legalName, url: site.url }],
  creator: site.legalName,
  publisher: site.legalName,
  keywords: [
    "recruitment agency Canada",
    "talent acquisition Canada",
    "staffing agency Toronto",
    "executive search Canada",
    "permanent and contract recruitment",
    "professional staffing Ontario",
    "technology recruitment Canada",
    "finance and accounting recruitment",
    "Oakville recruitment firm",
    "hire exceptional talent Canada",
  ],
  openGraph: {
    type: "website",
    locale: "en_CA",
    url: site.url,
    siteName: site.name,
    title: `${site.name} — Trusted Recruitment Partner in Canada`,
    description: site.description,
    images: [{ url: "/querentia-logo-og.png", width: 1200, height: 630, alt: site.name }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} — Trusted Recruitment Partner in Canada`,
    description: site.description,
    images: ["/querentia-logo-og.png"],
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

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["Organization", "EmploymentAgency"],
      "@id": `${site.url}#organization`,
      name: site.legalName,
      alternateName: site.name,
      url: site.url,
      logo: `${site.url}/querentia-logo-og.png`,
      image: `${site.url}/querentia-logo-og.png`,
      description: site.description,
      slogan: site.tagline,
      foundingDate: site.founded,
      email: site.email,
      telephone: site.phone,
      sameAs: [site.linkedin, site.facebook, site.instagram, site.twitter],
      address: {
        "@type": "PostalAddress",
        addressLocality: site.locality,
        addressRegion: site.region,
        addressCountry: site.country,
      },
      areaServed: { "@type": "Country", name: "Canada" },
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
        "Recruitment",
        "Talent Acquisition",
        "Staffing",
        "Executive Search",
        "Permanent Placement",
        "Contract Staffing",
        "Technology Recruitment",
        "Finance & Accounting Recruitment",
      ],
    },
    {
      "@type": "WebSite",
      "@id": `${site.url}#website`,
      url: site.url,
      name: site.name,
      description: site.description,
      inLanguage: "en-CA",
      publisher: { "@id": `${site.url}#organization` },
      potentialAction: {
        "@type": "SearchAction",
        target: {
          "@type": "EntryPoint",
          urlTemplate: `${site.url}/jobs?q={search_term_string}`,
        },
        "query-input": "required name=search_term_string",
      },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en-CA"
      className={`${sans.variable} ${display.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-page text-ink">
        <a href="#main" className="skip-link">
          Skip to content
        </a>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <ScrollProgress />
        <ScrollTheme />
        <CustomCursor />
        <SiteHeader />
        <main id="main" className="flex-1">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
