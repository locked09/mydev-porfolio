import type {
  ExperienceItem,
  NavItem,
  Profile,
  Project,
  SocialLink,
  StackLayer,
  UdemyCourse,
} from "@/types";

/**
 * All site content lives here.
 * The copy is a starting draft: replace the sample projects, companies,
 * dates, links and email with your own before deploying.
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
  email: "jbellen09@gmail.com", // TODO: your email
  banner: "/images/dsb_banner_blue.png", // TODO: your avatar image
};

export const navItems: NavItem[] = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Work" },
  { id: "experience", label: "Experience" },
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

// Sample projects: replace with your own work.
export const projects: Project[] = [
  {
    slug: "booking-platform",
    title: "Shared-space booking platform",
    year: "2025",
    role: "Lead fullstack developer",
    summary:
      "A reservation system for meeting rooms and sports facilities, with a web dashboard for staff and a mobile app for members. The interface is fully in Japanese.",
    details: [
      "Modelled time-slot availability so double bookings are rejected at the database level, not just in the UI.",
      "Shared TypeScript types between the Next.js web app, the React Native app and the NestJS API in one monorepo.",
      "Built the admin calendar view staff use to approve, move and cancel bookings.",
    ],
    stack: ["Next.js", "React Native", "NestJS", "Prisma", "PostgreSQL"],
    links: [{ label: "View case study", href: "#" }],
  },
  {
    slug: "inventory-dashboard",
    title: "Inventory dashboard for a retail chain",
    year: "2023",
    role: "Fullstack developer",
    summary:
      "Replaced a set of spreadsheets with a live dashboard showing stock levels across branches, with alerts when items run low.",
    details: [
      "Migrated five years of spreadsheet history into a normalised schema.",
      "Cut the weekly stock report from half a day of manual work to an automatic export.",
    ],
    stack: ["Laravel", "React", "MySQL"],
  },
  {
    slug: "clinic-appointments",
    title: "Clinic appointment system",
    year: "2021",
    role: "Backend developer",
    summary:
      "Online booking and SMS reminders for a group of outpatient clinics, built to reduce no-shows.",
    details: [
      "Designed the scheduling rules for doctors who work across multiple branches.",
      "Added reminder jobs with retry handling so a failed SMS never silently disappears.",
    ],
    stack: ["Ruby on Rails", "PostgreSQL", "Sidekiq"],
  },
  {
    slug: "cms-migration",
    title: "Marketing site and CMS migration",
    year: "2019",
    role: "Fullstack developer",
    summary:
      "Moved a slow, plugin-heavy site to a headless CMS with statically generated pages.",
    details: [
      "Kept every old URL working with a redirect map generated from the previous sitemap.",
      "Brought page load on mid-range phones down from around six seconds to under two.",
    ],
    stack: ["Next.js", "Headless CMS", "Vercel"],
  },
];

// Sample timeline: replace companies and dates with your own.
export const experience: ExperienceItem[] = [
  {
    company: "Japanese IT company",
    role: "Fullstack Developer",
    start: "2022",
    end: "Present",
    current: true,
    summary:
      "Building web and mobile products for Japanese clients, from database design to release.",
    highlights: [
      "Own features across Next.js, NestJS and Prisma.",
      "Write the technical specs the team builds from.",
    ],
  },
  {
    company: "Northbay Digital",
    role: "Senior Web Developer",
    start: "2018",
    end: "2022",
    summary: "Led small teams delivering client web apps in Laravel and React.",
    highlights: [
      "Introduced code review and automated tests to the team.",
      "Mentored three junior developers.",
    ],
  },
  {
    company: "Freelance",
    role: "Web Developer",
    start: "2015",
    end: "2018",
    summary: "Built and maintained sites and booking tools for local businesses.",
    highlights: ["Shipped projects in PHP Laravel and Ruby on Rails."],
  },
];

export const socials: SocialLink[] = [
  { label: "GitHub", href: "https://github.com/your-handle" }, // TODO
  { label: "LinkedIn", href: "https://www.linkedin.com/in/your-handle" }, // TODO
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
