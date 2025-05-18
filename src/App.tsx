import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { CTA } from './components/CTA';
import { Footer } from './components/Footer';
import { ThemeProvider } from './context/ThemeContext';
import { VoiceflowChat } from './components/VoiceflowChat';
import { Pricing } from './pages/Pricing';
import { ServicePage } from './pages/ServicePage';
import { FAQ } from './pages/FAQ';
import { Contact } from './pages/Contact';
import { Blog } from './pages/Blog';
import { BlogPost } from './pages/BlogPost';
import { About } from './pages/About';
import { AIAutomation } from './pages/AIAutomation';
import { AIAgent } from './pages/AIAgent';
import { WebDevelopment } from './pages/WebDevelopment';
import { MetaAds } from './pages/MetaAds';
import { AIOutreach } from './pages/AIOutreach';
import { NewsletterPopup } from './components/NewsletterPopup';
import { PrivacyPolicy } from './pages/PrivacyPolicy';
import { TermsOfService } from './pages/TermsOfService';
import { useTranslation } from 'react-i18next';
import { SEOHead } from './components/SEOHead';
import { StructuredData } from './components/StructuredData';

function App() {
  const [isNewsletterOpen, setIsNewsletterOpen] = useState(false);
  const { i18n } = useTranslation();
  const isDanish = i18n.language === 'da';

  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'VirtIQ',
    url: 'https://virtiq.dk',
    logo: 'https://virtiq.dk/logo.png',
    description: isDanish 
      ? 'Førende AI-bureau der specialiserer sig i AI-automatisering, chatbots og digitale løsninger'
      : 'Leading AI agency specializing in AI automation, chatbots, and digital solutions',
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'DK'
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+4530240676',
      contactType: 'customer service',
      email: 'lucas@virtiq.dk',
      availableLanguage: ['Danish', 'English']
    },
    sameAs: [
      'https://www.facebook.com/profile.php?id=61571678866111',
      'https://www.instagram.com/virtiq.dk/',
      'https://www.linkedin.com/company/106651496/admin/dashboard/'
    ]
  };

  return (
    <ThemeProvider>
      <Router>
        <SEOHead
          title={isDanish ? 'VirtIQ - Førende AI Bureau | Intelligente Automatiseringsløsninger' : 'VirtIQ - Leading AI Agency | Intelligent Automation Solutions'}
          description={isDanish 
            ? 'Transform din virksomhed med AI-drevne løsninger. Ekspertise inden for AI-automatisering, intelligente agenter og Meta-annonceoptimering. Start med en gratis konsultation.'
            : 'Transform your business with AI-powered solutions. Expert services in AI automation, intelligent agents, and Meta ads optimization. Get started with a free consultation.'}
          canonicalUrl="https://virtiq.dk"
          alternateLanguages={{
            'en': 'https://virtiq.dk',
            'da': 'https://virtiq.dk'
          }}
        />
        <StructuredData data={organizationSchema} />
        <div className="flex flex-col min-h-screen bg-black text-white overflow-hidden">
          <Header />
          <Routes>
            <Route path="/" element={
              <main>
                <Hero />
                <Services />
                <CTA />
              </main>
            } />
            <Route path="/pricing" element={<Pricing />} />
            <Route path={isDanish ? "/priser" : "/pricing"} element={<Pricing />} />
            <Route path="/services/:serviceId" element={<ServicePage />} />
            <Route path="/services/ai-automation" element={<AIAutomation />} />
            <Route path="/services/ai-agents" element={<AIAgent />} />
            <Route path="/services/website-development" element={<WebDevelopment />} />
            <Route path="/services/meta-ads" element={<MetaAds />} />
            <Route path="/services/ai-outreach" element={<AIOutreach />} />
            <Route path={isDanish ? "/faq" : "/faq"} element={<FAQ />} />
            <Route path={isDanish ? "/kontakt" : "/contact"} element={<Contact />} />
            <Route path={isDanish ? "/blog" : "/blog"} element={<Blog />} />
            <Route path="/blog/:slug" element={<BlogPost />} />
            <Route path={isDanish ? "/om-os" : "/about"} element={<About />} />
            <Route path={isDanish ? "/privatlivspolitik" : "/privacy-policy"} element={<PrivacyPolicy />} />
            <Route path={isDanish ? "/betingelser" : "/terms-of-service"} element={<TermsOfService />} />
            <Route path="*" element={<Navigate to="/" replace />} />           
          </Routes>
          <Footer onNewsletterClick={() => setIsNewsletterOpen(true)} />
          <VoiceflowChat />
          <NewsletterPopup 
            isOpen={isNewsletterOpen}
            onClose={() => setIsNewsletterOpen(false)}
          />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;