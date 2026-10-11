"use client";

import { useState, type FormEvent } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Check } from "lucide-react";
import { profile } from "@/data/portfolio";
import { easeOutQuart } from "@/lib/animations";
import { cn } from "@/lib/utils";
import { buttonClasses } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";

type Status = "idle" | "sending" | "sent" | "error";
type FieldName = "name" | "email" | "message";
type FieldErrors = Partial<Record<FieldName, string>>;

type ApiResponse = {
  ok?: boolean;
  error?: string;
  errors?: FieldErrors;
};

export function Contact() {
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<FieldErrors>({});
  const [formError, setFormError] = useState("");
  const [sentTo, setSentTo] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const fd = new FormData(form);
    const payload = {
      name: String(fd.get("name") ?? ""),
      email: String(fd.get("email") ?? ""),
      message: String(fd.get("message") ?? ""),
    };

    setStatus("sending");
    setErrors({});
    setFormError("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data: ApiResponse = await res.json().catch(() => ({}));

      if (res.ok) {
        setSentTo(payload.email);
        setStatus("sent");
        form.reset();
        return;
      }

      if (data.errors) setErrors(data.errors);
      setFormError(
        data.error ??
          (data.errors
            ? "Fix the highlighted fields, then send again."
            : `The message didn't send. Try again, or email ${profile.email}.`),
      );
      setStatus("error");
    } catch {
      setFormError(
        `The message didn't send because the connection dropped. Check your connection and try again, or email ${profile.email}.`,
      );
      setStatus("error");
    }
  }

  return (
    <Section id="contact" className="grid gap-12 lg:grid-cols-12 lg:gap-10">
      <div className="lg:col-span-5">
        <SectionHeading
          title="Contact"
          description="Hiring, starting a project, or curious about something I built? Send a note here or email me directly."
        />
        <a
          href={`mailto:${profile.email}`}
          className="mt-8 inline-block font-display text-2xl font-semibold tracking-tight underline decoration-kihada decoration-2 underline-offset-[6px] hover:text-indigo"
        >
          {profile.email}
        </a>
      </div>

      <div className="lg:col-span-6 lg:col-start-7">
        <AnimatePresence mode="wait" initial={false}>
          {status === "sent" ? (
            <motion.div
              key="sent"
              role="status"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.35, ease: easeOutQuart }}
              className="rounded-lg border border-line bg-surface p-8"
            >
              <motion.span
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 400, damping: 18, delay: 0.1 }}
                className="grid size-11 place-items-center rounded-full bg-kihada text-[#15233f]"
              >
                <Check aria-hidden className="size-5" strokeWidth={2.5} />
              </motion.span>
              <h3 className="mt-5 font-display text-2xl font-semibold tracking-tight">Message sent</h3>
              <p className="mt-2 text-muted">
                Thanks for writing. I&apos;ll reply to {sentTo || "your email"}.
              </p>
              <button
                type="button"
                onClick={() => setStatus("idle")}
                className={cn(buttonClasses("outline"), "mt-8")}
              >
                Send another message
              </button>
            </motion.div>
          ) : (
            <motion.form
              key="form"
              noValidate
              onSubmit={handleSubmit}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.3, ease: easeOutQuart }}
              className="space-y-6"
            >
              <div className="grid gap-6 sm:grid-cols-2">
                <Field label="Name" name="name" autoComplete="name" error={errors.name} />
                <Field label="Email" name="email" type="email" autoComplete="email" error={errors.email} />
              </div>
              <Field label="Message" name="message" multiline error={errors.message} />

              {formError ? (
                <p role="alert" className="text-sm text-danger">
                  {formError}
                </p>
              ) : null}

              <button
                type="submit"
                disabled={status === "sending"}
                className={cn(buttonClasses("solid"), "disabled:cursor-wait disabled:opacity-70")}
              >
                {status === "sending" ? "Sending…" : "Send message"}
              </button>
            </motion.form>
          )}
        </AnimatePresence>
      </div>
    </Section>
  );
}

type FieldProps = {
  label: string;
  name: FieldName;
  type?: string;
  autoComplete?: string;
  multiline?: boolean;
  error?: string;
};

function Field({ label, name, type = "text", autoComplete, multiline = false, error }: FieldProps) {
  const id = `contact-${name}`;
  const errorId = `${id}-error`;
  const inputClass = cn(
    "mt-2 w-full rounded-md border bg-surface px-4 py-3 text-base text-ink outline-none transition-colors focus:border-indigo",
    error ? "border-danger" : "border-line",
  );

  return (
    <div>
      <label htmlFor={id} className="text-sm font-medium">
        {label}
      </label>
      {multiline ? (
        <textarea
          id={id}
          name={name}
          rows={6}
          required
          aria-invalid={Boolean(error)}
          aria-describedby={error ? errorId : undefined}
          className={cn(inputClass, "resize-y")}
        />
      ) : (
        <input
          id={id}
          name={name}
          type={type}
          required
          autoComplete={autoComplete}
          aria-invalid={Boolean(error)}
          aria-describedby={error ? errorId : undefined}
          className={inputClass}
        />
      )}
      {error ? (
        <p id={errorId} className="mt-2 text-sm text-danger">
          {error}
        </p>
      ) : null}
    </div>
  );
}
