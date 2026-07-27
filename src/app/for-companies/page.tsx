import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Playfair_Display } from "next/font/google";
import { Reveal } from "@/components/ui/reveal";
import { ChevronDown } from "@/components/ui/icons";
import { Industries } from "@/components/sections/industries";
import { ClosingCTA } from "@/components/sections/closing-cta";
import { site } from "@/lib/site";

/**
 * For Companies: premium editorial aesthetic, matching the About "Manifesto"
 * and homepage hero: Playfair serif headings + navy/cyan. All-talent
 * positioning (tech and non-tech across 30+ disciplines).
 */
const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["500", "600"],
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "For Companies: Hire Exceptional Talent",
  description:
    "Querentia is your trusted recruitment partner for exceptional talent, tech and non-tech. Thoughtful, transparent, permanent and contract hiring across 42 disciplines and 7 practice areas.",
  alternates: { canonical: "/for-companies" },
};

/* ── FAQ: answer-oriented content for AI search (GEO) + FAQPage schema ── */
const FAQS = [
  {
    q: "What does Querentia do for companies?",
    a: "Querentia is a trusted recruitment partner that helps organizations hire exceptional talent, both technical and non-technical, across 42 disciplines and 7 practice areas. We deliver pre-vetted shortlists for permanent and contract roles, matching candidates for capability, trajectory, and cultural fit rather than keyword overlap.",
  },
  {
    q: "How does Querentia's hiring process work?",
    a: "It starts with a single briefing call to calibrate the role, the skills, and the culture fit you need. We then draw on our specialist network to build a curated shortlist of pre-screened candidates, coordinate interviews with honest two-way feedback, and support the offer, onboarding, and long-term retention.",
  },
  {
    q: "Do you recruit for non-technical roles as well as technology?",
    a: "Yes. Querentia recruits across both tech and non-tech functions, from cloud, data, AI, engineering, and cyber security to finance, HR, project delivery, risk, and business operations.",
  },
  {
    q: "What is the difference between permanent and contract recruitment?",
    a: "Querentia supports both. Permanent recruitment places full-time employees for long-term roles, while contract and contract-to-hire staffing delivers specialists for defined projects or interim needs. We can staff a single role or an entire team.",
  },
  {
    q: "Which industries and disciplines does Querentia cover?",
    a: "We cover 7 practice areas and 42 disciplines, including Cloud, Data & AI; Engineering & Product; Enterprise Platforms; Strategy & Delivery; Security, Risk & Business; Infrastructure, Networking & IT Operations; and Business, Finance & Risk. We serve sectors from banking and insurance to technology, public sector, healthcare, and professional services.",
  },
  {
    q: "Where is Querentia based?",
    a: "Querentia has offices across Canada and the United States, including downtown Toronto and Vancouver, New York City, and Silicon Valley, and serves clients internationally.",
  },
];

const serviceSchema = {
  "@type": "Service",
  "@id": `${site.url}/for-companies#service`,
  name: "Recruitment & Staffing for Companies",
  serviceType: "Staffing and recruitment",
  url: `${site.url}/for-companies`,
  description:
    "Permanent and contract recruitment for leading organizations. Thoughtful, transparent shortlists across 42 disciplines and 7 practice areas, tech and non-tech, from cloud, data and security to finance, HR, project delivery and risk.",
  areaServed: [
    { "@type": "Country", name: "Canada" },
    { "@type": "Country", name: "United States" },
  ],
  audience: {
    "@type": "BusinessAudience",
    name: "Employers hiring exceptional talent",
  },
  provider: {
    "@type": "Organization",
    "@id": `${site.url}#organization`,
    name: site.legalName,
    url: site.url,
    email: site.email,
    telephone: site.phone,
    address: {
      "@type": "PostalAddress",
      addressLocality: site.locality,
      addressRegion: site.region,
      addressCountry: site.country,
    },
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Recruitment services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Permanent recruitment",
          description:
            "Full-time placements across 42 tech and non-tech disciplines.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Contract & contract-to-hire staffing",
          description:
            "Specialist contract talent for defined projects and interim needs.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Executive & specialist search",
          description: "Niche and leadership hiring across 7 practice areas.",
        },
      },
    ],
  },
};

const faqSchema = {
  "@type": "FAQPage",
  "@id": `${site.url}/for-companies#faq`,
  mainEntity: FAQS.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

const breadcrumbSchema = {
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: site.url },
    {
      "@type": "ListItem",
      position: 2,
      name: "For Companies",
      item: `${site.url}/for-companies`,
    },
  ],
};

const pageSchema = {
  "@context": "https://schema.org",
  "@graph": [serviceSchema, faqSchema, breadcrumbSchema],
};

