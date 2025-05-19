import React, { useEffect, useRef } from 'react';
import { Button } from './ui/Button';
import { TypeAnimation } from 'react-type-animation';
import Spline from '@splinetool/react-spline';
import { useTranslation } from 'react-i18next';
import { trackButtonClick } from '../lib/analytics';

export const Hero: React.FC = () => {
  const { t, i18n } = useTranslation();
  const heroRef = useRef<HTMLDivElement>(null);
  const isDanish = i18n.language === 'da';
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current) return;
      
      const { clientX, clientY } = e;
      const { left, top, width, height } = heroRef.current.getBoundingClientRect();
      
      const x = (clientX - left) / width;
      const y = (clientY - top) / height;
      
      heroRef.current.style.setProperty('--mouse-x', x.toString());
      heroRef.current.style.setProperty('--mouse-y', y.toString());
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      const headerOffset = 80; // Reduced offset for mobile
      const elementPosition = contactSection.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      trackButtonClick('Book a Free Demo', 'Hero Section');

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const scrollToServices = () => {
    const servicesSection = document.getElementById('services');
    if (servicesSection) {
      const headerOffset = 80; // Reduced offset for mobile
      const elementPosition = servicesSection.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      trackButtonClick('Explore Services', 'Hero Section');

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const animationSequences = isDanish ? [
    'Transformer Din Virksomhed med AI-Drevne Løsninger',
    2000,
    'Transformer Din Virksomhed med Smart Automatisering',
    2000,
    'Transformer Din Virksomhed med Meta Integration',
    2000,
  ] : [
    'Transform Your Business with AI-Powered Solutions',
    2000,
    'Transform Your Business with Smart Automation',
    2000,
    'Transform Your Business with Meta Integration',
    2000,
  ];

  return (
    <section 
      id="home" 
      ref={heroRef}
      className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden"
    >
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="w-full h-full" style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0 }}>
          <Spline
            scene="https://prod.spline.design/hs7UWSE57r4xFyBy/scene.splinecode"
            style={{ width: '100%', height: '100%', pointerEvents: 'none' }}
          />
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 md:pr-8">
            <div className="inline-block mb-4 py-1 px-3 bg-indigo-900/30 backdrop-blur-sm rounded-full border border-indigo-700/30">
              <span className="text-xs font-semibold text-indigo-300">
                {isDanish ? 'NÆSTE GENERATION AI-LØSNINGER' : 'NEXT-GEN AI SOLUTIONS'}
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              <TypeAnimation
                sequence={animationSequences}
                wrapper="span"
                speed={50}
                repeat={Infinity}
                className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-indigo-400"
              />
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl">
              {isDanish
                ? 'Udnyt kraften i AI til at automatisere, engagere og udvikle din virksomhed. Vores banebrydende løsninger skaber reelle resultater gennem innovativ teknologi.'
                : 'Unlock the power of AI to automate, engage, and grow your business. Our cutting-edge solutions drive real results through innovative technology.'}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="primary" size="lg" onClick={scrollToContact}>
                {isDanish ? 'Book en Gratis Demo' : 'Book a Free Demo'}
              </Button>
              <Button variant="outline" size="lg" onClick={scrollToServices}>
                {isDanish ? 'Udforsk Services' : 'Explore Services'}
              </Button>
            </div>
          </div>

          <div className="md:w-1/2 mt-12 md:mt-0 relative">
            <div className="relative w-full max-w-lg mx-auto">
              <div className="absolute -top-4 -right-4 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
              <div className="absolute -bottom-8 -left-4 w-72 h-72 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};