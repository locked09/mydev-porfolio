import type {
  ExperienceItem,
  NavItem,
  Profile,
  Project,
  SideProject,
  SocialLink,
  StackLayer,
  UdemyCourse,
} from "@/types";

/**
 * All site content lives here.
 */

export const profile: Profile = {
  name: "Diosdado S. Bellen Jr.",
  shortName: "Diosdado Bellen",
  nameLines: ["Diosdado", "Bellen Jr."],
  role: "Fullstack web developer",
  experience: "10+ years",
  intro:
    "I build web applications end to end: the database schema, the API in front of it, and the screens people use every day. Right now that means React, Next.js and NestJS at a Japanese IT company.",
  about: [
    "I've spent more than ten years shipping web apps, first in PHP Laravel and Ruby on Rails, and these days in TypeScript across the whole stack.",
    "Most days I work in Next.js with the App Router, NestJS and Prisma. I care about clear data models, predictable APIs, and interfaces that stay fast on the phones people actually own.",
    "Working with a Japanese team, much of the job is careful communication: written specs, edge cases noted before they become bugs, and handover notes the next developer can pick up without a meeting.",
  ],
  facts: [
    { label: "Experience", value: "10+ years" },
    { label: "Currently", value: "Fullstack Developer at a Japanese IT company" },
    { label: "Main stack", value: "React, Next.js, TypeScript, NestJS, Prisma" },
    { label: "Also fluent in", value: "PHP Laravel, Ruby on Rails" },
  ],
  email: "jbellen09@gmail.com",
  banner: "/images/dsb_banner_blue.png",
};

export const navItems: NavItem[] = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Work" },
  { id: "experience", label: "Experience" },
  { id: "side-projects", label: "Freelance & Personal" },
  { id: "courses", label: "Courses" },
  { id: "contact", label: "Contact" },
];

/** Ordered top to bottom: the way the stack reads in the hero diagram */
export const stackLayers: StackLayer[] = [
  {
    id: "interface",
    name: "Interface",
    summary: "The screens people tap, type and wait on.",
    tools: ["React", "Next.js App Router", "TypeScript", "Tailwind CSS", "Framer Motion", "React Native"],
    tone: "kihada",
    inHero: true,
  },
  {
    id: "api",
    name: "API",
    summary: "Business rules, auth and third-party integrations.",
    tools: ["Node.js", "NestJS", "PHP Laravel", "Ruby on Rails", "REST", "Webhooks"],
    tone: "indigo",
    inHero: true,
  },
  {
    id: "data",
    name: "Data",
    summary: "Schemas, migrations and the queries behind every page.",
    tools: ["Prisma", "PostgreSQL", "MySQL", "Redis"],
    tone: "ink",
    inHero: true,
  },
  {
    id: "tooling",
    name: "Tooling",
    summary: "What gets the other three layers built and shipped.",
    tools: ["Git", "Docker", "GitHub Actions", "Vercel", "AI-assisted coding"],
    tone: "line",
    inHero: false,
  },
];

/**
 * Projects, newest first, grouped by the company they were built for.
 * Stacks marked TODO are my best guess from the era and company: confirm them.
 */
