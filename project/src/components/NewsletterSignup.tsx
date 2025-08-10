import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Mail, Gift, Sparkles, ArrowRight } from 'lucide-react';
import toast from 'react-hot-toast';

const NewsletterSignup: React.FC = () => {
  const { t, language } = useLanguage();
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      toast.success(t('newsletter.success'));
      setEmail('');
    } catch (error) {
      toast.error(t('newsletter.error'));
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="relative py-20 bg-gradient-to-br from-green-900 via-green-800 to-green-900 overflow-hidden" dir={language === 'ar' ? 'rtl' : 'ltr'}>
      {/* Background decorations */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-20 h-20 bg-beige/10 rounded-full floating-animation"></div>
        <div className="absolute top-1/3 right-20 w-16 h-16 bg-white/5 rounded-full floating-animation" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-beige/15 rounded-full floating-animation" style={{animationDelay: '4s'}}></div>
        <div className="absolute bottom-1/3 right-1/3 w-8 h-8 bg-white/10 rounded-full floating-animation" style={{animationDelay: '1s'}}></div>
      </div>
      
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="flex justify-center mb-8">
            <div className="relative bg-beige/20 p-6 rounded-2xl pulse-glow">
              <Gift className="w-16 h-16 text-beige" />
              <div className="absolute -top-2 -right-2 bg-white text-green-800 rounded-full p-1">
                <Sparkles className="w-4 h-4" />
              </div>
            </div>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 text-shadow">
            {t('newsletter.title')}
          </h2>
          
          <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto leading-relaxed text-shadow">
            {t('newsletter.description')}
          </p>

          <form onSubmit={handleSubmit} className="max-w-lg mx-auto">
            <div className="flex flex-col sm:flex-row gap-4 p-2 bg-white/10 backdrop-blur-md rounded-2xl">
              <div className="flex-1 relative">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={t('newsletter.emailPlaceholder')}
                  required
                  className="w-full px-6 py-4 rounded-xl border-0 focus:outline-none focus:ring-2 focus:ring-beige bg-white text-gray-800 placeholder-gray-500"
                />
                <Mail className="absolute right-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="bg-beige text-green-900 px-8 py-4 rounded-xl font-semibold hover:bg-beige/90 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center hover:scale-105 hover:shadow-lg group"
              >
                {isSubmitting ? (
                  <span className="flex items-center">
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-green-900 mr-2"></div>
                    {t('newsletter.submitting')}
                  </span>
                ) : (
                  <span className="flex items-center">
                    <Gift className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform duration-300" />
                    {t('newsletter.submit')}
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                  </span>
                )}
              </button>
            </div>
          </form>

          <p className="text-sm text-white/70 mt-6 max-w-2xl mx-auto leading-relaxed">
            {t('newsletter.terms')}
          </p>
          
          {/* Trust indicators */}
          <div className="flex justify-center items-center gap-8 mt-8 text-white/60">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-400 rounded-full"></div>
              <span className="text-sm">Secure</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-400 rounded-full"></div>
              <span className="text-sm">No Spam</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-400 rounded-full"></div>
              <span className="text-sm">Unsubscribe Anytime</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSignup;