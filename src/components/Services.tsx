import React from 'react';
import { ServiceCard } from './ui/ServiceCard';
import { Bot, MessagesSquare, BarChart, Globe, Settings, Phone } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export const Services: React.FC = () => {
  const { t, i18n } = useTranslation();
  const isDanish = i18n.language === 'da';

  const services = [
    {
      id: 1,
      title: 'AI Agents',
      description: isDanish
        ? 'Intelligente AI-agenter der automatiserer komplekse opgaver og beslutningsprocesser for din virksomhed.'
        : 'Intelligent AI agents that automate complex tasks and decision-making processes for your business.',
      icon: <Bot className="text-purple-400" size={48} />,
      href: '/services/ai-agents'
    },
    {
      id: 2,
      title: isDanish ? 'AI-Automatisering' : 'AI Automation',
      description: isDanish
        ? 'Strømlin arbejdsgange og øg effektiviteten med tilpassede AI-automatiseringsløsninger.'
        : 'Streamline workflows and boost efficiency with customized AI automation solutions.',
      icon: <Settings className="text-purple-400" size={48} />,
      href: '/services/ai-automation'
    },
    {
      id: 4,
      title: isDanish ? 'AI-Outreach' : 'AI Outreach',
      description: isDanish
        ? 'Udnyt AI til at optimere og personliggøre dine kunde-outreach kampagner.'
        : 'Leverage AI to optimize and personalize your customer outreach campaigns.',
      icon: <MessagesSquare className="text-purple-400" size={48} />,
      href: '/services/ai-outreach'
    },
    {
      id: 5,
      title: isDanish ? 'AI Voice Caller' : 'AI Voice Caller',
      description: isDanish
        ? 'Automatiser telefonopkald med intelligent AI-teknologi til booking og kundeservice.'
        : 'Automate phone calls with intelligent AI technology for booking and customer service.',
      icon: <Phone className="text-purple-400" size={48} />,
      href: '/services/ai-voice-caller'
    },
    {
      id: 6,
      title: isDanish ? 'Meta-Annoncer' : 'Meta Ads',
      description: isDanish
        ? 'Skab målrettede, højtkonverterende annoncekampagner på Meta-platforme.'
        : 'Create targeted, high-converting ad campaigns across Meta platforms.',
      icon: <BarChart className="text-purple-400" size={48} />,
      href: '/services/meta-ads'
    },
    {
      id: 7,
      title: isDanish ? 'Webudvikling' : 'Website Development',
      description: isDanish
        ? 'Byg imponerende, højtydende hjemmesider designet til konvertering og engagement.'
        : 'Build stunning, high-performance websites designed for conversion and engagement.',
      icon: <Globe className="text-purple-400" size={48} />,
      href: '/services/website-development'
    },
  ];

  return (
    <section id="services" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black to-indigo-950/20 pointer-events-none"></div>
      <div className="absolute top-0 left-0 w-full h-full bg-grid-pattern opacity-5"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {isDanish ? 'Vores Services' : 'Our Services'}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-indigo-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-300">
            {isDanish
              ? 'Omfattende AI og digital marketing-løsninger der hjælper din virksomhed med at trives i den digitale tidsalder.'
              : 'Comprehensive AI and digital marketing solutions to help your business thrive in the digital age.'}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <ServiceCard 
              key={service.id}
              title={service.title}
              description={service.description}
              icon={service.icon}
              href={service.href}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
