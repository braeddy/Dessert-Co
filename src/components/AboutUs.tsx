import React from 'react';
import { Heart, Award, Clock } from 'lucide-react';
import Section from '../layout/Section';

const AboutUs: React.FC = () => {
  return (
    <Section id="about" className="bg-bakery-cream bg-opacity-30 py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4 text-bakery-brown">About Dessert&Co</h2>
          <div className="w-24 h-1 bg-bakery-pink mx-auto"></div>
        </div>

        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="md:w-1/2">
            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/6941028/pexels-photo-6941028.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" 
                alt="Cake maker decorating a beautiful cake" 
                className="rounded-lg shadow-xl"
              />
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-bakery-blue rounded-lg transform rotate-6 -z-10 opacity-30"></div>
            </div>
          </div>

          <div className="md:w-1/2">
            <h3 className="font-serif text-2xl font-semibold mb-4 text-bakery-brown">Our Sweet Story</h3>
            <p className="mb-4">
              Founded with passion by Roberta Rosetti, Dessert&Co has been creating edible works of art in Piombino since 2015. What started as a small home kitchen project has grown into a beloved local bakery specializing in custom cakes for all occasions.
            </p>
            <p className="mb-6">
              We believe that every celebration deserves a cake that's not just delicious but also tells your unique story. Our team of skilled pastry chefs combines traditional Italian baking techniques with modern designs to create memorable centerpieces for your special moments.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8">
              <div className="bg-white p-4 rounded-lg shadow-md text-center">
                <div className="w-12 h-12 bg-bakery-pink bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Heart className="text-bakery-brown" size={24} />
                </div>
                <h4 className="font-serif font-semibold mb-1">Made with Love</h4>
                <p className="text-sm">Every cake crafted with passion and attention to detail</p>
              </div>

              <div className="bg-white p-4 rounded-lg shadow-md text-center">
                <div className="w-12 h-12 bg-bakery-blue bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Award className="text-bakery-brown" size={24} />
                </div>
                <h4 className="font-serif font-semibold mb-1">Quality Ingredients</h4>
                <p className="text-sm">We use only the finest local and seasonal ingredients</p>
              </div>

              <div className="bg-white p-4 rounded-lg shadow-md text-center">
                <div className="w-12 h-12 bg-bakery-cream bg-opacity-50 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Clock className="text-bakery-brown" size={24} />
                </div>
                <h4 className="font-serif font-semibold mb-1">Custom Designs</h4>
                <p className="text-sm">Personalized creations for your special moments</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default AboutUs;