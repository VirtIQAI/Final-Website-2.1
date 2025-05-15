import React, { ReactNode } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: ReactNode;
  href: string;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, icon, href }) => {
  const { i18n } = useTranslation();
  const isDanish = i18n.language === 'da';
  
  return (
    <div className="group relative">
      <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-lg opacity-0 group-hover:opacity-100 blur transition duration-300"></div>
      
      <div className="relative bg-gray-900/50 backdrop-blur-sm p-8 rounded-lg border border-gray-800 group-hover:border-transparent transition-all duration-300 h-full flex flex-col transform group-hover:-translate-y-1 group-hover:shadow-2xl group-hover:shadow-purple-500/10">
        <div className="relative w-16 h-16 mb-6">
          {/* Animated background glow */}
          <div className="absolute inset-0 bg-purple-500/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          
          {/* Icon container with animations */}
          <div className="relative w-full h-full rounded-full bg-gray-800/50 border border-gray-700 group-hover:border-purple-500/50 flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 animate-bounce-subtle">
            {/* Icon wrapper */}
            <div className="transform group-hover:scale-110 transition-transform duration-300">
              {icon}
            </div>
          </div>
        </div>
        
        <h3 className="text-xl font-semibold mb-3 text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-indigo-400 transition-all duration-300">
          {title}
        </h3>
        
        <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300 mb-6 flex-grow">
          {description}
        </p>
        
        <div className="relative inline-flex items-center">
          <Link 
            to={href}
            className="inline-flex items-center text-sm font-medium text-purple-400 group-hover:text-white transition-colors duration-300"
          >
            {isDanish ? 'Læs mere' : 'Learn more'}
            <svg 
              className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform duration-300" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M9 5l7 7-7 7" 
              />
            </svg>
          </Link>
          <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-indigo-400 group-hover:w-full transition-all duration-300"></div>
        </div>
      </div>
    </div>
  );
};