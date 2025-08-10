import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';
import toast from 'react-hot-toast';

const ContactSection: React.FC = () => {
  const { t, language } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      toast.success(
        language === 'de' ? 'Nachricht erfolgreich gesendet!' :
        language === 'en' ? 'Message sent successfully!' :
        language === 'ar' ? 'تم إرسال الرسالة بنجاح!' :
        'Mesaj başarıyla gönderildi!'
      );
      
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      toast.error(
        language === 'de' ? 'Fehler beim Senden der Nachricht' :
        language === 'en' ? 'Error sending message' :
        language === 'ar' ? 'خطأ في إرسال الرسالة' :
        'Mesaj gönderiminde hata'
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-white" dir={language === 'ar' ? 'rtl' : 'ltr'}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-green-800 mb-4">
            {t('contact.title')}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('contact.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <MapPin className="w-6 h-6 text-green-800" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-green-800 mb-2">
                    {t('contact.address')}
                  </h3>
                  <p className="text-gray-600">
                    Musterstraße 123<br />
                    45123 Essen<br />
                    Deutschland
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <Phone className="w-6 h-6 text-green-800" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-green-800 mb-2">
                    {t('contact.phone')}
                  </h3>
                  <p className="text-gray-600">
                    +49 201 123 456 78
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <Mail className="w-6 h-6 text-green-800" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-green-800 mb-2">
                    {t('contact.email')}
                  </h3>
                  <p className="text-gray-600">
                    info@aljeroudy-aesthetics.de
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <Clock className="w-6 h-6 text-green-800" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-green-800 mb-2">
                    {t('contact.hours')}
                  </h3>
                  <div className="text-gray-600 space-y-1">
                    <p>Mo - Fr: 09:00 - 18:00</p>
                    <p>Sa: 09:00 - 14:00</p>
                    <p>So: Geschlossen</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {t('booking.name')}
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {t('booking.email')}
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {t('contact.message')}
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={6}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-green-800 text-white py-3 px-6 rounded-md font-medium hover:bg-green-700 transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
              >
                {isSubmitting ? (
                  <span className="flex items-center">
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                    {t('newsletter.submitting')}
                  </span>
                ) : (
                  <span className="flex items-center">
                    <Send className="w-4 h-4 mr-2" />
                    {t('contact.send')}
                  </span>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;