# Querentia.com — Website Rebuild Plan (INC1138A)

**Client:** Seema Makhija — Querentia Inc (Toronto IT recruitment firm)
**Goal:** Futuristic, credible, AI-crawlable site + SEO-indexable job board (Ceipal API)
**Commercials:** $1,500 USD · 3×$500 (kickoff / design sign-off / go-live) · 4-week delivery · page load 2–3s

---

## 1. Tech Stack (decided)

| Layer | Choice | Why |
|---|---|---|
| Framework | **Next.js (App Router) + TypeScript** | SSR/SSG/ISR = fast + SEO + per-job indexable URLs |
| Styling | **Tailwind CSS** | Fast, consistent design system from brand tokens |
| Animation | **Framer Motion** | "Futuristic" feel — tasteful, performance-safe |
| Job data | **Ceipal REST API** (server-side) | Live jobs, stored/cached, unique URLs |
| Structured data | **JSON-LD** (JobPosting, Organization, BreadcrumbList) | Google + AI engines |
| Chatbot | LLM widget (OpenAI/Claude) scoped to site + jobs | Answer visitor + candidate queries |
| Analytics | **GA4 + Search Console** | Verified, tracked |
| Forms | Server actions + email/CRM hook | Employer + candidate leads |

> ⚠️ **Hosting note:** Next.js job board needs a **Node-capable host** (Vercel / VPS / InMotion VPS) for ISR + on-demand revalidation. InMotion *shared* hosting may not run SSR well. To be confirmed before go-live (see Open Items).

---

## 2. Information Architecture — 8 Unique Screens

Dual audience = **Employers (primary, revenue)** + **Job seekers**.

1. **Home** — futuristic hero, trust signals (Deloitte/Capgemini/CGI), dual CTA (Hire talent / Find jobs)
2. **For Employers / Clients** — how Querentia staffs, process, industries, "Request talent" CTA
3. **For Job Seekers / Candidates** — value prop, how to apply, link to job board
4. **Job Board (listing)** — live Ceipal jobs, on-site search + filters (location, category, type)
5. **Job Detail (dynamic template)** — one indexable URL per role + JobPosting schema + apply
6. **About / Why Querentia** — story, credibility, leadership, enterprise positioning
7. **Industries / Specializations** — verticals they cover (from current site content)
8. **Contact** — dual forms (employer enquiry / candidate), office info, map

*Utility pages (not counted): Privacy, Terms, 404, sitemap.xml, robots.txt.*

---

## 3. Job Board Architecture (the crown jewel)

**Problem today:** 168+ jobs inside one WP iframe under `/open-positions` → Google reads nothing → SEO-invisible.

**Solution:**
1. Server fetches jobs from **Ceipal REST API** (needs API key + account ID from client).
2. Each job → its own route: `/jobs/[slug]` (e.g. `/jobs/senior-java-developer-toronto-12345`).
3. Each detail page renders **server-side** with full content + **JobPosting JSON-LD** (title, location, salary, datePosted, validThrough, employmentType, hiringOrganization).
4. **ISR / on-demand revalidation** keeps jobs fresh (hourly, or webhook on new post).
5. `/jobs` listing page = client-side search + filters over the cached set.
6. All job URLs in **sitemap.xml** → submitted to Search Console.

**Result:** 168 indexable pages instead of 1 → Google + ChatGPT/Perplexity/Gemini can cite specific roles.

---

## 4. AI-Crawlability & SEO Foundation

- `robots.txt`: **allow GPTBot, ClaudeBot, PerplexityBot, Google-Extended** (+ normal crawlers)
- Semantic HTML, clean heading hierarchy, descriptive meta per page
- JSON-LD: Organization, WebSite, JobPosting (per role), BreadcrumbList
- Internal linking (employers ↔ industries ↔ jobs)
- `sitemap.xml` (static pages + all jobs), canonical URLs
- OpenGraph / Twitter cards for social sharing

---

## 5. Performance (commit: 2–3s)

- SSG/ISR over SSR where possible; minimal client JS
- `next/image` (AVIF/WebP, lazy), `next/font` (no layout shift)
- Core Web Vitals targets: **LCP < 2.5s, INP < 200ms, CLS < 0.1**
- Edge/CDN caching, route prefetch, code-splitting

---

## 6. Chatbot

- Floating widget; LLM scoped to site content + live jobs
- Answers: "Do you have React jobs in Toronto?", "How do I apply?", "What industries do you serve?"
- Phase 1: site-content + job-aware Q&A. (Auto-social-posting automation = separate future retainer.)

---

## 7. 4-Week Timeline

| Week | Focus | Deliverables |
|---|---|---|
| **1** | Discovery + foundation | Brand discovery call · references locked · 5 logo concepts · wireframes (8 screens) · **request Ceipal API + hosting creds** · Next.js scaffold |
| **2** | Design + build core | 4 design concepts → sign-off · Home + Employers + Candidates + About built · brand system in code |
| **3** | Job board + integrations | Ceipal API integration · `/jobs` + `/jobs/[slug]` · schema · search/filters · chatbot · SEO/sitemap |
| **4** | Polish + launch | Revisions (2 rounds) · GA4 + Search Console · performance tuning · hosting deploy · KT walkthrough (recorded) |

---

## 8. Open Items / Blockers (need from client)

- [ ] **Ceipal API** key + account/credentials (job board blocked without this)
- [ ] **Hosting + domain** logins — confirm InMotion plan supports Next.js (or use VPS/Vercel)
- [ ] **Design references** — client's picks (Krishna shared benchmarks)
- [ ] **Logo capability gap** ⚠️ — agency does AI-generated logos, no full Photoshop source pack. Clarify with client (Fiverr designer? AI-only acceptable?) before logo work
- [ ] Existing site **content** (industries, copy) to migrate
- [ ] Hosting cost options to send client: **InMotion, AWS, Azure**
- [ ] GA4 + Search Console access

---

## 9. Social Templates (parallel track)

- 2 LinkedIn + 4 Instagram templates (brand-aligned), 4 rounds
- 2 sample job posts per template + recorded knowledge transfer to Querentia
- (Future: automated Ceipal→graphic→Instagram pipeline = separate retainer)
