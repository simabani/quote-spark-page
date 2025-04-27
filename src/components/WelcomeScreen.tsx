
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
      <h2 className="text-3xl md:text-4xl font-bold text-purple-700">
        Welcome to Daily Inspiration ✨
      </h2>
      <p className="text-xl text-purple-600">
        Let's start your journey with motivation! 🌟
      </p>
      <form onSubmit={handleSubmit} className="space-y-4">
        <Input
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="max-w-xs mx-auto bg-white/50 text-purple-700 placeholder:text-purple-400 border-purple-200 focus:border-purple-400"
        />
        <Button 
          type="submit"
          disabled={!name.trim()}
          className="bg-purple-600 hover:bg-purple-700 text-white border-purple-400"
        >
          Inspire Me <Sparkles className="ml-2" />
        </Button>
      </form>
    </div>
  );
};

export default WelcomeScreen;
