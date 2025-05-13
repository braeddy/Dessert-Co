import { MongoClient } from 'mongodb';
import dotenv from 'dotenv';
import { Resend } from 'resend';

dotenv.config();

const { MONGODB_URI, MONGODB_DB, RESEND_API_KEY, EMAIL_TO } = process.env;

if (!MONGODB_URI) {
  throw new Error('Please define the MONGODB_URI environment variable inside .env');
}

if (!MONGODB_DB) {
  throw new Error('Please define the MONGODB_DB environment variable inside .env');
}

if (!RESEND_API_KEY) {
  throw new Error('Please define the RESEND_API_KEY environment variable inside .env');
}

if (!EMAIL_TO) {
  throw new Error('Please define the EMAIL_TO environment variable inside .env');
}

// Inizializza Resend
const resend = new Resend(RESEND_API_KEY);

/**
 * API handler for contact form submissions
 * @param {import('@vercel/node').VercelRequest} req
 * @param {import('@vercel/node').VercelResponse} res
 */
export default async function handler(req, res) {
  console.log('API Handler started');
  console.log('Request method:', req.method);
  
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    console.log('Request body:', req.body);
    const { name, email, phone, message } = req.body;

    // Validazione
    if (!name || !email || !message) {
      return res.status(400).json({ message: 'Missing required fields' });
    }

    console.log('Attempting MongoDB connection...');
    
    // Connessione a MongoDB
    const client = await MongoClient.connect(MONGODB_URI)
      .catch(err => {
        console.error('MongoDB connection error:', err);
        throw err;
      });
      
    const db = client.db(MONGODB_DB);
    console.log('Connected to MongoDB successfully');

    // Salvataggio del messaggio
    const result = await db.collection('contacts').insertOne({
      name,
      email,
      phone,
      message,
      createdAt: new Date()
    });
    
    console.log('Contatto salvato nel database, invio email...');
    
    // Invio email tramite Resend
    try {
      const emailResponse = await resend.emails.send({
        from: 'Richiesta Contatto <onboarding@resend.dev>',
        to: EMAIL_TO,
        reply_to: email, // L'utente può rispondere direttamente alla persona che ha compilato il modulo
        subject: `Nuova richiesta da ${name}`,
        html: `
          <h2>Nuova richiesta di contatto dal sito</h2>
          <p><strong>Nome:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Telefono:</strong> ${phone || 'Non fornito'}</p>
          <p><strong>Messaggio:</strong></p>
          <p>${message}</p>
          <p><em>Inviato il: ${new Date().toLocaleString('it-IT')}</em></p>
        `,
      });
      
      console.log('Email inviata con successo:', emailResponse);
    } catch (emailError) {
      console.error('Errore durante l\'invio dell\'email:', emailError);
      // Non fallire l'intera operazione se l'email non viene inviata
      // Il contatto è già salvato nel database
    }

    await client.close();

    return res.status(200).json({ 
      success: true, 
      messageId: result.insertedId 
    });

  } catch (error) {
    console.error('Detailed error:', error);
    return res.status(500).json({ 
      message: 'Error saving contact message',
      error: error.message || 'Unknown error occurred',
      timestamp: new Date().toISOString()
    });
  }
}
