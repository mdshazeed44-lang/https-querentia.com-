// Central site configuration — single source of truth for nav, brand, contact.
// NOTE: contact details below are PLACEHOLDERS — confirm/replace with client-provided info.

export const site = {
  name: "Querentia",
  legalName: "Querentia Inc.",
  domain: "querentia.com",
  url: "https://querentia.com",
  tagline: "Talent. Trust. Thrive.",
  description:
    "Querentia is a trusted talent partner — connecting organizations with exceptional people who elevate teams and accelerate growth. We deliver all talent, tech and non-tech, across Canada.",
  location: "Oakville, Ontario, Canada",
  locality: "Oakville",
  region: "ON",
  country: "CA",
  email: "info@querentia.com",
  phone: "+1 (905) 409-5422",
  phoneAlt: "+1 (416) 475-5422",
  linkedin: "https://www.linkedin.com/company/querentia",
  facebook: "https://www.facebook.com/querentia",
  instagram: "https://www.instagram.com/querentia",
  twitter: "https://twitter.com/querentia",
  founded: "2014",
} as const;

export const nav = [
  { label: "About Us", href: "/about" },
  { label: "For Talent", href: "/for-talent" },
  { label: "For Companies", href: "/for-companies" },
  { label: "Contact Us", href: "/contact" },
] as const;

// Enterprise clients referenced across calls / scope
export const clients = ["Deloitte", "Capgemini", "CGI", "Curasion", "Browne"] as const;

