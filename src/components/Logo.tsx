import React from 'react';
import logoIcon from '@/assets/logo-icon.png';

interface LogoProps {
  showText?: boolean;
  showTagline?: boolean;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
}

const Logo = ({ showText = true, showTagline = false, size = 'md', className = '' }: LogoProps) => {
  const sizes = {
    sm: { icon: 'w-10 h-10', text: 'text-xl', tagline: 'text-sm' },
    md: { icon: 'w-14 h-14', text: 'text-2xl', tagline: 'text-base' },
    lg: { icon: 'w-20 h-20', text: 'text-3xl', tagline: 'text-lg' },
    xl: { icon: 'w-28 h-28', text: 'text-4xl', tagline: 'text-lg' },
  };

  return (
    <div className={`flex flex-col items-center justify-center gap-3 ${className}`}>
      <img 
        src={logoIcon} 
        alt="Little Lift - A winged heart logo" 
        className={`${sizes[size].icon} animate-lift`}
      />
      {showText && (
        <h1 className={`font-quicksand font-bold ${sizes[size].text} text-purple-700`}>
          Little Lift
        </h1>
      )}
      {showTagline && (
        <p className={`${sizes[size].tagline} text-purple-600/90 font-medium text-center max-w-xs leading-relaxed`}>
          We all need a little lift from time to time 💜
        </p>
      )}
    </div>
  );
};

export default Logo;
