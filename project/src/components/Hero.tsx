import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { ArrowRight, Sparkles, Star } from 'lucide-react';

const Hero: React.FC = () => {
  const { t, language } = useLanguage();

  return (
    <section
      id="home"
      className="relative h-screen bg-green-800 overflow-hidden parallax-bg"
      dir={language === 'ar' ? 'rtl' : 'ltr'}
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.pexels.com/photos/3762892/pexels-photo-3762892.jpeg"
          alt="Beautiful woman with clear skin"
          className="w-full h-full object-cover object-center scale-105 transition-transform duration-[20s] hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-green-900/60 via-green-800/40 to-green-900/60 backdrop-blur-[1px]"></div>
        
        {/* Floating particles */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-beige/30 rounded-full floating-animation" style={{animationDelay: '0s'}}></div>
          <div className="absolute top-1/3 right-1/4 w-1 h-1 bg-white/40 rounded-full floating-animation" style={{animationDelay: '2s'}}></div>
          <div className="absolute bottom-1/3 left-1/3 w-1.5 h-1.5 bg-beige/20 rounded-full floating-animation" style={{animationDelay: '4s'}}></div>
          <div className="absolute top-1/2 right-1/3 w-1 h-1 bg-white/30 rounded-full floating-animation" style={{animationDelay: '1s'}}></div>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 h-full flex flex-col justify-center">
        <div className="max-w-4xl slide-in-left">
          {/* Premium badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-effect mb-6 pulse-glow">
            <Star className="w-4 h-4 text-beige" fill="currentColor" />
            <span className="text-white/90 text-sm font-medium">
              {language === 'de' ? 'Premium Ästhetik Praxis' :
               language === 'en' ? 'Premium Aesthetic Clinic' :
               language === 'ar' ? 'عيادة تجميل متميزة' :
               'Premium Estetik Kliniği'}
            </span>
            <Sparkles className="w-4 h-4 text-beige" />
          </div>
          
          <h1 
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 text-shadow leading-tight"
            style={{lineHeight: '1.2'}}
          >
            <span className="block">{t('hero.title')}</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-10 max-w-2xl leading-relaxed text-shadow">
            {t('hero.subtitle')}
          </p>
          <div className="flex flex-wrap gap-6">
            <button
              href="#booking"
              className="btn-primary group"
              onClick={() => document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <span>{t('hero.cta')}</span>
              <ArrowRight size={20} className={`transition-transform ml-2 group-hover:translate-x-1 ${language === 'ar' ? 'rotate-180' : ''}`} />
            </button>
            <button
              href="#services"
              className="btn-secondary group"
              onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <span>{t('hero.services')}</span>
              <ArrowRight size={20} className={`transition-transform ml-2 group-hover:translate-x-1 ${language === 'ar' ? 'rotate-180' : ''}`} />
            </button>
          </div>
        </div>
      </div>
      
      {/* Decorative Element */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white via-white/50 to-transparent"></div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;