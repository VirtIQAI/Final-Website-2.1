import React from 'react';
import { MessageSquare, Target, TrendingUp, Users, Zap, ArrowRight, CheckCircle2, BarChart } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';

export const AIOutreach: React.FC = () => {
  const navigate = useNavigate();
  const { i18n } = useTranslation();
  const isDanish = i18n.language === 'da';

  const pageTitle = isDanish 
    ? 'AI Outreach - Intelligent Kundekontakt & Personalisering | VirtIQ'
    : 'AI Outreach - Intelligent Customer Engagement & Personalization | VirtIQ';
  
  const pageDescription = isDanish
    ? 'Optimer din kundekontakt med AI-drevet personalisering. Skaler dine outreach-kampagner effektivt mens du bevarer den personlige tilgang. Få bedre engagement og højere konverteringsrater.'
    : 'Optimize your customer outreach with AI-driven personalization. Scale your outreach campaigns effectively while maintaining a personal touch. Get better engagement and higher conversion rates.';

  const handleDemoClick = () => {
    navigate('/#contact');
  };

  const metrics = [
    {
      label: isDanish ? 'Svarprocent' : 'Response Rate',
      value: '+185%',
      description: isDanish ? 'Stigning i engagement' : 'Increase in engagement'
    },
    {
      label: isDanish ? 'Lead Kvalitet' : 'Lead Quality',
      value: '+127%',
      description: isDanish ? 'Højere kvalitet af leads' : 'Higher quality leads'
    },
    {
      label: isDanish ? 'Sparet Tid' : 'Time Saved',
      value: '40hrs',
      description: isDanish ? 'Pr. måned i gennemsnit' : 'Per month on average'
    },
    {
      label: isDanish ? 'Konverteringsrate' : 'Conversion Rate',
      value: '+75%',
      description: isDanish ? 'Stigning i konverteringer' : 'Increase in conversions'
    }
  ];

  const features = [
    {
      title: isDanish ? 'Multi-Kanal Outreach' : 'Multi-Channel Outreach',
      description: isDanish 
        ? 'Koordiner problemfrit på tværs af email, LinkedIn og andre platforme'
        : 'Seamlessly coordinate across email, LinkedIn, and other platforms',
      icon: <Users className="w-6 h-6 text-purple-400" />
    },
    {
      title: isDanish ? 'Smart Analyse' : 'Smart Analytics',
      description: isDanish
        ? 'Realtids performancetracking og optimering'
        : 'Real-time performance tracking and optimization',
      icon: <BarChart className="w-6 h-6 text-purple-400" />
    },
    {
      title: isDanish ? 'A/B Test' : 'A/B Testing',
      description: isDanish
        ? 'Automatiseret test og optimering af beskeder'
        : 'Automated testing and optimization of messaging',
      icon: <Target className="w-6 h-6 text-purple-400" />
    },
    {
      title: isDanish ? 'Performance Tracking' : 'Performance Tracking',
      description: isDanish
        ? 'Omfattende analyse og rapportering'
        : 'Comprehensive analytics and reporting',
      icon: <TrendingUp className="w-6 h-6 text-purple-400" />
    }
  ];

  const benefits = [
    {
      icon: <Target className="w-8 h-8 text-purple-400" />,
      title: isDanish ? 'Smart Målretning' : 'Smart Targeting',
      description: isDanish
        ? 'AI-drevet målgruppesegmentering og personalisering for maksimal effekt.'
        : 'AI-powered audience segmentation and personalization for maximum impact.'
    },
    {
      icon: <MessageSquare className="w-8 h-8 text-purple-400" />,
      title: isDanish ? 'Personlig Kommunikation' : 'Personalized Communication',
      description: isDanish
        ? 'Dynamisk beskedtilpasning der resonerer med hver modtager.'
        : 'Dynamic message customization that resonates with each recipient.'
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-purple-400" />,
      title: isDanish ? 'Skalerbare Kampagner' : 'Scalable Campaigns',
      description: isDanish
        ? 'Nå flere potentielle kunder mens du bevarer den personlige tilgang og kvalitet.'
        : 'Reach more prospects while maintaining personal touch and quality.'
    },
    {
      icon: <Zap className="w-8 h-8 text-purple-400" />,
      title: isDanish ? 'Automatiseret Opfølgning' : 'Automated Follow-ups',
      description: isDanish
        ? 'Intelligent timing og sekvensering for optimal engagement.'
        : 'Intelligent timing and sequencing for optimal engagement.'
    }
  ];

  const capabilities = [
    isDanish ? 'Avanceret målgruppemålretning' : 'Advanced audience targeting',
    isDanish ? 'Dynamisk beskedpersonalisering' : 'Dynamic message personalization',
    isDanish ? 'Automatiserede opfølgningssekvenser' : 'Automated follow-up sequences',
    isDanish ? 'Multi-kanal koordinering' : 'Multi-channel coordination',
    isDanish ? 'Performance analyse' : 'Performance analytics',
    isDanish ? 'A/B test' : 'A/B testing',
    isDanish ? 'Kampagneoptimering' : 'Campaign optimization',
    isDanish ? 'Lead scoring' : 'Lead scoring'
  ];

  return (
    <main className="flex-grow pt-24">
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://virtiq.dk/services/ai-outreach" />
        <meta property="og:image" content="https://virtiq.dk/ai-outreach-og.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={pageDescription} />
        <meta name="twitter:image" content="https://virtiq.dk/ai-outreach-og.jpg" />
        <link rel="canonical" href="https://virtiq.dk/services/ai-outreach" />
        
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": isDanish ? "AI Outreach" : "AI Outreach",
            "provider": {
              "@type": "Organization",
              "name": "VirtIQ",
              "url": "https://virtiq.dk"
            },
            "description": pageDescription,
            "serviceType": "AI Customer Engagement",
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
                  {isDanish ? 'AI OUTREACH' : 'AI OUTREACH'}
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                {isDanish
                  ? 'Transformer Din Outreach med AI-Drevet Personalisering'
                  : 'Transform Your Outreach with AI-Powered Personalization'}
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                {isDanish
                  ? 'Skaler dine outreach-indsatser mens du bevarer den personlige tilgang. Vores AI-løsninger hjælper dig med at forbinde med flere potentielle kunder og konvertere dem til kunder.'
                  : 'Scale your outreach efforts while maintaining a personal touch. Our AI solutions help you connect with more prospects and convert them into customers.'}
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
              {isDanish ? 'Kraftfulde Funktioner' : 'Powerful Features'}
            </h2>
            <p className="text-gray-300">
              {isDanish
                ? 'Alt hvad du behøver for at skabe succesfulde outreach-kampagner'
                : 'Everything you need to create successful outreach campaigns'}
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
              {isDanish ? 'Hvorfor Vælge Vores AI Outreach Service?' : 'Why Choose Our AI Outreach Service?'}
            </h2>
            <p className="text-gray-300">
              {isDanish
                ? 'Udnyt kraften i AI til at skabe personlige, skalerbare outreach-kampagner der giver resultater.'
                : 'Leverage the power of AI to create personalized, scalable outreach campaigns that drive results.'}
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
                {isDanish ? 'Alt Du Behøver til AI Outreach' : 'Everything You Need for AI Outreach'}
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
                {isDanish ? 'Klar til at Transformere Din Outreach?' : 'Ready to Transform Your Outreach?'}
              </h3>
              <p className="text-gray-300 mb-6">
                {isDanish
                  ? 'Få en personlig demo og se hvordan vores AI-drevne outreach kan hjælpe dig med at nå flere potentielle kunder og lukke flere handler.'
                  : 'Get a personalized demo and see how our AI-powered outreach can help you reach more prospects and close more deals.'}
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