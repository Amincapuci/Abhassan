import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import LanguageSwitcher from './LanguageSwitcher';
import { NavItem } from '../types';
import Logo from './Logo';

const Header: React.FC = () => {
  const { t, language } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems: NavItem[] = [
    {
      label: {
        de: 'Startseite',
        en: 'Home',
        ar: 'الرئيسية',
        tr: 'Ana Sayfa',
      },
      href: '#home',
    },
    {
      label: {
        de: 'Leistungen',
        en: 'Services',
        ar: 'الخدمات',
        tr: 'Hizmetler',
      },
      href: '#services',
    },
    {
      label: {
        de: 'Über Uns',
        en: 'About',
        ar: 'من نحن',
        tr: 'Hakkımızda',
      },
      href: '#about',
    },
    {
      label: {
        de: 'Termin Buchen',
        en: 'Book Appointment',
        ar: 'حجز موعد',
        tr: 'Randevu Al',
      },
      href: '#booking',
    },
    {
      label: {
        de: 'Kontakt',
        en: 'Contact',
        ar: 'اتصل بنا',
        tr: 'İletişim',
      },
      href: '#contact',
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-100 py-2'
          : 'bg-transparent py-4'
      }`}
      dir={language === 'ar' ? 'rtl' : 'ltr'}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div className="transform transition-transform duration-300 hover:scale-105">
            <Logo />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={`relative text-sm font-medium transition-all duration-300 hover:scale-105 ${
                  isScrolled ? 'text-green-800' : 'text-white'
                } hover:text-beige group`}
              >
                {item.label[language]}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-beige transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
            <div className="transform transition-transform duration-300 hover:scale-105">
              <LanguageSwitcher />
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <div className="flex items-center md:hidden">
            <div className="transform transition-transform duration-300 hover:scale-105">
              <LanguageSwitcher />
            </div>
            <button
              onClick={toggleMobileMenu}
              className={`ml-2 p-2 rounded-md transition-all duration-300 hover:scale-110 ${isScrolled ? 'text-green-800' : 'text-white'}`}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`md:hidden absolute w-full bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-100 transition-all duration-300 ease-in-out ${
          isMobileMenuOpen ? 'max-h-screen py-4' : 'max-h-0 overflow-hidden py-0'
        }`}
      >
        <nav className="container mx-auto px-4 flex flex-col space-y-4">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-green-800 hover:text-beige font-medium py-2 transition-all duration-300 hover:translate-x-2 hover:scale-105"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {item.label[language]}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;