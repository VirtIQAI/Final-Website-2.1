import React from 'react';
import { Zap } from 'lucide-react';

export const Logo: React.FC = () => {
  return (
    <div className="flex items-center">
      <div className="w-10 h-10 rounded-xl overflow-hidden bg-gradient-to-br from-purple-600 to-indigo-600 flex items-center justify-center mr-2">
        <Zap size={24} className="text-white" />
      </div>
      <div>
        <span className="font-bold text-xl text-white">Virt<span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-400">IQ</span></span>
        <span className="text-xs block text-gray-400 -mt-1">AI Agency</span>
      </div>
    </div>
  );
};