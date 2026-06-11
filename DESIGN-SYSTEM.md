# Querentia — Design System & Conventions

> The single source of truth for how this site looks, moves, and stays fast.
> Every page follows this system. Read before touching any UI code.
> Last updated: June 2026.

---

## 1. Brand Colors (LOCKED — client-approved, do not change)

Defined in `src/app/globals.css` under `@theme inline`. **Always use tokens, never raw hex in components.**

| Color | Hex | Token(s) | Use |
|-------|-----|----------|-----|
| Deep Navy | `#0D1B2A` | `deep-2`, `ink` | Dark sections, primary text |
| Navy (header) | `#142235` | `deep` | Header, softer dark |
| Electric Cyan | `#00C2FF` | `cyan`, `sage`, `blue` | Accents ONLY — eyebrows, links, highlights |
| Arctic White | `#F4F7FA` | `page` | Light page background |
| Soft tint | `#EAEEF3` | `page-2` | Alternate light sections |
| Steel Grey | `#5A6478` | `ink-muted` | Muted text |
| Signal Orange | `#FF6B2B` | **`green`** ⚠️ | CTA buttons ONLY (legacy token name!) |
| Maple Red | `#D94F3D` | `red` | Selective emphasis |
| Frost Green | `#3DDC84` | `frost` | Success states, check icons |

⚠️ **Gotcha:** `bg-green` renders **orange** — the token was repurposed so legacy button classes auto-convert.

**Anti-patterns (never):** purple/pink "AI" gradients · emoji as icons (use SVGs from `src/components/ui/icons.tsx`) · stock-photo hero backgrounds · raw hex in components.

## 2. Typography

