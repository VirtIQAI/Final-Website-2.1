import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { NewsletterPopup } from '../components/NewsletterPopup';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';

const faqs = [
  {
    question: {
      en: 'What is VirtIQ and what services do you offer?',
      da: 'Hvad er VirtIQ, og hvilke services tilbyder I?'
    },
    answer: {
      en: 'VirtIQ is an AI-focused agency that provides a range of services including AI Agents, AI Automation, AI Outreach, Meta Ads, and Website Development. We help businesses leverage artificial intelligence to improve their operations and customer engagement.',
      da: 'VirtIQ er et AI-fokuseret agency, der tilbyder en række services, herunder AI Agents, AI Automatisering, AI Outreach, Meta Annoncering og Hjemmesider. Vi hjælper virksomheder med at udnytte kunstig intelligens til at forbedre deres drift og kundeengagement.'
    }
  },
  {
    question: {
      en: 'How can AI benefit my business?',
      da: 'Hvordan kan AI gavne min virksomhed?'
    },
    answer: {
      en: 'AI can benefit your business in multiple ways: automating repetitive tasks, providing 24/7 customer service and sales through chatbots, optimizing marketing campaigns, analyzing data for better decision-making, and personalizing customer experiences at scale.',
      da: 'AI kan gavne din virksomhed på flere måder: automatisering af gentagne opgaver, kundeservice og salg 24/7 gennem chatbots, optimering af marketingkampagner, data-insights for bedre beslutningstagning og personalisering af kundeoplevelser på stor skala.'
    }
  },
  {
  question: {
    en: "Where does the Chatbot get its information from?",
    da: "Hvor får Chatbotten sin information fra?"
  },
  answer: {
    en: "The Chatbot retrieves information from a dedicated knowledge base, which can include documents, web pages, and other sources that you choose to provide. This ensures the answers are accurate and specific to your business.",
    da: "Chatbotten henter sin information fra en dedikeret vidensbase, som kan indeholde dokumenter, websider og andre kilder, du vælger at give den adgang til. Det sikrer, at svarene er præcise og tilpasset din virksomhed."
  }
},
{
  question: {
    en: "Do I get access to analytics and the conversations?",
    da: "Får jeg adgang til analyser og samtalerne?"
  },
  answer: {
    en: "Yes! You will have full access to a custom analytics dashboard, where you can view detailed statistics and insights about chatbot usage and conversations.",
    da: "Ja! Du får fuld adgang til et skræddersyet analyse-dashboard, hvor du kan se detaljerede statistikker og indblik i brugen af chatbotten og de samtaler, der foregår."
  }
},
{
  question: {
    en: "Can the Chatbot handle multiple languages?",
    da: "Kan Chatbotten håndtere flere sprog?"
  },
  answer: {
    en: "Yes, the Chatbot is capable of handling multiple languages, allowing you to support customers in both Danish, English, and many other languages.",
    da: "Ja, Chatbotten kan håndtere flere sprog, så du kan supportere dine kunder på både dansk, engelsk og mange andre sprog."
  }
},
{
  question: {
    en: "Is the Chatbot and other services GDPR compliant?",
    da: "Er Chatbotten og de øvrige services GDPR-kompatible?"
  },
  answer: {
    en: "Absolutely. All stored data and information comply with GDPR regulations, and any user data can be deleted upon request, ensuring full privacy and security for your customers.",
    da: "Ja, alle data og informationer opbevares i overensstemmelse med GDPR-reglerne, og brugerdata kan til enhver tid slettes, hvis en kunde ønsker det. Dette sikrer fuld privatlivsbeskyttelse og datasikkerhed."
  }
},
{
  question: {
    en: "I'm worried the Chatbot will make weird replies. How does it handle that?",
    da: "Jeg er bekymret for, at Chatbotten kan give mærkelige svar – hvordan håndteres det?"
  },
  answer: {
    en: "The Chatbot is designed to respond only based on the information in your knowledge base, so it won’t generate random or irrelevant answers. This keeps communication consistent and trustworthy.",
    da: "Chatbotten er designet til kun at besvare spørgsmål baseret på din vidensbase, så den kommer ikke med tilfældige eller irrelevante svar. Det sikrer ensartet og pålidelig kommunikation."
  }
},
{
  question: {
    en: "What happens if the Chatbot can't answer a question?",
    da: "Hvad sker der, hvis Chatbotten ikke kan svare på et spørgsmål?"
  },
  answer: {
    en: "If the Chatbot can’t answer a question, it will prompt the user to provide their contact information and automatically notify your customer support team with a transcript of the conversation. You also have the option to handle and respond to customer queries directly within the Chatbot dashboard.",
    da: "Hvis Chatbotten ikke kan svare på et spørgsmål, beder den brugeren om kontaktoplysninger og underretter automatisk din kundesupport med en udskrift af samtalen. Du har også mulighed for at håndtere og besvare kundehenvendelser direkte via Chatbot-dashboardet."
  }
}
  {
    question: {
      en: 'What is the process of implementing AI solutions?',
      da: 'Hvordan foregår processen med at implementere AI-løsninger?'
    },
    answer: {
      en: 'Our implementation process involves: 1) Introductory meeting to understand your needs and what you are looking to solve, 2) Strategy development and goal setting, 3) Development and customization, 4) Testing and optimization of the service, 5) Deployment and integration, 6) Ongoing support, maintenance and optimization.',
      da: 'Vores implementeringsproces omfatter: 1) Introduktionsmøde for at forstå dine behov og hvilke problemer du gerne vil have løst, 2) Udvikling af strategi og aftale målsætninger, 3) test og optimering af ydelsen, 4) Test og optimering, 5) Integrering i jeres forretning, 6) Løbende support, vedligeholdelse og optimering.'
    }
  },
  {
    question: {
      en: 'How long does it take to implement your AI solutions?',
      da: 'Hvor lang tid tager det at implementere jeres AI-løsninger?'
    },
    answer: {
      en: 'Implementation time varies depending on the complexity of the solution and your specific requirements. We usually deliver even complex AI solutions within the same week of starting our collaboration. Our goal is always to deliver as fast as possible while not neglecting on the quality. We\'ll provide a detailed timeline during our first meetings.',
      da: 'Implementeringstiden varierer afhængigt af løsningens kompleksitet og dine specifikke krav. Vi leverer normalt selv komplekse AI-løsninger inden for samme uge, som vi starter samarbejdet. Vores mål er altid at levere så hurtigt som muligt uden at gå på kompromis med kvaliteten. Vi giver dig en detaljeret tidsplan i starten af vores indledende møder.'
    }
  },
  {
    question: {
      en: 'Do you offer ongoing support after implementation?',
      da: 'Tilbyder I løbende support efter implementering?'
    },
    answer: {
      en: 'Yes if you have chosen the Pro or Enterprise plan, we will provide comprehensive ongoing support including monitoring, maintenance, updates, and optimization of your AI solutions. The exact scope of work following the implementation of our AI soluations will be agreed upon on the initial calls.',
      da: 'Ja, hvis du har valgt Pro- eller Enterprise-planen, vil vi yde omfattende løbende support, herunder overvågning, vedligeholdelse, opdateringer og optimering af dine AI-løsninger. Det præcise omfang af arbejdet efter implementeringen af vores AI-løsninger vil blive aftalt på de indledende møder.'
    }
  },
  {
    question: {
      en: 'How do you ensure data security and privacy?',
      da: 'Hvordan sikrer I datasikkerhed og privatliv?'
    },
    answer: {
      en: 'Security is our top priority. We use encryption, secure storage, and comply with privacy laws to protect your data at every step. All our solutions follow industry best practices.',
      da: 'Datasikkerhed er vores højeste prioritet. Vi bruger kryptering, sikker datalagring og overholder forordningen om databeskyttelse for at sikre data i alle led. Alle vores løsninger følger branchens "best practices"".'
    }
  },
  {
    question: {
      en: 'Where do I sign up to your newsletter?',
      da: 'Hvor kan jeg tilmelde mig jeres nyhedsbrev?'
    },
    answer: {
      en: 'You can sign up for our newsletter to receive the latest insights on AI, technology, and digital transformation. Click the button below to subscribe.',
      da: 'Du kan tilmelde dig vores nyhedsbrev for at modtage de seneste "insights" om AI, teknologi og digital transformation. Klik på knappen nedenfor for at tilmelde dig.'
    },
    hasAction: true,
    actionLabel: {
      en: 'Subscribe to Newsletter',
      da: 'Tilmeld Nyhedsbrev'
    }
  }
];

