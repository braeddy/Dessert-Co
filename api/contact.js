import { MongoClient } from 'mongodb';
import dotenv from 'dotenv';

dotenv.config();

const { MONGODB_URI, MONGODB_DB } = process.env;

if (!MONGODB_URI) {
  throw new Error('Please define the MONGODB_URI environment variable inside .env');
}

if (!MONGODB_DB) {
  throw new Error('Please define the MONGODB_DB environment variable inside .env');
}

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
