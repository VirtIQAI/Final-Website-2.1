import AITest from './pages/AITest';
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


function App() {
  const [isNewsletterOpen, setIsNewsletterOpen] = useState(false);
  const { i18n } = useTranslation();
  const isDanish = i18n.language === 'da';

  return (
    <ThemeProvider>
      <Router>
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