export const projects: Project[] = [
  // GSS Lab. Inc. — Full-Stack Developer, Aug 2023 – Jul 2026
  {
    slug: "space-reserve",
    title: "Space Reserve",
    year: "2023–2026",
    role: "Full-Stack Developer · GSS Lab. Inc.",
    summary:
      "An online booking system that helps users find and reserve business establishments across Japan.",
    details: [
      "Google Maps integration so users can search and browse venues by location.",
      "Web dashboard and mobile app sharing one TypeScript codebase.",
    ],
    stack: ["Next.js", "React Native", "NestJS", "Prisma", "PostgreSQL", "Google Maps API"],
  },
  {
    slug: "affiliate-marketing-system",
    title: "Affiliate Marketing System",
    year: "2023–2026",
    role: "Full-Stack Developer · GSS Lab. Inc.",
    summary:
      "A web application that supports and promotes affiliate marketing for an NFT marketplace focused on digital currencies.",
    details: [
      "Tracks referrals and affiliate activity for marketplace partners.",
    ],
    stack: ["Next.js", "NestJS", "Prisma", "PostgreSQL"], // TODO: confirm
  },
  {
    slug: "entame-choice",
    title: "Entame-Choice.com",
    year: "2023–2026",
    role: "Full-Stack Developer · GSS Lab. Inc.",
    summary:
      "A platform for Japanese artists to manage online and in-venue lessons, as well as event reservations for theaters, orchestras and concerts.",
    details: [
      "Lesson scheduling for both online sessions and physical venues.",
      "Event reservation flow for theaters, orchestras and concerts.",
    ],
    stack: ["Next.js", "NestJS", "Prisma", "PostgreSQL"], // TODO: confirm
    links: [{ label: "Visit site", href: "https://entame-choice.com" }],
  },

  // Metromart Inc. — Mid React Engineer, Oct 2022 – Jul 2023
  {
    slug: "merchant-dashboard",
    title: "Merchant Dashboard",
    year: "2022–2023",
    role: "Mid React Engineer · Metromart Inc.",
    summary:
      "A web application for managing job orders and product inventory across affiliated stores.",
    details: [
      "Frontend built with ReactJS and TypeScript on top of a Ruby on Rails backend.",
    ],
    stack: ["React", "TypeScript", "Ruby on Rails"],
  },

  // Squadzip — Application Developer, Jun 2021 – Oct 2022
  {
    slug: "squadzip",
    title: "Squadzip.com",
    year: "2021–2022",
    role: "Application Developer · Squadzip",
    summary:
      "A next-generation business development platform for Sales and Operations teams.",
    details: [
      "Built with ReactJS and Redux on the frontend and Ruby on Rails on the backend.",
    ],
    stack: ["React", "Redux", "Ruby on Rails"],
    links: [{ label: "Visit site", href: "https://squadzip.com" }],
  },

  // Security Bank Corporation — Developer, Jun 2018 – Feb 2021
  {
    slug: "salary-advance-checker",
    title: "Salary Advance Application Checker",
    year: "2018–2021",
    role: "Developer · Security Bank Corporation",
    summary:
      "An automated web application for processing personal loan requests submitted by clients via SMS or through the Security Bank website.",
    details: [
      "Accepts applications from two channels, SMS and the bank website, into one processing flow.",
    ],
    stack: ["PHP Laravel", "MySQL"], // TODO: confirm
  },
  {
    slug: "online-client-requisition",
    title: "Online Client Requisition Template System",
    year: "2018–2021",
    role: "Developer · Security Bank Corporation",
    summary:
      "A system for managing Security Bank payroll applications submitted by clients.",
    details: [
      "Templated requisition forms so client submissions arrive in a consistent format.",
    ],
    stack: ["PHP Laravel", "MySQL"], // TODO: confirm
  },

  // MyClick Technologies Inc. — Web Developer, May 2015 – Jun 2018
  {
    slug: "trip-ticket-portal",
    title: "Trip Ticket Portal",
    year: "2015–2018",
    role: "Web Developer · MyClick Technologies Inc.",
    summary:
      "A web application for FamilyMart Inc. that lets store personnel create digitally-invoiced goods orders and manage warehouse deliveries.",
    details: [
      "Digital invoicing replaced paper goods orders between stores and the warehouse.",
    ],
    stack: ["PHP Laravel", "MySQL"], // TODO: confirm
  },
  {
    slug: "inventory-management-system",
    title: "Inventory Management System",
    year: "2015–2018",
    role: "Web Developer · MyClick Technologies Inc.",
    summary:
      "An application for FamilyMart Inc. convenience stores to manage inventory and generate sales reports.",
    details: [
      "Stock tracking and sales reporting per store.",
    ],
    stack: ["PHP Laravel", "MySQL"], // TODO: confirm
  },
];

