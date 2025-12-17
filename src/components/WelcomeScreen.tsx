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
    <div className="animate-fade-in space-y-8 text-center max-w-md mx-auto">
      <div className="space-y-4">
        <div className="text-6xl animate-float">🌸</div>
        <h2 className="text-3xl md:text-4xl font-semibold text-foreground">
          Welcome, friend 💜
        </h2>
        <p className="text-lg text-muted-foreground leading-relaxed">
          This is a safe space for you. Let's start with something simple.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-2">
          <label className="text-foreground/80 font-medium">
            What's your name?
          </label>
          <Input
            type="text"
            placeholder="Enter your name..."
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="
              max-w-xs mx-auto 
              bg-card/80 
              text-foreground 
              placeholder:text-muted-foreground/60 
              border-2 border-primary/20 
              focus:border-primary/50
              rounded-xl
              text-center
              text-lg
              py-6
            "
          />
        </div>

        <Button 
          type="submit"
          disabled={!name.trim()}
          className="
            bg-primary hover:bg-primary/90 
            text-primary-foreground
            rounded-full 
            px-8 py-6 
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
