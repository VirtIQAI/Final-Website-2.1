import React, { useState, useEffect } from 'react';
import { Typewriter } from 'react-simple-typewriter';
import { Brain, Zap, TrendingUp, Users, MessageSquare, ChevronLeft, ChevronRight, CheckCircle2 } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';

export const AIAgent: React.FC = () => {
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();
  const isDanish = i18n.language === 'da';

  const pageTitle = isDanish 
    ? 'AI Agenter - Intelligent Automatisering | VirtIQ'
    : 'AI Agents - Intelligent Automation | VirtIQ';
  
  const pageDescription = isDanish
    ? 'Transformer din virksomhed med intelligente AI-agenter. Automatiser komplekse opgaver, forbedre beslutningsprocesser og optimer kundeservice med vores avancerede AI-løsninger.'
    : 'Transform your business with intelligent AI agents. Automate complex tasks, enhance decision-making processes, and optimize customer service with our advanced AI solutions.';

  const handleDemoClick = () => {
    navigate('/#contact');
  };
  
const [userInput, setUserInput] = useState('');
const [terminalOutput, setTerminalOutput] = useState<{ role: string; content: string }[]>([]);

const sendToChatGPT = async (userInput: string) => {
  try {
    const response = await fetch('/api/chat', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        messages: [
          { role: 'system', content: 'You are a helpful AI agent for business automation.' },
          { role: 'user', content: userInput },
        ],
      }),
    });

    const data = await response.json();
    const aiMessage = data.choices?.[0]?.message?.content || 'No response from AI.';
setTerminalOutput((prev) => [
  ...prev,
  { role: 'user', content: userInput },
  { role: 'assistant', content: aiMessage },
]);
    return data.choices?.[0]?.message?.content || 'No response from AI.';
  } catch (err) {
    return '⚠️ Error: Could not connect to AI.';
  }
};

