import { ButtonLink } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <section className="mx-auto flex min-h-[70dvh] max-w-6xl flex-col justify-center px-5 py-24 sm:px-8">
      <p className="text-muted">Error 404</p>
      <h1 className="mt-3 font-display text-5xl font-bold tracking-tight sm:text-6xl">
        This page doesn&apos;t exist.
      </h1>
      <p className="mt-5 max-w-lg text-lg text-muted">
        The link may be old or mistyped. Everything on this site lives on the homepage.
      </p>
      <div className="mt-10">
        <ButtonLink href="/">Go to the homepage</ButtonLink>
      </div>
    </section>
  );
}
