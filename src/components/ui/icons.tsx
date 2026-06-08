import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

const base = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  viewBox: "0 0 24 24",
};

export const ArrowRight = (p: IconProps) => (
  <svg {...base} {...p}><path d="M5 12h14M13 6l6 6-6 6" /></svg>
);

export const Bank = (p: IconProps) => (
  <svg {...base} {...p}><path d="M3 21h18M4 10h16M12 3l8 4H4l8-4ZM6 10v8M10 10v8M14 10v8M18 10v8" /></svg>
);

export const Cloud = (p: IconProps) => (
  <svg {...base} {...p}><path d="M7 18a4 4 0 0 1-.5-7.97A5.5 5.5 0 0 1 17 9.5a3.5 3.5 0 0 1 .5 6.96" /><path d="M12 13v6m0 0-2.5-2.5M12 19l2.5-2.5" /></svg>
);

export const Data = (p: IconProps) => (
  <svg {...base} {...p}><ellipse cx="12" cy="5" rx="7" ry="3" /><path d="M5 5v6c0 1.66 3.13 3 7 3s7-1.34 7-3V5M5 11v6c0 1.66 3.13 3 7 3s7-1.34 7-3v-6" /></svg>
);

export const Code = (p: IconProps) => (
  <svg {...base} {...p}><path d="m8 8-4 4 4 4M16 8l4 4-4 4M13.5 6l-3 12" /></svg>
);

export const Shield = (p: IconProps) => (
  <svg {...base} {...p}><path d="M12 3 5 6v5c0 4.5 3 7.5 7 9 4-1.5 7-4.5 7-9V6l-7-3Z" /><path d="m9 12 2 2 4-4" /></svg>
);

export const Spark = (p: IconProps) => (
  <svg {...base} {...p}><path d="M12 3v4M12 17v4M3 12h4M17 12h4M6 6l2.5 2.5M15.5 15.5 18 18M18 6l-2.5 2.5M8.5 15.5 6 18" /><circle cx="12" cy="12" r="2.5" /></svg>
);

export const Search = (p: IconProps) => (
  <svg {...base} {...p}><circle cx="11" cy="11" r="7" /><path d="m20 20-3.5-3.5" /></svg>
);

export const Check = (p: IconProps) => (
  <svg {...base} {...p}><path d="m5 12 5 5 9-10" /></svg>
);

export const Bolt = (p: IconProps) => (
  <svg {...base} {...p}><path d="M13 2 4 14h7l-1 8 9-12h-7l1-8Z" /></svg>
);

export const Globe = (p: IconProps) => (
  <svg {...base} {...p}><circle cx="12" cy="12" r="9" /><path d="M3 12h18M12 3c2.5 2.5 3.5 6 3.5 9s-1 6.5-3.5 9c-2.5-2.5-3.5-6-3.5-9s1-6.5 3.5-9Z" /></svg>
);

export const Sparkles = (p: IconProps) => (
  <svg {...base} {...p}><path d="M12 4v4M12 16v4M4 12h4M16 12h4M7 7l2 2M15 15l2 2M17 7l-2 2M9 15l-2 2" /></svg>
);

export const ChevronDown = (p: IconProps) => (
  <svg {...base} {...p}><path d="m6 9 6 6 6-6" /></svg>
);

export const Chat = (p: IconProps) => (
  <svg {...base} {...p}><path d="M21 12a8 8 0 0 1-11.5 7.2L4 20l1-4.5A8 8 0 1 1 21 12Z" /><path d="M8.5 12h.01M12 12h.01M15.5 12h.01" /></svg>
);

export const MapPin = (p: IconProps) => (
  <svg {...base} {...p}><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" /><circle cx="12" cy="10" r="2.5" /></svg>
);

export const Briefcase = (p: IconProps) => (
  <svg {...base} {...p}><rect x="3" y="7" width="18" height="13" rx="2" /><path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M3 12h18" /></svg>
);

export const Star = (p: IconProps) => (
  <svg {...base} {...p}><path d="M12 3.5l2.6 5.3 5.9.9-4.2 4.1 1 5.8L12 17l-5.3 2.8 1-5.8-4.2-4.1 5.9-.9L12 3.5Z" /></svg>
);

export const Users = (p: IconProps) => (
  <svg {...base} {...p}><circle cx="9" cy="8" r="3.2" /><circle cx="17" cy="9.5" r="2.4" /><path d="M3 20c0-3.3 2.7-6 6-6s6 2.7 6 6M14.5 14a4.5 4.5 0 0 1 6.5 4" /></svg>
);

export const Globe2 = (p: IconProps) => (
  <svg {...base} {...p}><circle cx="12" cy="12" r="9" /><path d="M3.6 9h16.8M3.6 15h16.8M12 3a13 13 0 0 1 0 18M12 3a13 13 0 0 0 0 18" /></svg>
);

export const Target = (p: IconProps) => (
  <svg {...base} {...p}><circle cx="12" cy="12" r="9" /><circle cx="12" cy="12" r="5" /><circle cx="12" cy="12" r="1.6" fill="currentColor" /><path d="M12 3v3M12 18v3M3 12h3M18 12h3" /></svg>
);

