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
    <div className="animate-fade-in space-y-6 text-center max-w-md mx-auto">
      <Logo size="xl" showText />
      
      <p className="text-lg text-purple-600 font-medium">
        Stories that hug your heart 💜
      </p>

      <form onSubmit={handleSubmit} className="space-y-5 pt-4">
        <div className="space-y-2">
          <label className="text-purple-700 font-medium">
            Your name
          </label>
          <Input
            type="text"
            placeholder="Enter your name..."
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="
              max-w-xs mx-auto 
              bg-white/50
              text-purple-700 
              placeholder:text-purple-400 
              border-2 border-purple-200
              focus:border-purple-400
              rounded-xl
              text-center
              text-lg
              py-5
            "
          />
        </div>

        <Button 
          type="submit"
          disabled={!name.trim()}
          className="
            bg-purple-600 hover:bg-purple-700
            text-white
            rounded-full 
            px-8 py-5
            text-lg
            shadow-soft
            hover:shadow-soft-lg
            hover:scale-105
            active:scale-95
            transition-all duration-300
            disabled:opacity-50
            disabled:hover:scale-100
          "
        >
          <Sparkles className="mr-2 h-5 w-5" />
          Let's begin
        </Button>
      </form>
    </div>
  );
};

export default WelcomeScreen;
