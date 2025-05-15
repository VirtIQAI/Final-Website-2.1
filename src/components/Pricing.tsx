import React from 'react';
import { Check } from 'lucide-react';
import { Button } from './ui/Button';
import { useTranslation } from 'react-i18next';

export const Pricing: React.FC = () => {
  const { t } = useTranslation();

  const plans = [
    {
      name: t('pricing.basic.name'),
      description: t('pricing.basic.description'),
      features: t('pricing.basic.features', { returnObjects: true }),
      cta: 'Book a Free Demo',
      oneTime: true,
    },
    {
      name: t('pricing.pro.name'),
      description: t('pricing.pro.description') + ' (Monthly)',
      features: t('pricing.pro.features', { returnObjects: true }),
      cta: 'Book a Free Demo',
      oneTime: false,
      popular: true,
    },
    {
      name: t('pricing.enterprise.name'),
      description: t('pricing.enterprise.description') + ' (Monthly)',
      features: t('pricing.enterprise.features', { returnObjects: true }),
      cta: t('pricing.enterprise.cta'),
      oneTime: false,
    },
  ];

  return (
    <section id="pricing" className="py-24 relative bg-black overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-80 bg-gradient-to-b from-purple-900/10 to-transparent"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-indigo-500/10 rounded-full filter blur-3xl"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{t('pricing.title')}</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-indigo-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-300">{t('pricing.subtitle')}</p>
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
                        Most Popular
                      </div>
                    </div>
                  )}
                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  <p className="text-gray-400 mb-8">{plan.description}</p>
                  
                  <ul className="space-y-4 mb-8 flex-grow">
                    {plan.features.map((feature: string, idx: number) => (
                      <li key={idx} className="flex items-start">
                        <Check className="w-5 h-5 text-purple-400 mt-1 mr-3 flex-shrink-0" />
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Button
                    variant="outline"
                    size="lg"
                    fullWidth
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
  );
};