export const experience: ExperienceItem[] = [
  {
    company: "GSS Lab. Inc.",
    role: "Full-Stack Developer",
    start: "Aug 2023",
    end: "Jul 2026",
    summary:
      "Built web and mobile products for the Japanese market: Space Reserve, an NFT-marketplace affiliate system, and Entame-Choice.com.",
    highlights: [
      "Owned features across Next.js, NestJS and Prisma, from database design to release.",
      "Makati, Metro Manila",
    ],
  },
  {
    company: "Metromart Inc.",
    role: "Mid React Engineer",
    start: "Oct 2022",
    end: "Jul 2023",
    summary:
      "Built the Merchant Dashboard for managing job orders and inventory across affiliated stores.",
    highlights: ["ReactJS + TypeScript frontend on a Ruby on Rails backend.", "Makati, Metro Manila"],
  },
  {
    company: "Squadzip",
    role: "Application Developer",
    start: "Jun 2021",
    end: "Oct 2022",
    summary: "Developed Squadzip.com, a business development platform for Sales and Operations teams.",
    highlights: ["ReactJS, Redux and Ruby on Rails.", "Bangkal, Makati City"],
  },
  {
    company: "Security Bank Corporation",
    role: "Developer",
    start: "Jun 2018",
    end: "Feb 2021",
    summary:
      "Built internal tools for loan processing and payroll requisitions.",
    highlights: [
      "Salary Advance Application Checker and the Online Client Requisition Template System.",
      "Makati City",
    ],
  },
  {
    company: "MyClick Technologies Inc.",
    role: "Web Developer",
    start: "May 2015",
    end: "Jun 2018",
    summary: "Built store-operations tools for FamilyMart Inc.",
    highlights: ["Trip Ticket Portal and an Inventory Management System.", "Makati City"],
  },
];

export const socials: SocialLink[] = [
  { label: "GitHub", href: "https://github.com/locked09" }, // TODO
  { label: "LinkedIn", href: "https://www.linkedin.com/in/diosdado-bellen-jr-021545159" }, // TODO
];

/** Completed Udemy courses, each tagged with the stack layer it relates to */
export const udemyCourses: UdemyCourse[] = [
  {
    title: "Advanced CSS and Sass: Flexbox, Grid, Animations and More!",
    instructor: "Jonas Schmedtmann",
    layer: "interface",
  },
  {
    title: "Next.js Projects – 9 Projects (Instagram, Google and More)",
    instructor: "Dr. Sahand Ghavidel",
    layer: "interface",
  },
  {
    title: "The Complete React Native + Hooks Course",
    instructor: "Stephen Grider",
    layer: "interface",
  },
  {
    title: "NodeJS – The Complete Guide (MVC, REST APIs, GraphQL, Deno)",
    instructor: "Maximilian Schwarzmüller",
    organization: "Academind",
    layer: "api",
  },
  {
    title: "NestJS Zero to Hero – Modern TypeScript Backend Development",
    instructor: "Ariel Weinberger",
    layer: "api",
  },
  {
    title: "SQL and PostgreSQL – The Complete Developer's Guide",
    instructor: "Stephen Grider",
    layer: "data",
  },
  {
    title: "Docker & Kubernetes: The Practical Guide",
    instructor: "Maximilian Schwarzmüller",
    organization: "Academind",
    layer: "tooling",
  },
  {
    title: "GitHub Actions – The Complete Guide",
    instructor: "Maximilian Schwarzmüller",
    organization: "Academind",
    layer: "tooling",
  },
  {
    title: "Ultimate AWS Certified Cloud Practitioner CLF-C02 & Certified Solutions Architect",
    instructor: "Stéphane Maarek",
    layer: "tooling",
  },
];

/** Freelance and personal work that's live on the web */
export const sideProjects: SideProject[] = [
  {
    title: "ICON CLINIC",
    kind: "freelance",
    url: "https://www.icon-clinic.com",
    summary:
      "Marketing site for a cosmetic surgery clinic in Shibuya, Tokyo: treatment menus with pricing, doctor profile, case gallery, columns and online reservation.",
    stack: ["Next.js", "TypeScript", "Vercel"], // TODO: confirm
    year: "2024",
  },
  {
    title: "Natours",
    kind: "personal",
    url: "https://project-natours.vercel.app",
    summary:
      "Landing page for a fictional tour company, built to practise advanced CSS: animations, custom grid, and a pure-CSS booking popup.",
    stack: ["HTML", "Sass", "CSS Grid"],
  },
  {
    title: "ExpenseTracker AI",
    kind: "personal",
    url: "https://expense-tracker-app-nine-orpin.vercel.app",
    summary:
      "Expense tracker with automatic categorisation, spending insights and a dashboard, with an AI assistant you can ask about your own spending.",
    stack: ["Next.js", "TypeScript", "AI"], // TODO: confirm
  },
];