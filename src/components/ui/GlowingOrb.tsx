import React, { useEffect, useRef } from 'react';

export const GlowingOrb: React.FC = () => {
  const orbRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const orb = orbRef.current;
    if (!orb) return;
    
    let angle = 0;
    let requestId: number;
    
    const animate = () => {
      angle += 0.005;
      
      const x = Math.cos(angle) * 5;
      const y = Math.sin(angle) * 5;
      
      if (orb) {
        orb.style.transform = `translate(${x}px, ${y}px)`;
      }
      
      requestId = requestAnimationFrame(animate);
    };
    
    animate();
    
    return () => {
      cancelAnimationFrame(requestId);
    };
  }, []);
  
  return (
    <div className="relative w-[320px] h-[320px]" ref={orbRef}>
      <div className="absolute w-full h-full rounded-full bg-purple-600/20 animate-pulse"></div>
      <div className="absolute w-[85%] h-[85%] top-[7.5%] left-[7.5%] rounded-full bg-purple-600/30 blur-md animate-pulse animation-delay-300"></div>
      <div className="absolute w-[70%] h-[70%] top-[15%] left-[15%] rounded-full bg-purple-600/50 blur-sm animate-pulse animation-delay-700"></div>
      <div className="absolute w-[50%] h-[50%] top-[25%] left-[25%] rounded-full bg-white/80 blur-lg"></div>
      
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative w-[60%] h-[60%] rounded-full overflow-hidden">
          <div className="absolute w-[200%] h-[200%] top-[-50%] left-[-50%] bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-purple-400 via-indigo-500 to-transparent animate-spin-slow"></div>
        </div>
      </div>
    </div>
  );
};