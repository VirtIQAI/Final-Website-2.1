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
  <footer className="bg-red-600 text-white text-center p-10 z-50">
    <p>✅ FOOTER IS RENDERING</p>
  </footer>
);
};