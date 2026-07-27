// Central site configuration — single source of truth for nav, brand, contact.
// NOTE: contact details below are PLACEHOLDERS — confirm/replace with client-provided info.

export const site = {
  name: "Querentia",
  legalName: "Querentia Inc.",
  domain: "querentia.com",
  url: "https://querentia.com",
  tagline: "Talent. Trust. Thrive.",
  description:
    "Querentia is a trusted talent partner, connecting organizations with exceptional people who elevate teams and accelerate growth. We deliver all talent, tech and non-tech, across North America and beyond.",
  location: "Toronto, ON",
  locality: "Toronto",
  region: "ON",
  country: "CA",
  email: "info@querentia.com",
  phone: "1-877-669-1214",
  linkedin: "https://www.linkedin.com/company/querentia",
  facebook: "https://www.facebook.com/querentia",
  instagram: "https://www.instagram.com/querentia",
  twitter: "https://twitter.com/querentia",
  founded: "2021",
} as const;

export const nav = [
  { label: "About Us", href: "/about" },
  { label: "For Talent", href: "/for-talent" },
  { label: "For Companies", href: "/for-companies" },
  { label: "Contact Us", href: "/contact" },
] as const;

// Enterprise clients referenced across calls / scope
export const clients = ["Deloitte", "Capgemini", "CGI", "Curasion", "Browne"] as const;

// Office addresses (client-provided, 2026-07-25). Grouped by country for the
// flag-labelled "Canada Offices" / "US Offices" sections in the footer + contact.
export const addresses = [
  { city: "Downtown Toronto", country: "CA", lines: ["First Canadian Place", "100 King St W #5600", "Toronto, ON M5X 1C9"] },
  { city: "Downtown Vancouver", country: "CA", lines: ["701 West Georgia Street, Suite 1500", "Vancouver, BC V7Y 1G5"] },
  { city: "Canada Registered Office", country: "CA", lines: ["2432 Castlebrook Rd", "Oakville, ON L6M 4Z2"] },
  { city: "New York City", country: "US", lines: ["287 Park Avenue South", "New York, NY 10010"] },
  { city: "Silicon Valley", country: "US", lines: ["325 South 1st Street, Suite 200", "San Jose, CA 95113"] },
  { city: "US Registered Office", country: "US", lines: ["8 The Green B", "Dover, DE 19901, USA"] },
] as const;

// Industry verticals (used in the header dropdown menu)
export const industries = [
  {
    title: "Banking & Financial Services",
    blurb: "Core banking, payments, risk, and regulatory technology talent.",
    icon: "bank",
  },
  {
    title: "Cloud & DevOps",
    blurb: "AWS, Azure, GCP architects, SREs, and platform engineers.",
    icon: "cloud",
  },
  {
    title: "Data & AI",
    blurb: "Data engineers, ML specialists, and analytics leaders.",
    icon: "data",
  },
  {
    title: "Enterprise Software",
    blurb: "Full-stack, Java, .NET, and SAP delivery teams at scale.",
    icon: "code",
  },
  {
    title: "Cybersecurity",
    blurb: "Security architects, GRC, and SOC professionals.",
    icon: "shield",
  },
  {
    title: "Digital & Product",
    blurb: "Product managers, designers, and agile delivery talent.",
    icon: "spark",
  },
] as const;

// A parsed piece of a job description — lets the detail page render real
// headings + bullet lists instead of a flat wall of text, without ever
// injecting raw ATS HTML into the DOM.
export type DescriptionBlock =
  | { type: "heading"; text: string }
  | { type: "list"; items: string[] }
  | { type: "para"; text: string };

// Public job shape. Live records come from Ceipal via `src/lib/jobs.ts`
// (`getPublicJobs`), which builds each field from a strict allow-list so no
// internal ATS data can leak. `company` / pay are optional because Querentia's
// mandates are confidential and carry no public rate.
export type Job = {
  id: string;
  slug: string;
  title: string;
  company?: string;
  location: string; // display string e.g. "Toronto, ON"
  city?: string;
  region?: string; // province/state abbreviation
  country?: string; // full name e.g. "Canada"
  countryCode?: string; // ISO-2 e.g. "CA" / "US" (for schema addressCountry)
  workModel: "Remote" | "Hybrid" | "On-site";
  jobType: "Full-time" | "Part-time" | "Contract" | "Contract-to-hire";
  duration: string;
  payMin?: number;
  payMax?: number;
  payUnit?: "K" | "hr";
  skills: string[];
  specialization: string;
  postedAt: string; // ISO (YYYY-MM-DD)
  closingDate?: string; // ISO (YYYY-MM-DD) — real Ceipal closing_date
  summary: string;
  description?: string; // full candidate-facing text (HTML-stripped, for schema/meta)
  descriptionBlocks?: DescriptionBlock[]; // structured version for rendering
  applyUrl?: string; // external Ceipal apply link (validated https ceipal.com)
  isFeatured?: boolean;
};

// Specific skill / discipline areas Querentia recruits for — surfaced as the
// "Our Specialization" grid section.
export const specializations = [
  { title: "Cloud Technologies", icon: "cloud" },
  { title: "Data Engineering", icon: "data" },
  { title: "Data Analytics", icon: "barChart" },
  { title: "Data Science", icon: "spark" },
  { title: "Cyber Security", icon: "shield" },
  { title: "Full Stack Development", icon: "code" },
  { title: "Testing Automation", icon: "bolt" },
  { title: "Project Management", icon: "briefcase" },
  { title: "Data Warehousing", icon: "layers" },
  { title: "Web Development", icon: "globe" },
  { title: "Pega", icon: "workflow" },
  { title: "UI / UX Design", icon: "sparkles" },
  { title: "SAS", icon: "barChart" },
  { title: "Org Change Management", icon: "users" },
  { title: "DevOps", icon: "cloud" },
  { title: "Energy & Utilities", icon: "bolt" },
  { title: "Business Analysis", icon: "briefcase" },
  { title: "Program Management", icon: "star" },
  { title: "ERP", icon: "network" },
  { title: "Application Integration", icon: "network" },
  { title: "Enterprise Architecture", icon: "bank" },
  { title: "Agile Delivery", icon: "workflow" },
  { title: "Guidewire", icon: "shield" },
  { title: "Blockchain", icon: "code" },
  { title: "Digital Marketing", icon: "lightbulb" },
  { title: "Supply Chain & Procurement", icon: "globe" },
  { title: "Taxation", icon: "coins" },
  { title: "Financial Advisory", icon: "coins" },
  { title: "Human Resources", icon: "users" },
  { title: "Risk & Internal Audit", icon: "shield" },
] as const;

export const stats = [
  { value: "5+", label: "Years placing IT talent", sub: "Since 2021", icon: "star" },
  { value: "500+", label: "Successful placements", sub: "Since 2021", icon: "briefcase" },
  { value: "48h", label: "Avg. shortlist turnaround", sub: "Qualified candidates", icon: "bolt" },
  { value: "94%", label: "Placement retention", sub: "Year over year", icon: "shield" },
] as const;
