import React, { useState } from 'react';
import { Phone, Mail, MapPin, Send, Clock, CheckCircle2, AlertCircle, Navigation, Loader2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import Section from '../layout/Section';
import Reveal from './Reveal';
import { useTranslation } from 'react-i18next';
import { contactInfo } from '../constants';
import mapVariants from '../assets/images/map.webp?w=640;1280&format=webp&as=metadata';
import { toResponsive } from '../utils/responsiveImage';

const mapImage = toResponsive(mapVariants);

interface FieldProps {
  id: 'name' | 'email' | 'phone' | 'message';
  type?: string;
  required?: boolean;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  label: string;
  className?: string;
}

// Campo con etichetta flottante
const Field: React.FC<FieldProps> = ({ id, type = 'text', required, value, onChange, label, className = '' }) => {
  const shared =
    'peer w-full rounded-2xl border border-bakery-brown/15 bg-bakery-ivory/60 px-5 pb-2.5 pt-6 text-bakery-cocoa placeholder-transparent transition-all focus:border-bakery-rose focus:bg-white focus:outline-none focus:ring-4 focus:ring-bakery-pink/60';

  return (
    <div className={`relative ${className}`}>
      {id === 'message' ? (
        <textarea id={id} name={id} value={value} onChange={onChange} required={required} rows={7} placeholder={label} className={`${shared} resize-none`} />
      ) : (
        <input id={id} name={id} type={type} value={value} onChange={onChange} required={required} placeholder={label} className={shared} />
      )}
      <label
        htmlFor={id}
        className="pointer-events-none absolute left-5 top-2 text-xs font-medium text-bakery-brown/60 transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:text-xs peer-focus:text-bakery-rose"
      >
        {label}
        {required && <span className="text-bakery-rose"> *</span>}
      </label>
    </div>
  );
};

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
  // Campo nascosto anti-spam: gli utenti non lo vedono, i bot spesso lo compilano
  const [honeypot, setHoneypot] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({ ...formData, website: honeypot }),
      });

      // Troppi messaggi dallo stesso indirizzo in poco tempo (limite del server)
      if (response.status === 429) {
        setError(t('contact.rateLimitMessage'));
        return;
      }
      if (!response.ok) {
        throw new Error(`Request failed with status ${response.status}`);
      }

      setSubmitted(true);
      setFormData({ name: '', email: '', phone: '', message: '' });

      // Reset success message after 5 seconds
      setTimeout(() => {
        setSubmitted(false);
      }, 5000);
    } catch (err) {
      console.error(err);
      setError(t('contact.errorMessage'));
    } finally {
      setIsSubmitting(false);
    }
  };

  const infoItems = [
    { icon: MapPin, title: t('contact.addressTitle'), value: t('contact.address'), href: contactInfo.mapsUrl, external: true },
    { icon: Phone, title: t('contact.phoneTitle'), value: t('contact.phone'), href: contactInfo.phoneHref },
    { icon: Mail, title: t('contact.emailTitle'), value: t('contact.email'), href: contactInfo.emailHref },
  ];

  const hours = [
    { day: t('contact.hours.weekdays'), time: t('contact.hours.weekdaysTime') },
    { day: t('contact.hours.sunday'), time: t('contact.hours.sundayTime') },
    { day: t('contact.hours.monday'), time: t('contact.hours.mondayTime'), closed: true },
  ];

  return (
    <Section id="contact" className="relative py-24 md:py-32">
      <div className="pointer-events-none absolute -left-16 top-[calc(33%-4rem)] -z-10 h-[32rem] w-[32rem] bg-[radial-gradient(closest-side,rgb(246_214_218/0.5),rgb(246_214_218/0))]" />

      <div className="container mx-auto">
        <Reveal className="mx-auto mb-16 max-w-2xl text-center">
          <span className="eyebrow">{t('contact.eyebrow')}</span>
          <h2 className="section-title mt-5">{t('contact.title')}</h2>
          <p className="mt-5 leading-relaxed text-bakery-brown/75">{t('contact.description')}</p>
        </Reveal>

        <div className="grid gap-6 lg:grid-cols-5 lg:items-start">
          {/* Modulo */}
          <Reveal className="lg:col-span-3">
            <div className="rounded-[2rem] border border-bakery-brown/10 bg-white p-6 shadow-soft md:p-10">
              <h3 className="font-serif text-3xl font-medium text-bakery-cocoa">{t('contact.formTitle')}</h3>

              {submitted ? (
                <div className="mt-8 flex animate-fade-in flex-col items-center rounded-3xl bg-emerald-50 px-6 py-14 text-center text-emerald-800">
                  <CheckCircle2 size={48} className="mb-4 text-emerald-500" />
                  <p className="max-w-sm text-lg">{t('contact.successMessage')}</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="mt-8 grid gap-4 sm:grid-cols-2">
                  {error && (
                    <div className="flex items-start gap-3 rounded-2xl bg-red-50 p-4 text-red-700 sm:col-span-2">
                      <AlertCircle size={20} className="mt-0.5 shrink-0" />
                      {error}
                    </div>
                  )}

                  <div aria-hidden="true" className="absolute -left-[9999px] h-px w-px overflow-hidden">
                    <label htmlFor="website">Website</label>
                    <input id="website" name="website" type="text" tabIndex={-1} autoComplete="off" value={honeypot} onChange={(e) => setHoneypot(e.target.value)} />
                  </div>

                  <Field id="name" required value={formData.name} onChange={handleChange} label={t('contact.form.name')} className="sm:col-span-2" />
                  <Field id="email" type="email" required value={formData.email} onChange={handleChange} label={t('contact.form.email')} />
                  <Field id="phone" type="tel" value={formData.phone} onChange={handleChange} label={t('contact.form.phone')} />
                  <Field id="message" required value={formData.message} onChange={handleChange} label={t('contact.form.message')} className="sm:col-span-2" />

                  <div className="flex flex-col gap-4 sm:col-span-2 sm:flex-row sm:items-center sm:justify-between">
                    <p className="text-xs text-bakery-brown/60">
                      {t('contact.privacyNote')}{' '}
                      <Link to="/privacy-policy" className="underline decoration-bakery-rose underline-offset-2 hover:text-bakery-rose">
                        {t('contact.privacyLink')}
                      </Link>
                      .
                    </p>
                    <button type="submit" disabled={isSubmitting} className="btn-primary shrink-0 disabled:cursor-wait disabled:opacity-70">
                      {isSubmitting ? (
                        <>
                          <Loader2 size={18} className="animate-spin" />
                          {t('contact.form.sending')}
                        </>
                      ) : (
                        <>
                          <Send size={16} />
                          {t('contact.form.send')}
                        </>
                      )}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </Reveal>

          {/* Informazioni */}
          <Reveal delay={150} className="flex flex-col gap-6 lg:col-span-2">
            <div className="rounded-[2rem] bg-bakery-cocoa p-6 text-white md:p-8">
              <h3 className="font-serif text-2xl font-medium">{t('contact.visitTitle')}</h3>
              <ul className="mt-6 space-y-5">
                {infoItems.map(({ icon: Icon, title, value, href, external }) => (
                  <li key={title}>
                    <a
                      href={href}
                      {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                      className="group flex items-start gap-4"
                    >
                      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-white/10 transition-colors group-hover:bg-bakery-rose">
                        <Icon size={18} />
                      </span>
                      <span>
                        <span className="block text-xs uppercase tracking-wider text-white/50">{title}</span>
                        <span className="mt-0.5 block text-white/90 transition-colors group-hover:text-bakery-pink">{value}</span>
                      </span>
                    </a>
                  </li>
                ))}
              </ul>

              <div className="mt-8 border-t border-white/10 pt-6">
                <h4 className="flex items-center gap-2 text-xs uppercase tracking-wider text-white/50">
                  <Clock size={14} />
                  {t('contact.hoursTitle')}
                </h4>
                <dl className="mt-4 space-y-2.5 text-sm">
                  {hours.map(({ day, time, closed }) => (
                    <div key={day} className="flex flex-wrap justify-between gap-x-4">
                      <dt className="text-white/70">{day}</dt>
                      <dd className={closed ? 'text-bakery-pink' : 'font-medium'}>{time}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>

            <div className="relative h-64 overflow-hidden rounded-[2rem] shadow-soft">
              <a
                href={contactInfo.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group absolute inset-0"
              >
                <img
                  src={mapImage.src}
                  srcSet={mapImage.srcSet}
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  width={mapImage.width}
                  height={mapImage.height}
                  alt={t('contact.address')}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <span className="absolute bottom-4 left-4 inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-semibold text-bakery-cocoa shadow-soft transition-colors group-hover:bg-bakery-pink">
                  <Navigation size={14} />
                  {t('contact.directions')}
                </span>
              </a>
              <a
                href="https://www.openstreetmap.org/copyright"
                target="_blank"
                rel="noopener noreferrer"
                className="absolute bottom-3 right-4 rounded-full bg-white/80 px-2 py-0.5 text-[10px] text-bakery-brown/70 hover:text-bakery-cocoa"
              >
                © OpenStreetMap
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </Section>
  );
};

export default ContactUs;
