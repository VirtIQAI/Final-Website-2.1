import React from 'react';

export const Logo: React.FC = () => {
  return (
    <div className="flex items-center">
<img
  src="/logo-transparent.png"
  alt="VirtIQ Logo"
  className="h-10 w-10 object-contain mr-2 transition-all duration-300 dark:brightness-125"
/>
      <div>
        <span className="font-bold text-xl text-white">
          Virt
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-400">
            IQ
          </span>
        </span>
        <span className="text-xs block text-gray-400 -mt-1">AI Agency</span>
      </div>
    </div>
  );
};