import { Resend } from 'resend';

// Inizializza Resend con la tua API Key
const resend = new Resend(process.env.RESEND_API_KEY);

const handler = async (request, response) => {
  if (request.method !== 'POST') {
    return response.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const { name, email, phone, message } = request.body;

    // Verifica che i campi principali siano presenti
    if (!name || !email || !message) {
      return response.status(400).json({ message: 'Name, email, and message are required' });
    }

    // Prepara il contenuto dell'email
    const emailContent = `
      <h2>Nuovo messaggio dal form di contatto</h2>
      <p><strong>Nome:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Telefono:</strong> ${phone || 'Non specificato'}</p>
      <p><strong>Messaggio:</strong></p>
      <p>${message}</p>
    `;

    // Verifica che la variabile EMAIL_USER esista
    if (!process.env.EMAIL_USER) {
      throw new Error('Variabile di ambiente EMAIL_USER non definita');
    }

    // Invia l'email con Resend usando la corretta sintassi async/await
    const responseEmail = await resend.emails.send({
      from: process.env.EMAIL_USER,  // Questa variabile deve essere definita nel .env
      to: 'francesco.frediani@gmail.com',
      subject: `Nuovo messaggio dal sito - ${name}`,
      html: emailContent,
    });

    // Risposta di successo
    return response.status(200).json({ message: 'Email inviata con successo' });

  } catch (error) {
    console.error('Errore nell\'invio dell\'email:', error);
    return response.status(500).json({ message: 'Errore nell\'invio dell\'email' });
  }
};

export default handler;


