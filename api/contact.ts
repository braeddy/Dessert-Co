import type { VercelRequest, VercelResponse } from '@vercel/node';
import { Resend } from 'resend';

// Variabili d'ambiente (da impostare su Vercel → Settings → Environment Variables)
// RESEND_API_KEY: chiave API di Resend
// EMAIL_TO:       indirizzo della pasticceria che riceve i messaggi
// EMAIL_FROM:     mittente, es. "Sito Dessert&Co <sito@dominio-verificato.it>"
const { RESEND_API_KEY, EMAIL_TO, EMAIL_FROM = 'Sito Dessert&Co <onboarding@resend.dev>' } = process.env;

const MAX_LENGTH = { name: 100, email: 200, phone: 30, message: 5000 };
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Evita che il contenuto inserito dall'utente venga interpretato come HTML nella mail
const escapeHtml = (value: string) =>
  value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');

const asString = (value: unknown) => (typeof value === 'string' ? value.trim() : '');

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ message: 'Method not allowed' });
  }

  if (!RESEND_API_KEY || !EMAIL_TO) {
    console.error('Configurazione mancante: impostare RESEND_API_KEY ed EMAIL_TO');
    return res.status(500).json({ message: 'Server not configured' });
  }

  const body = (req.body ?? {}) as Record<string, unknown>;

  // Campo trappola per i bot: invisibile agli utenti, se compilato fingiamo il successo
  if (asString(body.website)) {
    return res.status(200).json({ success: true });
  }

  const name = asString(body.name);
  const email = asString(body.email);
  const phone = asString(body.phone);
  const message = asString(body.message);

  if (!name || !email || !message) {
    return res.status(400).json({ message: 'Missing required fields' });
  }
  if (!EMAIL_REGEX.test(email)) {
    return res.status(400).json({ message: 'Invalid email address' });
  }
  if (
    name.length > MAX_LENGTH.name ||
    email.length > MAX_LENGTH.email ||
    phone.length > MAX_LENGTH.phone ||
    message.length > MAX_LENGTH.message
  ) {
    return res.status(400).json({ message: 'Field too long' });
  }

  const sentAt = new Date().toLocaleString('it-IT', { timeZone: 'Europe/Rome' });

  try {
    const resend = new Resend(RESEND_API_KEY);
    const { error } = await resend.emails.send({
      from: EMAIL_FROM,
      to: EMAIL_TO.split(',').map((address) => address.trim()),
      replyTo: email, // Rispondendo alla mail si scrive direttamente al cliente
      subject: `Nuova richiesta dal sito da ${name}`,
      html: `
        <h2>Nuova richiesta di contatto dal sito</h2>
        <p><strong>Nome:</strong> ${escapeHtml(name)}</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        <p><strong>Telefono:</strong> ${phone ? escapeHtml(phone) : 'Non fornito'}</p>
        <p><strong>Messaggio:</strong></p>
        <p style="white-space: pre-wrap">${escapeHtml(message)}</p>
        <p><em>Inviato il ${sentAt}</em></p>
      `,
      text: [
        'Nuova richiesta di contatto dal sito',
        `Nome: ${name}`,
        `Email: ${email}`,
        `Telefono: ${phone || 'Non fornito'}`,
        '',
        message,
        '',
        `Inviato il ${sentAt}`,
      ].join('\n'),
    });

    if (error) {
      console.error('Errore Resend:', error);
      return res.status(502).json({ message: 'Email could not be sent' });
    }

    return res.status(200).json({ success: true });
  } catch (err) {
    console.error('Errore durante l\'invio della mail:', err);
    return res.status(500).json({ message: 'Email could not be sent' });
  }
}
