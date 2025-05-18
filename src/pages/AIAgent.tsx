import React, { useState } from 'react';
import { Button } from '../components/ui/Button';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';

const AIAgent: React.FC = () => {
  const navigate = useNavigate();
  const { i18n } = useTranslation();
  const isDanish = i18n.language === 'da';

  const handleDemoClick = () => {
    navigate('/#contact');
  };

  const [messages] = useState({
    shopping: [
      { type: 'bot', text: 'Welcome to our store 🚀' },
      { type: 'bot', text: 'What can we do for you?' },
      { type: 'user', text: "I'm looking for some cool t-shirts for summer, which are clean and give good vibes" },
      { type: 'bot', text: 'Here are some of our most popular summer t-shirts:' }
    ],
    legal: [
      { type: 'bot', text: "I'm a legal assistant specialised in The Danish Rent Act. Let me know how I can assist you today" },
      { type: 'user', text: 'Can I kick out my tenant?' },
      { type: 'bot', text: 'Terminating or Cancelling a Tenancy\n\nTerminating or cancelling a tenant requires that you, as the landlord, comply with the rules set out in the Danish Rent Act. It is important to distinguish between termination and cancellation, as they have different requirements and consequences:\n\nTermination of a Tenant\nAs a landlord, you may only terminate a tenant in specific situations, such as:\n\nIf you need to use the property for your own residence.' }
    ],
    shopify: [
      { type: 'bot', text: 'Welcome back, Chris! 👋 How can I help you with your store insights today?' },
      { type: 'user', text: 'What products have performed best this week, and what have performed the worst? What is trending? Have we delivered on time?' },
      { type: 'bot', text: "Here's your store performance analysis for this week:\n\n📈 Top Performers:\n• Summer Collection T-Shirt: 127 units sold (+45% from last week)\n• Eco-Friendly Hoodie: 98 units sold (+32%)\n• Urban Streetwear Cap: 76 units sold (+28%)\n\n📉 Underperforming Products:\n• Vintage Denim Jacket: 12 units (-60% from last week)\n• Classic Polo Shirt: 15 units (-45%)" }
    ]
  });

  return (
    <main className="flex-grow pt-24">
      <section className="py-16 relative">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold mb-4">
              {isDanish ? 'Live Eksempler på AI Agenter' : 'Live Examples AI Agents'}
            </h2>
            <p className="text-gray-300">
              {isDanish
                ? 'Udforsk kraften i AI-agenter gennem vores live eksempler nedenfor'
                : 'Explore the power of AI agents through our live examples below'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Shopping Assistant */}
            <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl border border-gray-800 overflow-hidden">
              <div className="p-4 border-b border-gray-800 flex items-center justify-between">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                  <span className="text-sm font-medium">Shopping Assistant</span>
                </div>
                <span className="text-xs text-purple-400">External Use Case</span>
              </div>
              <div className="p-4 h-[400px] overflow-y-auto space-y-4">
                {messages.shopping.map((message, index) => (
                  <div
                    key={index}
                    className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div
                      className={`max-w-[80%] px-4 py-2 rounded-lg ${
                        message.type === 'user'
                          ? 'bg-purple-600 text-white'
                          : 'bg-gray-800 text-gray-200'
                      }`}
                    >
                      <p className="text-sm whitespace-pre-line">{message.text}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="p-4 border-t border-gray-800">
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

            {/* Legal Assistant */}
            <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl border border-gray-800 overflow-hidden">
              <div className="p-4 border-b border-gray-800 flex items-center justify-between">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                  <span className="text-sm font-medium">Legal Assistant</span>
                </div>
                <span className="text-xs text-purple-400">External Use Case</span>
              </div>
              <div className="p-4 h-[400px] overflow-y-auto space-y-4">
                {messages.legal.map((message, index) => (
                  <div
                    key={index}
                    className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div
                      className={`max-w-[80%] px-4 py-2 rounded-lg ${
                        message.type === 'user'
                          ? 'bg-purple-600 text-white'
                          : 'bg-gray-800 text-gray-200'
                      }`}
                    >
                      <p className="text-sm whitespace-pre-line">{message.text}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="p-4 border-t border-gray-800">
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

            {/* Shopify Insights Assistant */}
            <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl border border-gray-800 overflow-hidden">
              <div className="p-4 border-b border-gray-800 flex items-center justify-between">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                  <span className="text-sm font-medium">Shopify Insights Assistant</span>
                </div>
                <span className="text-xs text-purple-400">Internal Use Case</span>
              </div>
              <div className="p-4 h-[400px] overflow-y-auto space-y-4">
                {messages.shopify.map((message, index) => (
                  <div
                    key={index}
                    className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div
                      className={`max-w-[80%] px-4 py-2 rounded-lg ${
                        message.type === 'user'
                          ? 'bg-purple-600 text-white'
                          : 'bg-gray-800 text-gray-200'
                      }`}
                    >
                      <p className="text-sm whitespace-pre-line">{message.text}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="p-4 border-t border-gray-800">
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
      </section>
    </main>
  );
};

export default AIAgent;