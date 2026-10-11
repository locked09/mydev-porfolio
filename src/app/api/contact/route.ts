import { NextResponse } from "next/server";

type Payload = {
  name?: unknown;
  email?: unknown;
  message?: unknown;
};

type FieldErrors = Partial<Record<"name" | "email" | "message", string>>;

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const asText = (value: unknown) => (typeof value === "string" ? value.trim() : "");

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

  // TODO: deliver the message. Options: Resend, Nodemailer + SMTP,
  // or save it with Prisma and notify yourself.
  console.info("[contact] new message", { name, email, length: message.length });

  return NextResponse.json({ ok: true });
}
