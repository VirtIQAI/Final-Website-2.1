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
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 font-semibold">
            I
          </span>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 font-extrabold tracking-tight">
            Q
          </span>
        </span>
        <span className="text-xs block text-gray-400 -mt-1">AI Agency</span>
      </div>
    </div>
  );
};