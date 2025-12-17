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
    <div className="animate-fade-in space-y-8 text-center max-w-md mx-auto">
      <div className="space-y-6">
        <Logo size="xl" showText={false} />
        <div>
          <h2 className="text-3xl md:text-4xl font-nunito font-semibold text-foreground">
            Welcome, friend
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed mt-2">
            This is a safe space for you. Let's start with something simple.
          </p>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-3">
          <label className="text-foreground/80 font-medium font-nunito">
            What's your name?
          </label>
          <Input
            type="text"
            placeholder="Enter your name..."
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="
              max-w-xs mx-auto 
              bg-cream-white
              text-foreground 
              placeholder:text-muted-foreground/60 
              border-2 border-blush-pink
              focus:border-golden-glow
              rounded-2xl
              text-center
              text-lg
              py-6
              font-nunito
            "
          />
        </div>

        <Button 
          type="submit"
          disabled={!name.trim()}
          className="
            bg-blush-pink hover:bg-soft-lilac
            text-foreground
            rounded-full 
            px-8 py-6 
            text-lg
            font-nunito font-semibold
            shadow-soft
            hover:shadow-glow
            hover:scale-105
            active:scale-95
            transition-all duration-300
            disabled:opacity-50
            disabled:hover:scale-100
            border-2 border-transparent
            hover:border-golden-glow
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
