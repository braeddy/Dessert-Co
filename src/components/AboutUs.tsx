import React from 'react';
import { Heart, Award, Clock } from 'lucide-react';
import Section from '../layout/Section';
import { useTranslation } from 'react-i18next';

const AboutUs: React.FC = () => {
  const { t } = useTranslation();

  return (
    <Section id="about" className="bg-bakery-cream bg-opacity-30 py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4 text-bakery-brown">{t('about.title')}</h2>
          <div className="w-24 h-1 bg-bakery-pink mx-auto"></div>
        </div>

        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="md:w-1/2">
            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/6941028/pexels-photo-6941028.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" 
                alt={t('about.imageAlt')} 
                className="rounded-lg shadow-xl"
              />
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-bakery-blue rounded-lg transform rotate-6 -z-10 opacity-30"></div>
            </div>
          </div>

          <div className="md:w-1/2">
            <h3 className="font-serif text-2xl font-semibold mb-4 text-bakery-brown">{t('about.storyTitle')}</h3>
            <p className="mb-4">{t('about.storyParagraph1')}</p>
            <p className="mb-6">{t('about.storyParagraph2')}</p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8">
              <div className="bg-white p-4 rounded-lg shadow-md text-center">
                <div className="w-12 h-12 bg-bakery-pink bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Heart className="text-bakery-brown" size={24} />
                </div>
                <h4 className="font-serif font-semibold mb-1">{t('about.features.love.title')}</h4>
                <p className="text-sm">{t('about.features.love.description')}</p>
              </div>

              <div className="bg-white p-4 rounded-lg shadow-md text-center">
                <div className="w-12 h-12 bg-bakery-blue bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Award className="text-bakery-brown" size={24} />
                </div>
                <h4 className="font-serif font-semibold mb-1">{t('about.features.quality.title')}</h4>
                <p className="text-sm">{t('about.features.quality.description')}</p>
              </div>

              <div className="bg-white p-4 rounded-lg shadow-md text-center">
                <div className="w-12 h-12 bg-bakery-cream bg-opacity-50 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Clock className="text-bakery-brown" size={24} />
                </div>
                <h4 className="font-serif font-semibold mb-1">{t('about.features.custom.title')}</h4>
                <p className="text-sm">{t('about.features.custom.description')}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default AboutUs;