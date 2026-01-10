import React from 'react';

interface LogoProps {
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ className = 'h-12 w-auto md:h-16' }) => {
  return (
    <img
      src="/edited-cropped-1766269142825.png"
      alt="HumanBased logo"
      className={className}
    />
  );
};

export default Logo;
