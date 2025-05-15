import React from 'react';
import { Logo } from './ui/Logo';
import { Facebook, Instagram, Linkedin, Mail, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import i18n from '../i18n/config';

interface FooterProps {
  onNewsletterClick: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNewsletterClick }) => {
  const year = new Date().getFullYear();
  const isDanish = i18n.language === 'da';
  
  const services = [
    { name: 'AI Agents', href: '/services/ai-agents' },
    { name: 'AI Automation', href: '/services/ai-automation' },
    { name: 'AI Outreach', href: '/services/ai-outreach' },
    { name: 'Meta Ads', href: '/services/meta-ads' },
    { name: 'Website Development', href: '/services/website-development' },
  ];

  const companyLinks = [
    { name: isDanish ? 'Om os' : 'About Us', href: isDanish ? '/om-os' : '/about' },
    { name: 'Blog', href: '/blog' },
    { name: isDanish ? 'Kontakt' : 'Contact', href: isDanish ? '/kontakt' : '/contact' },
    { name: 'FAQ', href: '/faq' },
    { text: isDanish ? 'Nyhedsbrev' : 'Newsletter', onClick: onNewsletterClick },
  ];

  const socialLinks = [
    { icon: <Facebook size={18} />, href: 'https://www.facebook.com/profile.php?id=61571678866111' },
    { icon: <Instagram size={18} />, href: 'https://www.instagram.com/virtiq.dk/' },
    { icon: <Linkedin size={18} />, href: 'https://www.linkedin.com/company/106651496/admin/dashboard/' },
  ];
  
  return (
    <footer className="bg-gray-950 pt-16 pb-8 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-16">
          <div>
            <Logo />
            <p className="mt-4 text-gray-400 text-sm max-w-xs">
              {isDanish ? 'Førende inden for AI-innovation og digitale marketingløsninger for virksomheder i alle størrelser.' : 'Leading the way in AI innovation and digital marketing solutions for businesses of all sizes.'}
            </p>
            <div className="flex space-x-4 mt-6">
              {socialLinks.map((social, index) => (
                <a 
                  key={index}
                  href={social.href} 
                  className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-800 hover:bg-purple-600 transition-colors text-purple-400 hover:text-white"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Social media link ${index + 1}`}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-4">{isDanish ? 'Tjenester' : 'Services'}</h3>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <Link 
                    to={service.href}
                    className="text-gray-400 hover:text-purple-400 transition-colors text-sm"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-4">{isDanish ? 'Virksomhed' : 'Company'}</h3>
            <ul className="space-y-3">
              {companyLinks.map((link, index) => (
                <li key={index}>
                  {'href' in link ? (
                    <Link 
                      to={link.href}
                      className="text-gray-400 hover:text-purple-400 transition-colors text-sm"
                    >
                      {link.name}
                    </Link>
                  ) : (
                    <button
                      onClick={link.onClick}
                      className="text-gray-400 hover:text-purple-400 transition-colors text-sm text-left"
                    >
                      {link.text}
                    </button>
                  )}
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-4">{isDanish ? 'Kontakt' : 'Contact'}</h3>
            <ul className="space-y-4">
              <li>
                <a 
                  href="tel:+4530240676"
                  className="flex items-start text-gray-400 hover:text-purple-400 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Phone size={18} className="text-purple-400 mt-1 mr-3 flex-shrink-0" />
                  <span className="text-sm">+45 30 24 06 76</span>
                </a>
              </li>
              <li>
                <a 
                  href="mailto:lucas@virtiq.dk"
                  className="flex items-start text-gray-400 hover:text-purple-400 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Mail size={18} className="text-purple-400 mt-1 mr-3 flex-shrink-0" />
                  <span className="text-sm">lucas@virtiq.dk</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            &copy; {year} VirtIQ (CVR: 45291804). {isDanish ? 'Alle rettigheder forbeholdes.' : 'All rights reserved.'}
          </p>
          <div className="flex space-x-6">
            <Link to={isDanish ? "/privatlivspolitik" : "/privacy-policy"} className="text-gray-500 hover:text-purple-400 text-sm transition-colors">
              {isDanish ? 'Privatlivspolitik' : 'Privacy Policy'}
            </Link>
            <Link to={isDanish ? "/betingelser" : "/terms-of-service"} className="text-gray-500 hover:text-purple-400 text-sm transition-colors">
              {isDanish ? 'Betingelser' : 'Terms of Service'}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};