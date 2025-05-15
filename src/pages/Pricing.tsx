import React from 'react';
import { Check } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

export const Pricing: React.FC = () => {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const isDanish = i18n.language === 'da';

  const pageTitle = isDanish ? 'Priser - AI-løsninger & Services | VirtIQ' : 'Pricing - AI Solutions & Services | VirtIQ';
  const pageDescription = isDanish
    ? 'Gennemsigtige priser for VirtIQs AI-løsninger og services. Vælg mellem fleksible planer designet til at matche din virksomheds behov og budget.'
    : 'Transparent pricing for VirtIQ\'s AI solutions and services. Choose between flexible plans designed to match your business needs and budget.';

  const handleDemoClick = () => {
    navigate('/#contact');
  };

  const plans = [
    {
      name: isDanish ? 'Build & Bounce' : 'Build & Bounce',
      description: isDanish 
        ? 'For virksomheder der ønsker at implementere AI-løsninger uden løbende vedligeholdelse og optimering (Engangsbetaling)'
        : 'For businesses who want to implement AI solutions but don\'t need ongoing maintenance and optimization (One-time fee)',
      features: isDanish ? [
        'Skræddersyet AI Chatbot for din virksomhed',
        'Opsætning af Meta kampagner',
        'Email support under opsætning',
        'Tilpassede AI automatiserings-workflows',
        'Engangsimplementering'
      ] : [
        'Tailored AI Chatbot for your business',
        'Basic Meta Ads campaign',
        'Email support during setup',
        'Custom AI automation workflows',
        'One-time implementation'
      ],
      cta: isDanish ? 'Book en Gratis Demo' : 'Book a Free Demo',
      oneTime: true,
    },
    {
      name: 'Pro',
      description: isDanish 
        ? 'Avancerede funktioner med fuld hosting, vedligeholdelse og optimering inkluderet (Månedlig betaling)'
        : 'Advanced features with full hosting, maintenance and optimization included (Monthly fee)',
      features: isDanish ? [
        'Avanceret AI Chatbot tilpasning',
        'Ugentlige performancerapporter',
        'Fuld Meta Ads integration',
        'Prioriteret support',
        'Ubegrænset AI automatiseringsworkflows',
        'Inkluderer hosting og vedligeholdelse'
      ] : [
        'Advanced AI Chatbot customization',
        'Weekly performance reports',
        'Full Meta Ads integration',
        'Priority support',
        'Unlimited AI automation workflows',
        'Includes hosting and maintenance'
      ],
      cta: isDanish ? 'Book en Gratis Demo' : 'Book a Free Demo',
      oneTime: false,
      popular: true,
    },
    {
      name: isDanish ? 'Enterprise' : 'Enterprise',
      description: isDanish 
        ? 'Skræddersyede løsninger med dedikeret hosting og support (Månedlig betaling)'
        : 'Custom solutions with dedicated hosting and support (Monthly fee)',
      features: isDanish ? [
        'Fuldt tilpassede AI-løsninger',
        'Realtidsanalyse & rapportering',
        '24/7 premium support',
        'Tilpassede integrationer',
        'On-premise implementeringsmuligheder',
        'Dedikeret hostinginfrastruktur'
      ] : [
        'Fully customized AI solutions',
        'Real-time analytics & reporting',
        '24/7 premium support',
        'Custom integrations',
        'On-premise deployment options',
        'Dedicated hosting infrastructure'
      ],
      cta: isDanish ? 'Book en Gratis Demo' : 'Book a Free Demo',
      oneTime: false,
    },
  ];

  return (
    <main>
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`https://virtiq.dk${isDanish ? '/priser' : '/pricing'}`} />
        <link rel="canonical" href={`https://virtiq.dk${isDanish ? '/priser' : '/pricing'}`} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={pageDescription} />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "PriceSpecification",
            "name": pageTitle,
            "description": pageDescription,
            "url": `https://virtiq.dk${isDanish ? '/priser' : '/pricing'}`,
            "offers": plans.map(plan => ({
              "@type": "Offer",
              "name": plan.name,
              "description": plan.description,
              "priceCurrency": "DKK",
              "availability": "https://schema.org/InStock",
              "seller": {
                "@type": "Organization",
                "name": "VirtIQ",
                "url": "https://virtiq.dk"
              }
            }))
          })}
        </script>
      </Helmet>

      <section className="py-24 relative bg-black overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-80 bg-gradient-to-b from-purple-900/10 to-transparent"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-indigo-500/10 rounded-full filter blur-3xl"></div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {isDanish ? 'Simple, Gennemsigtige Priser' : 'Simple, Transparent Plans'}
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-indigo-500 mx-auto mb-6"></div>
            <p className="text-lg text-gray-300">
              {isDanish 
                ? 'Vælg den perfekte plan til din virksomheds behov'
                : 'Choose the perfect plan for your business needs'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <div key={index} className="relative group h-full">
                <div className="relative h-full">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-lg opacity-0 group-hover:opacity-100 blur transition duration-300"></div>
                  <div className="relative bg-gray-900/50 backdrop-blur-sm p-8 rounded-lg border border-gray-800 group-hover:border-transparent transition-all duration-300 h-full flex flex-col">
                    {plan.popular && (
                      <div className="absolute -top-4 -right-4">
                        <div className="bg-gradient-to-r from-purple-500 to-indigo-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                          {isDanish ? 'Mest Populær' : 'Most Popular'}
                        </div>
                      </div>
                    )}
                    <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                    <p className="text-gray-400 mb-8">{plan.description}</p>
                    
                    <ul className="space-y-4 mb-8 flex-grow">
                      {plan.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start">
                          <Check className="w-5 h-5 text-purple-400 mt-1 mr-3 flex-shrink-0" />
                          <span className="text-gray-300">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <Button
                      variant="primary"
                      size="lg"
                      fullWidth
                      onClick={handleDemoClick}
                    >
                      {plan.cta}
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};