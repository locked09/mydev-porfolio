# Portfolio

Personal portfolio built with Next.js (App Router), TypeScript, Tailwind CSS v4 and Framer Motion.

## Getting started

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # production build
npm run typecheck  # tsc --noEmit
```

## Editing content

Everything shown on the page comes from `src/data/portfolio.ts`: profile, stack layers,
projects, experience and social links. The projects, companies and dates there are samples;
replace them, plus the email and social URLs marked `TODO`, before deploying.

## Structure

```
src/
├── app/
│   ├── layout.tsx            Fonts, metadata, nav + footer shell
│   ├── page.tsx              Composes the sections
│   ├── globals.css           Tailwind v4 import, colour tokens (light + dark)
│   ├── not-found.tsx
│   └── api/contact/route.ts  Validates contact form submissions
├── components/
│   ├── layout/               Navbar (active-section underline, mobile menu), Footer
│   ├── providers/            MotionProvider (respects prefers-reduced-motion)
│   ├── sections/             Hero, About, Skills, Projects, Experience, Contact
│   └── ui/                   Section, SectionHeading, Button, StackDiagram, ProjectRow
├── data/portfolio.ts         All site content
├── hooks/useActiveSection.ts IntersectionObserver for the nav
├── lib/                      animations (variants), tones (layer colours), utils (cn)
└── types/index.ts
```

## Animation

- **Hero**: the stack diagram builds itself on load, data layer first, then API, then interface.
- **Navbar**: the underline slides to the section you're reading (`layoutId`).
- **Work**: project rows expand and collapse with `AnimatePresence`.
- **Experience**: the timeline line draws as you scroll (`useScroll` + `useSpring`).
- **Contact**: the form swaps to a confirmation when the message is sent.

All motion is turned off for visitors with reduced motion enabled.

## Sending contact messages

`src/app/api/contact/route.ts` validates input and logs it. To actually deliver messages,
replace the `TODO` with Resend, Nodemailer, or a Prisma write plus a notification.
