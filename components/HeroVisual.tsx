
import React from 'react';

const HeroVisual: React.FC = () => {
  return (
    <div className="relative w-full aspect-square md:aspect-[4/3] lg:aspect-square bg-[#080810] overflow-hidden rounded-[2.5rem] border border-white/10 shadow-2xl group">
      <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="xMidYMid slice" viewBox="0 0 800 800">
        <defs>
          <radialGradient id="spaceGrad" cx="0.5" cy="0.5" r="0.7">
            <stop offset="0%" stopColor="#2e1065" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#020617" stopOpacity="1" />
          </radialGradient>
          <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="6" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>

        {/* Background */}
        <rect width="100%" height="100%" fill="url(#spaceGrad)" />
        
        {/* Animated Constellation Lines */}
        <g className="stroke-amber-500/15" strokeWidth="1" fill="none">
          <circle cx="400" cy="400" r="250" strokeDasharray="4 4" className="animate-[spin_60s_linear_infinite]" />
          <circle cx="400" cy="400" r="350" strokeOpacity="0.1" />
          <path d="M100,200 Q400,100 700,200" />
          <path d="M100,600 Q400,700 700,600" />
          <line x1="150" y1="400" x2="650" y2="400" strokeOpacity="0.1" />
          <line x1="400" y1="150" x2="400" y2="650" strokeOpacity="0.1" />
        </g>

        {/* Central Composition */}
        <g transform="translate(400, 400)" filter="url(#glow)">
          {/* Golden Geometries */}
          <rect x="-160" y="-160" width="320" height="320" className="stroke-amber-500" strokeWidth="1" fill="none" opacity="0.3" transform="rotate(45)" />
          <circle r="190" className="stroke-amber-500" strokeWidth="1.5" fill="none" opacity="0.6" />
          
          {/* Vitruvian Figure Abstract */}
          <g opacity="0.9" className="fill-amber-500">
             {/* Head */}
             <circle cy="-80" r="30" />
             {/* Body */}
             <path d="M-40,120 L40,120 L20,-40 L-20,-40 Z" />
             {/* Arms Upper */}
             <path d="M-15,-30 L-140,-60 L-140,-40 L-15,-10 Z" />
             <path d="M15,-30 L140,-60 L140,-40 L15,-10 Z" />
             {/* Arms Lower */}
             <path d="M-15,-30 L-120,20 L-120,40 L-15,-10 Z" opacity="0.5" />
             <path d="M15,-30 L120,20 L120,40 L15,-10 Z" opacity="0.5" />
             {/* Legs */}
             <path d="M-15,110 L-70,230 L-50,230 L-5,110 Z" />
             <path d="M15,110 L70,230 L50,230 L5,110 Z" />
          </g>

          {/* Nodes */}
          <circle cx="0" cy="-190" r="4" className="fill-amber-500 animate-pulse" />
          <circle cx="190" cy="0" r="4" className="fill-amber-500 animate-pulse" />
          <circle cx="-190" cy="0" r="4" className="fill-amber-500 animate-pulse" />
          <circle cx="0" cy="190" r="4" className="fill-amber-500 animate-pulse" />
        </g>
        
        {/* Floating Connection Points */}
        <g fill="#a78bfa">
           <circle cx="100" cy="100" r="2" opacity="0.6" />
           <circle cx="700" cy="100" r="2" opacity="0.6" />
           <circle cx="700" cy="700" r="2" opacity="0.6" />
           <circle cx="100" cy="700" r="2" opacity="0.6" />
           <circle cx="200" cy="500" r="1.5" opacity="0.4" />
           <circle cx="600" cy="300" r="1.5" opacity="0.4" />
        </g>
      </svg>
      
      {/* Overlay Texture */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none"></div>
    </div>
  );
};

export default HeroVisual;
