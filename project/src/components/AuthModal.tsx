import React, { useState } from 'react';
import { X, Mail, Lock, User } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { useLanguage } from '../context/LanguageContext';
import toast from 'react-hot-toast';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const AuthModal: React.FC<AuthModalProps> = ({ isOpen, onClose }) => {
  const { signIn, signUp } = useAuth();
  const { language } = useLanguage();
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });
  const [isLoading, setIsLoading] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      if (isLogin) {
        await signIn(formData.email, formData.password);
        toast.success(
          language === 'de' ? 'Erfolgreich angemeldet!' :
          language === 'en' ? 'Successfully signed in!' :
          language === 'ar' ? 'تم تسجيل الدخول بنجاح!' :
          'Başarıyla giriş yapıldı!'
        );
      } else {
        await signUp(formData.email, formData.password, formData.name);
        toast.success(
          language === 'de' ? 'Konto erfolgreich erstellt!' :
          language === 'en' ? 'Account created successfully!' :
          language === 'ar' ? 'تم إنشاء الحساب بنجاح!' :
          'Hesap başarıyla oluşturuldu!'
        );
      }
      onClose();
    } catch (error: any) {
      toast.error(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg max-w-md w-full p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-green-800">
            {isLogin ? (
              language === 'de' ? 'Anmelden' :
              language === 'en' ? 'Sign In' :
              language === 'ar' ? 'تسجيل الدخول' :
              'Giriş Yap'
            ) : (
              language === 'de' ? 'Registrieren' :
              language === 'en' ? 'Sign Up' :
              language === 'ar' ? 'التسجيل' :
              'Kayıt Ol'
            )}
          </h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            <X size={24} />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          {!isLogin && (
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                <User className="inline w-4 h-4 mr-2" />
                Name
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
          )}

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              <Mail className="inline w-4 h-4 mr-2" />
              Email
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
            <label className="block text-sm font-medium text-gray-700 mb-1">
              <Lock className="inline w-4 h-4 mr-2" />
              Password
            </label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-green-800 text-white py-2 px-4 rounded-md hover:bg-green-700 transition-colors disabled:opacity-50"
          >
            {isLoading ? (
              <div className="flex items-center justify-center">
                <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                {language === 'de' ? 'Wird verarbeitet...' :
                 language === 'en' ? 'Processing...' :
                 language === 'ar' ? 'جاري المعالجة...' :
                 'İşleniyor...'}
              </div>
            ) : (
              isLogin ? (
                language === 'de' ? 'Anmelden' :
                language === 'en' ? 'Sign In' :
                language === 'ar' ? 'تسجيل الدخول' :
                'Giriş Yap'
              ) : (
                language === 'de' ? 'Registrieren' :
                language === 'en' ? 'Sign Up' :
                language === 'ar' ? 'التسجيل' :
                'Kayıt Ol'
              )
            )}
          </button>
        </form>

        <div className="mt-4 text-center">
          <button
            onClick={() => setIsLogin(!isLogin)}
            className="text-green-800 hover:text-green-600 text-sm"
          >
            {isLogin ? (
              language === 'de' ? 'Noch kein Konto? Registrieren' :
              language === 'en' ? "Don't have an account? Sign up" :
              language === 'ar' ? 'ليس لديك حساب؟ سجل' :
              'Hesabınız yok mu? Kayıt olun'
            ) : (
              language === 'de' ? 'Bereits ein Konto? Anmelden' :
              language === 'en' ? 'Already have an account? Sign in' :
              language === 'ar' ? 'لديك حساب بالفعل؟ تسجيل الدخول' :
              'Zaten hesabınız var mı? Giriş yapın'
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default AuthModal;