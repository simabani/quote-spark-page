import React from 'react';
import { moods, MoodType } from '@/data/stories';

interface MoodSelectorProps {
  userName: string;
  onSelectMood: (mood: MoodType) => void;
}

const MoodSelector = ({ userName, onSelectMood }: MoodSelectorProps) => {
  return (
    <div className="animate-fade-in space-y-8 text-center">
      <div className="space-y-2">
        <h2 className="text-2xl md:text-3xl font-semibold text-purple-700">
          How are you feeling today, {userName}? 💭
        </h2>
        <p className="text-purple-600">
          Select the mood that best describes how you're feeling right now
        </p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 md:gap-4 max-w-2xl mx-auto">
        {moods.map((mood, index) => (
          <button
            key={mood.id}
            onClick={() => onSelectMood(mood.id)}
            className={`
              ${mood.color} 
              group
              flex flex-col items-center justify-center 
              p-4 md:p-5 
              rounded-2xl 
              border-2 border-transparent
              shadow-soft
              hover:shadow-soft-lg
              hover:border-purple-300
              hover:scale-105
              active:scale-95
              transition-all duration-300 ease-out
              animate-fade-in-up
            `}
            style={{ animationDelay: `${index * 50}ms` }}
          >
            <span className="text-4xl md:text-5xl mb-2 group-hover:animate-pulse-soft transition-transform">
              {mood.emoji}
            </span>
            <span className="text-sm md:text-base font-medium text-purple-700">
              {mood.label}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default MoodSelector;
