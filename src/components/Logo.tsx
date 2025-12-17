import React from 'react';

interface LogoProps {
  showText?: boolean;
  showTagline?: boolean;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
}

const HeartWithWings = ({ className }: { className?: string }) => (
  <svg 
    viewBox="0 0 120 80" 
    className={className}
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Left wing */}
    <path 
      d="M45 40 C35 35, 20 30, 10 35 C5 38, 2 45, 8 50 C15 55, 30 52, 42 45"
      stroke="#c4b5fd" 
      strokeWidth="2.5" 
      fill="#ede9fe"
      strokeLinecap="round"
    />
    <path 
      d="M42 42 C32 38, 22 36, 15 40 C12 42, 12 46, 18 48 C25 50, 35 47, 42 42"
      stroke="#c4b5fd" 
      strokeWidth="1.5" 
      fill="#f5f3ff"
      strokeLinecap="round"
    />
    
    {/* Right wing */}
    <path 
      d="M75 40 C85 35, 100 30, 110 35 C115 38, 118 45, 112 50 C105 55, 90 52, 78 45"
      stroke="#c4b5fd" 
      strokeWidth="2.5" 
      fill="#ede9fe"
      strokeLinecap="round"
    />
    <path 
      d="M78 42 C88 38, 98 36, 105 40 C108 42, 108 46, 102 48 C95 50, 85 47, 78 42"
      stroke="#c4b5fd" 
      strokeWidth="1.5" 
      fill="#f5f3ff"
      strokeLinecap="round"
    />
    
    {/* Heart */}
    <path 
      d="M60 70 C60 70, 40 50, 40 38 C40 28, 48 22, 60 32 C72 22, 80 28, 80 38 C80 50, 60 70, 60 70Z"
      fill="url(#heartGradient)"
      stroke="#a78bfa"
      strokeWidth="2"
    />
    
    {/* Heart shine */}
    <ellipse cx="50" cy="36" rx="4" ry="5" fill="rgba(255,255,255,0.6)" />
    
    <defs>
      <linearGradient id="heartGradient" x1="40" y1="22" x2="80" y2="70" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#f9a8d4" />
        <stop offset="100%" stopColor="#f472b6" />
      </linearGradient>
    </defs>
  </svg>
);

const Logo = ({ showText = true, showTagline = false, size = 'md', className = '' }: LogoProps) => {
  const sizes = {
    sm: { icon: 'w-16 h-12', text: 'text-xl', tagline: 'text-sm' },
    md: { icon: 'w-24 h-16', text: 'text-2xl', tagline: 'text-base' },
    lg: { icon: 'w-32 h-24', text: 'text-3xl', tagline: 'text-lg' },
    xl: { icon: 'w-44 h-32', text: 'text-4xl md:text-5xl', tagline: 'text-lg' },
  };

  return (
    <div className={`flex flex-col items-center justify-center gap-1 ${className}`}>
      <div className="animate-lift">
        <HeartWithWings className={sizes[size].icon} />
      </div>
      {showText && (
        <h1 className={`font-quicksand font-bold ${sizes[size].text} text-purple-700`}>
          Little Lift
        </h1>
      )}
      {showTagline && (
        <p className={`${sizes[size].tagline} text-purple-600 font-medium text-center max-w-sm leading-relaxed mt-1`}>
          We all need a little lift from time to time 💜
        </p>
      )}
    </div>
  );
};

export default Logo;
