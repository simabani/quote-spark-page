
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Sparkles } from 'lucide-react';

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
    <div className="animate-fade-in space-y-6 text-center">
      <h2 className="text-3xl md:text-4xl font-bold text-white">
        Welcome to Daily Inspiration ✨
      </h2>
      <p className="text-xl text-white/90">
        Let's start your journey with motivation! 🌟
      </p>
      <form onSubmit={handleSubmit} className="space-y-4">
        <Input
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="max-w-xs mx-auto bg-white/10 text-white placeholder:text-white/50 border-white/20"
        />
        <Button 
          type="submit"
          disabled={!name.trim()}
          className="bg-white/20 hover:bg-white/30 text-white border-white/20"
        >
          Inspire Me <Sparkles className="ml-2" />
        </Button>
      </form>
    </div>
  );
};

export default WelcomeScreen;
