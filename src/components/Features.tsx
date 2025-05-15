import React, { useState, useEffect } from 'react';
import { Brain, Zap, TrendingUp, ShieldCheck, ChevronLeft, ChevronRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Button } from './ui/Button';

export const Features: React.FC = () => {
  const { t } = useTranslation();
  const [visibleMessages, setVisibleMessages] = useState<number>(0);
  const [currentSlide, setCurrentSlide] = useState(0);

  const features = [
    {
      icon: <Brain size={32} className="text-purple-400" />,
      title: t('features.insights'),
      description: t('features.insights.desc')
    },
    {
      icon: <Zap size={32} className="text-purple-400" />,
      title: t('features.performance'),
      description: t('features.performance.desc')
    },
    {
      icon: <TrendingUp size={32} className="text-purple-400" />,
      title: t('features.growth'),
      description: t('features.growth.desc')
    },
    {
      icon: <ShieldCheck size={32} className="text-purple-400" />,
      title: t('features.security'),
      description: t('features.security.desc')
    },
  ];

  const chatMessages = [
    { type: 'bot', text: 'Welcome to our store 🚀' },
    { type: 'bot', text: 'What can we do for you today?' },
    { type: 'user', text: "I'm looking for some cool t-shirts for summer, which are clean and give good vibes" },
    { type: 'bot', text: 'Here are some of our most popular summer t-shirts:' }
  ];

  const products = [
    {
      id: 1,
      name: 'Aperol Spritz Summer Tee',
      price: '$34.99',
      description: 'Retro-style light blue tee with bold orange typography. Perfect for summer parties and beach days. Premium cotton blend for ultimate comfort.',
      image: 'https://images.pexels.com/photos/6311586/pexels-photo-6311586.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      id: 2,
      name: 'Beach Paradise Tee',
      price: '$32.99',
      description: 'White cotton tee featuring a vibrant beach scene design. Made from 100% organic cotton.',
      image: 'https://images.pexels.com/photos/6311251/pexels-photo-6311251.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      id: 3,
      name: 'Summer Vibes Collection',
      price: '$29.99',
      description: 'Classic fit tee with modern summer graphics. Breathable fabric perfect for hot days.',
      image: 'https://images.pexels.com/photos/5698851/pexels-photo-5698851.jpeg?auto=compress&cs=tinysrgb&w=800'
    }
  ];

  useEffect(() => {
    if (visibleMessages < chatMessages.length) {
      const timer = setTimeout(() => {
        setVisibleMessages(prev => prev + 1);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [visibleMessages]);

  useEffect(() => {
    setVisibleMessages(1);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % products.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + products.length) % products.length);
  };

  return (
    <section id="about" className="py-24 relative bg-black overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-80 bg-gradient-to-b from-indigo-900/10 to-transparent"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-purple-500/10 rounded-full filter blur-3xl"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="lg:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">{t('features.title')} <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-400">VirtIQ</span></h2>
            <p className="text-lg text-gray-300 mb-8">{t('features.subtitle')}</p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div key={index} className="bg-gray-900/50 backdrop-blur-sm rounded-lg p-6 border border-gray-800 hover:border-purple-500/50 transition-colors duration-300">
                  <div className="mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-gray-400">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
          
          <div className="lg:w-1/2 relative">
            <div className="relative w-full max-w-md mx-auto">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-lg blur opacity-75"></div>
              <div className="relative bg-black rounded-lg overflow-hidden border border-gray-800">
                <div className="px-6 py-4 border-b border-gray-800 bg-gray-900/50">
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-green-500 rounded-full mr-2 animate-pulse"></div>
                    <span className="text-sm font-medium text-gray-300">Ecom Specialist</span>
                  </div>
                </div>
                
                <div className="p-6 space-y-4">
                  {chatMessages.slice(0, visibleMessages).map((message, index) => (
                    <div
                      key={index}
                      className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'} opacity-0 animate-fade-in`}
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
                        <div className="flex items-center justify-between mb-4">
                          <button
                            onClick={prevSlide}
                            className="p-2 rounded-full bg-gray-800 text-white hover:bg-purple-600 transition-colors"
                            aria-label="Previous slide"
                          >
                            <ChevronLeft size={20} />
                          </button>
                          <button
                            onClick={nextSlide}
                            className="p-2 rounded-full bg-gray-800 text-white hover:bg-purple-600 transition-colors"
                            aria-label="Next slide"
                          >
                            <ChevronRight size={20} />
                          </button>
                        </div>
                        
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
                                <div className="aspect-w-1 aspect-h-1 w-full mb-4 bg-gray-700 rounded-lg overflow-hidden">
                                  <img 
                                    src={product.image} 
                                    alt={product.name}
                                    className="w-full h-64 object-cover"
                                  />
                                </div>
                                <h3 className="text-lg font-semibold text-white mb-2">{product.name}</h3>
                                <p className="text-gray-400 text-sm mb-2">{product.description}</p>
                                <p className="text-purple-400 font-medium mb-4">{product.price}</p>
                                <Button variant="primary" size="sm" fullWidth>
                                  View Details
                                </Button>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
                
                <div className="px-6 py-4 bg-gray-900/50 border-t border-gray-800">
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
        </div>
      </div>
    </section>
  );
};