const handleSubmit = async () => {
  if (!userInput.trim()) return;
  const reply = await sendToChatGPT(userInput);
  setTerminalOutput((prev) => [...prev, `> ${userInput}`, reply]);
  setUserInput('');
};

  const features = [
    {
      title: isDanish ? 'Kundesupport' : 'Customer Support',
      description: isDanish 
        ? 'AI-drevet support der yder øjeblikkelig, døgnåben kundeservice'
        : 'AI-powered support agents provide instant, 24/7 customer service',
      icon: <MessageSquare className="w-6 h-6 text-purple-400" />
    },
    {
      title: isDanish ? 'E-handels Assistent' : 'E-commerce Assistant',
      description: isDanish
        ? 'Personlige købsanbefalinger og support'
        : 'Personalized shopping recommendations and support',
      icon: <Brain className="w-6 h-6 text-purple-400" />
    },
    {
      title: isDanish ? 'Juridisk Rådgivning' : 'Legal Advisory',
      description: isDanish
        ? 'Specialiseret juridisk indsigt og compliance-assistance'
        : 'Specialized legal insights and compliance assistance',
      icon: <Users className="w-6 h-6 text-purple-400" />
    },
    {
      title: isDanish ? 'Forretningsintelligens' : 'Business Intelligence',
      description: isDanish
        ? 'Realtidsanalyse af data og forretningsmæssige indsigter'
        : 'Real-time data analysis and business insights',
      icon: <TrendingUp className="w-6 h-6 text-purple-400" />
    }
  ];

  const benefits = [
    {
      icon: <MessageSquare className="w-8 h-8 text-purple-400" />,
      title: isDanish ? 'Kundesupport' : 'Customer Support',
      description: isDanish
        ? 'AI-drevne supportagenter yder øjeblikkelig, døgnåben kundeservice og løser effektivt henvendelser.'
        : 'AI-powered support agents provide instant, 24/7 customer service, efficiently handling inquiries and resolving issues.'
    },
    {
      icon: <Brain className="w-8 h-8 text-purple-400" />,
      title: isDanish ? 'E-handels Personalisering' : 'E-commerce Personalization',
      description: isDanish
        ? 'Agenter analyserer browse- og købshistorik for at anbefale personlige produkter og øge salget.'
        : 'Agents analyze browsing and purchase history to recommend personalized products, boosting sales.'
    },
    {
      icon: <Users className="w-8 h-8 text-purple-400" />,
      title: isDanish ? 'Juridisk Rådgivning' : 'Legal Advisory',
      description: isDanish
        ? 'Specialiserede agenter fortolker juridiske rammer og giver øjeblikkelig, præcis indsigt.'
        : 'Specialized agents interpret legal frameworks and provide immediate, accurate insights.'
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-purple-400" />,
      title: isDanish ? 'Dataanalyse' : 'Data Analysis',
      description: isDanish
        ? 'Intelligente analyseagenter leverer realtidsindsigt i markedstendenser og metrikker.'
        : 'Intelligent analysis agents deliver real-time insights into market trends and metrics.'
    }
  ];

  const capabilities = [
    isDanish ? 'Naturlig sprogbehandling' : 'Natural language processing',
    isDanish ? 'Kontekstuel forståelse' : 'Contextual understanding',
    isDanish ? 'Flersproget support' : 'Multi-language support',
    isDanish ? 'Realtidssvar' : 'Real-time responses',
    isDanish ? 'Læringsevner' : 'Learning capabilities',
    isDanish ? 'Tilpasset vidensbase' : 'Custom knowledge base',
    isDanish ? 'Integrationsmuligheder' : 'Integration options',
    isDanish ? 'Analyse og rapportering' : 'Analytics and reporting'
  ];

  const [visibleMessages, setVisibleMessages] = useState<number>(0);
  const [visibleLegalMessages, setVisibleLegalMessages] = useState<number>(0);
  const [visibleShopifyMessages, setVisibleShopifyMessages] = useState<number>(0);
  const [currentSlide, setCurrentSlide] = useState(0);

  const chatMessages = [
    { type: 'bot', text: isDanish ? 'Velkommen til vores butik 🚀' : 'Welcome to our store 🚀' },
    { type: 'bot', text: isDanish ? 'Hvad kan vi hjælpe dig med?' : 'What can we do for you?' },
    { type: 'user', text: isDanish ? 'Jeg leder efter nogle fede t-shirts til sommer, som er rene og giver gode vibes' : "I'm looking for some cool t-shirts for summer, which are clean and give good vibes" },
    { type: 'bot', text: isDanish ? 'Her er nogle af vores mest populære sommer t-shirts:' : 'Here are some of our most popular summer t-shirts:' }
  ];

  const legalMessages = [
    { type: 'bot', text: isDanish ? "Jeg er en juridisk assistent specialiseret i Lejeloven. Lad mig vide hvordan jeg kan hjælpe dig i dag" : "I'm a legal assistant specialised in The Danish Rent Act. Let me know how I can assist you today" },
    { type: 'user', text: isDanish ? "Kan jeg smide min lejer ud?" : "Can I kick out my tenant?" },
    { type: 'bot', text: isDanish 
      ? "**Opsigelse eller Ophævelse af Lejeforhold**\nOpsigelse eller ophævelse af en lejer kræver, at du som udlejer overholder reglerne i lejeloven. Det er vigtigt at skelne mellem opsigelse og ophævelse, da de har forskellige krav og konsekvenser:\n\n**Opsigelse af Lejer**\nSom udlejer kan du kun opsige en lejer i bestemte situationer, såsom:\n\nHvis du selv skal bruge boligen.\n\nHvis ejendommen skal nedrives eller ombygges væsentligt.\n\nHvis lejeren misligholder aftalen (f.eks. gentagne overtrædelser af husordenen).\n\nOpsigelsen skal være skriftlig og indeholde en begrundelse.\nLejeren har typisk ret til at blive boende i en opsigelsesperiode (normalt 3 måneder, afhængigt af situationen).\n\n**Ophævelse af Lejemålet**\nOphævelse betyder, at lejeforholdet ophører øjeblikkeligt. Dette kan kun ske i særlige tilfælde, såsom:\n\nHvis lejeren ikke betaler husleje.\n\nHvis lejeren groft misligholder aftalen (f.eks. ødelægger ejendommen eller bruger den ulovligt).\n\nDu skal sende en skriftlig ophævelse med en klar forklaring.\nVed manglende husleje skal du først sende en påmindelse med 14 dages frist.\n\n**Vigtigt at Vide**\nHvis lejeren ikke flytter frivilligt, kan du ikke selv smide dem ud. Du skal i stedet kontakte fogedretten, som kan hjælpe med udsættelse.\nDet er altid en god idé at søge juridisk rådgivning før opsigelse eller ophævelse af et lejemål, da fejl kan føre til erstatningskrav fra lejeren."
      : "**Terminating or Cancelling a Tenancy**\nTerminating or cancelling a tenant requires that you, as the landlord, comply with the rules set out in the Danish Rent Act. It is important to distinguish between termination and cancellation, as they have different requirements and consequences:\n\n**Termination of a Tenant**\nAs a landlord, you may only terminate a tenant in specific situations, such as:\n\nIf you need to use the property for your own residence.\n\nIf the property is to be demolished or significantly renovated.\n\nIf the tenant breaches the agreement (e.g., repeatedly violates house rules).\n\nThe termination must be in writing and include a justification.\nThe tenant typically has the right to remain during a notice period (usually 3 months, depending on the situation).\n\n**Cancellation of the Tenancy**\nCancellation means the tenancy ends immediately. This can only occur in specific cases, such as:\n\nIf the tenant fails to pay rent.\n\nIf the tenant seriously breaches the agreement (e.g., damages the property or uses it illegally).\n\nYou must send a written cancellation with a clear explanation.\nIn cases of unpaid rent, you must first send a reminder with a 14-day deadline.\n\n**Important to Know**\nIf the tenant does not leave voluntarily, you cannot evict them yourself. You must instead contact the bailiff's court, which can assist with eviction.\nIt is always a good idea to seek legal advice before terminating or cancelling a tenancy, as mistakes can lead to compensation claims from the tenant." }
  ];

  const shopifyMessages = [
    { type: 'bot', text: isDanish ? "Velkommen tilbage, Chris! 👋 Hvordan kan jeg hjælpe dig med dine butiksdata i dag?" : "Welcome back, Chris! 👋 How can I help you with your store insights today?" },
    { type: 'user', text: isDanish ? "Hvilke produkter har klaret sig bedst denne uge, og hvilke har klaret sig værst? Hvad er trending? Har vi leveret til tiden?" : "What products have performed best this week, and what have performed the worst? What is trending? Have we delivered on time?" },
    { type: 'bot', text: isDanish 
      ? "Her er din butiks performanceanalyse for denne uge:\n\n📈 Bedst Præsterende:\n• Sommer Kollektion T-shirt: 127 enheder solgt (+45% fra sidste uge)\n• Eco-Friendly Hættetrøje: 98 enheder solgt (+32%)\n• Urban Streetwear Kasket: 76 enheder solgt (+28%)\n\n📉 Underpræsterende Produkter:\n• Vintage Denim Jakke: 12 enheder (-60% fra sidste uge)\n• Klassisk Polo Shirt: 15 enheder (-45%)\n• Vinter Kollektion Varer: Generelt lav performance (sæsonpåvirkning)\n\n🔥 Trending Nu:\n• Bæredygtig Mode Kategori: +85% vækst\n• Limited Edition Sneakers: Høj efterspørgsel (92% sell-through rate)\n• Custom Print T-shirts: Voksende omtale på sociale medier\n\n📦 Leveringsperformance:\n• Rettidig Levering: 96.5%\n• Gennemsnitlig Leveringstid: 2.3 dage\n• Forsinkede Leveringer: 7 ordrer (alle kontaktet og løst)\n\nVil du have mig til at generere en detaljeret rapport eller fokusere på et specifikt område?"
      : "Here's your store performance analysis for this week:\n\n📈 Top Performers:\n• Summer Collection T-Shirt: 127 units sold (+45% from last week)\n• Eco-Friendly Hoodie: 98 units sold (+32%)\n• Urban Streetwear Cap: 76 units sold (+28%)\n\n📉 Underperforming Products:\n• Vintage Denim Jacket: 12 units (-60% from last week)\n• Classic Polo Shirt: 15 units (-45%)\n• Winter Collection Items: Generally low performance (seasonal impact)\n\n🔥 Trending Now:\n• Sustainable Fashion Category: +85% growth\n• Limited Edition Sneakers: High demand (92% sell-through rate)\n• Custom Print T-Shirts: Growing social media mentions\n\n📦 Delivery Performance:\n• On-time Delivery Rate: 96.5%\n• Average Delivery Time: 2.3 days\n• Late Deliveries: 7 orders (all contacted and resolved)\n\nWould you like me to generate a detailed report or focus on any specific area?" },
    { type: 'user', text: isDanish ? "Vis mig omsætningsprognosen sammenlignet med sidste år" : "Show me the revenue projection compared to last year" },
    { type: 'bot', text: isDanish
      ? "Her er din År-til-År Omsætningssammenligning med Prognoser:\n\n📊 Omsætningsperformance:\n• YTD Omsætning: 350.000 kr\n• Sidste År: 250.000 kr\n• År-til-År Vækst: +40%\n\n🎯 Prognose frem til december:\n• Nuværende Udvikling: 500.000 kr\n• Sidste År: 300.000 kr\n• Forventet Vækst: +67%\n\n📈 Vigtige Vækstdrivere:\n• Nye Produktlinjer: +35% bidrag\n• Forbedret Konverteringsrate: +15%\n• Højere Gennemsnitlig Ordreværdi: +12%\n\nBaseret på nuværende trends og sæsonudsving forventer vi stærk Q4 performance. Vil du se en opdeling pr. produktkategori eller markedsføringskanal?"
      : "Here's your Year-over-Year Revenue Comparison with Projections:\n\n📊 Revenue Performance:\n• YTD Revenue: $350K\n• Previous Year: $250K\n• YoY Growth: +40%\n\n🎯 Projection through December:\n• Current Trajectory: $500K\n• Last Year: $300K\n• Expected Growth: +67%\n\n📈 Key Growth Drivers:\n• New Product Lines: +35% contribution\n• Improved Conversion Rate: +15%\n• Higher AOV: +12%\n\nBased on current trends and seasonality, we're projecting strong Q4 performance. Would you like to see a breakdown by product category or marketing channel?" }
  ];

  const products = [
    {
      id: 1,
      name: isDanish ? 'Moderne Minimalistisk Kollektion' : 'Modern Minimalist Collection',
      price: '399 DKK',
      description: isDanish 
        ? 'Elegant og sofistikeret minimalistisk design. Premium miljøvenlige materialer med perfekt pasform og komfort.'
        : 'Sleek and sophisticated minimalist design. Premium eco-friendly materials with perfect fit and comfort.',
      image: 'https://videos.openai.com/vg-assets/assets%2Ftask_01jt39h1z6ejjadrz0pezj36y8%2F1746014982_img_0.webp?st=2025-05-12T05%3A05%3A21Z&se=2025-05-18T06%3A05%3A21Z&sks=b&skt=2025-05-12T05%3A05%3A21Z&ske=2025-05-18T06%3A05%3A21Z&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skoid=aa5ddad1-c91a-4f0a-9aca-e20682cc8969&skv=2019-02-02&sv=2018-11-09&sr=b&sp=r&spr=https%2Chttp&sig=nHkTyAfWchY1iI5Fu6Q%2BL%2BQPyP5%2FLxOnMsNfrjDdX5c%3D&az=oaivgprodscus'
    },
    {
      id: 2,
      name: isDanish ? 'Urban Udforskerserie' : 'Urban Explorer Series',
      price: '449 DKK',
      description: isDanish
        ? 'Moderne urban stil med alsidige designelementer. Perfekt til den moderne eventyrer.'
        : 'Contemporary urban style with versatile design elements. Perfect for the modern adventurer.',
      image: 'https://videos.openai.com/vg-assets/assets%2Ftask_01jt39821vfneakv7nasybwqb1%2F1746014688_img_1.webp?st=2025-05-12T05%3A05%3A21Z&se=2025-05-18T06%3A05%3A21Z&sks=b&skt=2025-05-12T05%3A05%3A21Z&ske=2025-05-18T06%3A05%3A21Z&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skoid=aa5ddad1-c91a-4f0a-9aca-e20682cc8969&skv=2019-02-02&sv=2018-11-09&sr=b&sp=r&spr=https%2Chttp&sig=37wSxA89FlmngdLpEtdM%2FPGGaLtiX4jFvmTaW%2F8QfkM%3D&az=oaivgprodscus'
    },
    {
      id: 3,
      name: isDanish ? 'Miljøbevidste Essentials' : 'Eco-Conscious Essentials',
      price: '399 DKK',
      description: isDanish
        ? 'Bæredygtig mode møder moderne design. Fremstillet af 100% genanvendte materialer med nul-spild produktion.'
        : 'Sustainable fashion meets modern design. Made from 100% recycled materials with zero waste production.',
      image: 'https://videos.openai.com/vg-assets/assets%2Ftask_01jt3a4n7xf3qa8ja80kgx0v98%2F1746015622_img_0.webp?st=2025-05-12T05%3A05%3A21Z&se=2025-05-18T06%3A05%3A21Z&sks=b&skt=2025-05-12T05%3A05%3A21Z&ske=2025-05-18T06%3A05%3A21Z&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skoid=aa5ddad1-c91a-4f0a-9aca-e20682cc8969&skv=2019-02-02&sv=2018-11-09&sr=b&sp=r&spr=https%2Chttp&sig=Kb%2Babapn%2FJP%2BGx0q1bbVz9GV6P90Zw32ezl1Wz%2Fx0oE%3D&az=oaivgprodscus'
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % products.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + products.length) % products.length);
  };

  useEffect(() => {
    if (visibleMessages < chatMessages.length) {
      const timer = setTimeout(() => {
        setVisibleMessages(prev => prev + 1);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [visibleMessages]);

  useEffect(() => {
    if (visibleLegalMessages < legalMessages.length) {
      const timer = setTimeout(() => {
        setVisibleLegalMessages(prev => prev + 1);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [visibleLegalMessages]);

  useEffect(() => {
    if (visibleShopifyMessages < shopifyMessages.length) {
      const timer = setTimeout(() => {
        setVisibleShopifyMessages(prev => prev + 1);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [visibleShopifyMessages]);

  useEffect(() => {
    setVisibleMessages(1);
    setVisibleLegalMessages(1);
    setVisibleShopifyMessages(1);
  }, []);

  return (
    <main className="flex-grow pt-24">
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`https://virtiq.dk/services/ai-agents`} />
        <meta property="og:image" content="https://virtiq.dk/ai-agents-og.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={pageDescription} />
        <meta name="twitter:image" content="https://virtiq.dk/ai-agents-og.jpg" />
        <link rel="canonical" href="https://virtiq.dk/services/ai-agents" />
        
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": isDanish ? "AI Agenter" : "AI Agents",
            "provider": {
              "@type": "Organization",
              "name": "VirtIQ",
              "url": "https://virtiq.dk"
            },
            "description": pageDescription,
            "serviceType": "AI Automation Service",
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
            {isDanish ? 'AI AGENTS' : 'AI AGENTS'}
          </span>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          {isDanish
            ? 'Transformer Din Virksomhed med Intelligente AI-Agenter'
            : 'Transform Your Business with Intelligent AI Agents'}
        </h1>
        <p className="text-xl text-gray-300 mb-8">
          {isDanish
            ? 'Opdag forskellige anvendelser af AI-agenter skræddersyet til at løfte din virksomheds drift'
            : 'Discover diverse applications of AI agents tailored to elevate your business operations'}
        </p>
        <Button variant="primary" size="lg" onClick={handleDemoClick} className="justify-center">
          {isDanish ? 'Kom i Gang Nu' : 'Get Started Now'}
        </Button>
      </div>

{/* AI Agent Process Terminal */}
      <section className="bg-black text-white p-6 max-w-3xl mx-auto rounded-lg overflow-y-auto h-[500px] custom-scrollbar">
  {terminalOutput.map((msg, index) => (
<p
  key={index}
  className={`whitespace-pre-wrap my-2 ${
    msg.role === 'user' ? 'text-purple-400' : 'text-white font-mono'
  }`}
>
  {typeof msg.content === 'string' ? msg.content : JSON.stringify(msg.content)}
</p>
  ))}
</section>
<section className="py-16">
  <div className="container mx-auto px-4">
    <div className="border border-gray-800 rounded-lg overflow-hidden w-full max-w-xl h-full">
      
{/* Title Bar */}
<div className="bg-gray-800 text-white text-center text-sm font-semibold py-2">
  AI Agent
</div>

{/* Terminal Box */}
<div className="bg-black text-white font-mono text-base p-6 h-64 flex items-center">
  <Typewriter
    words={
      isDanish
        ? [
            '🔄 Indlæser AI-agentproces...',
            '🟢 Indsamler kunde- og salgsdata...',
            '⚙️ Opsætter AI-agent med dine mål...',
            '🧠 Træner agenten med arbejdsgange...',
            '🚀 Udruller og overvåger ydeevne...',
          ]
        : [
            '🔄 Loading AI Agent Process...',
            '🟢 Collecting customer and sales data...',
            '⚙️ Setting up AI agent with your goals...',
            '🧠 Training agent with workflows...',
            '🚀 Deploying and monitoring performance...',
          ]
    }
    loop={true}
    cursor
    cursorStyle="|"
    typeSpeed={50}
    deleteSpeed={40}
    delaySpeed={2000}
  />
</div>

<section className="py-16 bg-black text-white">
  <div className="container mx-auto px-4 flex flex-col md:flex-row items-start justify-between gap-10">
    
    {/* Left Side: Text & CTA */}
    <div className="flex-1 max-w-xl space-y-6">
      <span className="inline-block bg-purple-500/10 text-purple-400 px-4 py-1 rounded-full uppercase text-xs font-semibold">
        {isDanish ? 'AI Agent Eksperter' : 'AI Agents Experts'}
      </span>
      <h1 className="text-4xl font-bold">
        {isDanish
          ? 'Transformer Din Virksomhed med Intelligente AI Agenter'
          : 'Transform Your Business with Intelligent AI Agents'}
      </h1>
      <p className="text-gray-400">
        {isDanish
          ? 'Opdag de mange anvendelser af AI-agenter til at løfte din forretning.'
          : 'Discover diverse applications of AI agents tailored to elevate your business operations.'}
      </p>
      <Button onClick={handleDemoClick}>
        {isDanish ? 'Kom i gang nu' : 'Get Started Now'}
      </Button>
    </div>

    {/* Right Side: AI Agent Terminal */}
    <div className="flex-1 max-w-md w-full">
      <div className="bg-neutral-900 text-white font-mono p-4 rounded-md border border-gray-700 shadow-lg">
        <div className="mb-4 space-y-1 text-green-400 min-h-[120px]">
          {terminalOutput.map((line, idx) => (
            <div key={idx} className="whitespace-pre-wrap">{line.content}</div>
          ))}
        </div>
        <input
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleSubmit()}
          placeholder="Ask the AI agent something..."
          className="bg-black text-green-300 p-2 w-full rounded-md border border-gray-600 outline-none"
        />
      </div>
    </div>
    
  </div>
</section>


      <section className="py-16 relative">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold mb-4">
              {isDanish ? 'Live Eksempler på AI-Agenter' : 'Live Examples AI Agents'}
            </h2>
            <p className="text-gray-300">
              {isDanish
                ? 'Udforsk kraften i AI-agenter gennem vores live eksempler nedenfor'
                : 'Explore the power of AI agents through our live examples below'}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Shopping Assistant Chatbot */}
            <div className="relative group h-full">
              <div className="relative h-full">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-lg opacity-0 group-hover:opacity-100 blur transition duration-300"></div>
                <div className="relative bg-gray-900/50 backdrop-blur-sm rounded-lg overflow-hidden border border-gray-800 group-hover:border-transparent transition-all duration-300" style={{ height: '600px', display: 'flex', flexDirection: 'column' }}>
                  <div className="px-6 py-4 border-b border-gray-800 bg-gray-900/50">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <div className="w-3 h-3 bg-green-500 rounded-full mr-2 animate-pulse"></div>
                        <span className="text-sm font-medium text-gray-300">
                          {isDanish ? 'Indkøbsassistent' : 'Shopping Assistant'}
                        </span>
                      </div>
                      <span className="text-xs font-medium text-purple-400">
                        {isDanish ? 'Ekstern Use Case' : 'External Use Case'}
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-6 space-y-4" style={{ flex: 1, overflowY: 'auto', scrollbarWidth: 'thin', scrollbarColor: '#4B5563 #1F2937' }}>
                    {chatMessages.slice(0, visibleMessages).map((message, index) => (
                      <div
                        key={index}
                        className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
                        style={{
                          animation: `fadeIn 0.5s ease-in-out forwards`,
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
                          <p className="text-sm">{message.text}</p>
                        </div>
                      </div>
                    ))}

{visibleMessages >= chatMessages.length && (
  <div className="mt-6">
    <div className="relative">
      <div className="overflow-hidden rounded-lg">
        <div
          className="flex transition-transform duration-300 ease-in-out"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {products.map((product) => (
            <div
              key={product.id}
              className="w-full flex-shrink-0 bg-gray-800 rounded-lg p-4"
            >
              <div className="w-full h-64 mb-4 bg-gray-700 rounded-lg overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">{product.name}</h3>
              <p className="text-gray-400 text-sm mb-2">{product.description}</p>
              <p className="text-purple-400 font-medium mb-4">{product.price}</p>
              <Button variant="primary" size="sm" fullWidth>
                {isDanish ? 'Køb Produkt' : 'Buy Product'}
              </Button>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 flex justify-between px-2">
        <button
          onClick={prevSlide}
          className="p-2 rounded-full bg-gray-800 text-white hover:bg-purple-600 transition-colors"
          aria-label={isDanish ? 'Forrige slide' : 'Previous slide'}
        >
          <ChevronLeft size={20} />
        </button>
        <button
          onClick={nextSlide}
          className="p-2 rounded-full bg-gray-800 text-white hover:bg-purple-600 transition-colors"
          aria-label={isDanish ? 'Næste slide' : 'Next slide'}
        >
          <ChevronRight size={20} />
        </button>
      </div>
    </div>
  </div> 
)}

                  
                  <div className="px-6 py-4 bg-gray-900/50 border-t border-gray-800">
                    <div className="flex items-center bg-gray-800 rounded-lg px-3 py-2">
                      <input
                        type="text"
                        placeholder={isDanish ? 'Skriv din besked...' : 'Type your message...'}
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

            {/* Legal Assistant Chatbot */}
            <div className="relative group h-full">
              <div className="relative h-full">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-lg opacity-0 group-hover:opacity-100 blur transition duration-300"></div>
                <div className="relative bg-gray-900/50 backdrop-blur-sm rounded-lg overflow-hidden border border-gray-800 group-hover:border-transparent transition-all duration-300" style={{ height: '600px', display: 'flex', flexDirection: 'column' }}>
                  <div className="px-6 py-4 border-b border-gray-800 bg-gray-900/50">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <div className="w-3 h-3 bg-green-500 rounded-full mr-2 animate-pulse"></div>
                        <span className="text-sm font-medium text-gray-300">
                          {isDanish ? 'Juridisk Assistent' : 'Legal Assistant'}
                        </span>
                      </div>
                      <span className="text-xs font-medium text-purple-400">
                        {isDanish ? 'Ekstern Use Case' : 'External Use Case'}
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-6 space-y-4" style={{ flex: 1, overflowY: 'auto', scrollbarWidth: 'thin', scrollbarColor: '#4B5563 #1F2937' }}>
                    {legalMessages.slice(0, visibleLegalMessages).map((message, index) => (
                      <div
                        key={index}
                        className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
                        style={{
                          animation: `fadeIn 0.5s ease-in-out forwards`,
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
                          <p 
                            className="text-sm whitespace-pre-wrap markdown"
                            style={{
                              animation: message.type === 'bot' ? 'typing 2s steps(40, end)' : 'none'
                            }}
                            dangerouslySetInnerHTML={{ 
                              __html: message.text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') 
                            }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <div className="px-6 py-4 bg-gray-900/50 border-t border-gray-800">
                    <div className="flex items-center bg-gray-800 rounded-lg px-3 py-2">
                      <input
                        type="text"
                        placeholder={isDanish ? 'Skriv din besked...' : 'Type your message...'}
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

{/* Shopify Insights Assistant */}
<div className="relative group h-full">
  <div className="relative h-full">
    <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-lg opacity-0 group-hover:opacity-100 blur transition duration-300"></div>
    <div
      className="relative bg-gray-900/50 backdrop-blur-sm rounded-lg overflow-hidden border border-gray-800 group-hover:border-transparent transition-all duration-300"
      style={{ height: '600px', display: 'flex', flexDirection: 'column' }}
    >
      <div className="px-6 py-4 border-b border-gray-800 bg-gray-900/50">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <div className="w-3 h-3 bg-green-500 rounded-full mr-2 animate-pulse"></div>
            <span className="text-sm font-medium text-gray-300">
              {isDanish ? 'Shopify Indsigtsassistent' : 'Shopify Insights Assistant'}
            </span>
          </div>
          <span className="text-xs font-medium text-purple-400">
            {isDanish ? 'Intern Use Case' : 'Internal Use Case'}
          </span>
        </div>
      </div>

      <div
        className="p-6 space-y-4"
        style={{
          flex: 1,
          overflowY: 'auto',
          scrollbarWidth: 'thin',
          scrollbarColor: '#4B5563 #1F2937',
        }}
      >
        {shopifyMessages.slice(0, visibleShopifyMessages).map((message, index) => (
          <div
            key={index}
            className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
            style={{
              animation: `fadeIn 0.5s ease-in-out forwards`,
              animationDelay: `${index * 0.5}s`,
            }}
          >
            <div
              className={`max-w-[80%] px-4 py-2 rounded-lg ${
                message.type === 'user'
                  ? 'bg-purple-600 text-white'
                  : 'bg-gray-800 text-gray-200'
              }`}
            >
              <p className="text-sm whitespace-pre-wrap">{message.text}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="px-6 py-4 bg-gray-900/50 border-t border-gray-800">
        <div className="flex items-center bg-gray-800 rounded-lg px-3 py-2">
          <input
            type="text"
            placeholder={isDanish ? 'Skriv din besked...' : 'Type your message...'}
            className="flex-1 bg-transparent border-none text-sm text-gray-300 placeholder-gray-500 focus:outline-none"
            disabled
          />
          <button className="ml-2 text-purple-400 hover:text-purple-300 transition-colors">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  </div>
</div>

return (
  <section className="py-16 bg-black text-white">
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left: Hero content */}
        <div>
          <span className="text-sm uppercase tracking-widest text-purple-400 font-semibold">
            AI Agents Experts
          </span>
          <h1 className="text-4xl font-bold mt-4 mb-4">
            Transform Your Business with Intelligent AI Agents
          </h1>
          <p className="text-gray-300 mb-6">
            Discover diverse applications of AI agents tailored to elevate your business operations
          </p>
          <button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg font-medium shadow-md">
            Get Started Now
          </button>
        </div>

        {/* Right: Terminal */}
        <div className="bg-gray-900 border border-gray-800 rounded-xl p-6 shadow-xl">
          <h3 className="text-xl font-semibold text-white mb-4">🔍 AI Agent</h3>

          <div className="space-y-3 mb-4">
            {terminalOutput.map((entry, i) => (
              <div key={i} className="bg-gray-800 text-sm text-gray-100 px-4 py-2 rounded">
                {entry}
              </div>
            ))}
          </div>

          <input
            type="text"
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
            placeholder="Ask the AI agent something..."
            className="bg-black border border-gray-700 text-white w-full p-2 rounded mb-3 placeholder-gray-400"
          />

          <button
            onClick={handleSubmit}
            className="bg-purple-600 hover:bg-purple-700 text-white px-5 py-2 rounded font-medium w-full"
          >
            Send
          </button>
        </div>
      </div>
    </div>
export default AIAgent;