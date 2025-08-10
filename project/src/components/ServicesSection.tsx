import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { services } from '../data/services';
import { Clock, Euro, ArrowRight, Sparkles } from 'lucide-react';

const ServicesSection: React.FC = () => {
  const { t, language } = useLanguage();

  return (
    <section id="services" className="py-20 bg-gray-50" dir={language === 'ar' ? 'rtl' : 'ltr'}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-100 text-green-800 mb-4">
            <Sparkles className="w-4 h-4" />
            <span className="text-sm font-medium">Premium Services</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">
            {t('services.title')}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {t('services.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={service.id}
              className="group bg-white rounded-2xl shadow-lg overflow-hidden card-hover shimmer-effect"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.name[language]}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-md rounded-full p-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                  <ArrowRight className="w-4 h-4 text-white" />
                </div>
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="flex items-center justify-between text-white text-sm">
                    <div className="flex items-center bg-black/30 backdrop-blur-sm rounded-full px-3 py-1">
                      <Euro size={14} className="mr-1" />
                      <span className="font-semibold">{service.price}</span>
                    </div>
                    <div className="flex items-center bg-black/30 backdrop-blur-sm rounded-full px-3 py-1">
                      <Clock size={14} className="mr-1" />
                      <span>{service.duration}</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="p-6 relative">
                <h3 className="text-xl font-bold text-green-800 mb-3 group-hover:text-green-700 transition-colors duration-300">
                  {service.name[language]}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description[language]}
                </p>
                
                <button className="w-full btn-primary group/btn">
                  <span>{t('hero.cta')}</span>
                  <ArrowRight size={16} className="ml-2 transition-transform duration-300 group-hover/btn:translate-x-1" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;