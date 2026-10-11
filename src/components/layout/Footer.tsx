import { profile, socials } from "@/data/portfolio";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-5 py-10 sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <p className="text-sm text-muted">
          © {year} {profile.name}. Built with Next.js, Tailwind CSS and Framer Motion.
        </p>
        <ul className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
          {socials.map((social) => (
            <li key={social.label}>
              <a
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="underline decoration-line underline-offset-4 hover:decoration-ink"
              >
                {social.label}
              </a>
            </li>
          ))}
          <li>
            <a href="#top" className="underline decoration-line underline-offset-4 hover:decoration-ink">
              Back to top
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
