import React, { useState } from 'react';
import WelcomeScreen from '../components/WelcomeScreen';
import MoodSelector from '../components/MoodSelector';
import StoryDisplay from '../components/StoryDisplay';
import Logo from '../components/Logo';
import { MoodType } from '@/data/stories';

type AppStep = 'welcome' | 'mood' | 'story';

const Index = () => {
  const [userName, setUserName] = useState('');
  const [currentStep, setCurrentStep] = useState<AppStep>('welcome');
  const [selectedMood, setSelectedMood] = useState<MoodType | null>(null);

  const handleStart = (name: string) => {
    setUserName(name);
    setCurrentStep('mood');
  };

  const handleMoodSelect = (mood: MoodType) => {
    setSelectedMood(mood);
    setCurrentStep('story');
  };

  const handlePickAnotherMood = () => {
    setSelectedMood(null);
    setCurrentStep('mood');
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-gradient-to-br from-blush-pink via-cream-white to-misty-blue font-nunito">
      {/* Decorative background elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 text-6xl opacity-15 animate-float">☁️</div>
        <div className="absolute top-40 right-20 text-5xl opacity-15 animate-float" style={{ animationDelay: '1s' }}>✨</div>
        <div className="absolute bottom-32 left-20 text-5xl opacity-15 animate-float" style={{ animationDelay: '2s' }}>🌿</div>
        <div className="absolute bottom-20 right-10 text-6xl opacity-15 animate-float" style={{ animationDelay: '0.5s' }}>🌸</div>
        <div className="absolute top-1/2 left-5 text-4xl opacity-10 animate-float" style={{ animationDelay: '1.5s' }}>💫</div>
        <div className="absolute top-32 left-1/3 text-3xl opacity-10 animate-float" style={{ animationDelay: '2.5s' }}>🦋</div>
        <div className="absolute bottom-40 right-1/4 text-4xl opacity-10 animate-float" style={{ animationDelay: '1.8s' }}>🌷</div>
      </div>

      <div className="w-full max-w-4xl mx-auto text-center relative z-10">
        <header className="mb-10 animate-fade-in">
          {currentStep !== 'welcome' && (
            <div className="mb-4">
              <Logo size="md" />
            </div>
          )}
          <p className="text-muted-foreground text-lg font-nunito">
            Stories that hug your heart
          </p>
        </header>

        <main className="min-h-[400px] flex items-center justify-center">
          {currentStep === 'welcome' && (
            <WelcomeScreen onStart={handleStart} />
          )}
          
          {currentStep === 'mood' && (
            <MoodSelector userName={userName} onSelectMood={handleMoodSelect} />
          )}
          
          {currentStep === 'story' && selectedMood && (
            <StoryDisplay 
              mood={selectedMood} 
              userName={userName}
              onPickAnotherMood={handlePickAnotherMood}
            />
          )}
        </main>

        <footer className="mt-12 text-muted-foreground/60 text-sm animate-fade-in font-nunito">
          You are loved. You are enough. You matter. 🌟
        </footer>
      </div>
    </div>
  );
};

export default Index;
