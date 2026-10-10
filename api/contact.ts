import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

// Keep in sync with the maxLength attributes in components/Contact.tsx.
const LIMITS = { name: 100, company: 120, email: 254, message: 5000 } as const;

// Pragmatic format check: one @, no spaces, a dot in the domain. Resend does the
// real validation; this keeps junk and header-injection attempts out.
const EMAIL_PATTERN = /^[^\s@<>"',;]+@[^\s@<>"',;]+\.[^\s@<>"',;]{2,}$/;

const ESCAPES: Record<string, string> = {
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;',
  '"': '&quot;',
  "'": '&#39;',
};

const escapeHtml = (value: string): string => value.replace(/[&<>"']/g, (ch) => ESCAPES[ch]);

// Subjects and names must stay on one line.
const oneLine = (value: string): string => value.replace(/[\r\n\t]+/g, ' ').trim();

const json = (body: Record<string, unknown>, status: number) =>
  new Response(JSON.stringify(body), { status, headers: { 'Content-Type': 'application/json' } });

const asTrimmedString = (value: unknown): string | null =>
  typeof value === 'string' ? value.trim() : null;

export default async function handler(req: Request) {
  if (req.method !== 'POST') {
    return json({ error: 'Method not allowed' }, 405);
  }

  try {
    const body = await req.json();

    // Honeypot: bots fill the hidden field. Pretend success and send nothing.
    if (body?.website) {
      return json({ success: true }, 200);
    }

    const name = asTrimmedString(body?.name);
    const email = asTrimmedString(body?.email);
    const message = asTrimmedString(body?.message);
    const company = body?.company == null || body.company === '' ? '' : asTrimmedString(body.company);

    if (name === null || email === null || message === null || company === null) {
      return json({ error: 'Invalid fields' }, 400);
    }
    if (!name || !email || !message) {
      return json({ error: 'Missing required fields' }, 400);
    }
    if (
      name.length > LIMITS.name ||
      company.length > LIMITS.company ||
      email.length > LIMITS.email ||
      message.length > LIMITS.message
    ) {
      return json({ error: 'A field is too long' }, 400);
    }
    if (!EMAIL_PATTERN.test(email)) {
      return json({ error: 'Invalid email address' }, 400);
    }

    const safeName = escapeHtml(oneLine(name));
    const safeCompany = escapeHtml(oneLine(company));
    const safeEmail = escapeHtml(email);
    const safeMessage = escapeHtml(message).replace(/\r?\n/g, '<br>');

    const { error } = await resend.emails.send({
      from: 'HumanBased Contact <support@humanbased.org>',
      to: 'support@humanbased.org',
      replyTo: email,
      subject: `New message from ${oneLine(name)}${company ? ' at ' + oneLine(company) : ''}`,
      html: `
        <h2>New contact form submission</h2>
        <p><strong>Name:</strong> ${safeName}</p>
        ${company ? `<p><strong>Company:</strong> ${safeCompany}</p>` : ''}
        <p><strong>Email:</strong> ${safeEmail}</p>
        <p><strong>Message:</strong></p>
        <p>${safeMessage}</p>
      `,
    });

    if (error) {
      console.error('Resend error:', error);
      return json({ error: 'Failed to send email' }, 500);
    }

    return json({ success: true }, 200);
  } catch (error) {
    console.error('Contact handler error:', error);
    return json({ error: 'Failed to send email' }, 500);
  }
}

export const config = { runtime: 'edge' };
