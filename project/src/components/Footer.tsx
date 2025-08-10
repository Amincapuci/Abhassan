import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { MapPin, Phone, Mail, Facebook, Instagram, Twitter } from 'lucide-react';
import Logo from './Logo';

const Footer: React.FC = () => {
  const { t, language } = useLanguage();

  return (
    <footer className="bg-gradient-to-br from-green-900 via-green-800 to-green-900 text-white relative overflow-hidden" dir={language === 'ar' ? 'rtl' : 'ltr'}>
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full footer-pattern-bg"></div>
      </div>
      
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="relative z-10">
            <div className="mb-6 transform hover:scale-105 transition-transform duration-300">
              <Logo />
            </div>
            <p className="text-white/80 mb-6 leading-relaxed">
              {language === 'de' && 'Ihre Praxis für ästhetische Medizin in Essen. Professionelle Behandlungen für Ihr Wohlbefinden.'}
              {language === 'en' && 'Your practice for aesthetic medicine in Essen. Professional treatments for your well-being.'}
              {language === 'ar' && 'عيادتك للطب التجميلي في إيسن. علاجات احترافية لصحتك.'}
              {language === 'tr' && 'Essen\'deki estetik tıp pratiğiniz. Sağlığınız için profesyonel tedaviler.'}
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-white/60 hover:text-beige hover:bg-white/20 transition-all duration-300 hover:scale-110">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-white/60 hover:text-beige hover:bg-white/20 transition-all duration-300 hover:scale-110">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-white/60 hover:text-beige hover:bg-white/20 transition-all duration-300 hover:scale-110">
                <Twitter size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="relative z-10">
            <h3 className="text-xl font-bold mb-6 text-beige">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-white/80 hover:text-beige transition-all duration-300 hover:translate-x-2 inline-block">
                  {t('nav.home')}
                </a>
              </li>
              <li>
                <a href="#services" className="text-white/80 hover:text-beige transition-all duration-300 hover:translate-x-2 inline-block">
                  {t('nav.services')}
                </a>
              </li>
              <li>
                <a href="#about" className="text-white/80 hover:text-beige transition-all duration-300 hover:translate-x-2 inline-block">
                  {t('nav.about')}
                </a>
              </li>
              <li>
                <a href="#booking" className="text-white/80 hover:text-beige transition-all duration-300 hover:translate-x-2 inline-block">
                  {t('nav.booking')}
                </a>
              </li>
              <li>
                <a href="#contact" className="text-white/80 hover:text-beige transition-all duration-300 hover:translate-x-2 inline-block">
                  {t('nav.contact')}
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="relative z-10">
            <h3 className="text-xl font-bold mb-6 text-beige">{t('nav.services')}</h3>
            <ul className="space-y-2 text-white/80">
              <li className="hover:text-beige transition-colors duration-300 cursor-pointer">Botox</li>
              <li className="hover:text-beige transition-colors duration-300 cursor-pointer">Hyaluron Filler</li>
              <li className="hover:text-beige transition-colors duration-300 cursor-pointer">Laser Haarentfernung</li>
              <li className="hover:text-beige transition-colors duration-300 cursor-pointer">Hautverjüngung</li>
              <li className="hover:text-beige transition-colors duration-300 cursor-pointer">Microneedling</li>
              <li className="hover:text-beige transition-colors duration-300 cursor-pointer">Chemisches Peeling</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="relative z-10">
            <h3 className="text-xl font-bold mb-6 text-beige">{t('contact.title')}</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3 group">
                <MapPin className="w-5 h-5 text-beige mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform duration-300" />
                <div className="text-white/80">
                  <p>Musterstraße 123</p>
                  <p>45123 Essen</p>
                </div>
              </div>
              <div className="flex items-center space-x-3 group">
                <Phone className="w-5 h-5 text-beige flex-shrink-0 group-hover:scale-110 transition-transform duration-300" />
                <p className="text-white/80 hover:text-beige transition-colors duration-300 cursor-pointer">+49 201 123 456 78</p>
              </div>
              <div className="flex items-center space-x-3 group">
                <Mail className="w-5 h-5 text-beige flex-shrink-0 group-hover:scale-110 transition-transform duration-300" />
                <p className="text-white/80 hover:text-beige transition-colors duration-300 cursor-pointer">info@aljeroudy-aesthetics.de</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center relative z-10">
          <p className="text-white/60 text-sm">
            © 2024 Aljeroudy Aesthetics. {t('footer.rights')}.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-white/60 hover:text-beige text-sm transition-all duration-300 hover:scale-105">
              {t('footer.privacy')}
            </a>
            <a href="#" className="text-white/60 hover:text-beige text-sm transition-all duration-300 hover:scale-105">
              {t('footer.terms')}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;