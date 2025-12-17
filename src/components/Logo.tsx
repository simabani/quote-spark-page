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
    xl: { icon: 'w-20 h-20', text: 'text-3xl' },
  };

  return (
    <div className={`flex flex-col items-center justify-center gap-2 ${className}`}>
      <img 
        src={logoIcon} 
        alt="Little Lift logo" 
        className={`${sizes[size].icon} animate-lift`}
      />
      {showText && (
        <span className={`font-quicksand font-bold ${sizes[size].text} text-purple-700`}>
          Little Lift
        </span>
      )}
    </div>
  );
};

export default Logo;
