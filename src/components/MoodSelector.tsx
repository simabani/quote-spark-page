import React, { useState } from 'react';
import { moods, MoodType } from '@/data/stories';
import { getTimeBasedGreeting, getWarmMessage } from '@/utils/greetings';

interface MoodSelectorProps {
  userName: string;
  onSelectMood: (mood: MoodType) => void;
}

const MoodSelector = ({ userName, onSelectMood }: MoodSelectorProps) => {
  const [hoveredMood, setHoveredMood] = useState<MoodType | null>(null);
  const [selectedMood, setSelectedMood] = useState<MoodType | null>(null);
  const { greeting, emoji } = getTimeBasedGreeting();
  const warmMessage = getWarmMessage(userName);

  const handleMoodSelect = (moodId: MoodType) => {
    setSelectedMood(moodId);
    // Small delay for animation before transitioning
    setTimeout(() => {
      onSelectMood(moodId);
    }, 300);
  };

  return (
    <div className="animate-fade-in space-y-8 text-center w-full max-w-2xl mx-auto px-4">
      {/* Warm personalized greeting */}
      <div className="space-y-3">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-purple-800 leading-tight">
          {greeting}, {userName} {emoji}
        </h2>
        <p className="text-base sm:text-lg text-purple-700/90 font-medium">
          How are you feeling right now?
        </p>
        <p className="text-sm sm:text-base text-purple-600/80 italic">
          {warmMessage}
        </p>
      </div>

      {/* Mood selection grid */}
      <div 
        className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4"
        role="group"
        aria-label="Select your current mood"
      >
        {moods.map((mood, index) => (
          <button
            key={mood.id}
            onClick={() => handleMoodSelect(mood.id)}
            onMouseEnter={() => setHoveredMood(mood.id)}
            onMouseLeave={() => setHoveredMood(null)}
            onFocus={() => setHoveredMood(mood.id)}
            onBlur={() => setHoveredMood(null)}
            aria-label={mood.ariaLabel}
            aria-pressed={selectedMood === mood.id}
            className={`
              ${mood.color}
              group
              relative
              flex flex-col items-center justify-center 
              p-4 sm:p-5 md:p-6
              rounded-2xl 
              border-2 
              ${selectedMood === mood.id 
                ? 'border-purple-500 shadow-glow-purple scale-95' 
                : 'border-transparent hover:border-purple-300'
              }
              shadow-soft
              hover:shadow-soft-lg
              hover:scale-105
              active:scale-95
              transition-all duration-300 ease-out
              animate-fade-in-up
              focus:outline-none
              focus:ring-2
              focus:ring-purple-400
              focus:ring-offset-2
              focus:ring-offset-white
            `}
            style={{ animationDelay: `${index * 60}ms` }}
          >
            {/* Emoji with bounce animation on hover */}
            <span 
              className={`
                text-4xl sm:text-5xl mb-2 
                transition-transform duration-300
                ${hoveredMood === mood.id ? 'animate-bounce-soft' : ''}
              `}
              role="img"
              aria-hidden="true"
            >
              {mood.emoji}
            </span>
            
            {/* Mood label */}
            <span className="text-sm sm:text-base font-semibold text-purple-800">
              {mood.label}
            </span>
            
            {/* Description tooltip - visible on hover/focus */}
            <span 
              className={`
                text-xs text-purple-600/80 mt-1
                transition-all duration-300
                ${hoveredMood === mood.id ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-1'}
              `}
            >
              {mood.description}
            </span>

            {/* Selection sparkle effect */}
            {selectedMood === mood.id && (
              <div className="absolute inset-0 pointer-events-none">
                <span className="absolute top-1 right-1 text-lg animate-sparkle">✨</span>
                <span className="absolute bottom-1 left-1 text-lg animate-sparkle" style={{ animationDelay: '0.1s' }}>✨</span>
              </div>
            )}
          </button>
        ))}
      </div>

    </div>
  );
};

export default MoodSelector;
