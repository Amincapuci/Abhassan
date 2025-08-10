import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Award, Users, Heart, Shield, CheckCircle, Star } from 'lucide-react';

const AboutSection: React.FC = () => {
  const { t, language } = useLanguage();

  const features = [
    {
      icon: Award,
      title: {
        de: 'Erfahrung',
        en: 'Experience',
        ar: 'الخبرة',
        tr: 'Deneyim',
      },
      description: {
        de: 'Über 10 Jahre Erfahrung in der ästhetischen Medizin',
        en: 'Over 10 years of experience in aesthetic medicine',
        ar: 'أكثر من 10 سنوات من الخبرة في الطب التجميلي',
        tr: '10 yıldan fazla estetik tıp deneyimi',
      },
    },
    {
      icon: Users,
      title: {
        de: 'Zufriedene Kunden',
        en: 'Satisfied Clients',
        ar: 'عملاء راضون',
        tr: 'Memnun Müşteriler',
      },
      description: {
        de: 'Über 5000 zufriedene Kunden vertrauen uns',
        en: 'Over 5000 satisfied clients trust us',
        ar: 'أكثر من 5000 عميل راضٍ يثق بنا',
        tr: '5000\'den fazla memnun müşteri bize güveniyor',
      },
    },
    {
      icon: Heart,
      title: {
        de: 'Individuelle Betreuung',
        en: 'Personal Care',
        ar: 'رعاية شخصية',
        tr: 'Kişisel Bakım',
      },
      description: {
        de: 'Jeder Patient erhält eine individuelle Beratung',
        en: 'Every patient receives individual consultation',
        ar: 'كل مريض يحصل على استشارة فردية',
        tr: 'Her hasta bireysel danışmanlık alır',
      },
    },
    {
      icon: Shield,
      title: {
        de: 'Sicherheit',
        en: 'Safety',
        ar: 'الأمان',
        tr: 'Güvenlik',
      },
      description: {
        de: 'Höchste Sicherheitsstandards und Qualität',
        en: 'Highest safety standards and quality',
        ar: 'أعلى معايير الأمان والجودة',
        tr: 'En yüksek güvenlik standartları ve kalite',
      },
    },
  ];

  return (
    <section id="about" className="py-20 bg-white" dir={language === 'ar' ? 'rtl' : 'ltr'}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-beige/20 text-green-800 mb-4">
            <Star className="w-4 h-4" fill="currentColor" />
            <span className="text-sm font-medium">About Excellence</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">
            {t('about.title')}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {t('about.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          <div className="slide-in-left">
            <div className="relative">
            <img
              src="https://images.pexels.com/photos/4173239/pexels-photo-4173239.jpeg"
              alt="Dr. Aljeroudy"
              className="w-full h-96 object-cover rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-500"
            />
              <div className="absolute -bottom-6 -right-6 bg-gradient-to-r from-green-800 to-green-700 text-white p-4 rounded-2xl shadow-xl">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5" />
                  <span className="font-semibold">10+ Years</span>
                </div>
                <p className="text-sm opacity-90">Experience</p>
              </div>
            </div>
          </div>
          
          <div className="slide-in-right">
            <h3 className="text-3xl font-bold gradient-text mb-6">
              Dr. Aljeroudy
            </h3>
            <p className="text-gray-600 mb-6 leading-relaxed text-lg">
              {language === 'de' && 'Mit über einem Jahrzehnt Erfahrung in der ästhetischen Medizin ist Dr. Aljeroudy ein anerkannter Experte auf seinem Gebiet. Seine Leidenschaft für natürliche Schönheit und sein Engagement für Exzellenz haben ihm das Vertrauen von Tausenden von Patienten eingebracht.'}
              {language === 'en' && 'With over a decade of experience in aesthetic medicine, Dr. Aljeroudy is a recognized expert in his field. His passion for natural beauty and commitment to excellence have earned him the trust of thousands of patients.'}
              {language === 'ar' && 'مع أكثر من عقد من الخبرة في الطب التجميلي، الدكتور الجرودي خبير معترف به في مجاله. شغفه بالجمال الطبيعي والتزامه بالتميز جعله يكسب ثقة آلاف المرضى.'}
              {language === 'tr' && 'Estetik tıpta on yıldan fazla deneyime sahip Dr. Aljeroudy, alanında tanınmış bir uzmandır. Doğal güzellik tutkusu ve mükemmellik konusundaki kararlılığı, binlerce hastanın güvenini kazanmasını sağlamıştır.'}
            </p>
            <p className="text-gray-600 leading-relaxed text-lg mb-8">
              {language === 'de' && 'Unser Ziel ist es, jedem Patienten zu helfen, sich in seiner Haut wohl und selbstbewusst zu fühlen, während wir gleichzeitig die höchsten Standards für Sicherheit und Qualität aufrechterhalten.'}
              {language === 'en' && 'Our goal is to help every patient feel comfortable and confident in their own skin while maintaining the highest standards of safety and quality.'}
              {language === 'ar' && 'هدفنا هو مساعدة كل مريض على الشعور بالراحة والثقة في بشرته مع الحفاظ على أعلى معايير الأمان والجودة.'}
              {language === 'tr' && 'Amacımız, en yüksek güvenlik ve kalite standartlarını korurken her hastanın kendi teninde rahat ve kendinden emin hissetmesine yardımcı olmaktır.'}
            </p>
            
            {/* Certifications */}
            <div className="flex flex-wrap gap-3">
              <div className="flex items-center gap-2 bg-green-50 px-4 py-2 rounded-full">
                <Award className="w-4 h-4 text-green-700" />
                <span className="text-sm font-medium text-green-800">Board Certified</span>
              </div>
              <div className="flex items-center gap-2 bg-beige/20 px-4 py-2 rounded-full">
                <Star className="w-4 h-4 text-green-700" fill="currentColor" />
                <span className="text-sm font-medium text-green-800">5000+ Patients</span>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center">
              <div 
                className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-green-100 to-green-50 rounded-2xl mb-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <feature.icon className="w-8 h-8 text-green-800 group-hover:scale-110 transition-transform duration-300" />
              </div>
              <h4 className="text-xl font-bold text-green-800 mb-3">
                {feature.title[language]}
              </h4>
              <p className="text-gray-600 leading-relaxed">
                {feature.description[language]}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;