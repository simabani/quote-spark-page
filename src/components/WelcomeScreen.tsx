import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Sparkles } from 'lucide-react';
import Logo from './Logo';

interface WelcomeScreenProps {
  onStart: (name: string) => void;
}

const WelcomeScreen = ({ onStart }: WelcomeScreenProps) => {
  const [name, setName] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name.trim()) {
      onStart(name.trim());
    }
  };

  return (
    <div className="animate-fade-in space-y-8 text-center max-w-md mx-auto px-4">
      <Logo size="xl" showText showTagline />

      <form onSubmit={handleSubmit} className="space-y-6 pt-4">
        <div className="space-y-3">
          <label 
            htmlFor="user-name"
            className="block text-lg text-purple-700 font-semibold"
          >
            Your name
          </label>
          <Input
            id="user-name"
            type="text"
            placeholder="Enter your name..."
            value={name}
            onChange={(e) => setName(e.target.value)}
            aria-describedby="name-hint"
            className="
              max-w-xs mx-auto 
              bg-white/60
              text-purple-800 
              placeholder:text-purple-400 
              border-2 border-purple-200
              focus:border-purple-400
              focus:ring-2
              focus:ring-purple-300
              focus:ring-offset-0
              rounded-xl
              text-center
              text-lg
              py-5
              transition-all duration-300
            "
          />
          <p id="name-hint" className="text-sm text-purple-500/80">
            So we can personalize your experience 🌸
          </p>
        </div>

        <Button 
          type="submit"
          disabled={!name.trim()}
          className="
            bg-purple-600 hover:bg-purple-700
            text-white
            rounded-full 
            px-10 py-6
            text-lg font-semibold
            shadow-soft
            hover:shadow-glow-purple
            hover:scale-105
            active:scale-95
            transition-all duration-300
            disabled:opacity-50
            disabled:hover:scale-100
            disabled:hover:shadow-soft
            focus:ring-2
            focus:ring-purple-400
            focus:ring-offset-2
          "
        >
          <Sparkles className="mr-2 h-5 w-5" aria-hidden="true" />
          Let's begin
        </Button>
      </form>
    </div>
  );
};

export default WelcomeScreen;
