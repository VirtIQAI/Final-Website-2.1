import React, { useState } from 'react';
import { Button } from './ui/Button';
import { useTranslation } from 'react-i18next';
import { ChevronDown, X } from 'lucide-react';
import { useLocation, useNavigate } from 'react-router-dom';
import { supabase } from '../lib/supabase';

export const CTA: React.FC = () => {
  const { t, i18n } = useTranslation();
  const location = useLocation();
  const navigate = useNavigate();
  const isDanish = i18n.language === 'da';
  
  const services = [
    'AI Agents',
    'AI Automation',
    'AI Outreach',
    'AI Voice Caller',
    'Meta Ads',
    'Website Development',
  ];

  const getDefaultService = (pathname: string) => {
    const serviceMap: Record<string, string> = {
      '/services/ai-agents': 'AI Agents',
      '/services/ai-automation': 'AI Automation',
      '/services/ai-outreach': 'AI Outreach',
      '/services/ai-voice-caller': 'AI Voice Caller',
      '/services/meta-ads': 'Meta Ads',
      '/services/website-development': 'Website Development',
    };
    return serviceMap[pathname] || '';
  };

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    service: getDefaultService(location.pathname),
    message: '',
    additionalInfo: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showThankYou, setShowThankYou] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const { error } = await supabase
        .from('demo_requests')
        .insert([
          {
            name: `${formData.firstName} ${formData.lastName}`,
            email: formData.email,
            company: formData.company,
            service: formData.service,
            message: formData.message,
            additional_info: formData.additionalInfo
          }
        ]);

      if (error) throw error;

      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        company: '',
        service: getDefaultService(location.pathname),
        message: '',
        additionalInfo: ''
      });
      
      setShowThankYou(true);
    } catch (error) {
      console.error('Error submitting form:', error);
      alert(isDanish 
        ? 'Der opstod en fejl ved indsendelse af din anmodning. Prøv venligst igen.'
        : 'There was an error submitting your request. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReturnHome = () => {
    setShowThankYou(false);
    navigate('/');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <section id="contact" className="py-24 relative bg-black overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-indigo-900/10 blur-3xl -z-10"></div>
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-purple-900/10 blur-3xl -z-10"></div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-5xl mx-auto bg-gray-900/30 backdrop-blur-md rounded-2xl overflow-hidden border border-gray-800">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="p-8 md:p-12 bg-gradient-to-br from-indigo-900/50 to-purple-900/30">
                <div className="max-w-md">
                  <h2 className="text-3xl font-bold mb-6">
                    {isDanish ? 'Klar til at Transformere Din Virksomhed?' : 'Ready to Transform Your Business?'}
                  </h2>
                  <p className="text-gray-300 mb-8">
                    {isDanish
                      ? 'Kom i gang med en gratis demo og se hvordan vores AI-løsninger kan drive vækst for din virksomhed. Vores eksperter vil guide dig gennem processen.'
                      : 'Get started with a free demo and see how our AI solutions can drive growth for your business. Our experts will guide you through the process.'}
                  </p>
                  
                  <div className="space-y-6">
                    {[
                      isDanish ? 'Personlig strategikonsultation' : 'Personalized strategy consultation',
                      isDanish ? 'En skræddersyet demo til din virksomhed' : 'A tailored demo for your business',
                      isDanish ? 'Live demonstration af vores AI-værktøjer' : 'Live demonstration of our AI tools',
                      isDanish ? 'Interessentafstemning' : 'Stakeholder alignment'
                    ].map((item, index) => (
                      <div key={index} className="flex items-start">
                        <div className="shrink-0 w-5 h-5 rounded-full bg-purple-500 flex items-center justify-center mr-3 mt-1">
                          <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <span className="text-gray-200">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="p-8 md:p-12">
                <h3 className="text-2xl font-bold mb-6">
                  {isDanish ? 'Book en Gratis Demo' : 'Book a Free Demo'}
                </h3>
<form onSubmit={handleSubmit} className="space-y-6" autoComplete="on">
  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
    <div>
      <label htmlFor="firstName" className="block text-sm font-medium text-gray-300 mb-1">
        {isDanish ? 'Fornavn*' : 'First Name*'}
      </label>
      <input
        id="firstName"
        name="firstName"
        type="text"
        required
        autoComplete="given-name"
        value={formData.firstName}
        onChange={handleChange}
        className="w-full px-4 py-3 rounded-lg bg-gray-800/50 border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
        placeholder="John"
      />
    </div>

    <div>
      <label htmlFor="lastName" className="block text-sm font-medium text-gray-300 mb-1">
        {isDanish ? 'Efternavn*' : 'Last Name*'}
      </label>
      <input
        id="lastName"
        name="lastName"
        type="text"
        required
        autoComplete="family-name"
        value={formData.lastName}
        onChange={handleChange}
        className="w-full px-4 py-3 rounded-lg bg-gray-800/50 border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
        placeholder="Doe"
      />
    </div>
  </div>

  <div>
    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
      {isDanish ? 'Email*' : 'Email*'}
    </label>
    <input
      id="email"
      name="email"
      type="email"
      required
      autoComplete="email"
      value={formData.email}
      onChange={handleChange}
      className="w-full px-4 py-3 rounded-lg bg-gray-800/50 border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
      placeholder="johndoe@gmail.com"
    />
  </div>

  <div>
    <label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-1">
      {isDanish ? 'Virksomhed*' : 'Company*'}
    </label>
    <input
      id="company"
      name="company"
      type="text"
      required
      autoComplete="organization"
      value={formData.company}
      onChange={handleChange}
      className="w-full px-4 py-3 rounded-lg bg-gray-800/50 border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
      placeholder="Doe Enterprises"
    />
  </div>

  <div>
    <label htmlFor="service" className="block text-sm font-medium text-gray-300 mb-1">
      {isDanish ? 'Service*' : 'Service*'}
    </label>
    <div className="relative">
      <select
        id="service"
        name="service"
        required
        value={formData.service}
        onChange={handleChange}
        className="w-full px-4 py-3 rounded-lg bg-gray-800/50 border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent appearance-none pr-10"
      >
        <option value="" disabled>
          {isDanish ? 'Vælg en service' : 'Select a service'}
        </option>
        {services.map((service) => (
          <option key={service} value={service}>{service}</option>
        ))}
      </select>
      <ChevronDown 
        className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none"
      />
    </div>
  </div>

  <div>
    <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">
      {isDanish ? 'Hvilke specifikke problemer ønsker du at løse?*' : 'What specific problems are you looking to solve?*'}
    </label>
    <textarea
      id="message"
      name="message"
      rows={4}
      required
      value={formData.message}
      onChange={handleChange}
      className="w-full px-4 py-3 rounded-lg bg-gray-800/50 border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent resize-none"
      placeholder={isDanish 
        ? 'Beskriv venligst dine nuværende udfordringer og ønskede resultater'
        : 'Please describe your current challenges and desired outcomes'}
    ></textarea>
  </div>

  <div>
    <label htmlFor="additionalInfo" className="block text-sm font-medium text-gray-300 mb-1">
      {isDanish ? 'Yderligere Information' : 'Additional Information'}
    </label>
    <textarea
      id="additionalInfo"
      name="additionalInfo"
      rows={4}
      value={formData.additionalInfo}
      onChange={handleChange}
      className="w-full px-4 py-3 rounded-lg bg-gray-800/50 border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent resize-none"
      placeholder={isDanish
        ? 'Valgfrit: Del andre relevante detaljer om dit projekt eller krav'
        : 'Optional: Share any other relevant details about your project or requirements'}
    ></textarea>
  </div>

  <Button 
    variant="primary" 
    size="lg" 
    type="submit" 
    fullWidth
    disabled={isSubmitting}
  >
    {isSubmitting 
      ? (isDanish ? 'Sender...' : 'Submitting...') 
      : (isDanish ? 'Send' : 'Send')}
  </Button>

  <p className="text-xs text-gray-400 text-center mt-4">
    {isDanish
      ? 'Ved at indsende denne formular accepterer du vores'
      : 'By submitting this form, you agree to our'}{' '}
    <a
      href={isDanish ? "/privatlivspolitik" : "/privacy-policy"}
      target="_blank"
      rel="noopener noreferrer"
      className="text-purple-400 hover:text-purple-300"
    >
      {isDanish ? 'Privatlivspolitik' : 'Privacy Policy'}
    </a>{' '}
    {isDanish ? 'og' : 'and'}{' '}
    <a
      href={isDanish ? "/betingelser" : "/terms-of-service"}
      target="_blank"
      rel="noopener noreferrer"
      className="text-purple-400 hover:text-purple-300"
    >
      {isDanish ? 'Servicevilkår' : 'Terms of Service'}
    </a>.
  </p>
</form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Thank You Modal */}
      {showThankYou && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={() => setShowThankYou(false)}></div>
          <div className="relative bg-gray-900/90 backdrop-blur-md p-8 rounded-lg border border-gray-800 max-w-md w-full mx-4">
            <button 
              onClick={() => setShowThankYou(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
            >
              <X size={24} />
            </button>
            <div className="text-center">
              <h2 className="text-3xl font-bold mb-4">{isDanish ? 'Tak!' : 'Thank You!'}</h2>
              <p className="text-gray-300 mb-6">
                {isDanish
                  ? 'Vi har modtaget dine oplysninger og vil kontakte dig snarest.'
                  : 'We\'ve received your information and will contact you shortly.'}
              </p>
              <Button 
                variant="primary" 
                size="lg" 
                fullWidth
                onClick={handleReturnHome}
              >
                {isDanish ? 'Tilbage til Forsiden' : 'Return Home'}
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
