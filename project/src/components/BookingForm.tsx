import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { services } from '../data/services';
import { Calendar, Clock, User, Mail, Phone, MessageSquare, Tag, CheckCircle, Sparkles } from 'lucide-react';
import toast from 'react-hot-toast';

const BookingForm: React.FC = () => {
  const { t, language } = useLanguage();
  const [formData, setFormData] = useState({
    service: '',
    date: '',
    time: '',
    name: '',
    email: '',
    phone: '',
    notes: '',
    voucherCode: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const timeSlots = [
    '09:00', '09:30', '10:00', '10:30', '11:00', '11:30',
    '12:00', '12:30', '13:00', '13:30', '14:00', '14:30',
    '15:00', '15:30', '16:00', '16:30', '17:00', '17:30',
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
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
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      toast.success(
        language === 'de' ? 'Termin erfolgreich gebucht!' :
        language === 'en' ? 'Appointment booked successfully!' :
        language === 'ar' ? 'تم حجز الموعد بنجاح!' :
        'Randevu başarıyla rezerve edildi!'
      );
      
      // Reset form
      setFormData({
        service: '',
        date: '',
        time: '',
        name: '',
        email: '',
        phone: '',
        notes: '',
        voucherCode: '',
      });
    } catch (error) {
      toast.error(
        language === 'de' ? 'Fehler beim Buchen des Termins' :
        language === 'en' ? 'Error booking appointment' :
        language === 'ar' ? 'خطأ في حجز الموعد' :
        'Randevu rezervasyonunda hata'
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="booking" className="py-20 bg-gray-50" dir={language === 'ar' ? 'rtl' : 'ltr'}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-100 text-green-800 mb-4">
            <Calendar className="w-4 h-4" />
            <span className="text-sm font-medium">Book Your Appointment</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">
            {t('booking.title')}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {t('booking.subtitle')}
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-2xl p-8 md:p-10 relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-beige/10 to-transparent rounded-full -translate-y-16 translate-x-16"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-green-100/50 to-transparent rounded-full translate-y-12 -translate-x-12"></div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Service Selection */}
              <div className="md:col-span-2">
                <label className="block text-sm font-semibold text-gray-800 mb-3 flex items-center gap-2">
                  <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                    <Sparkles className="w-4 h-4 text-green-700" />
                  </div>
                  {t('booking.service')}
                </label>
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300 hover:border-green-300"
                >
                  <option value="">{t('booking.service')}</option>
                  {services.map((service) => (
                    <option key={service.id} value={service.id}>
                      {service.name[language]} - {service.price}
                    </option>
                  ))}
                </select>
              </div>

              {/* Date */}
              <div>
                <label className="block text-sm font-semibold text-gray-800 mb-3 flex items-center gap-2">
                  <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                    <Calendar className="w-4 h-4 text-green-700" />
                  </div>
                  {t('booking.date')}
                </label>
                <input
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleInputChange}
                  required
                  min={new Date().toISOString().split('T')[0]}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300 hover:border-green-300"
                />
              </div>

              {/* Time */}
              <div>
                <label className="block text-sm font-semibold text-gray-800 mb-3 flex items-center gap-2">
                  <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                    <Clock className="w-4 h-4 text-green-700" />
                  </div>
                  {t('booking.time')}
                </label>
                <select
                  name="time"
                  value={formData.time}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300 hover:border-green-300"
                >
                  <option value="">{t('booking.time')}</option>
                  {timeSlots.map((time) => (
                    <option key={time} value={time}>
                      {time}
                    </option>
                  ))}
                </select>
              </div>

              {/* Name */}
              <div>
                <label className="block text-sm font-semibold text-gray-800 mb-3 flex items-center gap-2">
                  <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                    <User className="w-4 h-4 text-green-700" />
                  </div>
                  {t('booking.name')}
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300 hover:border-green-300"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-semibold text-gray-800 mb-3 flex items-center gap-2">
                  <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                    <Mail className="w-4 h-4 text-green-700" />
                  </div>
                  {t('booking.email')}
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300 hover:border-green-300"
                />
              </div>

              {/* Phone */}
              <div className="md:col-span-2">
                <label className="block text-sm font-semibold text-gray-800 mb-3 flex items-center gap-2">
                  <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                    <Phone className="w-4 h-4 text-green-700" />
                  </div>
                  {t('booking.phone')}
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300 hover:border-green-300"
                />
              </div>

              {/* Voucher Code */}
              <div className="md:col-span-2">
                <label className="block text-sm font-semibold text-gray-800 mb-3 flex items-center gap-2">
                  <div className="w-8 h-8 bg-beige/20 rounded-lg flex items-center justify-center">
                    <Tag className="w-4 h-4 text-green-700" />
                  </div>
                  {t('booking.voucherCode')}
                </label>
                <input
                  type="text"
                  name="voucherCode"
                  value={formData.voucherCode}
                  onChange={handleInputChange}
                  placeholder={t('booking.voucherCodePlaceholder')}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300 hover:border-green-300"
                />
              </div>

              {/* Notes */}
              <div className="md:col-span-2">
                <label className="block text-sm font-semibold text-gray-800 mb-3 flex items-center gap-2">
                  <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                    <MessageSquare className="w-4 h-4 text-green-700" />
                  </div>
                  {t('booking.notes')}
                </label>
                <textarea
                  name="notes"
                  value={formData.notes}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300 hover:border-green-300 resize-none"
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full mt-8 btn-primary disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 disabled:hover:shadow-none group"
            >
              {isSubmitting ? (
                <span className="flex items-center justify-center">
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                  {t('newsletter.submitting')}
                </span>
              ) : (
                <span className="flex items-center justify-center">
                  <CheckCircle className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform duration-300" />
                  {t('booking.submit')}
                </span>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default BookingForm;