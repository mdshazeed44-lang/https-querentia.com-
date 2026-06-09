"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import { CountUp } from "@/components/ui/count-up";
import { Reveal } from "@/components/ui/reveal";
import {
  ArrowRight,
  Cloud, Shield, Code, Data, Spark, Bolt, Network,
  Search,
} from "@/components/ui/icons";

const SPECIALIZATIONS = [
  "Data", "AI", "Cloud", "Cybersecurity", "Full-Stack",
  "Blockchain", "Data Science", "DevOps", "Machine Learning",
  "Platform Engineering",
];

const SERVICES = [
  { icon: Cloud, title: "Cloud & DevOps", desc: "AWS, Azure, GCP architects, SREs, and platform engineers." },
  { icon: Data, title: "Data & AI", desc: "Data engineers, ML specialists, applied scientists, analytics leaders." },
  { icon: Shield, title: "Cybersecurity", desc: "Security architects, GRC, SOC, and incident-response talent." },
  { icon: Code, title: "Full-Stack & Mobile", desc: "Senior product engineers across React, Node, iOS, Android." },
  { icon: Network, title: "Blockchain & Web3", desc: "Solidity engineers, protocol designers, and audit-aware builders." },
  { icon: Spark, title: "Digital & Product", desc: "Product managers, designers, and agile delivery talent." },
];

const STATS = [
  { value: "10+", label: "Years placing IT talent" },
  { value: "168+", label: "Live enterprise roles" },
  { value: "48h", label: "Avg. shortlist turnaround" },
  { value: "94%", label: "Placement retention" },
];

const PROCESS = [
  { n: "01", t: "Discover", d: "We map your tech stack, team culture, and delivery goals — not just a job description." },
  { n: "02", t: "Match", d: "Pre-vetted candidates surfaced from our active enterprise network in 48 hours." },
  { n: "03", t: "Place", d: "We coach both sides through interviews, references, offer, and signing." },
  { n: "04", t: "Support", d: "Structured onboarding + ongoing check-ins. 94% retention isn't an accident." },
];

const TRUST = ["Deloitte", "Capgemini", "CGI", "Accenture", "TCS", "EY", "PwC", "Infosys"];

const TESTIMONIALS = [
  {
    quote: "Querentia gave us a shortlist in 48 hours that would have taken our in-house team three weeks. The architect they placed is still our anchor.",
    name: "Director, Banking client",
    role: "Toronto, ON",
  },
  {
    quote: "First recruitment partner who actually understood the difference between an SRE and a DevOps lead. The bench they built is shipping.",
    name: "VP of Engineering",
    role: "Insurance major",
  },
];

const FILTERS = ["All", "Remote", "On-site", "Contract"];

const ROLES = [
  { title: "Senior Cloud Architect", co: "Banking client", loc: "Toronto · Hybrid", type: "Full-time", pay: "$140–175K", skills: ["AWS", "Kubernetes", "Terraform"], tag: "On-site" },
  { title: "Lead Data Engineer", co: "Insurance major", loc: "Remote · Canada", type: "Contract", pay: "$95–110/hr", skills: ["Azure", "Databricks", "Spark"], tag: "Remote" },
  { title: "Cybersecurity Analyst", co: "Public Sector", loc: "Mississauga · On-site", type: "Full-time", pay: "$95–120K", skills: ["SIEM", "SOC", "MITRE"], tag: "On-site" },
  { title: "Full-Stack (React + Node)", co: "FinTech scale-up", loc: "Toronto · Hybrid", type: "Full-time", pay: "$110–135K", skills: ["React", "Node", "Postgres"], tag: "On-site" },
];

