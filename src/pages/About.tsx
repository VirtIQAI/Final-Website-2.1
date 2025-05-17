import React from 'react';
import { Users, Target, Award, Zap, Phone, Mail, Facebook, Linkedin } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';

export const About: React.FC = () => {
  const navigate = useNavigate();
  const { i18n } = useTranslation();
  const isDanish = i18n.language === 'da';

  const pageTitle = isDanish ? 'Om VirtIQ - Din Partner i AI Innovation' : 'About VirtIQ - Your AI Innovation Partner';
  const pageDescription = isDanish 
    ? 'Lær mere om VirtIQ - et førende AI-Agency der specialiserer sig i AI-automatisering, chatbots og digitale løsninger. Mød vores team og udforsk vores mission.'
    : 'Learn more about VirtIQ - a leading AI Agency specializing in AI automation, chatbots, and digital solutions. Meet our team and explore our mission.';

  const handleDemoClick = () => {
    navigate('/#contact');
  };

  const team = [
    {
      name: 'Lucas Vange',
      role: isDanish ? 'CEO & Founder' : 'CEO & Founder',
 image: '/lucas-vange.jpg',
      socials: [
        { icon: <Phone className="w-5 h-5" />, href: 'tel:+4530240676' },
        { icon: <Mail className="w-5 h-5" />, href: 'mailto:lucas@virtiq.dk' },
        { icon: <Facebook className="w-5 h-5" />, href: 'https://www.facebook.com/lucas.vange' },
        { icon: <Linkedin className="w-5 h-5" />, href: 'https://www.linkedin.com/in/lucas-vange-6a4bbaa3/' }
      ]
    }
  ];

  const values = [
    {
      icon: <Target className="w-8 h-8 text-purple-400" />,
      title: isDanish ? 'Innovation Først' : 'Innovation First',
      description: isDanish 
        ? 'Vi skubber konstant grænserne for hvad der er muligt med AI-teknologi.'
        : 'We constantly push the boundaries of what\'s possible with AI technology.'
    },
    {
      icon: <Users className="w-8 h-8 text-purple-400" />,
      title: isDanish ? 'Kundesucces' : 'Client Success',
      description: isDanish
        ? 'Din succes er vores succes. Vi er dedikerede til at levere exceptionelle resultater.'
        : 'Your success is our success. We\'re committed to delivering exceptional results.'
    },
    {
      icon: <Award className="w-8 h-8 text-purple-400" />,
      title: isDanish ? 'Excellence' : 'Excellence',
      description: isDanish
        ? 'Vi opretholder de højeste standarder i alt hvad vi gør.'
        : 'We maintain the highest standards in everything we do.'
    },
    {
      icon: <Zap className="w-8 h-8 text-purple-400" />,
      title: isDanish ? 'Speed' : 'Speed',
      description: isDanish
        ? 'I en verden forvandlet af AI er "speed" afgørende. Vi tilpasser os hurtigt og tackler nye udfordringer direkte — det ligger i vores DNA.'
        : 'In a world transformed by AI, speed matters. We adapt fast and face new challenges head-on — it’s in our DNA.'
    }
  ];

  return (
    <main className="flex-grow pt-24">
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`https://virtiq.dk${isDanish ? '/om-os' : '/about'}`} />
        <link rel="canonical" href={`https://virtiq.dk${isDanish ? '/om-os' : '/about'}`} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={pageDescription} />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "VirtIQ",
            "url": `https://virtiq.dk${isDanish ? '/om-os' : '/about'}`,
            "logo": "https://virtiq.dk/logo.png",
            "description": pageDescription,
            "founder": {
              "@type": "Person",
              "name": "Lucas Vange",
              "jobTitle": isDanish ? "CEO & Founder" : "CEO & Founder"
            },
            "sameAs": [
              "https://www.facebook.com/profile.php?id=61571678866111",
              "https://www.instagram.com/virtiq.dk/",
              "https://www.linkedin.com/company/106651496/admin/dashboard/"
            ]
          })}
        </script>
      </Helmet>

      {/* Hero Section */}
      <section className="py-16 md:py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-purple-900/10 to-transparent"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              {isDanish ? 'Transformerer avancerede AI-løsninger til konkrete resultater' : 'Turning Complex AI Into Real Business Results'}
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              {isDanish
                ? 'Vi har en mission om at kunstig intilligens skal være et kraftfuldt værktøj, der forbedrer menneskelige evner frem for at erstatte dem'
                : 'We\'re on a mission to make artificial intelligence a powerful tool that enhances human capabilities rather than replaces them'}
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 relative">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">{isDanish ? 'Vores Mission' : 'Our Mission'}</h2>
              <div className="space-y-4 text-gray-300">
                <p>
                  {isDanish
                    ? 'Hos VirtIQ er vores mission at demokratisere AI-teknologi og gøre den tilgængelig for virksomheder i alle størrelser. Vi mener, at kunstig intelligens skal være et kraftfuldt værktøj, der forbedrer menneskelige evner frem for at erstatte dem.'
                    : 'At VirtIQ, our mission is to democratize AI technology and make it accessible to businesses of all sizes. We believe that artificial intelligence should be a powerful tool that enhances human capabilities rather than replaces them.'}
                </p>
                <p>
                  {isDanish
                    ? 'Vi hjælper virksomheder med at omsætte avanceret AI-teknologi til konkrete forretningsfordele — fra effektiv drift og bedre kundeoplevelser til langsigtet vækst.'
                    : 'We\'re committed to bridging the gap between cutting-edge AI technology and practical business applications, helping organizations leverage AI to improve their operations, enhance customer experiences, and drive sustainable growth.'}
                </p>
                <p>
                  {isDanish
                    ? 'Gennem innovation, ekspertise og dedikation til kundesucces arbejder vi på at forme en fremtid, hvor AI-teknologi fungerer som katalysator for virksomheders transformation og fremskridt.'
                    : 'Through innovation, expertise, and dedication to client success, we\'re working to shape a future where AI technology serves as a catalyst for business transformation and advancement.'}
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-w-16 aspect-h-9 rounded-2xl overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt={isDanish ? 'AI Innovation' : 'AI Innovation'}
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 relative bg-gray-900/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">{isDanish ? 'Vores Værdier' : 'Our Values'}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-6 border border-gray-800 hover:border-purple-500/50 transition-all duration-300"
              >
                <div className="mb-4">{value.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                <p className="text-gray-400">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 relative">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            {isDanish ? 'Mød Vores Team' : 'Meet Our Team'}
          </h2>
          <div className="max-w-sm mx-auto">
            {team.map((member, index) => (
              <div
                key={index}
                className="bg-gray-900/50 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-800 hover:border-purple-500/50 transition-all duration-300"
              >
                <div className="aspect-w-4 aspect-h-5">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="object-cover object-center"
                  />
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                  <p className="text-purple-400 text-sm mb-4">{member.role}</p>
                  <div className="flex justify-center space-x-4">
                    {member.socials.map((social, i) => (
                      <a
                        key={i}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-purple-400 hover:text-purple-300 transition-colors"
                      >
                        {social.icon}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 relative">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-r from-purple-900/20 to-indigo-900/20 rounded-2xl p-12 text-center">
            <h2 className="text-3xl font-bold mb-6">
              {isDanish ? 'Klar til at Transformere Din Virksomhed?' : 'Ready to Transform Your Business?'}
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              {isDanish
                ? 'Vær med til at forme fremtiden for virksomheder med AI-drevne løsninger.'
                : 'Join us in shaping the future of business with AI-powered solutions.'}
            </p>
            <Button variant="primary" size="lg" onClick={handleDemoClick}>
              {isDanish ? 'Start i dag' : 'Get Started Today'}
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
};