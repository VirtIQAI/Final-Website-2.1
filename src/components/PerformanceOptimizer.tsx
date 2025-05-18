import React, { useEffect } from 'react';

export const PerformanceOptimizer: React.FC = () => {
  useEffect(() => {
    // Preload critical resources
    const preloadLinks = [
      { rel: 'preload', href: '/logo-transparent.png', as: 'image' },
      { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
      { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossOrigin: 'anonymous' }
    ];

    preloadLinks.forEach(link => {
      const linkElement = document.createElement('link');
      Object.entries(link).forEach(([key, value]) => {
        if (value) linkElement.setAttribute(key, value);
      });
      document.head.appendChild(linkElement);
    });

    // Clean up function
    return () => {
      document.querySelectorAll('link[rel="preload"], link[rel="preconnect"]')
        .forEach(element => element.remove());
    };
  }, []);

  return null;
};