// -------------------- Marquee --------------------
export function Marquee() {
  return (
    <section
      className="relative overflow-hidden border-y border-white/5 py-8"
      style={{ background: "linear-gradient(to right, transparent, rgba(16,39,212,0.05), transparent)" }}
    >
      <div className="marquee-track">
        {[...Array(2)].map((_, dup) => (
          <div key={dup} className="flex items-center gap-12 pr-12">
            {SPECIALIZATIONS.map((s) => (
              <span
                key={`${dup}-${s}`}
                className="h-display flex shrink-0 items-center gap-12 text-[clamp(2rem,4vw,3.5rem)] font-semibold text-white/70"
              >
                {s}
                <span aria-hidden style={{ color: "#4f6bff" }}>·</span>
              </span>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}

// -------------------- What we do --------------------
export function WhatWeDo() {
  return (
    <section className="relative py-24 md:py-32" style={{ background: "#0a0a0f" }}>
      <div className="container-x">
        <Reveal>
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.22em]" style={{ color: "#00e5ff" }}>
              What we do
            </p>
            <h2 className="h-display mt-5 text-[clamp(2.25rem,5vw,4.5rem)] text-white">
              Specialist benches in the<br />
              <span style={{ background: "linear-gradient(95deg,#d3e2ff,#4f6bff)", WebkitBackgroundClip: "text", backgroundClip: "text", color: "transparent" }}>
                disciplines that matter.
              </span>
            </h2>
          </div>
        </Reveal>

        <div className="mt-16 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s, i) => {
            const Icon = s.icon;
            return (
              <Reveal key={s.title} delay={i * 80}>
                <div
                  className="tilt-card group relative h-full overflow-hidden rounded-3xl border p-7 backdrop-blur-md"
                  style={{
                    background: "linear-gradient(135deg, rgba(255,255,255,0.04), rgba(255,255,255,0.01))",
                    borderColor: "rgba(255,255,255,0.08)",
                  }}
                >
                  <span
                    aria-hidden
                    className="pointer-events-none absolute -right-12 -top-12 h-40 w-40 rounded-full opacity-0 blur-3xl transition-opacity duration-700 group-hover:opacity-100"
                    style={{ background: "radial-gradient(circle, rgba(79,107,255,0.5), transparent 70%)" }}
                  />
                  <span
                    className="relative flex h-12 w-12 items-center justify-center rounded-2xl"
                    style={{ background: "rgba(79,107,255,0.12)", color: "#d3e2ff" }}
                  >
                    <Icon className="h-6 w-6" />
                  </span>
                  <h3 className="h-display relative mt-6 text-2xl text-white">{s.title}</h3>
                  <p className="relative mt-3 text-sm leading-relaxed text-white/60">{s.desc}</p>
                  <span className="relative mt-6 inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.18em]" style={{ color: "#4f6bff" }}>
                    Learn more <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                  </span>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// -------------------- Stats --------------------
export function StatsCounters() {
  return (
    <section className="relative py-24" style={{ background: "#050510" }}>
      <div className="container-x">
        <Reveal>
          <p className="text-center text-xs font-semibold uppercase tracking-[0.22em]" style={{ color: "#00e5ff" }}>
            By the numbers
          </p>
        </Reveal>
        <div className="mt-12 grid grid-cols-2 gap-y-12 md:grid-cols-4">
          {STATS.map((s, i) => (
            <Reveal key={s.label} delay={i * 110}>
              <div className="group text-center">
                <p
                  className="h-display text-[clamp(3rem,6vw,5.5rem)] leading-none text-white transition-transform duration-500 group-hover:scale-[1.04]"
                  style={{ background: "linear-gradient(180deg, #ffffff 30%, #4f6bff 100%)", WebkitBackgroundClip: "text", backgroundClip: "text", color: "transparent" }}
                >
                  <CountUp value={s.value} />
                </p>
                <span className="mx-auto mt-4 block h-[2px] w-10 origin-center transition-all duration-500 group-hover:w-20" style={{ background: "#00e5ff" }} />
                <p className="mt-3 text-sm font-medium text-white/85">{s.label}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

// -------------------- How it works (vertical, glowing step rail) --------------------
export function HowItWorks() {
  return (
    <section className="relative py-24 md:py-32" style={{ background: "#0a0a0f" }}>
      <div className="container-x">
        <Reveal>
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.22em]" style={{ color: "#00e5ff" }}>
              How it works
            </p>
            <h2 className="h-display mt-5 text-[clamp(2.25rem,5vw,4.5rem)] text-white">
              From brief to bench<br />
              <span style={{ background: "linear-gradient(95deg,#d3e2ff,#4f6bff)", WebkitBackgroundClip: "text", backgroundClip: "text", color: "transparent" }}>
                in four moves.
              </span>
            </h2>
          </div>
        </Reveal>

        <div className="relative mt-16 grid gap-5 md:grid-cols-4">
          {/* Connecting glowing line */}
          <span
            aria-hidden
            className="pointer-events-none absolute left-[8%] right-[8%] top-12 hidden h-px md:block"
            style={{
              background:
                "linear-gradient(to right, transparent, rgba(79,107,255,0.55) 20%, rgba(0,229,255,0.55) 80%, transparent)",
            }}
          />
          {PROCESS.map((p, i) => (
            <Reveal key={p.n} delay={i * 140}>
              <div
                className="group relative rounded-3xl border p-6 backdrop-blur-md transition-all duration-500 hover:-translate-y-1"
                style={{ background: "rgba(255,255,255,0.03)", borderColor: "rgba(255,255,255,0.08)" }}
              >
                <span
                  className="relative z-10 inline-flex h-10 w-10 items-center justify-center rounded-full text-sm font-semibold text-white transition-transform duration-500 group-hover:scale-110"
                  style={{
                    background: "linear-gradient(135deg, #1027d4, #4f6bff)",
                    boxShadow: "0 8px 24px -6px rgba(79,107,255,0.6)",
                  }}
                >
                  {p.n}
                </span>
                <h3 className="h-display mt-5 text-2xl text-white">{p.t}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/60">{p.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

// -------------------- Open roles --------------------
export function OpenRoles() {
  return (
    <section className="relative py-24 md:py-32" style={{ background: "#050510" }}>
      <div className="container-x">
        <Reveal>
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.22em]" style={{ color: "#00e5ff" }}>
                Open roles
              </p>
              <h2 className="h-display mt-3 text-[clamp(2rem,4vw,3.5rem)] text-white">
                Built for what&apos;s next.
              </h2>
            </div>

            {/* Filter chips */}
            <div className="flex flex-wrap gap-2">
              {FILTERS.map((f, i) => (
                <button
                  key={f}
                  type="button"
                  className={`rounded-full border px-4 py-1.5 text-xs font-medium transition-colors ${
                    i === 0
                      ? "border-transparent text-white"
                      : "border-white/15 text-white/65 hover:border-white/40 hover:text-white"
                  }`}
                  style={i === 0 ? { background: "linear-gradient(135deg,#1027d4,#4f6bff)" } : undefined}
                >
                  {f}
                </button>
              ))}
            </div>
          </div>
        </Reveal>

        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {ROLES.map((r, i) => (
            <Reveal key={r.title} delay={i * 90}>
              <Link
                href="/jobs"
                className="group relative block overflow-hidden rounded-3xl border p-6 backdrop-blur-md transition-all duration-500 hover:-translate-y-1"
                style={{ background: "rgba(255,255,255,0.03)", borderColor: "rgba(255,255,255,0.08)" }}
              >
                <span
                  aria-hidden
                  className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full opacity-0 blur-3xl transition-opacity duration-700 group-hover:opacity-100"
                  style={{ background: "radial-gradient(circle, rgba(79,107,255,0.45), transparent 70%)" }}
                />
                <div className="relative flex items-start justify-between gap-4">
                  <div className="min-w-0">
                    <span
                      className="inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide"
                      style={{ background: "rgba(0,229,255,0.12)", color: "#00e5ff" }}
                    >
                      {r.tag}
                    </span>
                    <h3 className="h-display mt-3 text-xl text-white transition-colors duration-300 group-hover:text-[#d3e2ff]">
                      {r.title}
                    </h3>
                    <p className="mt-1 text-xs text-white/55">{r.co} · {r.loc}</p>
                  </div>
                  <span className="text-sm font-bold text-white">{r.pay}</span>
                </div>
                <div className="relative mt-5 flex flex-wrap gap-1.5">
                  {r.skills.map((s) => (
                    <span
                      key={s}
                      className="rounded-full px-2.5 py-0.5 text-[11px]"
                      style={{ background: "rgba(255,255,255,0.06)", color: "rgba(255,255,255,0.75)" }}
                    >
                      {s}
                    </span>
                  ))}
                </div>
                <span className="relative mt-6 inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.18em]" style={{ color: "#4f6bff" }}>
                  View role <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5" />
                </span>
              </Link>
            </Reveal>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            href="/jobs"
            className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-3 text-sm font-medium text-white backdrop-blur-md transition-colors hover:border-white/40"
          >
            View all open positions <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

// -------------------- Trusted by + testimonials --------------------
export function TrustedBy() {
  return (
    <section className="relative overflow-hidden py-24" style={{ background: "#0a0a0f" }}>
      <div className="container-x">
        <Reveal>
          <p className="text-center text-xs font-semibold uppercase tracking-[0.22em]" style={{ color: "#00e5ff" }}>
            Trusted by Canada&apos;s leading enterprises
          </p>
        </Reveal>

        {/* Logo marquee */}
        <div className="mt-10 overflow-hidden">
          <div className="marquee-track">
            {[...Array(2)].map((_, dup) => (
              <div key={dup} className="flex shrink-0 items-center gap-16 pr-16">
                {TRUST.map((c) => (
                  <span
                    key={`${dup}-${c}`}
                    className="h-display whitespace-nowrap text-3xl font-medium text-white/55 md:text-4xl"
                  >
                    {c}
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials */}
        <div className="mt-16 grid gap-5 md:grid-cols-2">
          {TESTIMONIALS.map((t, i) => (
            <Reveal key={i} delay={i * 140}>
              <figure
                className="relative h-full rounded-3xl border p-8 backdrop-blur-md md:p-10"
                style={{ background: "rgba(255,255,255,0.03)", borderColor: "rgba(255,255,255,0.08)" }}
              >
                <span
                  aria-hidden
                  className="h-display absolute right-6 top-4 text-7xl text-white/10"
                >
                  &ldquo;
                </span>
                <blockquote className="relative text-lg leading-relaxed text-white/85 md:text-xl">
                  {t.quote}
                </blockquote>
                <figcaption className="mt-6 text-sm">
                  <span className="block font-semibold text-white">{t.name}</span>
                  <span className="text-white/55">{t.role}</span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

// -------------------- Big CTA with email --------------------
export function BigCTA() {
  return (
    <section className="relative overflow-hidden py-24 md:py-32" style={{ background: "#050510" }}>
      <div className="container-x">
        <Reveal>
          <div
            className="relative overflow-hidden rounded-[2rem] border p-10 md:p-16"
            style={{
              borderColor: "rgba(255,255,255,0.1)",
              background:
                "linear-gradient(135deg, #0a0a0f 0%, #131840 50%, #0a0a0f 100%)",
            }}
          >
            {/* Decorative blobs */}
            <span
              aria-hidden
              className="blob-drift pointer-events-none absolute -left-20 -top-20 h-72 w-72 rounded-full blur-3xl"
              style={{ background: "radial-gradient(circle, rgba(79,107,255,0.5), transparent 70%)" }}
            />
            <span
              aria-hidden
              className="blob-drift pointer-events-none absolute -bottom-20 -right-20 h-72 w-72 rounded-full blur-3xl"
              style={{ background: "radial-gradient(circle, rgba(0,229,255,0.35), transparent 70%)", animationDelay: "-8s" }}
            />

            <div className="relative mx-auto max-w-3xl text-center">
              <p className="text-xs font-semibold uppercase tracking-[0.22em]" style={{ color: "#00e5ff" }}>
                Get in touch
              </p>
              <h2 className="h-display mt-5 text-[clamp(2.25rem,6vw,5.5rem)] text-white">
                Let&apos;s build<br />
                <span style={{ background: "linear-gradient(95deg,#d3e2ff,#4f6bff,#00e5ff)", WebkitBackgroundClip: "text", backgroundClip: "text", color: "transparent" }}>
                  what&apos;s next.
                </span>
              </h2>
              <p className="mx-auto mt-5 max-w-xl text-base text-white/65">
                Tell us what you need. Our team replies within one business day.
              </p>

              <form
                action="mailto:info@querentia.com?subject=Querentia%20%E2%80%94%20new%20enquiry"
                method="post"
                encType="text/plain"
                className="mx-auto mt-9 flex max-w-md flex-col gap-2 rounded-full border border-white/15 bg-white/[0.04] p-1.5 backdrop-blur-md focus-within:border-white/40 sm:flex-row sm:items-center"
              >
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="you@company.com"
                  className="flex-1 bg-transparent px-4 py-2.5 text-sm text-white placeholder:text-white/50 focus:outline-none"
                />
                <button
                  type="submit"
                  className="glow-ring inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-white"
                  style={{ background: "linear-gradient(135deg, #1027d4, #4f6bff)" }}
                >
                  Get in touch <ArrowRight className="h-4 w-4" />
                </button>
              </form>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
