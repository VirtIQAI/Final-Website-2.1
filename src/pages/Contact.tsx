import React, { useState, useEffect } from 'react';
import { Mail, Phone, X } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet-async';
import { supabase } from '../lib/supabase';

export const Contact: React.FC = () => {
  const { t, i18n } = useTranslation();
  const isDanish = i18n.language === 'da';

  const pageTitle = isDanish ? 'Kontakt VirtIQ - Din AI Partner' : 'Contact VirtIQ - Your AI Partner';
  const pageDescription = isDanish
    ? 'Kontakt VirtIQ for professionel rådgivning om AI-løsninger, automatisering og digital transformation. Book et gratis møde eller send os en besked.'
    : 'Contact VirtIQ for professional advice on AI solutions, automation, and digital transformation. Book a free meeting or send us a message.';

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    website: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showThankYou, setShowThankYou] = useState(false);

  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const { error } = await supabase
        .from('contact_requests')
        .insert([{ ...formData, website: formData.website || null, message: formData.message || null }]);
      if (error) throw error;
      setFormData({ firstName: '', lastName: '', email: '', phone: '', company: '', website: '', message: '' });
      setShowThankYou(true);
    } catch (error) {
      console.error('Error submitting form:', error);
      alert(isDanish ? 'Der opstod en fejl ved indsendelse af din anmodning. Prøv venligst igen.' : 'There was an error submitting your request. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`https://virtiq.dk${isDanish ? '/kontakt' : '/contact'}`} />
        <link rel="canonical" href={`https://virtiq.dk${isDanish ? '/kontakt' : '/contact'}`} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={pageDescription} />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ContactPage",
            "name": pageTitle,
            "description": pageDescription,
            "url": `https://virtiq.dk${isDanish ? '/kontakt' : '/contact'}`,
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+4530240676",
              "contactType": "customer service",
              "email": "lucas@virtiq.dk",
              "availableLanguage": ["Danish", "English"]
            },
            "organization": {
              "@type": "Organization",
              "name": "VirtIQ",
              "logo": "https://virtiq.dk/logo.png"
            }
          })}
        </script>
      </Helmet>

      <section className="py-16 md:py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-purple-900/10 to-transparent"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">{isDanish ? 'Kontakt Os' : 'Get in Touch'}</h1>
              <p className="text-xl text-gray-300">
                {isDanish
                  ? 'Vores ekspertteam er klar til at diskutere dine specifikke behov og levere skræddersyede løsninger.'
                  : 'Our expert team is ready to discuss your specific needs and provide tailored solutions.'}
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
              {/* Book a Call Section */}
              <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-800 h-full">
                <h2 className="text-2xl font-semibold mb-6">
                  {isDanish ? 'Book et Møde i Dag' : 'Book a Call Today'}
                </h2>
                <p className="text-gray-300 mb-6">
                  {isDanish
                    ? 'Har du en udfordring? Vi er klar til at skabe den perfekte løsning sammen.'
                    : 'Got a challenge? We are ready to build the perfect solution together.'}
                </p>
                <div
                  className="calendly-inline-widget"
                  data-url="https://calendly.com/lucas-virtiq/30min"
                  style={{ minWidth: '320px', height: '700px' }}
                ></div>
              </div>

              {/* Contact Form */}
              <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-800 h-full">
                <h2 className="text-2xl font-semibold mb-6">{isDanish ? 'Skal vi kontakte dig?' : 'Should we contact you?'}</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Form Fields... (unchanged from your version) */}
                  {/* ... */}
                  <Button variant="primary" size="lg" type="submit" fullWidth disabled={isSubmitting}>
                    {isSubmitting ? (isDanish ? 'Sender...' : 'Sending...') : (isDanish ? 'Send' : 'Send')}
                  </Button>
                </form>
              </div>
            </div>

            {/* Contact Information Box */}
            <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-800">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="flex items-start">
                  <a href="tel:+4530240676" className="flex items-start group" target="_blank" rel="noopener noreferrer">
                    <Phone className="w-8 h-8 text-purple-400 mt-1 mr-6" />
                    <div>
                      <h3 className="text-xl font-semibold mb-2 group-hover:text-purple-400 transition-colors">
                        {isDanish ? 'Telefon' : 'Phone'}
                      </h3>
                      <p className="text-gray-300 text-lg group-hover:text-purple-400 transition-colors">+45 30 24 06 76</p>
                    </div>
                  </a>
                </div>
                <div className="flex items-start">
                  <a href="mailto:lucas@virtiq.dk" className="flex items-start group" target="_blank" rel="noopener noreferrer">
                    <Mail className="w-8 h-8 text-purple-400 mt-1 mr-6" />
                    <div>
                      <h3 className="text-xl font-semibold mb-2 group-hover:text-purple-400 transition-colors">Email</h3>
                      <p className="text-gray-300 text-lg group-hover:text-purple-400 transition-colors">lucas@virtiq.dk</p>
                    </div>
                  </a>
                </div>
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
              aria-label={isDanish ? 'Luk tak-modal' : 'Close thank you modal'}
            >
              <X size={24} />
            </button>
            <div className="text-center">
              <h2 className="text-3xl font-bold mb-4">{isDanish ? 'Tak!' : 'Thank You!'}</h2>
              <p className="text-gray-300 mb-6">
                {isDanish
                  ? 'Vi har modtaget dine oplysninger og kontakter dig snarest.'
                  : "We've received your information and will contact you shortly."}
              </p>
              <Button variant="primary" size="lg" fullWidth onClick={() => setShowThankYou(false)}>
                {isDanish ? 'Luk' : 'Close'}
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};