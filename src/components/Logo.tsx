import React from 'react';
import logoIcon from '@/assets/logo-icon.png';

interface LogoProps {
  showText?: boolean;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
}

const Logo = ({ showText = true, size = 'md', className = '' }: LogoProps) => {
  const sizes = {
    sm: { icon: 'w-8 h-8', text: 'text-lg' },
    md: { icon: 'w-12 h-12', text: 'text-2xl' },
    lg: { icon: 'w-16 h-16', text: 'text-3xl' },
    xl: { icon: 'w-24 h-24', text: 'text-4xl' },
  };

  return (
    <div className={`flex items-center justify-center gap-3 ${className}`}>
      <img 
        src={logoIcon} 
        alt="Little Lift logo" 
        className={`${sizes[size].icon} animate-lift`}
      />
      {showText && (
        <span className={`font-nunito font-semibold ${sizes[size].text} text-foreground`}>
          Little Lift
        </span>
      )}
    </div>
  );
};

export default Logo;