export const Award = (p: IconProps) => (
  <svg {...base} {...p}><circle cx="12" cy="9" r="6" /><path d="M9.5 14 8 21l4-2 4 2-1.5-7" /><path d="m10 9 1.5 1.5L14 8" /></svg>
);

export const UserCheck = (p: IconProps) => (
  <svg {...base} {...p}><circle cx="10" cy="8" r="3.2" /><path d="M3 20c0-3.3 2.7-6 6-6s4 1 4 1" /><path d="m15 13 2 2 5-5" /></svg>
);

export const BarChart = (p: IconProps) => (
  <svg {...base} {...p}><path d="M3 21V3M3 21h18M7 17V9M12 17v-6M17 17v-9" /></svg>
);

export const Network = (p: IconProps) => (
  <svg {...base} {...p}><rect x="3" y="3" width="6" height="6" rx="1" /><rect x="15" y="3" width="6" height="6" rx="1" /><rect x="9" y="15" width="6" height="6" rx="1" /><path d="M6 9v3h12V9M12 12v3" /></svg>
);

export const Workflow = (p: IconProps) => (
  <svg {...base} {...p}><rect x="3" y="3" width="6" height="6" rx="1" /><rect x="15" y="15" width="6" height="6" rx="1" /><path d="M9 6h6a3 3 0 0 1 3 3v6" /></svg>
);

export const Lightbulb = (p: IconProps) => (
  <svg {...base} {...p}><path d="M9 18h6M10 21h4M12 3a6 6 0 0 0-4 10.5c.7.8 1 1.5 1 2.5h6c0-1 .3-1.7 1-2.5A6 6 0 0 0 12 3Z" /></svg>
);

export const Layers = (p: IconProps) => (
  <svg {...base} {...p}><path d="m12 3 9 5-9 5-9-5 9-5ZM3 13l9 5 9-5M3 18l9 5 9-5" /></svg>
);

export const Coins = (p: IconProps) => (
  <svg {...base} {...p}><circle cx="9" cy="9" r="6" /><path d="M15 12.5a6 6 0 1 1-3.5-5.4" /><path d="M7 9h4M9 7v4" /></svg>
);

export const Mail = (p: IconProps) => (
  <svg {...base} {...p}><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3.5 6 8.5 7 8.5-7" /></svg>
);

export const Phone = (p: IconProps) => (
  <svg {...base} {...p}><path d="M5 4h3.5l1.5 4-2 1.5a11 11 0 0 0 6.5 6.5L16 14l4 1.5V19a2 2 0 0 1-2.2 2A16 16 0 0 1 3 6.2 2 2 0 0 1 5 4Z" /></svg>
);

export const Building = (p: IconProps) => (
  <svg {...base} {...p}><rect x="4" y="3" width="16" height="18" rx="1.5" /><path d="M8 7h2M8 11h2M8 15h2M14 7h2M14 11h2M14 15h2M10 21v-4h4v4" /></svg>
);

export const Filter = (p: IconProps) => (
  <svg {...base} {...p}><path d="M3 5h18M6 12h12M10 19h4" /></svg>
);

export const X = (p: IconProps) => (
  <svg {...base} {...p}><path d="m6 6 12 12M18 6 6 18" /></svg>
);

export const Clock = (p: IconProps) => (
  <svg {...base} {...p}><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></svg>
);

export const Linkedin = (p: IconProps) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...p}><path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9.5h4V21H3V9.5Zm6 0h3.8v1.6h.1c.5-.9 1.8-1.9 3.7-1.9 4 0 4.7 2.6 4.7 6V21h-4V16c0-1.2 0-2.7-1.6-2.7s-1.9 1.3-1.9 2.6V21H9V9.5Z"/></svg>
);

export const Facebook = (p: IconProps) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...p}><path d="M13.5 21v-8h2.7l.4-3.1h-3.1V7.9c0-.9.3-1.5 1.6-1.5h1.7V3.6c-.3 0-1.3-.1-2.4-.1-2.4 0-4 1.4-4 4.1V9.9H7.6V13h2.8v8h3.1Z"/></svg>
);

export const Instagram = (p: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" {...p}><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r="0.9" fill="currentColor" stroke="none" /></svg>
);

export const Twitter = (p: IconProps) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...p}><path d="M18.2 3h3.4l-7.4 8.5L23 21h-6.8l-5.3-7-6.1 7H1.4l8-9.1L1 3h7l4.8 6.4L18.2 3Zm-1.2 16h1.9L7.1 4.9H5.1L17 19Z"/></svg>
);

export const MobilePhone = (p: IconProps) => (
  <svg {...base} {...p}><rect x="6" y="3" width="12" height="18" rx="2" /><path d="M11 18h2" /></svg>
);

export const iconMap = {
  bank: Bank,
  cloud: Cloud,
  data: Data,
  code: Code,
  shield: Shield,
  spark: Spark,
} as const;

export type IconName = keyof typeof iconMap;
