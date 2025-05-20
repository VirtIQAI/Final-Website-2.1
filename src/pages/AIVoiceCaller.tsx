import React from 'react';
import { Phone, Calendar, MessageSquare, Building2, Target, TrendingUp, CheckCircle2 } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';

export const AIVoiceCaller: React.FC = () => {
  const navigate = useNavigate();
  const { i18n } = useTranslation();
  const isDanish = i18n.language === 'da';

  const pageTitle = isDanish 
    ? 'AI Voice Caller - Intelligent Telefoni & Automatisering | VirtIQ'
    : 'AI Voice Caller - Intelligent Telephony & Automation | VirtIQ';
  
  const pageDescription = isDanish
    ? 'Automatiser dine telefonopkald med avanceret AI-teknologi. Håndter aftaler, reservationer og kundeservice effektivt med vores intelligente voice calling-løsning.'
    : 'Automate your phone calls with advanced AI technology. Handle appointments, reservations, and customer service efficiently with our intelligent voice calling solution.';

  const handleDemoClick = () => {
    navigate('/#contact');
  };

  const metrics = [
    {
      label: isDanish ? 'Gennemsnitlig Svartid' : 'Average Response Time',
      value: '< 1s',
      description: isDanish ? 'Øjeblikkelig besvarelse af opkald' : 'Instant call answering'
    },
    {
      label: isDanish ? 'Kundetilfredshed' : 'Customer Satisfaction',
      value: '95%',
      description: isDanish ? 'Positiv feedback fra brugere' : 'Positive user feedback'
    },
    {
      label: isDanish ? 'Automatiseringsrate' : 'Automation Rate',
      value: '85%',
      description: isDanish ? 'Succesfuldt håndterede samtaler' : 'Successfully handled conversations'
    },
    {
      label: isDanish ? 'Tilgængelighed' : 'Availability',
      value: '24/7',
      description: isDanish ? 'Altid tilgængelig service' : 'Always available service'
    }
  ];

  const features = [
    {
      icon: <Calendar className="w-6 h-6 text-purple-400" />,
      title: isDanish ? 'Aftalebestilling' : 'Appointment Scheduling',
      description: isDanish 
        ? 'Automatisk håndtering af aftaler og kalenderbooking'
        : 'Automated handling of appointments and calendar booking'
    },
    {
      icon: <Building2 className="w-6 h-6 text-purple-400" />,
      title: isDanish ? 'Restaurantbooking' : 'Restaurant Booking',
      description: isDanish
        ? 'Effektiv håndtering af bordreservationer'
        : 'Efficient handling of table reservations'
    },
    {
      icon: <MessageSquare className="w-6 h-6 text-purple-400" />,
      title: isDanish ? 'Kundeservice' : 'Customer Support',
      description: isDanish
        ? '24/7 kundesupport med naturlig samtale'
        : '24/7 customer support with natural conversation'
    },
    {
      icon: <Phone className="w-6 h-6 text-purple-400" />,
      title: isDanish ? 'Vapi Integration' : 'Vapi Integration',
      description: isDanish
        ? 'Sømløs integration med Vapi-platformen'
        : 'Seamless integration with Vapi platform'
    }
  ];

  const benefits = [
    {
      icon: <Target className="w-8 h-8 text-purple-400" />,
      title: isDanish ? 'Intelligent Routing' : 'Intelligent Routing',
      description: isDanish
        ? 'Smart fordeling af opkald baseret på kontekst og tilgængelighed.'
        : 'Smart call distribution based on context and availability.'
    },
    {
      icon: <Calendar className="w-8 h-8 text-purple-400" />,
      title: isDanish ? 'Automatisk Booking' : 'Automated Booking',
      description: isDanish
        ? 'Effektiv håndtering af reservationer og aftaler uden manuel intervention.'
        : 'Efficient handling of reservations and appointments without manual intervention.'
    },
    {
      icon: <MessageSquare className="w-8 h-8 text-purple-400" />,
      title: isDanish ? 'Naturlig Dialog' : 'Natural Dialogue',
      description: isDanish
        ? 'Menneskelignende samtaler med avanceret sprogforståelse.'
        : 'Human-like conversations with advanced language understanding.'
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-purple-400" />,
      title: isDanish ? 'Skalerbar Løsning' : 'Scalable Solution',
      description: isDanish
        ? 'Håndter hundredvis af samtidige opkald uden kompromis.'
        : 'Handle hundreds of concurrent calls without compromise.'
    }
  ];

  const capabilities = [
    isDanish ? 'Automatisk opkaldsbesvarelse' : 'Automatic call answering',
    isDanish ? 'Intelligent samtalehåndtering' : 'Intelligent conversation handling',
    isDanish ? 'Kalenderintegration' : 'Calendar integration',
    isDanish ? 'Vapi platform integration' : 'Vapi platform integration',
    isDanish ? 'Realtids talegenkendelse' : 'Real-time speech recognition',
    isDanish ? 'Flersproget support' : 'Multi-language support',
    isDanish ? 'Avanceret routing' : 'Advanced routing',
    isDanish ? 'Detaljeret rapportering' : 'Detailed reporting'
  ];

  return (
    <main className="flex-grow pt-24">
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://virtiq.dk/services/ai-voice-caller" />
        <meta property="og:image" content="https://virtiq.dk/ai-voice-caller-og.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={pageDescription} />
        <meta name="twitter:image" content="https://virtiq.dk/ai-voice-caller-og.jpg" />
        <link rel="canonical" href="https://virtiq.dk/services/ai-voice-caller" />
        
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": isDanish ? "AI Voice Caller" : "AI Voice Caller",
            "provider": {
              "@type": "Organization",
              "name": "VirtIQ",
              "url": "https://virtiq.dk"
            },
            "description": pageDescription,
            "serviceType": "AI Voice Communication",
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
                  {isDanish ? 'AI VOICE CALLER' : 'AI VOICE CALLER'}
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                {isDanish
                  ? 'Intelligent AI-Drevet Telefoni'
                  : 'Intelligent AI-Powered Telephony'}
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                {isDanish
                  ? 'Transformer din telefonservice med avanceret AI-teknologi. Automatiser opkaldshåndtering, booking og kundeservice med naturlig samtale og intelligent routing.'
                  : 'Transform your phone service with advanced AI technology. Automate call handling, booking, and customer service with natural conversation and intelligent routing.'}
              </p>
              <Button variant="primary" size="lg" onClick={handleDemoClick} className="justify-center">
                {isDanish ? 'Kom i Gang Nu' : 'Get Started Now'}
              </Button>
            </div>

            <div>
              <div className="grid grid-cols-2 gap-4">
                {metrics.map((metric, index) => (
                  <div
                    key={index}
                    className="bg-gray-900/50 backdrop-blur-sm p-6 rounded-xl border border-gray-800 hover:border-purple-500/50 transition-all duration-300"
                  >
                    <div className="text-3xl font-bold text-purple-400 mb-2">{metric.value}</div>
                    <div className="text-lg font-semibold mb-1">{metric.label}</div>
                    <div className="text-sm text-gray-400">{metric.description}</div>
                  </div>
                ))}
              </div>
              <p className="text-gray-500 text-sm mt-4 text-center">
                {isDanish
                  ? 'De viste tal er illustrative eksempler og afspejler ikke faktiske forretningsdata.'
                  : 'The figures presented are illustrative examples and do not reflect real business data.'}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 relative bg-gray-900/30">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold mb-4">
              {isDanish ? 'Hovedfunktioner' : 'Key Features'}
            </h2>
            <p className="text-gray-300">
              {isDanish
                ? 'Omfattende løsning til intelligent telefoni og automatisering'
                : 'Comprehensive solution for intelligent telephony and automation'}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="relative group"
              >
                <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-lg opacity-0 group-hover:opacity-100 blur transition duration-300"></div>
                <div className="relative bg-gray-900/50 backdrop-blur-sm p-6 rounded-xl border border-gray-800 group-hover:border-transparent transition-all duration-300 h-full">
                  <div className="w-12 h-12 rounded-full bg-purple-500/10 flex items-center justify-center mb-4 service-icon">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-gray-400">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 relative">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold mb-4">
              {isDanish ? 'Fordele ved AI Voice Caller' : 'Benefits of AI Voice Caller'}
            </h2>
            <p className="text-gray-300">
              {isDanish
                ? 'Oplev fordelene ved intelligent telefoni og automatisering'
                : 'Experience the benefits of intelligent telephony and automation'}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="relative group"
              >
                <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-lg opacity-0 group-hover:opacity-100 blur transition duration-300"></div>
                <div className="relative bg-gray-900/50 backdrop-blur-sm p-6 rounded-xl border border-gray-800 group-hover:border-transparent transition-all duration-300 h-full">
                  <div className="w-12 h-12 rounded-full bg-purple-500/10 flex items-center justify-center mb-4 service-icon">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                  <p className="text-gray-400">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 relative">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-8">
                {isDanish ? 'Alt Du Behøver til Voice AI' : 'Everything You Need for Voice AI'}
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
                {isDanish ? 'Klar til at Transformere Din Telefoni?' : 'Ready to Transform Your Telephony?'}
              </h3>
              <p className="text-gray-300 mb-6">
                {isDanish
                  ? 'Få en gratis demo og se hvordan vores AI Voice Caller kan automatisere og forbedre din telefonservice.'
                  : 'Get a free demo and see how our AI Voice Caller can automate and improve your phone service.'}
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