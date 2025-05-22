import React from 'react';
import { Logo } from './ui/Logo';
import { Facebook, Instagram, Linkedin, Mail, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

interface FooterProps {
  onNewsletterClick: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNewsletterClick }) => {
  const { i18n } = useTranslation();
  const isDanish = i18n.language === 'da';
  const year = new Date().getFullYear();
  
  const services = [
    { name: 'AI Agents', href: '/services/ai-agents' },
    { name: isDanish ? 'AI Automatisering' : 'AI Automation', href: '/services/ai-automation' },
    { name: isDanish ? 'AI Outreach' : 'AI Outreach', href: '/services/ai-outreach' },
    { name: isDanish ? 'AI Voice Caller' : 'AI Voice Caller', href: '/services/ai-voice-caller' },
    { name: isDanish ? 'Meta Annoncer' : 'Meta Ads', href: '/services/meta-ads' },
    { name: isDanish ? 'Skræddersyede Hjemmesider' : 'Custom Websites', href: '/services/website-development' },
  ];

  const companyLinks = [
    { name: isDanish ? 'Om os' : 'About Us', href: isDanish ? '/om-os' : '/about' },
    { name: 'Blog', href: '/blog' },
    { name: isDanish ? 'Kontakt' : 'Contact', href: isDanish ? '/kontakt' : '/contact' },
    { name: 'FAQ', href: '/faq' },
    { text: isDanish ? 'Nyhedsbrev' : 'Newsletter', onClick: onNewsletterClick },
  ];

  const socialLinks = [
    { icon: <Facebook size={18} />, href: 'https://www.facebook.com/profile.php?id=61571678866111', label: 'Facebook' },
    { icon: <Instagram size={18} />, href: 'https://www.instagram.com/virtiq.dk/', label: 'Instagram' },
    { icon: <Linkedin size={18} />, href: 'https://www.linkedin.com/company/106651496/admin/dashboard/', label: 'LinkedIn' },
  ];

  return (
    <footer className="bg-gray-900/50 backdrop-blur-sm border-t border-gray-800">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 xl:gap-12">
          <div>
            <Link to="/" className="inline-block mb-6">
              <Logo />
            </Link>
            <p className="text-gray-400 mb-6">
              {isDanish
                ? 'Transformerer virksomheder med AI-drevne løsninger. Vi specialiserer os i AI-automatisering, chatbots og digitale løsninger.'
                : 'Transforming businesses with AI-powered solutions. We specialize in AI automation, chatbots, and digital solutions.'}
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-purple-400 transition-colors"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">
              {isDanish ? 'Services' : 'Services'}
            </h3>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <Link
                    to={service.href}
                    className="text-gray-400 hover:text-purple-400 transition-colors"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">
              {isDanish ? 'Virksomhed' : 'Company'}
            </h3>
            <ul className="space-y-3">
              {companyLinks.map((link, index) => (
                <li key={index}>
                  {'href' in link ? (
                    <Link
                      to={link.href}
                      className="text-gray-400 hover:text-purple-400 transition-colors"
                    >
                      {link.name}
                    </Link>
                  ) : (
                    <button
                      onClick={link.onClick}
                      className="text-gray-400 hover:text-purple-400 transition-colors"
                    >
                      {link.text}
                    </button>
                  )}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">
              {isDanish ? 'Kontakt' : 'Contact'}
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="tel:+4530240676"
                  className="text-gray-400 hover:text-purple-400 transition-colors flex items-center"
                >
                  <Phone size={18} className="mr-2" />
                  +45 30 24 06 76
                </a>
              </li>
              <li>
                <a
                  href="mailto:lucas@virtiq.dk"
                  className="text-gray-400 hover:text-purple-400 transition-colors flex items-center"
                >
                  <Mail size={18} className="mr-2" />
                  lucas@virtiq.dk
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © {year} VirtIQ. {isDanish ? 'Alle rettigheder forbeholdes.' : 'All rights reserved.'} CVR: 45291804
            </div>
            <div className="flex space-x-6">
              <Link
                to={isDanish ? "/privatlivspolitik" : "/privacy-policy"}
                className="text-gray-400 hover:text-purple-400 transition-colors text-sm"
              >
                {isDanish ? 'Privatlivspolitik' : 'Privacy Policy'}
              </Link>
              <Link
                to={isDanish ? "/betingelser" : "/terms-of-service"}
                className="text-gray-400 hover:text-purple-400 transition-colors text-sm"
              >
                {isDanish ? 'Servicevilkår' : 'Terms of Service'}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};