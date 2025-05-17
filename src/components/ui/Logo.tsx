import React from 'react';

export const Logo: React.FC = () => {
  return (
    <div className="flex items-center">
      <img
        src="/logo-transparent.png"
        alt="VirtIQ Logo"
        className="h-12 w-12 object-contain mr-3 transition-all duration-300 dark:brightness-125"
      />
      <div>
        <span className="font-bold text-xl text-white">
          Virt
          <span className="relative text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-indigo-500 font-bold tracking-tight">
            <span className="absolute inset-0 blur-sm opacity-60 bg-gradient-to-r from-pink-500 to-indigo-500 rounded-md"></span>
            <span className="relative">IQ</span>
          </span>
        </span>
        <span className="text-xs block text-gray-400 -mt-1">AI Agency</span>
      </div>
    </div>
  );
};