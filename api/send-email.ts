import { Resend } from 'resend';

export const config = {
  runtime: 'edge',
};

export default async function handler(
  request: Request
): Promise<Response> {
  if (request.method !== 'POST') {
    return new Response(JSON.stringify({ message: 'Method not allowed' }), {
      status: 405,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  try {
    const resend = new Resend(process.env.RESEND_API_KEY);
    const body = await request.json();
    const { name, email, phone, message } = body;

    if (!name || !email || !message) {
      return new Response(JSON.stringify({ message: 'Name, email and message are required' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
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
      return new Response(JSON.stringify({ message: 'Errore nell\'invio dell\'email' }), {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    return new Response(JSON.stringify({ message: 'Email inviata con successo' }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Errore nell\'invio dell\'email:', error);
    return new Response(JSON.stringify({ message: 'Errore nell\'invio dell\'email' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}