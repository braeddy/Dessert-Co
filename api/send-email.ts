import { Resend } from 'resend';
import type { VercelRequest, VercelResponse } from '@vercel/node';

const resend = new Resend(process.env.RESEND_API_KEY);

const handler = async (request: VercelRequest, response: VercelResponse) => {
  if (request.method !== 'POST') {
    return response.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const { name, email, phone, message } = request.body;

    if (!name || !email || !message) {
      return response.status(400).json({ message: 'Name, email and message are required' });
    }

    const { data, error } = await resend.emails.send({
      from: 'Sito Dessert <onboarding@resend.dev>',
      to: 'francesco.frediani@gmail.com',
      subject: `Nuovo messaggio dal sito - ${name}`,
      html: `
        <h2>Nuovo messaggio dal form di contatto</h2>
        <p><strong>Nome:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Telefono:</strong> ${phone || 'Non specificato'}</p>
        <p><strong>Messaggio:</strong></p>
        <p>${message}</p>
      `
    });

    if (error) {
      console.error('Errore nell\'invio dell\'email:', error);
      return response.status(500).json({ message: 'Errore nell\'invio dell\'email' });
    }

    return response.status(200).json({ message: 'Email inviata con successo' });
  } catch (error) {
    console.error('Errore nell\'invio dell\'email:', error);
    return response.status(500).json({ message: 'Errore nell\'invio dell\'email' });
  }
};

export default handler;