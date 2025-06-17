import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Button } from './ui/Button';
import { Logo } from './ui/Logo';
import { Menu, X, ChevronDown } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { LanguageSwitch } from './LanguageSwitch';
import { trackButtonClick } from '../lib/analytics';

export const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isToolsOpen, setIsToolsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const servicesRef = useRef<HTMLDivElement>(null);
  const toolsRef = useRef<HTMLDivElement>(null);
  const { i18n } = useTranslation();
  const location = useLocation();
  const navigate = useNavigate();
  const isDanish = i18n.language === 'da';

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        servicesRef.current && !servicesRef.current.contains(event.target as Node) &&
        toolsRef.current && !toolsRef.current.contains(event.target as Node)
      ) {
        setIsServicesOpen(false);
        setIsToolsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    if (location.state?.scrollToContact) {
      const contactSection = document.getElementById('contact');
      if (contactSection) {
        const headerOffset = window.innerWidth < 768 ? 60 : 80;
        const elementPosition = contactSection.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
        setTimeout(() => {
          window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
        }, 300);
        navigate(location.pathname, { replace: true, state: {} });
      }
    }
  }, [location, navigate]);

  const services = [
    { name: 'AI Agents', href: '/services/ai-agents' },
    { name: isDanish ? 'AI Automatisering' : 'AI Automation', href: '/services/ai-automation' },
    { name: isDanish ? 'AI Outreach' : 'AI Outreach', href: '/services/ai-outreach' },
    { name: isDanish ? 'AI Voice Caller' : 'AI Voice Caller', href: '/services/ai-voice-caller' },
    { name: isDanish ? 'Meta Annoncer' : 'Meta Ads', href: '/services/meta-ads' },
    { name: isDanish ? 'Skræddersyede Hjemmesider' : 'Custom Websites', href: '/services/website-development' },
  ];

  const tools = [
    {
      name: isDanish ? 'YouTube Udskrift' : 'YouTube Transcript',
      href: isDanish ? '/værktøjer/youtube-transcript' : '/tools/youtube-transcript',
    },
  ];

  const navItems = [
    { name: isDanish ? 'Services' : 'Services', isDropdown: 'services' },
    { name: isDanish ? 'Værktøjer' : 'Tools', isDropdown: 'tools' },
    { name: isDanish ? 'Priser' : 'Pricing', href: isDanish ? '/priser' : '/pricing' },
    { name: isDanish ? 'Blog' : 'Blog', href: '/blog' },
    { name: isDanish ? 'Om os' : 'About', href: isDanish ? '/om-os' : '/about' },
    { name: isDanish ? 'Kontakt' : 'Contact', href: isDanish ? '/kontakt' : '/contact' },
    { name: 'FAQ', href: '/faq' },
  ];

  const handleDemoClick = () => {
    trackButtonClick('Book a Free Demo', 'Header');
    setIsMenuOpen(false);
    if (location.pathname !== '/') {
      navigate('/', { state: { scrollToContact: true } });
    } else {
      const contactSection = document.getElementById('contact');
      if (contactSection) {
        const headerOffset = window.innerWidth < 768 ? 60 : 80;
        const elementPosition = contactSection.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
        window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
      }
    }
  };

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className={`fixed top-0 left-0 right-0 w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-black/80 backdrop-blur-md py-3' : 'bg-transparent py-5'
    }`}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          <Link to="/"><Logo /></Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => {
              if (item.isDropdown === 'services') {
                return (
                  <div key="services" className="relative" ref={servicesRef}>
                    <button
                      onClick={() => setIsServicesOpen(!isServicesOpen)}
                      className="flex items-center space-x-1 text-sm font-medium text-gray-200 hover:text-white transition-colors"
                    >
                      <span>{item.name}</span>
                      <ChevronDown size={16} className={`transition-transform duration-200 ${
                        isServicesOpen ? 'rotate-180' : ''
                      }`} />
                    </button>
                    {isServicesOpen && (
                      <div className="absolute top-full left-0 mt-2 w-64 rounded-lg bg-gray-900/95 backdrop-blur-md border border-gray-800 shadow-lg py-2 z-50">
                        {services.map((service) => (
                          <Link
                            key={service.name}
                            to={service.href}
                            className="block px-4 py-2 text-sm text-gray-200 hover:bg-purple-600/20 hover:text-white transition-colors"
                            onClick={() => setIsServicesOpen(false)}
                          >
                            {service.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                );
              }

              if (item.isDropdown === 'tools') {
                return (
                  <div key="tools" className="relative" ref={toolsRef}>
                    <button
                      onClick={() => setIsToolsOpen(!isToolsOpen)}
                      className="flex items-center space-x-1 text-sm font-medium text-gray-200 hover:text-white transition-colors"
                    >
                      <span>{item.name}</span>
                      <ChevronDown size={16} className={`transition-transform duration-200 ${
                        isToolsOpen ? 'rotate-180' : ''
                      }`} />
                    </button>
                    {isToolsOpen && (
                      <div className="absolute top-full left-0 mt-2 w-64 rounded-lg bg-gray-900/95 backdrop-blur-md border border-gray-800 shadow-lg py-2 z-50">
                        {tools.map((tool) => (
                          <Link
                            key={tool.name}
                            to={tool.href}
                            onClick={() => {
                              setIsToolsOpen(false);
                              trackButtonClick(tool.name, 'Tools Header');
                            }}
                            className="block px-4 py-2 text-sm text-gray-200 hover:bg-purple-600/20 hover:text-white transition-colors"
                          >
                            {tool.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <Link 
                  key={item.name}
                  to={item.href}
                  className={`text-sm font-medium transition-colors ${
                    location.pathname === item.href ? 'text-white' : 'text-gray-200 hover:text-white'
                  }`}
                >
                  {item.name}
                </Link>
              );
            })}
            <LanguageSwitch />
            <button onClick={handleDemoClick}>
              <Button variant="primary" size="sm">
                {isDanish ? 'Book en Gratis Demo' : 'Book a Free Demo'}
              </Button>
            </button>
          </nav>

          {/* Mobile Toggle */}
          <button 
            className="md:hidden text-white p-2"
            onClick={toggleMenu}
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-black/95 backdrop-blur-md py-4 px-4 border-t border-gray-800 max-h-[80vh] overflow-y-auto">
            <nav className="flex flex-col space-y-4">
              {navItems.map((item) => {
                if (item.isDropdown === 'services') {
                  return (
                    <div key="mobile-services">
                      <div className="text-base font-medium text-gray-200 px-2">{item.name}</div>
                      {services.map((service) => (
                        <Link
                          key={service.name}
                          to={service.href}
                          className="block text-sm text-gray-300 hover:text-white transition-colors py-2 px-4"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {service.name}
                        </Link>
                      ))}
                    </div>
                  );
                }

                if (item.isDropdown === 'tools') {
                  return (
                    <div key="mobile-tools">
                      <div className="text-base font-medium text-gray-200 px-2">{item.name}</div>
                      {tools.map((tool) => (
                        <Link
                          key={tool.name}
                          to={tool.href}
                          className="block text-sm text-gray-300 hover:text-white transition-colors py-2 px-4"
                          onClick={() => {
                            trackButtonClick(tool.name, 'Tools Mobile');
                            setIsMenuOpen(false);
                          }}
                        >
                          {tool.name}
                        </Link>
                      ))}
                    </div>
                  );
                }

                return (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={`text-base font-medium transition-colors py-2 ${
                      location.pathname === item.href ? 'text-white' : 'text-gray-200 hover:text-white'
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                );
              })}
              <div className="pt-2">
                <LanguageSwitch />
              </div>
              <div className="pt-2">
                <button onClick={handleDemoClick}>
                  <Button variant="primary" size="sm" fullWidth>
                    {isDanish ? 'Book en Gratis Demo' : 'Book a Free Demo'}
                  </Button>
                </button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};