const PILLARS = [
  {
    num: "01",
    title: "Talent",
    body: "We deliver candidates who elevate your teams, strengthen your culture, and drive meaningful outcomes, matching for capability, trajectory, and impact, not keyword overlap.",
  },
  {
    num: "02",
    title: "Trust",
    body: "Clear communication, honest timelines, and transparent pipelines. From first brief to onboarding, we operate with consistency and integrity, because trust is the foundation of every successful hire.",
  },
  {
    num: "03",
    title: "Thrive",
    body: "Your success is our metric. Thoughtful service and high-calibre talent, permanent or contract, with shortlists built to advance your roadmap and help your teams thrive.",
  },
];

export default function ForCompaniesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }}
      />

      <div className="min-h-screen bg-page text-ink">
        {/* ---------- HERO: full-bleed image, homepage-style split ---------- */}
        <section
          className="relative isolate flex min-h-screen items-center overflow-hidden pb-16 pt-24 text-on-deep sm:pt-28 md:pb-20"
          style={{ backgroundColor: "#0D1B2A" }}
        >
          <style>{`
            @media (min-width: 1024px) {
              .fc-hero-mask {
                -webkit-mask-image: linear-gradient(90deg, transparent 0%, rgba(0,0,0,0.45) 30%, #000 62%, #000 100%);
                mask-image: linear-gradient(90deg, transparent 0%, rgba(0,0,0,0.45) 30%, #000 62%, #000 100%);
              }
            }
            @keyframes fc-img-in { from { opacity: 0; transform: scale(1.12); } to { opacity: 1; transform: scale(1); } }
            .fc-img-in { animation: fc-img-in 1.6s cubic-bezier(0.16,1,0.3,1) both; }
            @media (prefers-reduced-motion: reduce) {
              .fc-img-in { animation: none; opacity: 1; transform: none; }
            }
          `}</style>

          {/* full-bleed image on the right; left edge feathered into navy via mask */}
          <div className="fc-hero-mask absolute inset-0 lg:left-[42%] lg:top-16">
            <Image
              src="/companies-hero.webp"
              alt="A modern open-plan office with teams working across rows of desks"
              fill
              priority
              sizes="(min-width:1024px) 58vw, 100vw"
              className="fc-img-in object-cover object-center"
            />
          </div>

          {/* mobile veil so copy stays readable over the full-bleed image */}
          <div
            aria-hidden
            className="absolute inset-0 lg:hidden"
            style={{
              background:
                "linear-gradient(180deg, rgba(13,27,42,0.80), rgba(13,27,42,0.93))",
            }}
          />
          {/* desktop: navy wash on the far left for copy depth (mask does the blend) */}
          <div
            aria-hidden
            className="absolute inset-0 hidden lg:block"
            style={{
              background:
                "linear-gradient(90deg, #0D1B2A 0%, rgba(13,27,42,0.92) 30%, rgba(13,27,42,0.55) 48%, rgba(13,27,42,0.18) 62%, rgba(13,27,42,0) 74%)",
            }}
          />
          {/* desktop: top + bottom navy fades and a soft overall tint so the
              image settles into the hero instead of floating on it */}
          <div
            aria-hidden
            className="absolute inset-0 hidden lg:block"
            style={{
              background:
                "linear-gradient(180deg, rgba(13,27,42,0.85) 0%, rgba(13,27,42,0.25) 16%, rgba(13,27,42,0) 32%, rgba(13,27,42,0) 72%, rgba(13,27,42,0.45) 100%), rgba(13,27,42,0.22)",
            }}
          />

          <div className="container-x relative w-full">
            <div className="mx-auto max-w-2xl text-center lg:mx-0 lg:text-left">
              <div>
                <Reveal>
                  <p className="mb-6 inline-flex items-center gap-3 text-[12px] font-semibold uppercase tracking-[0.3em] text-cyan">
                    <span className="inline-block h-px w-6 bg-current opacity-50" />
                    <span>For Companies</span>
                    <span className="relative ml-1 flex h-1.5 w-1.5">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan opacity-70" />
                      <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-cyan" />
                    </span>
                  </p>
                </Reveal>
                <Reveal delay={140}>
                  <h1
                    className={`${playfair.className} mx-auto text-balance font-medium text-white lg:mx-0`}
                    style={{
                      fontSize: "clamp(2rem, 4.2vw, 3.4rem)",
                      lineHeight: 1.08,
                      letterSpacing: "-0.015em",
                      maxWidth: "20ch",
                    }}
                  >
                    Where Talent Meets Trust. And Companies{" "}
                    <span style={{ color: "#00C2FF" }}>Thrive.</span>
                  </h1>
                </Reveal>
                <Reveal delay={300}>
                  <p className="mx-auto mt-6 max-w-lg text-[14px] leading-relaxed text-on-deep-muted md:text-[15px] lg:mx-0">
                    We build high-performing teams through thoughtful,
                    transparent recruitment that elevates your culture and drives
                    results.
                  </p>
                </Reveal>
              </div>
            </div>
          </div>
        </section>

        {/* ---------- WHY QUERENTIA ---------- */}
        <section className="relative isolate overflow-hidden bg-deep-2 py-16 text-on-deep md:py-20">
          <div
            aria-hidden
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(ellipse 55% 45% at 50% 100%, rgba(0,194,255,0.10) 0%, transparent 60%)",
            }}
          />
          <div className="container-x relative">
            <Reveal>
              <div className="mb-12 max-w-2xl md:mb-14">
                <p className="mb-5 flex items-center gap-3 text-[12px] font-semibold uppercase tracking-[0.3em] text-cyan">
                  <span className="inline-block h-px w-8 bg-cyan/60" />
                  Why Querentia
                </p>
                <h2
                  className={`${playfair.className} text-[clamp(1.9rem,4.5vw,3.25rem)] font-medium leading-[1.1] tracking-tight text-white`}
                >
                  Three principles.{" "}
                  <span className="text-cyan">Every partnership.</span>
                </h2>
              </div>
            </Reveal>

            <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
              {PILLARS.map((v, i) => (
                <Reveal key={v.num} delay={i * 120}>
                  <div className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-8 transition-colors duration-300 hover:border-cyan/40 hover:bg-white/[0.05]">
                    <h3
                      className={`${playfair.className} text-[1.7rem] font-medium leading-tight tracking-tight text-white`}
                    >
                      {v.title}.
                    </h3>
                    <p className="mt-4 text-base leading-relaxed text-on-deep-muted">
                      {v.body}
                    </p>
                    <div className="mt-auto pt-6">
                      <span
                        aria-hidden
                        className="block h-0.5 w-10 bg-cyan transition-all duration-500 group-hover:w-16"
                      />
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>

            {/* Manifesto */}
            <Reveal delay={200}>
              <div className="mt-16 border-t border-white/10 pt-14 text-center md:mt-20">
                <p
                  className={`${playfair.className} mx-auto max-w-4xl text-balance text-[clamp(1.75rem,4vw,3rem)] font-medium leading-[1.15] tracking-tight text-white`}
                >
                  High-quality, high-impact talent,{" "}
                  <span className="text-cyan">delivered.</span>
                </p>
              </div>
            </Reveal>
          </div>
        </section>

        {/* ---------- OUR EXPERTISE (shared homepage section) ---------- */}
        <div id="expertise" className="scroll-mt-24">
          <Industries />
        </div>

        {/* ---------- FAQ (answer content for AI search + FAQPage schema) ---------- */}
        <section
          id="faq"
          className="scroll-mt-24 border-t border-border bg-page-2 py-16 md:py-20"
        >
          <style>{`
            #faq details > summary svg { transition: transform .3s ease; }
            #faq details[open] > summary svg { transform: rotate(180deg); }
          `}</style>
          <div className="container-x">
            <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
              <Reveal>
                <div className="lg:sticky lg:top-28">
                  <p className="mb-5 flex items-center gap-3 text-[12px] font-semibold uppercase tracking-[0.3em] text-cyan">
                    <span className="inline-block h-px w-8 bg-cyan/60" />
                    Questions, answered
                  </p>
                  <h2
                    className={`${playfair.className} text-[clamp(1.9rem,4.5vw,3.25rem)] font-medium leading-[1.1] tracking-tight`}
                  >
                    Common questions from{" "}
                    <span className="text-cyan">hiring teams.</span>
                  </h2>
                  <p className="mt-6 max-w-sm text-[15px] leading-relaxed text-ink-muted">
                    Everything you need to know about partnering with Querentia
                    to hire exceptional talent. Still curious?{" "}
                    <Link
                      href="/contact"
                      className="font-medium text-cyan underline-offset-4 hover:underline"
                    >
                      Talk to our team
                    </Link>
                    .
                  </p>
                </div>
              </Reveal>

              <Reveal delay={120}>
                <div className="border-t border-border">
                  {FAQS.map((f) => (
                    <details key={f.q} className="group border-b border-border">
                      <summary className="flex cursor-pointer list-none items-start justify-between gap-5 py-5 [&::-webkit-details-marker]:hidden">
                        <h3
                          className={`${playfair.className} text-lg font-medium leading-snug tracking-tight text-ink transition-colors duration-200 group-hover:text-cyan md:text-xl`}
                        >
                          {f.q}
                        </h3>
                        <ChevronDown className="mt-1 h-5 w-5 flex-shrink-0 text-cyan transition-transform duration-300 group-open:rotate-180" />
                      </summary>
                      <p className="mb-6 max-w-2xl text-[15px] leading-relaxed text-ink-muted">
                        {f.a}
                      </p>
                    </details>
                  ))}
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* ---------- CLOSING CTA (shared) ---------- */}
        <ClosingCTA subline="Great teams aren't hired — they're built, on trust. Let's build yours." />
      </div>
    </>
  );
}
