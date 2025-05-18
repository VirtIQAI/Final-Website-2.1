import React, { useState, useEffect } from 'react';
import { Button } from '../components/ui/Button';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import { CheckCircle2, MessageSquare, ShoppingCart, Scale, BarChart } from 'lucide-react';

const AIAgent: React.FC = () => {
  const navigate = useNavigate();
  const { i18n } = useTranslation();
  const isDanish = i18n.language === 'da';
  const [terminalText, setTerminalText] = useState('');
  const fullText = isDanish ? 'Indsamler kunde- og virksomhedsdata...' : 'Collecting customer and business data...';
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setTerminalText(prev => prev + fullText[currentIndex]);
        setCurrentIndex(c => c + 1);
      }, 50);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, fullText]);

  // ... (keep all other existing state and constants)

  return (
    <main className="flex-grow pt-24">
      {/* Hero Section */}
      <section className="py-16 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-purple-900/10 to-transparent"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block mb-4 py-1 px-3 bg-purple-500/10 backdrop-blur-sm rounded-full border border-purple-500/20">
                <span className="text-sm font-semibold text-purple-400">
                  {isDanish ? 'AI AGENT EKSPERTER' : 'AI AGENTS EXPERTS'}
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                {isDanish
                  ? 'Transformer Din Virksomhed med Intelligente AI-Agenter'
                  : 'Transform Your Business with Intelligent AI Agents'}
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                {isDanish
                  ? 'Opdag forskellige anvendelser af AI-agenter skræddersyet til at løfte din virksomheds drift'
                  : 'Discover diverse applications of AI agents tailored to elevate your business operations'}
              </p>
              <Button variant="primary" size="lg" onClick={handleDemoClick}>
                {isDanish ? 'Kom i Gang Nu' : 'Get Started Now'}
              </Button>
            </div>

            <div className="relative">
              <div className="bg-gray-900/80 backdrop-blur-sm rounded-lg border border-gray-800 overflow-hidden">
                <div className="bg-gray-800 px-4 py-2 border-b border-gray-700">
                  <div className="flex items-center">
                    <div className="w-3 h-3 rounded-full bg-red-500 mr-2"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500 mr-2"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    <span className="ml-4 text-sm text-gray-400">AI Agent</span>
                  </div>
                </div>
                <div className="p-6 h-[300px]">
                  <div className="flex items-center mb-4">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                    <span className="font-mono text-green-400">{terminalText}</span>
                    <span className="animate-pulse ml-1">▊</span>
                  </div>
                  <div className="mt-auto">
                    <div className="bg-gray-800/50 rounded-lg p-2 border border-gray-700">
                      <input
                        type="text"
                        placeholder={isDanish ? "Spørg AI agenten noget..." : "Ask the AI agent something..."}
                        className="w-full bg-transparent border-none text-gray-300 placeholder-gray-500 focus:outline-none font-mono text-sm"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Keep all other existing sections */}
      
    </main>
  );
};

export default AIAgent;