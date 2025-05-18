import React, { useState, useEffect } from 'react';
import { Button } from '../components/ui/Button';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import { CheckCircle2, MessageSquare, ShoppingCart, Scale, BarChart } from 'lucide-react';

export const AIAgent: React.FC = () => {
  const navigate = useNavigate();
  const { i18n } = useTranslation();
  const isDanish = i18n.language === 'da';

  const handleDemoClick = () => {
    navigate('/#contact');
  };

  const initialMessages = {
    shopping: [
      { type: 'bot', text: 'Welcome to our store 🚀' },
      { type: 'bot', text: 'What can we do for you?' },
      { type: 'user', text: "I'm looking for some cool t-shirts for summer, which are clean and give good vibes" },
      { type: 'bot', text: 'Here are some of our most popular summer t-shirts:' }
    ],
    legal: [
      { type: 'bot', text: "I'm a legal assistant specialised in The Danish Rent Act. Let me know how I can assist you today" },
      { type: 'user', text: 'Can I kick out my tenant?' },
      { type: 'bot', text: 'Terminating or Cancelling a Tenancy\n\nTerminating or cancelling a tenant requires that you, as the landlord, comply with the rules set out in the Danish Rent Act. It is important to distinguish between termination and cancellation, as they have different requirements and consequences:\n\nTermination of a Tenant\nAs a landlord, you may only terminate a tenant in specific situations, such as:\n\nIf you need to use the property for your own residence.' }
    ],
    shopify: [
      { type: 'bot', text: 'Welcome back, Chris! 👋 How can I help you with your store insights today?' },
      { type: 'user', text: 'What products have performed best this week, and what have performed the worst? What is trending? Have we delivered on time?' },
      { type: 'bot', text: "Here's your store performance analysis for this week:\n\n📈 Top Performers:\n• Summer Collection T-Shirt: 127 units sold (+45% from last week)\n• Eco-Friendly Hoodie: 98 units sold (+32%)\n• Urban Streetwear Cap: 76 units sold (+28%)\n\n📉 Underperforming Products:\n• Vintage Denim Jacket: 12 units (-60% from last week)\n• Classic Polo Shirt: 15 units (-45%)" }
    ]
  };

  const [visibleMessages, setVisibleMessages] = useState({
    shopping: 0,
    legal: 0,
    shopify: 0
  });

  useEffect(() => {
    const animateMessages = () => {
      Object.keys(initialMessages).forEach(chatType => {
        const messages = initialMessages[chatType];
        let currentIndex = 0;

        const showNextMessage = () => {
          if (currentIndex < messages.length) {
            setVisibleMessages(prev => ({
              ...prev,
              [chatType]: currentIndex + 1
            }));
            currentIndex++;
            setTimeout(showNextMessage, 1000);
          }
        };

        showNextMessage();
      });
    };

    // Initial animation
    animateMessages();

    // Reset and restart animation every 15 seconds
    const resetInterval = setInterval(() => {
      setVisibleMessages({
        shopping: 0,
        legal: 0,
        shopify: 0
      });
      
      // Brief pause before restarting animation
      setTimeout(animateMessages, 500);
    }, 15000);

    return () => clearInterval(resetInterval);
  }, []);

  const features = [
    { name: isDanish ? 'Naturlig sprogbehandling' : 'Natural language processing' },
    { name: isDanish ? 'Flersproget support' : 'Multi-language support' },
    { name: isDanish ? 'Læringsmuligheder' : 'Learning capabilities' },
    { name: isDanish ? 'Integrationsmuligheder' : 'Integration options' },
    { name: isDanish ? 'Kontekstuel forståelse' : 'Contextual understanding' },
    { name: isDanish ? 'Realtidssvar' : 'Real-time responses' },
    { name: isDanish ? 'Tilpasset vidensbase' : 'Custom knowledge base' },
    { name: isDanish ? 'Analyse og rapportering' : 'Analytics and reporting' }
  ];

  const powerfulFeatures = [
    {
      icon: <MessageSquare className="w-8 h-8" />,
      title: isDanish ? 'Kundesupport' : 'Customer Support',
      description: isDanish 
        ? 'AI-drevet support der yder øjeblikkelig, døgnåben kundeservice'
        : 'AI-powered support agents provide instant, 24/7 customer service'
    },
    {
      icon: <ShoppingCart className="w-8 h-8" />,
      title: isDanish ? 'E-handels Assistent' : 'E-commerce Assistant',
      description: isDanish
        ? 'Personlige købsanbefalinger og support'
        : 'Personalized shopping recommendations and support'
    },
    {
      icon: <Scale className="w-8 h-8" />,
      title: isDanish ? 'Juridisk Rådgivning' : 'Legal Advisory',
      description: isDanish
        ? 'Specialiseret juridisk indsigt og compliance-assistance'
        : 'Specialized legal insights and compliance assistance'
    },
    {
      icon: <BarChart className="w-8 h-8" />,
      title: isDanish ? 'Forretningsintelligens' : 'Business Intelligence',
      description: isDanish
        ? 'Realtidsanalyse af data og forretningsmæssige indsigter'
        : 'Real-time data analysis and business insights'
    }
  ];

  return (
    <main className="flex-grow pt-24">
      <Helmet>
        <title>{isDanish ? 'AI Agents - Intelligent Automatisering | VirtIQ' : 'AI Agents - Intelligent Automation | VirtIQ'}</title>
        <meta name="description" content={isDanish ? 'Transformer din virksomhed med intelligente AI-agenter. Automatiser komplekse opgaver, forbedre beslutningsprocesser og optimer kundeservice med vores avancerede AI-løsninger.' : 'Transform your business with intelligent AI agents. Automate complex tasks, improve decision-making processes, and optimize customer service with our advanced AI solutions.'} />
      </Helmet>

      <section className="py-16 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-purple-900/10 to-transparent"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-block mb-4 py-1 px-3 bg-purple-500/10 backdrop-blur-sm rounded-full border border-purple-500/20">
              <span className="text-sm font-semibold text-purple-400">
                {isDanish ? 'AI AGENTS' : 'AI AGENTS'}
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              {isDanish
                ? 'Transformer Din Virksomhed med Intelligente AI-Agenter'
                : 'Transform Your Business with Intelligent AI Agents'}
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              {isDanish
                ? 'Opdag forskellige anvendelser af AI-agenter skræddersyet til at løfte din virksomheds drift'
                : 'Discover diverse applications of AI agents tailored to elevate your business operations'}
            </p>
            <Button variant="primary" size="lg" onClick={handleDemoClick}>
              {isDanish ? 'Kom i Gang Nu' : 'Get Started Now'}
            </Button>
          </div>
        </div>
      </section>

      {/* Powerful Features Section */}
      <section className="py-16 relative">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold mb-4">
              {isDanish ? 'Kraftfulde Funktioner' : 'Powerful Features'}
            </h2>
            <p className="text-gray-300">
              {isDanish
                ? 'Alt hvad du behøver for at skabe succesfulde AI-agenter'
                : 'Everything you need to create successful AI agents'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {powerfulFeatures.map((feature, index) => (
              <div
                key={index}
                className="bg-gray-900/50 backdrop-blur-sm p-6 rounded-xl border border-gray-800 hover:border-purple-500/50 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-lg bg-purple-500/10 flex items-center justify-center mb-4 text-purple-400">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Live Examples Section */}
      <section className="py-16 relative">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold mb-4">
              {isDanish ? 'Live Eksempler på AI Agenter' : 'Live Examples AI Agents'}
            </h2>
            <p className="text-gray-300">
              {isDanish
                ? 'Udforsk kraften i AI-agenter gennem vores live eksempler nedenfor'
                : 'Explore the power of AI agents through our live examples below'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Shopping Assistant */}
            <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl border border-gray-800 overflow-hidden">
              <div className="p-4 border-b border-gray-800 flex items-center justify-between">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                  <span className="text-sm font-medium">Shopping Assistant</span>
                </div>
                <span className="text-xs text-purple-400">External Use Case</span>
              </div>
              <div className="p-4 h-[400px] overflow-y-auto space-y-4">
                {initialMessages.shopping.slice(0, visibleMessages.shopping).map((message, index) => (
                  <div
                    key={index}
                    className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'} opacity-0 animate-fade-in`}
                    style={{
                      animation: 'fadeIn 0.5s ease-in-out forwards',
                      animationDelay: `${index * 0.5}s`
                    }}
                  >
                    <div
                      className={`max-w-[80%] px-4 py-2 rounded-lg ${
                        message.type === 'user'
                          ? 'bg-purple-600 text-white'
                          : 'bg-gray-800 text-gray-200'
                      }`}
                    >
                      <p className="text-sm whitespace-pre-line">{message.text}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="p-4 border-t border-gray-800">
                <div className="flex items-center bg-gray-800 rounded-lg px-3 py-2">
                  <input
                    type="text"
                    placeholder="Type your message..."
                    className="flex-1 bg-transparent border-none text-sm text-gray-300 placeholder-gray-500 focus:outline-none"
                    disabled
                  />
                  <button className="ml-2 text-purple-400 hover:text-purple-300 transition-colors">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>

            {/* Legal Assistant */}
            <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl border border-gray-800 overflow-hidden">
              <div className="p-4 border-b border-gray-800 flex items-center justify-between">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                  <span className="text-sm font-medium">Legal Assistant</span>
                </div>
                <span className="text-xs text-purple-400">External Use Case</span>
              </div>
              <div className="p-4 h-[400px] overflow-y-auto space-y-4">
                {initialMessages.legal.slice(0, visibleMessages.legal).map((message, index) => (
                  <div
                    key={index}
                    className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'} opacity-0 animate-fade-in`}
                    style={{
                      animation: 'fadeIn 0.5s ease-in-out forwards',
                      animationDelay: `${index * 0.5}s`
                    }}
                  >
                    <div
                      className={`max-w-[80%] px-4 py-2 rounded-lg ${
                        message.type === 'user'
                          ? 'bg-purple-600 text-white'
                          : 'bg-gray-800 text-gray-200'
                      }`}
                    >
                      <p className="text-sm whitespace-pre-line">{message.text}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="p-4 border-t border-gray-800">
                <div className="flex items-center bg-gray-800 rounded-lg px-3 py-2">
                  <input
                    type="text"
                    placeholder="Type your message..."
                    className="flex-1 bg-transparent border-none text-sm text-gray-300 placeholder-gray-500 focus:outline-none"
                    disabled
                  />
                  <button className="ml-2 text-purple-400 hover:text-purple-300 transition-colors">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>

            {/* Shopify Insights Assistant */}
            <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl border border-gray-800 overflow-hidden">
              <div className="p-4 border-b border-gray-800 flex items-center justify-between">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                  <span className="text-sm font-medium">Shopify Insights Assistant</span>
                </div>
                <span className="text-xs text-purple-400">Internal Use Case</span>
              </div>
              <div className="p-4 h-[400px] overflow-y-auto space-y-4">
                {initialMessages.shopify.slice(0, visibleMessages.shopify).map((message, index) => (
                  <div
                    key={index}
                    className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'} opacity-0 animate-fade-in`}
                    style={{
                      animation: 'fadeIn 0.5s ease-in-out forwards',
                      animationDelay: `${index * 0.5}s`
                    }}
                  >
                    <div
                      className={`max-w-[80%] px-4 py-2 rounded-lg ${
                        message.type === 'user'
                          ? 'bg-purple-600 text-white'
                          : 'bg-gray-800 text-gray-200'
                      }`}
                    >
                      <p className="text-sm whitespace-pre-line">{message.text}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="p-4 border-t border-gray-800">
                <div className="flex items-center bg-gray-800 rounded-lg px-3 py-2">
                  <input
                    type="text"
                    placeholder="Type your message..."
                    className="flex-1 bg-transparent border-none text-sm text-gray-300 placeholder-gray-500 focus:outline-none"
                    disabled
                  />
                  <button className="ml-2 text-purple-400 hover:text-purple-300 transition-colors">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 relative">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-8">
                {isDanish ? 'Alt Du Behøver til AI Agenter' : 'Everything You Need for AI Agents'}
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle2 className="w-5 h-5 text-purple-400 flex-shrink-0" />
                    <span className="text-gray-300">{feature.name}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-gray-900/50 backdrop-blur-sm p-8 rounded-xl border border-gray-800">
              <h3 className="text-2xl font-bold mb-4">
                {isDanish ? 'Klar til at Transformere Din Virksomhed?' : 'Ready to Transform Your Business?'}
              </h3>
              <p className="text-gray-300 mb-6">
                {isDanish
                  ? 'Få en gratis konsultation og lær hvordan vores AI-agenter kan hjælpe med at automatisere og forbedre din virksomheds drift.'
                  : 'Get a free consultation and learn how our AI agents can help automate and improve your business operations.'}
              </p>
              <Button variant="primary" size="lg" fullWidth onClick={handleDemoClick}>
                {isDanish ? 'Book en Gratis Demo' : 'Book a Free Demo'}
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};