- **Display:** Familjen Grotesk (`--font-display`, weights 500/600/700) — headings, big numbers; *italic* for headline accent phrases.
- **Body:** DM Sans (`--font-sans`, 400/500/700).
- Both loaded via `next/font/google` in `layout.tsx`. **No other font sources** (a render-blocking Fontshare link was removed in the perf pass — don't re-add).
- Micro-labels: `text-[11px] font-mono uppercase tracking-[0.25em]+` · eyebrows/CTA labels: `text-[12px] tracking-[0.3em]`. (Bumped +10% from 10/11px for readability — keep.)

## 3. Hero Pattern (every page)

Heroes are **clean and compact**. The owner's rule: *"har hero section me buttons mat lagao"* — only the **homepage** hero has CTA buttons.

Structure (in order):
1. **Eyebrow** — roman numeral in display font + `h-px w-6` line + page label + pinging cyan dot.
2. **Headline** — `fontSize: clamp(1.85rem, 3.9vw, 3.25rem)`, `lineHeight 1.06`, `maxWidth: 17ch`, `text-balance`; the second phrase in **cyan italic display font**. Giant 6-9vw headlines are banned.
3. **One-sentence paragraph** — `max-w-md text-[14px] md:text-[15px]`.
4. **Slim meta row** — `border-t border-white/15 pt-5`: frost-`Check` trust items, live-status badges, or small uppercase text links. **No button-styled links.**

Per-page hero visual (each page distinct, never duplicated):

| Page | Right-side visual |
|------|-------------------|
| Home | `HeroTalentOrbit` — hero-girl figure + SAP/AWS/GCloud bubbles (defaults) |
| For Talent | Same orbit, `imgSrc=/people/about-hero.webp` + Azure/Python/Salesforce (`about-orbit-logos.ts`) |
| About | Animated concentric ring cluster, 7 vibrant dots on 3 counter-rotating layers |
| Contact | Same ring cluster pattern (2 layers) |
| For Companies | "Mandate console" glass-card mockup (3 vetted candidate rows + 48h counter) |
| Jobs / Hot Jobs | Text-only + meta row |

**Bottom-pinned orbit figures:** column gets `lg:self-stretch`, inner `flex h-full items-end` + `lg:-mb-8` overshoot (must exceed max parallax 18px + float 6px lift), section gets `lg:pb-0`. Orbit rings self-revolve (60s, `wtoRings`).

## 4. Component Conventions

- **Cards:** `rounded-3xl border border-border bg-card`, hover = `-translate-y-1` + `border-cyan/40` + soft shadow. Big **ghost mono numbers** (`text-[5.5rem] text-ink/[0.04]`, hover → cyan tint) + **growing cyan underline** (`h-0.5 w-10 → group-hover:w-16`).
- **Chips:** `rounded-full` + small cyan dot prefix + `hover:border-cyan`.
- **Marquees:** duplicate the array, `translateX(-50%)` keyframes, gradient `mask-image` edges, pause on hover.
- **Disciplines section (home):** interactive vertical tabs — practice list left (active = navy bg + cyan number), panel right with stagger-in chips (`key` remount).
- **Legal pages:** numbered sections with a 72px mono-number rail, display-font headings, cyan-dot bullets.
- **Forms:** all contact forms include `phone` (`type="tel"` + `autocomplete="tel"`). Labels visible, required marked with red asterisk.

## 5. Animation Rules (smooth like butter)

- **Transform/opacity only** — never animate width/height/top/left.
- Page-scoped keyframes go in an inline `<style>` tag inside the page/section — **never** into `globals.css`. (Tailwind v4: custom utilities use `@utility`, NOT `@layer utilities`.)
- Every animation has a `@media (prefers-reduced-motion: reduce)` guard.
- Listeners: `requestAnimationFrame`-throttled + `{ passive: true }` (see `custom-cursor.tsx`, `scroll-progress.tsx` for the reference pattern).
- Established effects: orbiting ring dots (24–36s counter-rotating layers + colored glow), revolving orbit ellipses, marquees, ping dots, `Reveal` (IntersectionObserver fade-up), `CountUp` stat counters, mouse parallax (orbit), float pills.

## 6. Image Pipeline (performance-critical)

The June 2026 perf pass took page images from **11.5 MB → 0.51 MB**. Keep it that way:

1. Client supplies PNGs → **convert before committing** (Pillow): LANCZOS resize to ~2× display width (figures 800w, illustrations 1100–1400w), save **WebP quality 82, method 6** (RGBA for transparent cutout figures).
2. Locations: `public/people/` (hero figures) · `public/about/` · `public/talent/` · `public/illustrations/`.
3. Hero figures rendered via `<img>` inside the orbit get `fetchPriority="high" decoding="async"` (they're the LCP).
4. Everything else uses `next/image` (AVIF/WebP output + 30-day cache configured in `next.config.ts`).
5. `querentia-logo-og.png` (820 KB) is for social cards only — never render it on a page.

## 7. Performance Budget

- All routes must stay **statically prerendered** (`npm run build` → every route `○`/`●`). No accidental dynamic rendering.
- No new fonts, no render-blocking third-party stylesheets/scripts.
- New images: WebP, right-sized, per §6. Anything over ~200 KB needs a reason.
- **Never run `npm run build` while the dev server is running** (shared `.next` corrupts).

## 8. Design Workflow (how changes get made)

- **Structure/UX decisions:** `ui-ux-pro-max` skill (`search.py "query" --design-system`). Verdict for this site: **"Enterprise Gateway + Trust & Authority"** — proof early, one CTA path, conservative accents.
- **Component inspiration:** 21st.dev Magic MCP (`component_inspiration`, `logo_search`) — always **re-skin output to the locked tokens** above.
- **Section redesigns:** build a temp page with 4–5 labeled options (green "Option N" bands), owner picks a number, apply the winner, delete the temp page.
- Full-page heavily-animated rebuilds were tried and **rejected** — keep changes surgical.

## 9. Content Rules

- Tagline/motto everywhere: **Precision. Impact. Integrity.**
- Real facts only: founded 2014 Oakville · 500+ placements · 48h shortlist · 94% retention · 10+ years · 30+ disciplines / 5 practices · clients: Deloitte, Capgemini, CGI, Accenture, TCS. **Never invent stats, names, or testimonials.**
- "bench" is banned in copy → say "network". Resume Services / Interview Training are discontinued — zero references.
- Leadership: Seema Makhija (Director), Hemant Makhija (Advisor) — photos are placeholders until client supplies real ones.
