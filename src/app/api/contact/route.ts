import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { profile } from "@/data/portfolio";

// Nodemailer needs the Node runtime, not Edge.
export const runtime = "nodejs";

type Payload = {
  name?: unknown;
  email?: unknown;
  message?: unknown;
};

type FieldErrors = Partial<Record<"name" | "email" | "message", string>>;

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const asText = (value: unknown) => (typeof value === "string" ? value.trim() : "");

const escapeHtml = (value: string) =>
  value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");

function getTransport() {
  const user = process.env.GMAIL_USER;
  const pass = process.env.GMAIL_APP_PASSWORD;
  if (!user || !pass) return null;

  return nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: { user, pass },
  });
}

export async function POST(request: Request) {
  let body: Payload;
  try {
    body = (await request.json()) as Payload;
  } catch {
    return NextResponse.json({ error: "The request body must be JSON." }, { status: 400 });
  }

  const name = asText(body.name);
  const email = asText(body.email);
  const message = asText(body.message);

  const errors: FieldErrors = {};
  if (!name) errors.name = "Enter your name.";
  if (!EMAIL_RE.test(email)) errors.email = "Enter an email address like name@example.com.";
  if (message.length < 10) errors.message = "Write at least 10 characters so I know what you need.";
  if (message.length > 5000) errors.message = "Keep the message under 5,000 characters.";

  if (Object.keys(errors).length > 0) {
    return NextResponse.json({ errors }, { status: 422 });
  }

  const transport = getTransport();
  if (!transport) {
    console.error("[contact] GMAIL_USER / GMAIL_APP_PASSWORD are not set");
    return NextResponse.json(
      { error: `The contact form isn't configured yet. Email ${profile.email} directly.` },
      { status: 500 },
    );
  }

  try {
    await transport.sendMail({
      from: `"${name} via portfolio" <${process.env.GMAIL_USER}>`, // Gmail only lets you send as yourself
      to: profile.email,
      replyTo: `"${name}" <${email}>`, // so "Reply" in Gmail goes to the sender
      subject: `Portfolio message from ${name}`,
      text: `From: ${name} <${email}>\n\n${message}`,
      html: `<p><strong>From:</strong> ${escapeHtml(name)} &lt;${escapeHtml(email)}&gt;</p><p>${escapeHtml(message).replace(/\n/g, "<br>")}</p>`,
    });
  } catch (err) {
    console.error("[contact] send failed", err);
    return NextResponse.json(
      { error: `The message didn't send. Try again, or email ${profile.email}.` },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true });
}
