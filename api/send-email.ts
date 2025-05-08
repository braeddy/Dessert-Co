import { Resend } from 'resend';
import type { VercelRequest, VercelResponse } from '@vercel/node';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { name, email, phone, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ message: 'Name, email, and message are required.' });
  }

  try {
    const { data, error } = await resend.emails.send({
      from: 'Contatti Sito <noreply@tuodominio.com>', // Cambia con dominio verificato
      to: ['francesco.frediani@gmail.com'],
      subject: `Nuovo messaggio dal sito - ${name}`,
      html: `
        <h2>Hai ricevuto un nuovo messaggio</h2>
        <p><strong>Nome:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Telefono:</strong> ${phone || 'Non specificato'}</p>
        <p><strong>Messaggio:</strong></p>
        <p>${message}</p>
      `,
    });

    if (error) {
      console.error('Errore Resend:', error);
      return res.status(500).json({ message: 'Errore nell\'invio dell\'email con Resend.' });
    }

    return res.status(200).json({ message: 'Email inviata con successo tramite Resend.' });
  } catch (err) {
    console.error('Errore generale:', err);
    return res.status(500).json({ message: 'Errore imprevisto.' });
  }
}
