import React from 'react';
import { useParams } from 'react-router-dom';

const serviceData = {
  'ai-agents': {
    title: 'AI Agents',
    description: 'Intelligent AI agents that automate complex tasks and decision-making processes for your business.',
    features: [
      'Custom AI agent development',
      'Task automation',
      'Decision support systems',
      'Process optimization',
      'Integration with existing systems'
    ]
  },
  'ai-automation': {
    title: 'AI Automation',
    description: 'Streamline workflows and boost efficiency with customized AI automation solutions.',
    features: [
      'Workflow automation',
      'Process optimization',
      'Custom automation scripts',
      'Integration capabilities',
      'Performance monitoring'
    ]
  },
  'ai-chatbot': {
    title: 'AI Chatbot',
    description: 'Engage customers 24/7 with intelligent conversational AI and personalized experiences.',
    features: [
      'Natural language processing',
      'Custom chatbot development',
      'Multi-platform integration',
      'Analytics and reporting',
      'Continuous learning capabilities'
    ]
  },
  'ai-outreach': {
    title: 'AI Outreach',
    description: 'Leverage AI to optimize and personalize your customer outreach campaigns.',
    features: [
      'Automated outreach campaigns',
      'Personalization at scale',
      'Campaign optimization',
      'Performance tracking',
      'Integration with CRM systems'
    ]
  },
  'meta-ads': {
    title: 'Meta Ads',
    description: 'Create targeted, high-converting ad campaigns across Meta platforms.',
    features: [
      'Campaign strategy development',
      'Ad creative optimization',
      'Audience targeting',
      'Performance tracking',
      'ROI optimization'
    ]
  },
  'website-development': {
    title: 'Website Development',
    description: 'Build stunning, high-performance websites designed for conversion and engagement.',
    features: [
      'Custom website development',
      'Responsive design',
      'Performance optimization',
      'SEO integration',
      'Analytics implementation'
    ]
  }
};

export const ServicePage: React.FC = () => {
  const { serviceId } = useParams<{ serviceId: string }>();
  const service = serviceId ? serviceData[serviceId as keyof typeof serviceData] : null;

  if (!service) {
    return (
      <main className="flex-grow pt-24">
        <div className="container mx-auto px-4 py-16">
          <h1 className="text-3xl font-bold">Service not found</h1>
        </div>
      </main>
    );
  }

  return (
    <main className="flex-grow pt-24">
      <section className="relative py-16 md:py-24">
        <div className="absolute inset-0 bg-gradient-to-b from-purple-900/10 to-transparent"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">{service.title}</h1>
            <p className="text-xl text-gray-300 mb-12">{service.description}</p>

            <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-800">
              <h2 className="text-2xl font-semibold mb-6">Key Features</h2>
              <div className="grid gap-6 md:grid-cols-2">
                {service.features.map((feature, index) => (
                  <div key={index} className="flex items-start">
                    <div className="w-8 h-8 rounded-lg bg-purple-600/20 flex items-center justify-center mr-4 flex-shrink-0">
                      <div className="w-2 h-2 rounded-full bg-purple-400"></div>
                    </div>
                    <p className="text-gray-200">{feature}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};