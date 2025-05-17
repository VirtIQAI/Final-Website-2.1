import React from 'react';
import { BarChart, Target, TrendingUp, Users, Zap, CheckCircle2 } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';

export const AIAutomation: React.FC = () => {
  const navigate = useNavigate();
  const { i18n } = useTranslation();
  const isDanish = i18n.language === 'da';

  const pageTitle = isDanish 
    ? 'AI Automatisering - Intelligent Procesoptimering | VirtIQ'
    : 'AI Automation - Intelligent Process Optimization | VirtIQ';
  
  const pageDescription = isDanish
    ? 'Optimer din virksomheds processer med intelligent AI-automatisering. Reducer omkostninger, øg effektiviteten og accelerer væksten med vores skræddersyede AI-løsninger.'
    : 'Optimize your business processes with intelligent AI automation. Reduce costs, increase efficiency, and accelerate growth with our tailored AI solutions.';

  const handleDemoClick = () => {
    navigate('/#contact');
  };

  const metrics = [
    {
      label: isDanish ? 'Gennemsnitlig ROAS' : 'Average ROAS',
      value: '4.2x',
      description: isDanish ? 'Return on ad spend på tværs af kampagner' : 'Return on ad spend across campaigns'
    },
    {
      label: isDanish ? 'CTR Forbedring' : 'CTR Improvement',
      value: '+127%',
      description: isDanish ? 'Stigning i klikrate' : 'Click-through rate increase'
    },
    {
      label: isDanish ? 'CPA Reduktion' : 'CPA Reduction',
      value: '-45%',
      description: isDanish ? 'Fald i anskaffelsesomkostninger' : 'Cost per acquisition decrease'
    },
    {
      label: isDanish ? 'Konverteringsrate' : 'Conversion Rate',
      value: '+85%',
      description: isDanish ? 'Stigning i konverteringer' : 'Increase in conversion rates'
    }
  ];

  const process = [
    {
      title: isDanish ? 'Kontoanalyse' : 'Account Analysis',
      description: isDanish 
        ? 'Vi analyserer din eksisterende Meta Ads-konto for at identificere muligheder og forbedringspunkter.'
        : 'We audit your existing Meta Ads account to identify opportunities and areas for improvement.',
      icon: <Users className="w-6 h-6 text-purple-400" />
    },
    {
      title: isDanish ? 'Strategiudvikling' : 'Strategy Development',
      description: isDanish
        ? 'Skræddersyet strategi baseret på dine mål, målgruppe og konkurrencesituation.'
        : 'Custom strategy based on your goals, target audience, and competitive landscape.',
      icon: <Target className="w-6 h-6 text-purple-400" />
    },
    {
      title: isDanish ? 'Kampagneopsætning' : 'Campaign Setup',
      description: isDanish
        ? 'Professionel kampagnestruktur med avanceret tracking og optimeringsindstillinger.'
        : 'Professional campaign structure with advanced tracking and optimization settings.',
      icon: <BarChart className="w-6 h-6 text-purple-400" />
    },
    {
      title: isDanish ? 'Optimering & Skalering' : 'Optimization & Scaling',
      description: isDanish
        ? 'Kontinuerlig overvågning og optimering for at skalere vindende kampagner.'
        : 'Continuous monitoring and optimization to scale winning campaigns.',
      icon: <TrendingUp className="w-6 h-6 text-purple-400" />
    }
  ];

  const benefits = [
    {
      icon: <Target className="w-8 h-8 text-purple-400" />,
      title: isDanish ? 'Præcis Målretning' : 'Precision Targeting',
      description: isDanish
        ? 'Nå dine ideelle kunder med avanceret målgruppesegmentering og målretningsmuligheder.'
        : 'Reach your ideal customers with advanced audience segmentation and targeting capabilities.'
    },
    {
      icon: <BarChart className="w-8 h-8 text-purple-400" />,
      title: isDanish ? 'Datadrevet Optimering' : 'Data-Driven Optimization',
      description: isDanish
        ? 'Kontinuerlig kampagneoptimering baseret på realtidsdata og AI-indsigt.'
        : 'Continuous campaign optimization based on real-time performance data and AI insights.'
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-purple-400" />,
      title: isDanish ? 'Skalerbar Vækst' : 'Scalable Growth',
      description: isDanish
        ? 'Skaler dine kampagner effektivt mens du opretholder eller forbedrer ROAS.'
        : 'Scale your campaigns efficiently while maintaining or improving ROAS.'
    },
    {
      icon: <Zap className="w-8 h-8 text-purple-400" />,
      title: isDanish ? 'Hurtig Test' : 'Rapid Testing',
      description: isDanish
        ? 'Hurtig iteration på annoncekreariver og tekst for at finde vindende kombinationer.'
        : 'Quick iteration on ad creative and copy to find winning combinations.'
    }
  ];

  const features = [
    isDanish ? 'Avanceret målgruppemålretning' : 'Advanced audience targeting',
    isDanish ? 'Tilpasset konverteringssporing' : 'Custom conversion tracking',
    isDanish ? 'Kreativ A/B-test' : 'Creative A/B testing',
    isDanish ? 'Automatiseret budforvaltning' : 'Automated bid management',
    isDanish ? 'Performanceanalyse' : 'Performance analytics',
    isDanish ? 'ROI-sporing' : 'ROI tracking',
    isDanish ? 'Kampagneoptimering' : 'Campaign optimization',
    isDanish ? 'Regelmæssige performancerapporter' : 'Regular performance reports'
  ];

  return (
    <main className="flex-grow pt-24">
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://virtiq.dk/services/ai-automation" />
        <meta property="og:image" content="https://virtiq.dk/ai-automation-og.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={pageDescription} />
        <meta name="twitter:image" content="https://virtiq.dk/ai-automation-og.jpg" />
        <link rel="canonical" href="https://virtiq.dk/services/ai-automation" />
        
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": isDanish ? "AI Automatisering" : "AI Automation",
            "provider": {
              "@type": "Organization",
              "name": "VirtIQ",
              "url": "https://virtiq.dk"
            },
            "description": pageDescription,
            "serviceType": "AI Process Automation",
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
                  {isDanish ? 'AI AUTOMATISERINGS EKSPERTER' : 'AI AUTOMATION EXPERTS'}
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                {isDanish
                  ? 'Transformer Din Virksomhed med AI-Drevet Automatisering'
                  : 'Transform Your Business with AI-Powered Automation'}
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                {isDanish
                  ? 'Udnyt kraften i kunstig intelligens til at strømline operationer, reducere omkostninger og accelerere vækst med vores intelligente automatiseringsløsninger.'
                  : 'Harness the power of artificial intelligence to streamline operations, reduce costs, and accelerate growth with our intelligent automation solutions.'}
              </p>
              <Button variant="primary" size="lg" onClick={handleDemoClick} className="justify-center">
                {isDanish ? 'Start Din Automatiseringsrejse' : 'Start Your Automation Journey'}
              </Button>
            </div> {/* closes the left column */}
<div className="relative flex justify-center">
  <img
    src="/public/N8N-workflow.webp"
    alt="n8n workflow visualization"
    className="relative z-10 w-full max-w-2xl rounded-lg shadow-xl"
  />
  <div className="absolute inset-0 max-w-2xl mx-auto rounded-lg blur-2xl bg-purple-500/40 opacity-80 animate-pulse"></div>
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
            {process.map((step, index) => (
              <div
                key={index}
                className="bg-gray-900/50 backdrop-blur-sm p-6 rounded-xl border border-gray-800 hover:border-purple-500/50 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-lg bg-purple-500/10 flex items-center justify-center mb-4">
                  {step.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-gray-400">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 relative">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold mb-4">
              {isDanish ? 'Hvorfor Vælge Vores AI Automation Service?' : 'Why Choose Our AI Automation Service?'}
            </h2>
            <p className="text-gray-300">
              {isDanish
                ? 'Vi kombinerer datadrevne strategier med kreativ excellence for at levere exceptionelle resultater.'
                : 'We combine data-driven strategies with creative excellence to deliver exceptional results.'}
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
                {isDanish ? 'Alt Du Behøver for AI Automation Succes' : 'Everything You Need for AI Automation Success'}
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle2 className="w-5 h-5 text-purple-400 flex-shrink-0" />
                    <span className="text-gray-300">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-gray-900/50 backdrop-blur-sm p-8 rounded-xl border border-gray-800">
              <h3 className="text-2xl font-bold mb-4">
                {isDanish ? 'Klar til at Booste Din ROAS?' : 'Ready to Boost Your ROAS?'}
              </h3>
              <p className="text-gray-300 mb-6">
                {isDanish
                  ? 'Få en gratis konsultation og lær hvordan vi kan hjælpe dig med at opnå bedre resultater med AI Automation.'
                  : 'Get a free consultation and learn how we can help you achieve better results with AI Automation.'}
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