export const FAQ: React.FC = () => {
  const { i18n } = useTranslation();
  const isDanish = i18n.language === 'da';
  const [openIndex, setOpenIndex] = React.useState<number | null>(null);
  const [isNewsletterOpen, setIsNewsletterOpen] = useState(false);

  const pageTitle = isDanish ? 'FAQ - Frequently Asked Questions | VirtIQ' : 'FAQ - Frequently Asked Questions | VirtIQ';
  const pageDescription = isDanish
    ? 'Find svar på almindelige spørgsmål om VirtIQs AI-løsninger, automatisering og digitale services. Få hjælp til at forstå hvordan vi kan hjælpe din virksomhed.'
    : 'Find answers to common questions about VirtIQ\'s AI solutions, automation, and digital services. Get help understanding how we can assist your business.';

  const handleNewsletterClick = () => {
    setIsNewsletterOpen(true);
  };

  return (
    <main className="flex-grow pt-24">
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://virtiq.dk/faq" />
        <link rel="canonical" href="https://virtiq.dk/faq" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={pageDescription} />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": faqs.map(faq => ({
              "@type": "Question",
              "name": isDanish ? faq.question.da : faq.question.en,
              "acceptedAnswer": {
                "@type": "Answer",
                "text": isDanish ? faq.answer.da : faq.answer.en
              }
            }))
          })}
        </script>
      </Helmet>

      <section className="py-16 md:py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-purple-900/10 to-transparent"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">
              {isDanish ? 'Frequently Asked Questions' : 'Frequently Asked Questions'}
            </h1>
            <p className="text-xl text-gray-300 mb-12 text-center">
              {isDanish 
                ? 'Find svar på almindelige spørgsmål om vores AI-løsninger og services'
                : 'Find answers to common questions about our AI solutions and services'}
            </p>

            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="bg-gray-900/50 backdrop-blur-sm rounded-lg border border-gray-800"
                >
                  <button
                    className="w-full px-6 py-4 text-left flex items-center justify-between"
                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  >
                    <span className="text-lg font-medium">
                      {isDanish ? faq.question.da : faq.question.en}
                    </span>
                    <ChevronDown
                      className={`w-5 h-5 text-gray-400 transition-transform ${
                        openIndex === index ? 'transform rotate-180' : ''
                      }`}
                    />
                  </button>
                  {openIndex === index && (
                    <div className="px-6 pb-4">
                      <p className="text-gray-300">
                        {isDanish ? faq.answer.da : faq.answer.en}
                      </p>
                      {faq.hasAction && (
                        <button
                          onClick={handleNewsletterClick}
                          className="mt-4 text-purple-400 hover:text-purple-300 font-medium"
                        >
                          {isDanish ? faq.actionLabel.da : faq.actionLabel.en}
                        </button>
                      )}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <NewsletterPopup 
        isOpen={isNewsletterOpen} 
        onClose={() => setIsNewsletterOpen(false)} 
      />
    </main>
  );
};