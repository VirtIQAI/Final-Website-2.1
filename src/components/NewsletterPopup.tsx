import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import { Button } from './ui/Button';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

interface NewsletterPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

export const NewsletterPopup: React.FC<NewsletterPopupProps> = ({ isOpen, onClose }) => {
  const { i18n } = useTranslation();
  const isDanish = i18n.language === 'da';
  
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('https://hook.eu2.make.com/y7hd8w2eulpysmks4cfirdkb93jxbupg', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          firstName: formData.firstName,
          lastName: formData.lastName,
          email: formData.email,
          phone: formData.phone,
          company: formData.company,
          source: 'Newsletter Signup',
          timestamp: new Date().toISOString()
        }),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      setShowSuccess(true);
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        company: '',
      });

      // Close the popup after 3 seconds
      setTimeout(() => {
        onClose();
        setShowSuccess(false);
      }, 3000);

    } catch (error) {
      console.error('Error submitting form:', error);
      alert(isDanish 
        ? 'Der opstod en fejl. Prøv venligst igen.'
        : 'There was an error. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  // Prevent body scroll when popup is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
      <div 
        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
        onClick={onClose}
      ></div>
      
      <div className="relative w-full max-w-lg bg-gray-900 rounded-2xl shadow-2xl">
        <div className="absolute -inset-px bg-gradient-to-r from-purple-600 to-indigo-600 rounded-2xl blur opacity-50"></div>
        
        <div className="relative bg-gray-900 rounded-2xl p-8">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
            aria-label="Close newsletter popup"
          >
            <X size={24} />
          </button>

          <div className="text-center mb-6">
            <h2 className="text-2xl font-bold mb-2">
              {isDanish ? 'Tilmeld Dig Vores Nyhedsbrev' : 'Subscribe to Our Newsletter'}
            </h2>
            <p className="text-gray-400">
              {isDanish 
                ? 'Hold dig opdateret med vores seneste indsigter om AI, teknologi og digital transformation.'
                : 'Stay updated with our latest insights on AI, technology, and digital transformation.'}
            </p>
          </div>

          {showSuccess ? (
            <div className="text-center">
              <h3 className="text-xl font-bold text-green-400 mb-2">
                {isDanish ? 'Tak for din tilmelding!' : 'Thanks for subscribing!'}
              </h3>
              <p className="text-gray-300">
                {isDanish 
                  ? 'Du vil snart modtage vores første nyhedsbrev.'
                  : 'You\'ll receive our first newsletter soon.'}
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-gray-300 mb-1">
                    {isDanish ? 'Fornavn' : 'First Name'} <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    required
                    value={formData.firstName}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 rounded-lg bg-gray-800/50 border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  />
                </div>
                
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-gray-300 mb-1">
                    {isDanish ? 'Efternavn' : 'Last Name'} <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    required
                    value={formData.lastName}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 rounded-lg bg-gray-800/50 border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 rounded-lg bg-gray-800/50 border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-1">
                  {isDanish ? 'Telefon' : 'Phone'} <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 rounded-lg bg-gray-800/50 border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                />
              </div>

              <div>
                <label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-1">
                  {isDanish ? 'Virksomhed' : 'Company'}
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 rounded-lg bg-gray-800/50 border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                />
              </div>

              <Button 
                type="submit" 
                variant="primary" 
                size="lg" 
                fullWidth
                disabled={isSubmitting}
              >
                {isSubmitting
                  ? (isDanish ? 'Sender...' : 'Submitting...')
                  : (isDanish ? 'Tilmeld Nyhedsbrev' : 'Subscribe to Newsletter')}
              </Button>

              <p className="text-xs text-gray-400 text-center">
                {isDanish ? 'Ved at tilmelde dig accepterer du vores' : 'By subscribing, you agree to our'}{' '}
                <Link 
                  to={isDanish ? "/privatlivspolitik" : "/privacy-policy"} 
                  onClick={onClose}
                  className="text-purple-400 hover:text-purple-300"
                >
                  {isDanish ? 'Privatlivspolitik' : 'Privacy Policy'}
                </Link>{' '}
                {isDanish ? 'og' : 'and'}{' '}
                <Link 
                  to={isDanish ? "/betingelser" : "/terms-of-service"}
                  onClick={onClose}
                  className="text-purple-400 hover:text-purple-300"
                >
                  {isDanish ? 'Servicevilkår' : 'Terms of Service'}
                </Link>.
              </p>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};