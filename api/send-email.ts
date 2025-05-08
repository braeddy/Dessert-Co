import type { VercelRequest, VercelResponse } from '@vercel/node';
import nodemailer from 'nodemailer';

// Configurazione del trasportatore email
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  },
});

// Definizione della funzione handler come export default
const handler = async (req: VercelRequest, res: VercelResponse) => {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const { name, email, phone, message } = req.body;

    // Validazione dei campi richiesti
    if (!name || !email || !message) {
      return res.status(400).json({ message: 'Name, email and message are required' });
    }

    // Configurazione dell'email
    const mailOptions = {
      from: process.env.EMAIL_USER,
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
    };

    // Invio dell'email
    await transporter.sendMail(mailOptions);

    return res.status(200).json({ message: 'Email inviata con successo' });
  } catch (error) {
    console.error('Errore nell\'invio dell\'email:', error);
    return res.status(500).json({ message: 'Errore nell\'invio dell\'email' });
  }
};

export default handler;