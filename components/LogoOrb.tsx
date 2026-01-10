import React from 'react';
import Logo from './Logo';

interface LogoOrbProps {
  className?: string; // optional extra classes for outer container (e.g. size tweaks)
  logoClassName?: string; // optional extra classes for inner logo size
}

const LogoOrb: React.FC<LogoOrbProps> = ({
  className = '',
  logoClassName = '',
}) => {
  return (
    <div className={`relative group ${className}`}>
      <div className="w-full h-full rounded-full bg-black border border-amber-500/50 flex items-center justify-center shadow-[0_0_50px_rgba(242,178,74,0.15)] transition-all duration-500 group-hover:scale-110 group-hover:shadow-[0_0_80px_rgba(242,178,74,0.25)] overflow-hidden">
        <Logo className={`h-14 w-auto md:h-20 ${logoClassName}`} />
      </div>
      {/* Pulsing rings */}
      <div className="absolute inset-0 rounded-full border border-amber-500/20 animate-ping opacity-20 pointer-events-none"></div>
    </div>
  );
};

export default LogoOrb;

