
import React, { useState } from 'react';
import LogoOrb from './LogoOrb';
import Reveal from './Reveal';

interface SocialHubProps {
  size?: 'full' | 'compact';
}

const SocialHub: React.FC<SocialHubProps> = ({ size = 'full' }) => {
  const [hoveredPlatform, setHoveredPlatform] = useState<string | null>(null);

  const platforms = [
    { 
      name: "LinkedIn", 
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
        </svg>
      )
    },
    { 
      name: "TikTok", 
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.06-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.27 1.76-.23.84-.13 1.78.29 2.51.39.75 1.04 1.31 1.86 1.57.9.32 1.91.21 2.72-.23.83-.44 1.42-1.26 1.56-2.17.05-.28.07-.56.07-.84.02-4.45-.01-8.9.03-13.35z"/>
        </svg>
      )
    },
    { 
      name: "Facebook", 
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-8.74h-2.94v-3.403h2.94v-2.511c0-2.91 1.777-4.493 4.373-4.493 1.243 0 2.312.092 2.623.134v3.042h-1.801c-1.412 0-1.685.671-1.685 1.655v2.173h3.368l-.438 3.403h-2.93v8.74h6.101c.732 0 1.325-.593 1.325-1.325v-21.351c0-.732-.593-1.325-1.325-1.325z"/>
        </svg>
      )
    },
    { 
      name: "Instagram", 
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
        </svg>
      )
    },
    { 
      name: "X", 
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
        </svg>
      )
    }
  ];

  const isCompact = size === 'compact';
  const containerSize = isCompact ? 'w-56 h-56' : 'w-full max-w-[500px]';
  const centralNodeSize = isCompact ? 'w-20 h-20' : 'w-28 h-28 md:w-40 md:h-40';
  const centralTextSize = isCompact ? 'text-xl' : 'text-2xl md:text-3xl';
  const orbitRadius = isCompact ? 110 : 180;
  const iconSize = isCompact ? 'w-10 h-10' : 'w-12 h-12 md:w-14 md:h-14';

  const wheelContent = (
    <Reveal>
      <div className={`relative ${containerSize} aspect-square flex items-center justify-center`}>
      {/* Connecting Lines SVG */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-20" viewBox="0 0 500 500">
        {platforms.map((_, idx) => {
          const angle = (idx * (360 / platforms.length)) - 90;
          const x2 = 250 + orbitRadius * Math.cos((angle * Math.PI) / 180);
          const y2 = 250 + orbitRadius * Math.sin((angle * Math.PI) / 180);
          return (
            <line 
              key={idx}
              x1="250" 
              y1="250" 
              x2={x2} 
              y2={y2} 
              stroke="white" 
              strokeWidth="1" 
              strokeDasharray="4 4" 
            />
          );
        })}
        <circle cx="250" cy="250" r={orbitRadius} fill="none" stroke="white" strokeWidth="0.5" strokeDasharray="2 6" />
      </svg>

      {/* Central Node */}
      <div className="relative z-20">
        <LogoOrb 
          className={`${centralNodeSize}`}
          logoClassName={isCompact ? "h-14 w-auto" : "h-14 w-auto md:h-16"}
        />
      </div>

      {/* Orbiting Elements Container */}
      <div className="absolute inset-0 animate-[spin_60s_linear_infinite] hover:[animation-play-state:paused]">
        {platforms.map((platform, idx) => {
          const angle = (idx * (360 / platforms.length));
          return (
            <div 
              key={platform.name}
              className="absolute top-1/2 left-1/2 -mt-4 -ml-4 flex items-center justify-center"
              style={{
                transform: `rotate(${angle}deg) translateX(${orbitRadius}px) rotate(-${angle}deg)`
              }}
            >
              {/* Compensate rotation to keep icon upright */}
              <div className="animate-[spin_60s_linear_infinite_reverse] [animation-play-state:inherit]">
                <div 
                  className="relative group cursor-pointer"
                  onMouseEnter={() => setHoveredPlatform(platform.name)}
                  onMouseLeave={() => setHoveredPlatform(null)}
                >
                  <div className={`${iconSize} glass rounded-2xl flex items-center justify-center text-white/60 transition-all duration-500 hover:text-amber-500 hover:border-amber-500/50 hover:scale-110 hover:bg-white/5`}>
                    {React.cloneElement(platform.icon as React.ReactElement, { 
                      className: isCompact ? 'w-4 h-4' : 'w-5 h-5'
                    })}
                  </div>

                  {/* Tooltip */}
                  {!isCompact && (
                    <div className={`absolute -bottom-10 left-1/2 -translate-x-1/2 px-3 py-1.5 rounded-lg glass text-[10px] font-bold uppercase tracking-widest text-amber-500 whitespace-nowrap transition-all duration-300 pointer-events-none ${hoveredPlatform === platform.name ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}`}>
                      {platform.name}
                    </div>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
      </div>
    </Reveal>
  );

  if (isCompact) {
    return wheelContent;
  }

  return (
    <section className="py-32 px-6 relative bg-gradient-to-b from-black to-[#0a0a0a] overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-amber-500/5 blur-[120px] rounded-full pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        <div className="text-center mb-24 space-y-4">
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight">Social Media Hub</h2>
          <p className="text-white/40 text-lg md:text-xl font-light">Where human connection meets digital scale.</p>
        </div>
        
        {wheelContent}
        
        <div className="mt-32 max-w-lg text-center space-y-6">
          <p className="text-white/40 text-lg leading-relaxed font-light">
            We orchestrate your presence across the entire digital landscape, ensuring a cohesive and human voice that resonates with your community.
          </p>
          <div className="h-px w-24 bg-gradient-to-r from-transparent via-amber-500/30 to-transparent mx-auto"></div>
        </div>
      </div>

      <style>{`
        @keyframes spin-reverse {
          from { transform: rotate(0deg); }
          to { transform: rotate(-360deg); }
        }
      `}</style>
    </section>
  );
};

export default SocialHub;
