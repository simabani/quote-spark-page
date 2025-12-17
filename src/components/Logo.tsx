import React from 'react';

interface LogoProps {
  showText?: boolean;
  showTagline?: boolean;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
}

const HeartWithWings = ({ className }: { className?: string }) => (
  <svg 
    viewBox="0 0 140 80" 
    className={className}
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
  >
    <style>
      {`
        @keyframes leftWingFloat {
          0%, 100% { transform: rotate(0deg) translateY(0); }
          50% { transform: rotate(-5deg) translateY(-3px); }
        }
        @keyframes rightWingFloat {
          0%, 100% { transform: rotate(0deg) translateY(0); }
          50% { transform: rotate(5deg) translateY(-3px); }
        }
        @keyframes heartGlow {
          0%, 100% { 
            filter: drop-shadow(0 0 4px rgba(244, 114, 182, 0.4));
          }
          50% { 
            filter: drop-shadow(0 0 12px rgba(244, 114, 182, 0.7));
          }
        }
        .left-wing {
          animation: leftWingFloat 2.5s ease-in-out infinite;
          transform-origin: 55px 40px;
        }
        .right-wing {
          animation: rightWingFloat 2.5s ease-in-out infinite;
          transform-origin: 85px 40px;
        }
        .heart-group {
          animation: heartGlow 2s ease-in-out infinite;
        }
      `}
    </style>
    
    {/* Left wing - feathered design */}
    <g className="left-wing">
      {/* Outer feathers */}
      <path 
        d="M52 38 Q40 32, 25 28 Q15 26, 8 32 Q4 38, 10 42 Q18 46, 30 44 Q42 42, 52 38"
        fill="#ede9fe"
        stroke="#c4b5fd"
        strokeWidth="1.5"
      />
      {/* Middle feathers */}
      <path 
        d="M52 40 Q42 36, 30 34 Q20 33, 14 38 Q12 42, 18 45 Q28 48, 40 45 Q48 43, 52 40"
        fill="#f5f3ff"
        stroke="#ddd6fe"
        strokeWidth="1"
      />
      {/* Inner feathers */}
      <path 
        d="M52 42 Q44 40, 35 39 Q28 39, 24 42 Q22 45, 28 47 Q36 48, 45 46 Q50 44, 52 42"
        fill="#faf5ff"
        stroke="#e9d5ff"
        strokeWidth="0.8"
      />
      {/* Feather lines */}
      <path d="M18 36 Q22 38, 28 38" stroke="#d8b4fe" strokeWidth="0.6" fill="none" opacity="0.7" />
      <path d="M22 40 Q28 41, 35 40" stroke="#d8b4fe" strokeWidth="0.6" fill="none" opacity="0.7" />
      <path d="M28 44 Q34 44, 40 43" stroke="#d8b4fe" strokeWidth="0.6" fill="none" opacity="0.7" />
    </g>
    
    {/* Right wing - feathered design */}
    <g className="right-wing">
      {/* Outer feathers */}
      <path 
        d="M88 38 Q100 32, 115 28 Q125 26, 132 32 Q136 38, 130 42 Q122 46, 110 44 Q98 42, 88 38"
        fill="#ede9fe"
        stroke="#c4b5fd"
        strokeWidth="1.5"
      />
      {/* Middle feathers */}
      <path 
        d="M88 40 Q98 36, 110 34 Q120 33, 126 38 Q128 42, 122 45 Q112 48, 100 45 Q92 43, 88 40"
        fill="#f5f3ff"
        stroke="#ddd6fe"
        strokeWidth="1"
      />
      {/* Inner feathers */}
      <path 
        d="M88 42 Q96 40, 105 39 Q112 39, 116 42 Q118 45, 112 47 Q104 48, 95 46 Q90 44, 88 42"
        fill="#faf5ff"
        stroke="#e9d5ff"
        strokeWidth="0.8"
      />
      {/* Feather lines */}
      <path d="M122 36 Q118 38, 112 38" stroke="#d8b4fe" strokeWidth="0.6" fill="none" opacity="0.7" />
      <path d="M118 40 Q112 41, 105 40" stroke="#d8b4fe" strokeWidth="0.6" fill="none" opacity="0.7" />
      <path d="M112 44 Q106 44, 100 43" stroke="#d8b4fe" strokeWidth="0.6" fill="none" opacity="0.7" />
    </g>
    
    {/* Heart with glow */}
    <g className="heart-group">
      <path 
        d="M70 68 C70 68, 50 50, 50 38 C50 28, 58 22, 70 32 C82 22, 90 28, 90 38 C90 50, 70 68, 70 68Z"
        fill="url(#heartGradient)"
        stroke="#ec4899"
        strokeWidth="1.5"
      />
      {/* Heart shine */}
      <ellipse cx="60" cy="36" rx="4" ry="5" fill="rgba(255,255,255,0.5)" />
      <ellipse cx="58" cy="34" rx="2" ry="2.5" fill="rgba(255,255,255,0.7)" />
    </g>
    
    <defs>
      <linearGradient id="heartGradient" x1="50" y1="22" x2="90" y2="68" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#fda4af" />
        <stop offset="50%" stopColor="#fb7185" />
        <stop offset="100%" stopColor="#f472b6" />
      </linearGradient>
    </defs>
  </svg>
);

const Logo = ({ showText = true, showTagline = false, size = 'md', className = '' }: LogoProps) => {
  const sizes = {
    sm: { icon: 'w-20 h-12', text: 'text-xl', tagline: 'text-sm' },
    md: { icon: 'w-28 h-16', text: 'text-2xl', tagline: 'text-base' },
    lg: { icon: 'w-36 h-24', text: 'text-3xl', tagline: 'text-lg' },
    xl: { icon: 'w-48 h-32', text: 'text-4xl md:text-5xl', tagline: 'text-lg' },
  };

  return (
    <div className={`flex flex-col items-center justify-center gap-1 ${className}`}>
      <div>
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
