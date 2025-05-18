import React from 'react';
import { BarChart, Target, TrendingUp, Users, Zap, CheckCircle2 } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';

export const MetaAds: React.FC = () => {
  const navigate = useNavigate();
  const { i18n } = useTranslation();
  const isDanish = i18n.language === 'da';

  const pageTitle = isDanish 
    ? 'Facebook & Instagram Annoncer - Professionel Meta Annoncering | VirtIQ'
    : 'Facebook & Instagram Ads - Professional Meta Advertising | VirtIQ';
  
  const pageDescription = isDanish
    ? 'Optimer dine Facebook-annoncer og Instagram-annoncer med datadrevet strategi og AI-indsigt. Få højere ROAS, bedre målretning og øget konvertering på tværs af Meta-platforme med VirtIQs ekspertise.'
    : 'Optimize your Facebook ads and Instagram ads with data-driven strategy and AI insights. Get higher ROAS, better targeting, and increased conversions across Meta platforms with VirtIQ\'s expertise.';

  const handleDemoClick = () => {
    navigate('/#contact');
  };

  const metrics = [
    {
      label: isDanish ? 'Gennemsnitlig ROAS' : 'Average ROAS',
      value: '4.2x',
      description: isDanish ? 'Return on ad spend på Facebook og Instagram' : 'Return on ad spend across Facebook and Instagram'
    },
    {
      label: isDanish ? 'CTR Forbedring' : 'CTR Improvement',
      value: '+127%',
      description: isDanish ? 'Stigning i klikrate på Meta-annoncer' : 'Click-through rate increase on Meta ads'
    },
    {
      label: isDanish ? 'CPA Reduktion' : 'CPA Reduction',
      value: '-45%',
      description: isDanish ? 'Fald i anskaffelsesomkostninger' : 'Cost per acquisition decrease'
    },
    {
      label: isDanish ? 'Konverteringsrate' : 'Conversion Rate',
      value: '+85%',
      description: isDanish ? 'Stigning i konverteringer fra sociale medier' : 'Increase in social media conversions'
    }
  ];

  const process = [
    {
      title: isDanish ? 'Facebook & Instagram Analyse' : 'Facebook & Instagram Analysis',
      description: isDanish 
        ? 'Vi analyserer dine eksisterende Facebook-annoncer og Instagram-annoncer for at identificere muligheder og forbedringspunkter.'
        : 'We audit your existing Facebook ads and Instagram ads to identify opportunities and areas for improvement.',
      icon: <Users className="w-6 h-6 text-purple-400" />
    },
    {
      title: isDanish ? 'Meta Annoncestrategi' : 'Meta Ads Strategy',
      description: isDanish
        ? 'Skræddersyet strategi baseret på dine mål, målgruppe og konkurrencesituation på Facebook og Instagram.'
        : 'Custom strategy based on your goals, target audience, and competitive landscape on Facebook and Instagram.',
      icon: <Target className="w-6 h-6 text-purple-400" />
    },
    {
      title: isDanish ? 'Kampagneopsætning' : 'Campaign Setup',
      description: isDanish
        ? 'Professionel opsætning af Facebook og Instagram kampagner med avanceret tracking.'
        : 'Professional Facebook and Instagram campaign setup with advanced tracking.',
      icon: <BarChart className="w-6 h-6 text-purple-400" />
    },
    {
      title: isDanish ? 'Optimering & Skalering' : 'Optimization & Scaling',
      description: isDanish
        ? 'Kontinuerlig optimering af dine Meta-annoncer for maksimal performance.'
        : 'Continuous optimization of your Meta ads for maximum performance.',
      icon: <TrendingUp className="w-6 h-6 text-purple-400" />
    }
  ];

  const benefits = [
    {
      icon: <Target className="w-8 h-8 text-purple-400" />,
      title: isDanish ? 'Præcis Målretning' : 'Precision Targeting',
      description: isDanish
        ? 'Nå dine ideelle kunder på Facebook og Instagram med avanceret målgruppesegmentering.'
        : 'Reach your ideal customers on Facebook and Instagram with advanced audience segmentation.'
    },
    {
      icon: <BarChart className="w-8 h-8 text-purple-400" />,
      title: isDanish ? 'Datadrevet Optimering' : 'Data-Driven Optimization',
      description: isDanish
        ? 'Kontinuerlig optimering af dine Meta-annoncer baseret på realtidsdata.'
        : 'Continuous optimization of your Meta ads based on real-time performance data.'
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-purple-400" />,
      title: isDanish ? 'Skalerbar Vækst' : 'Scalable Growth',
      description: isDanish
        ? 'Skaler dine Facebook og Instagram kampagner effektivt mens du opretholder ROAS.'
        : 'Scale your Facebook and Instagram campaigns efficiently while maintaining ROAS.'
    },
    {
      icon: <Zap className="w-8 h-8 text-purple-400" />,
      title: isDanish ? 'Hurtig Test' : 'Rapid Testing',
      description: isDanish
        ? 'Hurtig A/B-test af annoncer på tværs af Meta-platforme.'
        : 'Quick A/B testing of ads across Meta platforms.'
    }
  ];

  const features = [
    isDanish ? 'Facebook annoncemålretning' : 'Facebook ad targeting',
    isDanish ? 'Instagram annoncering' : 'Instagram advertising',
    isDanish ? 'Kreativ A/B-test' : 'Creative A/B testing',
    isDanish ? 'Meta budgetoptimering' : 'Meta budget optimization',
    isDanish ? 'Social medie analyse' : 'Social media analytics',
    isDanish ? 'ROI tracking på tværs af platforme' : 'Cross-platform ROI tracking',
    isDanish ? 'Facebook & Instagram optimering' : 'Facebook & Instagram optimization',
    isDanish ? 'Performance rapportering' : 'Performance reporting'
  ];

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    'name': isDanish ? 'Facebook & Instagram Annoncer' : 'Facebook & Instagram Ads',
    'description': pageDescription,
    'provider': {
      '@type': 'Organization',
      'name': 'VirtIQ',
      'url': 'https://virtiq.dk'
    },
    'areaServed': 'Denmark',
    'serviceType': 'Social Media Advertising'
  };

  return (
    <main className="flex-grow pt-24">
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://virtiq.dk/services/meta-ads" />
        <meta property="og:image" content="https://virtiq.dk/meta-ads-og.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={pageDescription} />
        <meta name="twitter:image" content="https://virtiq.dk/meta-ads-og.jpg" />
        <link rel="canonical" href="https://virtiq.dk/services/meta-ads" />
        
        <script type="application/ld+json">
          {JSON.stringify(schema)}
        </script>

        {/* Additional meta tags for Facebook and Instagram keywords */}
        <meta name="keywords" content={isDanish 
          ? 'Facebook annoncer, Instagram annoncer, Meta annoncering, Facebook ads, Instagram ads, sociale medier markedsføring, Meta platforme, Facebook marketing, Instagram marketing'
          : 'Facebook ads, Instagram ads, Meta advertising, social media marketing, Meta platforms, Facebook marketing, Instagram marketing'} />
      </Helmet>

      <section className="py-16 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-purple-900/10 to-transparent"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block mb-4 py-1 px-3 bg-purple-500/10 backdrop-blur-sm rounded-full border border-purple-500/20">
                <span className="text-sm font-semibold text-purple-400">
                  {isDanish ? 'FACEBOOK & INSTAGRAM ANNONCER' : 'FACEBOOK & INSTAGRAM ADS'}
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                {isDanish
                  ? 'Optimer Din Sociale Medie Annoncering'
                  : 'Optimize Your Social Media Advertising'}
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                {isDanish
                  ? 'Transformer din Facebook og Instagram annoncering med vores datadrevne tilgang. Vi hjælper virksomheder med at opnå exceptionel ROAS gennem strategisk kampagnestyring og optimering på tværs af Meta-platforme.'
                  : 'Transform your Facebook and Instagram advertising with our data-driven approach. We help businesses achieve exceptional ROAS through strategic campaign management and optimization across Meta platforms.'}
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
              {isDanish ? 'Vores Gennemprøvede Proces' : 'Our Proven Process'}
            </h2>
            <p className="text-gray-300">
              {isDanish
                ? 'En systematisk tilgang til at maksimere din performance på Facebook og Instagram'
                : 'A systematic approach to maximizing your Facebook and Instagram performance'}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <div
                key={index}
                className="relative group"
              >
                <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-lg opacity-0 group-hover:opacity-100 blur transition duration-300"></div>
                <div className="relative bg-gray-900/50 backdrop-blur-sm p-6 rounded-xl border border-gray-800 group-hover:border-transparent transition-all duration-300 h-full">
                  <div className="w-12 h-12 rounded-full bg-purple-500/10 flex items-center justify-center mb-4 service-icon">
                    {step.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                  <p className="text-gray-400">{step.description}</p>
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
              {isDanish ? 'Hvorfor Vælge Vores Meta Annoncering?' : 'Why Choose Our Meta Advertising?'}
            </h2>
            <p className="text-gray-300">
              {isDanish
                ? 'Vi kombinerer datadrevne strategier med kreativ excellence for at levere exceptionelle resultater på Facebook og Instagram.'
                : 'We combine data-driven strategies with creative excellence to deliver exceptional results on Facebook and Instagram.'}
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
                {isDanish ? 'Alt Du Behøver for Succes på Sociale Medier' : 'Everything You Need for Social Media Success'}
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
                  ? 'Få en gratis konsultation og lær hvordan vi kan hjælpe dig med at opnå bedre resultater med Facebook og Instagram annoncer.'
                  : 'Get a free consultation and learn how we can help you achieve better results with Facebook and Instagram ads.'}
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