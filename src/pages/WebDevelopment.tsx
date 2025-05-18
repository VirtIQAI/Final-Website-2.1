import React, { useEffect, useRef } from 'react';
import { Code, Zap, Layout, Smartphone, Globe, Shield, Sparkles, CheckCircle2 } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';

export const WebDevelopment: React.FC = () => {
  const workflowRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
  const { i18n } = useTranslation();
  const isDanish = i18n.language === 'da';

  const pageTitle = isDanish 
    ? 'Webudvikling - Moderne & Højtydende Hjemmesider | VirtIQ'
    : 'Web Development - Modern & High-Performance Websites | VirtIQ';
  
  const pageDescription = isDanish
    ? 'Få en professionel, hurtig og brugervenlig hjemmeside der konverterer. Vi bygger moderne webløsninger med fokus på performance, SEO og brugeroplevelse.'
    : 'Get a professional, fast, and user-friendly website that converts. We build modern web solutions focusing on performance, SEO, and user experience.';

  const handleDemoClick = () => {
    navigate('/#contact');
  };

  useEffect(() => {
    const updateConnections = () => {
      const workflow = workflowRef.current;
      if (!workflow) return;

      const nodes = workflow.querySelectorAll('.workflow-node');
      const connections = workflow.querySelectorAll('.connection-line');

      nodes.forEach((node, index) => {
        if (index < nodes.length - 1) {
          const currentNode = node.getBoundingClientRect();
          const nextNode = nodes[index + 1].getBoundingClientRect();
          const connection = connections[index] as HTMLElement;

          const startX = currentNode.right - workflow.getBoundingClientRect().left;
          const startY = currentNode.top + currentNode.height / 2 - workflow.getBoundingClientRect().top;
          const endX = nextNode.left - workflow.getBoundingClientRect().left;
          const endY = nextNode.top + nextNode.height / 2 - workflow.getBoundingClientRect().top;

          const length = Math.sqrt(Math.pow(endX - startX, 2) + Math.pow(endY - startY, 2));
          const angle = Math.atan2(endY - startY, endX - startX) * 180 / Math.PI;

          connection.style.width = `${length}px`;
          connection.style.left = `${startX}px`;
          connection.style.top = `${startY}px`;
          connection.style.transform = `rotate(${angle}deg)`;
        }
      });
    };

    updateConnections();
    window.addEventListener('resize', updateConnections);
    return () => window.removeEventListener('resize', updateConnections);
  }, []);

  const features = [
    {
      icon: <Layout className="w-6 h-6 text-purple-400" />,
      title: isDanish ? 'Responsivt Design' : 'Responsive Design',
      description: isDanish 
        ? 'Hjemmesider der ser perfekte ud og fungerer på alle enheder'
        : 'Websites that look and function perfectly on all devices'
    },
    {
      icon: <Zap className="w-6 h-6 text-purple-400" />,
      title: isDanish ? 'Lynhurtig' : 'Lightning Fast',
      description: isDanish
        ? 'Optimeret performance for hurtige indlæsningstider'
        : 'Optimized performance for quick loading times'
    },
    {
      icon: <Shield className="w-6 h-6 text-purple-400" />,
      title: isDanish ? 'Sikker & Pålidelig' : 'Secure & Reliable',
      description: isDanish
        ? 'Bygget med sikkerhed i fokus og regelmæssige opdateringer'
        : 'Built with security best practices and regular updates'
    },
    {
      icon: <Code className="w-6 h-6 text-purple-400" />,
      title: isDanish ? 'Ren Kode' : 'Clean Code',
      description: isDanish
        ? 'Vedligeholdelig og skalerbar kodebase'
        : 'Maintainable and scalable codebase'
    },
    {
      icon: <Globe className="w-6 h-6 text-purple-400" />,
      title: isDanish ? 'SEO Optimeret' : 'SEO Optimized',
      description: isDanish
        ? 'Bygget for maksimal synlighed i søgemaskiner'
        : 'Built for maximum search engine visibility'
    },
    {
      icon: <Sparkles className="w-6 h-6 text-purple-400" />,
      title: isDanish ? 'Moderne UI/UX' : 'Modern UI/UX',
      description: isDanish
        ? 'Smukke, intuitive brugergrænseflader'
        : 'Beautiful, intuitive user interfaces'
    }
  ];

  const workflow = [
    { 
      title: isDanish ? 'Opdagelse' : 'Discovery',
      description: isDanish ? 'Forstå dine behov' : 'Understanding your needs'
    },
    { 
      title: isDanish ? 'Planlægning' : 'Planning',
      description: isDanish ? 'Skabe køreplanen' : 'Creating the roadmap'
    },
    { 
      title: isDanish ? 'Design' : 'Design',
      description: isDanish ? 'Udforme oplevelsen' : 'Crafting the experience'
    },
    { 
      title: isDanish ? 'Udvikling' : 'Development',
      description: isDanish ? 'Bygge din løsning' : 'Building your solution'
    },
    { 
      title: isDanish ? 'Test' : 'Testing',
      description: isDanish ? 'Sikre kvaliteten' : 'Ensuring quality'
    },
    { 
      title: isDanish ? 'Lancering' : 'Launch',
      description: isDanish ? 'Gå live' : 'Going live'
    }
  ];

  const capabilities = [
    isDanish ? 'Skræddersyet hjemmesideudvikling' : 'Custom website development',
    isDanish ? 'Responsivt design implementering' : 'Responsive design implementation',
    isDanish ? 'Performance optimering' : 'Performance optimization',
    isDanish ? 'SEO integration' : 'SEO integration',
    isDanish ? 'Analytics opsætning' : 'Analytics setup',
    isDanish ? 'Sikkerhedsforstærkning' : 'Security hardening',
    isDanish ? 'Content management systemer' : 'Content management systems',
    isDanish ? 'E-handelsløsninger' : 'E-commerce solutions'
  ];

  return (
    <main className="flex-grow pt-24">
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://virtiq.dk/services/website-development" />
        <meta property="og:image" content="https://virtiq.dk/web-development-og.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={pageDescription} />
        <meta name="twitter:image" content="https://virtiq.dk/web-development-og.jpg" />
        <link rel="canonical" href="https://virtiq.dk/services/website-development" />
        
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": isDanish ? "Webudvikling" : "Web Development",
            "provider": {
              "@type": "Organization",
              "name": "VirtIQ",
              "url": "https://virtiq.dk"
            },
            "description": pageDescription,
            "serviceType": "Web Development",
            "areaServed": "Denmark",
            "offers": {
              "@type": "Offer",
              "availability": "https://schema.org/InStock",
              "price": "0",
              "priceCurrency": "DKK",
              "seller": {
                "@type": "Organization",
                "name": "VirtIQ"
              }
            }
          })}
        </script>
      </Helmet>

      <section className="py-16 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-purple-900/10 to-transparent"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block mb-4 py-1 px-3 bg-purple-500/10 backdrop-blur-sm rounded-full border border-purple-500/20">
                <span className="text-sm font-semibold text-purple-400">
                  {isDanish ? 'SKRÆDDERSYEDE HJEMMESIDER' : 'TAILORED WEBSITES'}
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                {isDanish
                  ? 'Moderne Webudviklingsløsninger'
                  : 'Modern Web Development Solutions'}
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                {isDanish
                  ? 'Transformer din digitale tilstedeværelse med banebrydende webudvikling, der kombinerer smukt design, kraftfuld funktionalitet og exceptionel brugeroplevelse.'
                  : 'Transform your digital presence with cutting-edge web development that combines beautiful design, powerful functionality, and exceptional user experience.'}
              </p>
              <Button variant="primary" size="lg" onClick={handleDemoClick} className="justify-center">
                {isDanish ? 'Kom i Gang Nu' : 'Get Started Now'}
              </Button>
            </div>
            <div className="relative">
              <div className="relative w-full aspect-square max-w-lg mx-auto">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/30 to-indigo-500/30 rounded-full animate-blob blur-xl"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/30 to-purple-500/30 rounded-full animate-blob animation-delay-2000 blur-xl"></div>
                <div className="relative h-full rounded-2xl overflow-hidden border border-gray-800 bg-gray-900/50 backdrop-blur-sm">
                  <div className="absolute top-0 left-0 right-0 h-8 bg-gray-800 flex items-center px-4">
                    <div className="flex space-x-2">
                      <div className="w-3 h-3 rounded-full bg-red-500"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                      <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    </div>
                  </div>
                  <div className="p-8 pt-16">
                    <div className="animate-pulse space-y-4">
                      <div className="h-4 bg-gray-700 rounded w-3/4"></div>
                      <div className="h-4 bg-gray-700 rounded"></div>
                      <div className="h-4 bg-gray-700 rounded w-5/6"></div>
                    </div>
                    <div className="mt-8 grid grid-cols-2 gap-4">
                      <div className="h-24 bg-gray-800 rounded-lg animate-pulse"></div>
                      <div className="h-24 bg-gray-800 rounded-lg animate-pulse"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 relative">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            {isDanish ? 'Vores Udviklingstilgang' : 'Our Development Approach'}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-gray-900/50 backdrop-blur-sm p-6 rounded-xl border border-gray-800 hover:border-purple-500/50 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-lg bg-purple-500/10 flex items-center justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16">
            {isDanish ? 'Udviklingsarbejdsgang' : 'Development Workflow'}
          </h2>
          <div className="relative" ref={workflowRef}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
              {workflow.map((step, index) => (
                <div
                  key={index}
                  className="workflow-node bg-gray-900/50 backdrop-blur-sm p-6 rounded-xl border border-gray-800 hover:border-purple-500/50 transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-full bg-purple-500/10 flex items-center justify-center mb-4">
                    <span className="text-xl font-bold text-purple-400">{index + 1}</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                  <p className="text-gray-400">{step.description}</p>
                </div>
              ))}
            </div>
            {workflow.slice(0, -1).map((_, index) => (
              <div key={index} className="connection-line"></div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 relative">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-8">
                {isDanish ? 'Alt Du Behøver for Web Succes' : 'Everything You Need for Web Success'}
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {capabilities.map((capability, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle2 className="w-5 h-5 text-purple-400 flex-shrink-0" />
                    <span className="text-gray-300">{capability}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-gray-900/50 backdrop-blur-sm p-8 rounded-xl border border-gray-800">
              <h3 className="text-2xl font-bold mb-4">
                {isDanish ? 'Klar til at Bygge Din Hjemmeside?' : 'Ready to Build Your Website?'}
              </h3>
              <p className="text-gray-300 mb-6">
                {isDanish
                  ? 'Få en gratis konsultation og lær hvordan vi kan hjælpe dig med at skabe en flot, højtydende hjemmeside.'
                  : 'Get a free consultation and learn how we can help you create a stunning, high-performance website.'}
              </p>
              <Button variant="primary" size="lg" fullWidth onClick={handleDemoClick} className="justify-center">
                {isDanish ? 'Book en Gratis Demo' : 'Book a Free Demo'}
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};