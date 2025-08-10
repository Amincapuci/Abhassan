import React, { useState } from 'react';
import { MessageCircle, X, Send } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const AiChatbox: React.FC = () => {
  const { language } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState<Array<{ text: string; isUser: boolean }>>([
    {
      text: language === 'de' ? 'Hallo! Wie kann ich Ihnen heute helfen?' :
           language === 'en' ? 'Hello! How can I help you today?' :
           language === 'ar' ? 'مرحبا! كيف يمكنني مساعدتك اليوم؟' :
           'Merhaba! Bugün size nasıl yardımcı olabilirim?',
      isUser: false,
    },
  ]);

  const handleSendMessage = () => {
    if (!message.trim()) return;

    const newMessages = [
      ...messages,
      { text: message, isUser: true },
      {
        text: language === 'de' ? 'Vielen Dank für Ihre Nachricht. Ein Mitarbeiter wird sich bald bei Ihnen melden.' :
             language === 'en' ? 'Thank you for your message. A team member will get back to you soon.' :
             language === 'ar' ? 'شكرا لك على رسالتك. سيتواصل معك أحد أعضاء الفريق قريبا.' :
             'Mesajınız için teşekkürler. Bir ekip üyesi yakında sizinle iletişime geçecek.',
        isUser: false,
      },
    ];

    setMessages(newMessages);
    setMessage('');
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {/* Chat Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="bg-gradient-to-r from-green-800 to-green-700 text-white p-4 rounded-full shadow-2xl hover:shadow-green-800/25 hover:scale-110 transition-all duration-300 pulse-glow"
          aria-label="Open chat"
        >
          <MessageCircle size={24} />
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className="bg-white rounded-2xl shadow-2xl w-80 h-96 flex flex-col overflow-hidden animate-slide-up">
          {/* Header */}
          <div className="bg-gradient-to-r from-green-800 to-green-700 text-white p-4 flex justify-between items-center">
            <h3 className="font-bold text-lg">
              {language === 'de' ? 'Chat Support' :
               language === 'en' ? 'Chat Support' :
               language === 'ar' ? 'دعم الدردشة' :
               'Sohbet Desteği'}
            </h3>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white hover:text-beige transition-all duration-300 hover:scale-110 p-1 rounded-full hover:bg-white/10"
              aria-label="Close chat"
            >
              <X size={20} />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 p-4 overflow-y-auto space-y-3 bg-gray-50">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`flex ${msg.isUser ? 'justify-end' : 'justify-start'} animate-fade-in`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div
                  className={`max-w-xs px-4 py-3 rounded-2xl text-sm shadow-sm ${
                    msg.isUser
                      ? 'bg-gradient-to-r from-green-800 to-green-700 text-white'
                      : 'bg-white text-gray-800 border border-gray-200'
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
          </div>

          {/* Input */}
          <div className="p-4 border-t bg-white">
            <div className="flex space-x-3">
              <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder={
                  language === 'de' ? 'Nachricht eingeben...' :
                  language === 'en' ? 'Type a message...' :
                  language === 'ar' ? 'اكتب رسالة...' :
                  'Bir mesaj yazın...'
                }
                className="flex-1 px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent text-sm transition-all duration-300"
              />
              <button
                onClick={handleSendMessage}
                className="bg-gradient-to-r from-green-800 to-green-700 text-white p-3 rounded-xl hover:shadow-lg transition-all duration-300 hover:scale-105"
                aria-label="Send message"
              >
                <Send size={18} />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AiChatbox;