// Office addresses — sample/placeholder locations for the footer.
export const addresses = [
  { city: "Oakville (Head Office)", lines: ["2010 Winston Park Dr, Suite 200", "Oakville, ON L6H 5R7", "Canada"] },
  { city: "Toronto", lines: ["100 King St W, Suite 5600", "Toronto, ON M5X 1C9", "Canada"] },
  { city: "Vancouver", lines: ["1055 W Georgia St, Suite 2400", "Vancouver, BC V6E 3P3", "Canada"] },
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

// Specific skill / discipline areas Querentia recruits for — surfaced as the
// "Our Specialization" grid section.
// Sample job postings — replace with live Ceipal REST API data once credentials are in.
// Shape is API-agnostic so the swap is a 1-line import change in /jobs.
export type Job = {
  id: string;
  slug: string;
  title: string;
  company: string;
  location: string;
  workModel: "Remote" | "Hybrid" | "On-site";
  jobType: "Full-time" | "Contract" | "Contract-to-hire";
  duration: string;
  payMin?: number;
  payMax?: number;
  payUnit?: "K" | "hr";
  skills: string[];
  specialization: string;
  postedAt: string; // ISO
  summary: string;
  isFeatured?: boolean;
};

export const openJobs: Job[] = [
  {
    id: "qrn-001",
    slug: "senior-cloud-architect-toronto",
    title: "Senior Cloud Architect",
    company: "Enterprise Banking Client",
    location: "Toronto, ON",
    workModel: "Hybrid",
    jobType: "Full-time",
    duration: "Permanent",
    payMin: 140,
    payMax: 175,
    payUnit: "K",
    skills: ["AWS", "Kubernetes", "Terraform", "Python"],
    specialization: "Cloud Technologies",
    postedAt: "2026-06-01",
    summary:
      "Architect cloud-native platforms for one of Canada's top-5 banks. Drive AWS-first modernization across multiple business units.",
    isFeatured: true,
  },
  {
    id: "qrn-002",
    slug: "lead-data-engineer-remote",
    title: "Lead Data Engineer",
    company: "Insurance Major",
    location: "Remote · Canada",
    workModel: "Remote",
    jobType: "Contract",
    duration: "12 months + ext.",
    payMin: 95,
    payMax: 110,
    payUnit: "hr",
    skills: ["Azure", "Databricks", "Spark", "Python", "SQL"],
    specialization: "Data Engineering",
    postedAt: "2026-05-30",
    summary:
      "Lead a 6-person data platform pod migrating legacy ETL to a Databricks lakehouse. Hands-on architecture + mentorship.",
    isFeatured: true,
  },
  {
    id: "qrn-003",
    slug: "cybersecurity-analyst-mississauga",
    title: "Cybersecurity Analyst",
    company: "Public Sector",
    location: "Mississauga, ON",
    workModel: "On-site",
    jobType: "Full-time",
    duration: "Permanent",
    payMin: 95,
    payMax: 120,
    payUnit: "K",
    skills: ["SIEM", "SOC", "Splunk", "IR", "MITRE ATT&CK"],
    specialization: "Cyber Security",
    postedAt: "2026-05-28",
    summary:
      "Tier-2 SOC role with a public-sector mandate. Tune detections, lead investigations, and harden a high-stakes environment.",
    isFeatured: true,
  },
  {
    id: "qrn-004",
    slug: "fullstack-developer-react-node-toronto",
    title: "Full Stack Developer (React + Node)",
    company: "FinTech Scale-up",
    location: "Toronto, ON",
    workModel: "Hybrid",
    jobType: "Full-time",
    duration: "Permanent",
    payMin: 110,
    payMax: 135,
    payUnit: "K",
    skills: ["React", "Node.js", "TypeScript", "PostgreSQL", "AWS"],
    specialization: "Full Stack Development",
    postedAt: "2026-05-25",
    summary:
      "Ship customer-facing payments product alongside a small senior team. Strong TypeScript and design-system sensibility a plus.",
  },
  {
    id: "qrn-005",
    slug: "sap-s4-functional-consultant-contract",
    title: "SAP S/4 HANA Functional Consultant",
    company: "Consulting Partner",
    location: "Remote · Canada",
    workModel: "Remote",
    jobType: "Contract",
    duration: "9 months",
    payMin: 100,
    payMax: 130,
    payUnit: "hr",
    skills: ["SAP S/4", "FICO", "MM", "Migration"],
    specialization: "Enterprise Software",
    postedAt: "2026-05-22",
    summary:
      "Lead functional design on an S/4 greenfield rollout for a manufacturing client. Strong stakeholder communication required.",
  },
  {
    id: "qrn-006",
    slug: "devops-engineer-azure-vancouver",
    title: "DevOps Engineer (Azure)",
    company: "SaaS Platform",
    location: "Vancouver, BC",
    workModel: "Hybrid",
    jobType: "Full-time",
    duration: "Permanent",
    payMin: 115,
    payMax: 140,
    payUnit: "K",
    skills: ["Azure", "Terraform", "GitHub Actions", "Kubernetes"],
    specialization: "DevOps",
    postedAt: "2026-05-20",
    summary:
      "Build the platform behind a fast-growing Canadian SaaS. Infra-as-code, CI/CD, and developer productivity work.",
  },
  {
    id: "qrn-007",
    slug: "data-scientist-ml-toronto",
    title: "Senior Data Scientist (ML)",
    company: "Retail Analytics",
    location: "Toronto, ON",
    workModel: "Hybrid",
    jobType: "Full-time",
    duration: "Permanent",
    payMin: 130,
    payMax: 160,
    payUnit: "K",
    skills: ["Python", "PyTorch", "MLOps", "Recommender Systems"],
    specialization: "Data Science",
    postedAt: "2026-05-18",
    summary:
      "Productionize recommender models for a national retailer. Partner with engineering on MLOps and real-time scoring.",
    isFeatured: true,
  },
  {
    id: "qrn-008",
    slug: "ux-designer-product-remote",
    title: "Senior UX Designer",
    company: "Enterprise Product Team",
    location: "Remote · Canada",
    workModel: "Remote",
    jobType: "Contract-to-hire",
    duration: "6 months → perm",
    payMin: 80,
    payMax: 95,
    payUnit: "hr",
    skills: ["Figma", "Design Systems", "Research", "Prototyping"],
    specialization: "UI / UX Design",
    postedAt: "2026-05-15",
    summary:
      "Own end-to-end product UX for a B2B platform. Recent enterprise SaaS experience strongly preferred.",
  },
  {
    id: "qrn-009",
    slug: "agile-project-manager-toronto",
    title: "Agile Project Manager",
    company: "Capital Markets",
    location: "Toronto, ON",
    workModel: "Hybrid",
    jobType: "Full-time",
    duration: "Permanent",
    payMin: 120,
    payMax: 145,
    payUnit: "K",
    skills: ["Scrum", "Jira", "Stakeholder Mgmt", "Regulatory"],
    specialization: "Project Management",
    postedAt: "2026-05-12",
    summary:
      "Run a regulated technology program across multiple capital-markets squads. Strong delivery cadence required.",
  },
  {
    id: "qrn-010",
    slug: "blockchain-engineer-remote",
    title: "Blockchain Engineer",
    company: "Web3 Studio",
    location: "Remote · Canada",
    workModel: "Remote",
    jobType: "Contract",
    duration: "6 months",
    payMin: 110,
    payMax: 140,
    payUnit: "hr",
    skills: ["Solidity", "EVM", "Hardhat", "Smart Contracts"],
    specialization: "Blockchain",
    postedAt: "2026-05-08",
    summary:
      "Ship secure smart contracts for a tokenization platform. Audit-readiness and gas-optimization expertise welcome.",
  },
];

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
  { value: "10+", label: "Years placing IT talent", sub: "Since 2014", icon: "star" },
  { value: "500+", label: "Successful placements", sub: "Since 2014", icon: "briefcase" },
  { value: "48h", label: "Avg. shortlist turnaround", sub: "Qualified candidates", icon: "bolt" },
  { value: "94%", label: "Placement retention", sub: "Year over year", icon: "shield" },
] as const;
