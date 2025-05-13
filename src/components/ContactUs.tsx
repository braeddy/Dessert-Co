import React, { useState } from 'react';
import { Phone, Mail, MapPin, Send } from 'lucide-react';
import Section from '../layout/Section';
import { useTranslation } from 'react-i18next';

const ContactUs: React.FC = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');
    
    try {
      console.log('Sending form data:', formData);
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Errore nell\'invio del messaggio');
      }

      setSubmitted(true);
      setFormData({ name: '', email: '', phone: '', message: '' });
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setSubmitted(false);
      }, 5000);
    } catch (error) {
      setError(error instanceof Error ? error.message : 'Si è verificato un errore inaspettato');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Section id="contact" className="bg-bakery-cream bg-opacity-30 py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4 text-bakery-brown">{t('contact.title')}</h2>
          <div className="w-24 h-1 bg-bakery-pink mx-auto"></div>
          <p className="mt-4 max-w-2xl mx-auto">{t('contact.description')}</p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12">
          <div className="lg:w-1/2">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="font-serif text-2xl font-semibold mb-6 text-bakery-brown">{t('contact.formTitle')}</h3>
              
              {submitted ? (
                <div className="bg-green-50 text-green-700 p-4 rounded-md mb-4">
                  {t('contact.successMessage')}
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  {error && (
                    <div className="bg-red-50 text-red-700 p-4 rounded-md mb-4">
                      {error}
                    </div>
                  )}
                  
                  <div className="mb-4">
                    <label htmlFor="name" className="block text-bakery-brown mb-2">{t('contact.form.name')}</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-bakery-blue"
                    />
                  </div>
                  
                  <div className="mb-4">
                    <label htmlFor="email" className="block text-bakery-brown mb-2">{t('contact.form.email')}</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-bakery-blue"
                    />
                  </div>
                  
                  <div className="mb-4">
                    <label htmlFor="phone" className="block text-bakery-brown mb-2">{t('contact.form.phone')}</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-bakery-blue"
                    />
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="message" className="block text-bakery-brown mb-2">{t('contact.form.message')}</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-bakery-blue"
                    ></textarea>
                  </div>
                  
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-bakery-brown text-white py-3 rounded-md hover:bg-opacity-90 transition-all flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      t('contact.form.sending')
                    ) : (
                      <>
                        <Send size={18} />
                        <span>{t('contact.form.send')}</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
          
          <div className="lg:w-1/2">
            <div className="bg-white p-6 rounded-lg shadow-md h-full">
              <h3 className="font-serif text-2xl font-semibold mb-6 text-bakery-brown">{t('contact.visitTitle')}</h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-bakery-pink bg-opacity-20 rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="text-bakery-brown" size={20} />
                  </div>
                  <div>
                    <h4 className="font-serif font-semibold mb-1">{t('contact.addressTitle')}</h4>
                    <p className="text-gray-700">{t('contact.address')}</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-bakery-blue bg-opacity-20 rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="text-bakery-brown" size={20} />
                  </div>
                  <div>
                    <h4 className="font-serif font-semibold mb-1">{t('contact.phoneTitle')}</h4>
                    <p className="text-gray-700">{t('contact.phone')}</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-bakery-cream bg-opacity-50 rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail className="text-bakery-brown" size={20} />
                  </div>
                  <div>
                    <h4 className="font-serif font-semibold mb-1">{t('contact.emailTitle')}</h4>
                    <p className="text-gray-700">{t('contact.email')}</p>
                  </div>
                </div>
                
                <div className="mt-8">
                  <h4 className="font-serif font-semibold mb-3">{t('contact.hoursTitle')}</h4>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span>{t('contact.hours.weekdays')}</span>
                      <span>{t('contact.hours.weekdaysTime')}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>{t('contact.hours.sunday')}</span>
                      <span>{t('contact.hours.sundayTime')}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>{t('contact.hours.monday')}</span>
                      <span>{t('contact.hours.mondayTime')}</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 h-48 bg-gray-200 rounded-md overflow-hidden">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2893.216833888844!2d10.51723107657259!3d42.92396490276466!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12d5e3b3dd888889%3A0x68b46300db8747d3!2sVia%20Domenico%20Cimarosa%2C%205%2Fa%2C%2057025%20Piombino%20LI!5e0!3m2!1sit!2sit!4v1715644626395!5m2!1sit!2sit" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default ContactUs;