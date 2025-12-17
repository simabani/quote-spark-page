import React from 'react';

interface LogoProps {
  showText?: boolean;
  showTagline?: boolean;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
}

const HeartWithSparkles = ({ className }: { className?: string }) => (
  <svg 
    viewBox="0 0 100 100" 
    className={className}
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
  >
    <style>
      {`
        @keyframes heartPulse {
          0%, 100% { 
            transform: scale(1);
            filter: drop-shadow(0 0 12px rgba(244, 63, 122, 0.6));
          }
          50% { 
            transform: scale(1.03);
            filter: drop-shadow(0 0 20px rgba(244, 63, 122, 0.9));
          }
        }
        @keyframes sparkle1 {
          0%, 100% { opacity: 0.3; transform: scale(0.8); }
          50% { opacity: 1; transform: scale(1.2); }
        }
        @keyframes sparkle2 {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.3; transform: scale(0.7); }
        }
        @keyframes sparkle3 {
          0%, 100% { opacity: 0.5; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.3); }
        }
        .heart-main {
          animation: heartPulse 2s ease-in-out infinite;
          transform-origin: center;
        }
        .sparkle-1 { animation: sparkle1 1.5s ease-in-out infinite; }
        .sparkle-2 { animation: sparkle2 2s ease-in-out infinite 0.3s; }
        .sparkle-3 { animation: sparkle3 1.8s ease-in-out infinite 0.6s; }
        .sparkle-4 { animation: sparkle1 2.2s ease-in-out infinite 0.9s; }
        .sparkle-5 { animation: sparkle2 1.6s ease-in-out infinite 0.4s; }
        .sparkle-6 { animation: sparkle3 2s ease-in-out infinite 0.7s; }
      `}
    </style>
    
    {/* Sparkles around heart */}
    <g className="sparkle-1">
      <path d="M20 30 L22 25 L24 30 L29 32 L24 34 L22 39 L20 34 L15 32 Z" fill="#fcd34d" />
    </g>
    <g className="sparkle-2">
      <path d="M78 25 L80 21 L82 25 L86 27 L82 29 L80 33 L78 29 L74 27 Z" fill="#fcd34d" />
    </g>
    <g className="sparkle-3">
      <path d="M15 55 L16.5 52 L18 55 L21 56.5 L18 58 L16.5 61 L15 58 L12 56.5 Z" fill="#c4b5fd" />
    </g>
    <g className="sparkle-4">
      <path d="M85 50 L86.5 47 L88 50 L91 51.5 L88 53 L86.5 56 L85 53 L82 51.5 Z" fill="#c4b5fd" />
    </g>
    <g className="sparkle-5">
      <circle cx="28" cy="18" r="2" fill="#fcd34d" />
    </g>
    <g className="sparkle-6">
      <circle cx="72" cy="15" r="1.5" fill="#fcd34d" />
    </g>
    <g className="sparkle-2">
      <circle cx="12" cy="42" r="1.5" fill="#f9a8d4" />
    </g>
    <g className="sparkle-3">
      <circle cx="88" cy="38" r="2" fill="#f9a8d4" />
    </g>
    
    {/* Main heart with glow */}
    <g className="heart-main">
      {/* Heart shadow/glow base */}
      <path 
        d="M50 85 C50 85, 20 58, 20 40 C20 25, 32 15, 50 32 C68 15, 80 25, 80 40 C80 58, 50 85, 50 85Z"
        fill="rgba(244, 114, 182, 0.2)"
        transform="translate(0, 2)"
      />
      
      {/* Heart main body */}
      <path 
        d="M50 82 C50 82, 22 56, 22 40 C22 26, 34 18, 50 33 C66 18, 78 26, 78 40 C78 56, 50 82, 50 82Z"
        fill="url(#heartGradient)"
        stroke="url(#heartStroke)"
        strokeWidth="2"
      />
      
      {/* Large shine */}
      <ellipse cx="36" cy="36" rx="8" ry="10" fill="rgba(255,255,255,0.4)" />
      
      {/* Small shine */}
      <ellipse cx="33" cy="32" rx="4" ry="5" fill="rgba(255,255,255,0.6)" />
      
      {/* Tiny highlight */}
      <circle cx="31" cy="29" r="2" fill="rgba(255,255,255,0.8)" />
    </g>
    
    <defs>
      <linearGradient id="heartGradient" x1="22" y1="18" x2="78" y2="82" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#ff6b9d" />
        <stop offset="35%" stopColor="#f43f7a" />
        <stop offset="100%" stopColor="#db2777" />
      </linearGradient>
      <linearGradient id="heartStroke" x1="22" y1="18" x2="78" y2="82" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#ffa4c4" />
        <stop offset="100%" stopColor="#be185d" />
      </linearGradient>
    </defs>
  </svg>
);

const Logo = ({ showText = true, showTagline = false, size = 'md', className = '' }: LogoProps) => {
  const sizes = {
    sm: { icon: 'w-14 h-14', text: 'text-xl', tagline: 'text-sm' },
    md: { icon: 'w-20 h-20', text: 'text-2xl', tagline: 'text-base' },
    lg: { icon: 'w-28 h-28', text: 'text-3xl', tagline: 'text-lg' },
    xl: { icon: 'w-36 h-36', text: 'text-4xl md:text-5xl', tagline: 'text-lg' },
  };

  return (
    <div className={`flex flex-col items-center justify-center ${className}`}>
      <HeartWithSparkles className={sizes[size].icon} />
      {showText && (
        <h1 className={`font-quicksand font-bold ${sizes[size].text} text-purple-700 -mt-1`}>
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
