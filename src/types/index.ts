export type Tone = "kihada" | "indigo" | "ink" | "line";

export type NavItem = {
  id: string;
  label: string;
};

export type Fact = {
  label: string;
  value: string;
};

export type Profile = {
  name: string;
  shortName: string;
  /** How the name breaks across lines in the hero headline */
  nameLines: string[];
  role: string;
  experience: string;
  intro: string;
  about: string[];
  facts: Fact[];
  email: string;
  banner: string;
};

export type StackLayer = {
  id: string;
  name: string;
  summary: string;
  tools: string[];
  tone: Tone;
  /** Shown in the animated hero diagram */
  inHero: boolean;
};

export type ProjectLink = {
  label: string;
  href: string;
};

export type Project = {
  slug: string;
  title: string;
  year: string;
  role: string;
  summary: string;
  details: string[];
  stack: string[];
  links?: ProjectLink[];
};

export type ExperienceItem = {
  company: string;
  role: string;
  start: string;
  end: string;
  current?: boolean;
  summary: string;
  highlights: string[];
};

export type SocialLink = {
  label: string;
  href: string;
};

export interface UdemyCourse {
  title: string;
  instructor: string;
  organization?: string;
  layer: StackLayer["id"];
  certificateUrl?: string; // optional link to the Udemy certificate
}

export type SideProjectKind = "freelance" | "personal";

export interface SideProject {
  title: string;
  kind: SideProjectKind;
  url: string;
  summary: string;
  stack: string[];
  year?: string;
}