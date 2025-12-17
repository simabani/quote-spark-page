import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Heart } from 'lucide-react';
import WelcomeScreen from '../components/WelcomeScreen';
import MoodSelector from '../components/MoodSelector';
import StoryDisplay from '../components/StoryDisplay';
import Logo from '../components/Logo';
import { Button } from '@/components/ui/button';
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

  const handleBack = () => {
    setUserName('');
    setCurrentStep('welcome');
  };

  const handlePickAnotherMood = () => {
    setSelectedMood(null);
    setCurrentStep('mood');
  };

  return (
    <div 
      className="min-h-screen flex items-center justify-center p-4 sm:p-6 bg-gradient-to-br from-[#9b87f5] via-white to-[#D6BCFA] font-quicksand"
      role="main"
      aria-label="Little Lift - Emotional support through stories"
    >
      {/* Decorative background elements - hidden from screen readers */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        <div className="absolute top-16 sm:top-20 left-6 sm:left-10 text-5xl sm:text-6xl opacity-20 animate-float">☁️</div>
        <div className="absolute top-32 sm:top-40 right-12 sm:right-20 text-4xl sm:text-5xl opacity-20 animate-float" style={{ animationDelay: '1s' }}>✨</div>
        <div className="absolute bottom-24 sm:bottom-32 left-12 sm:left-20 text-4xl sm:text-5xl opacity-20 animate-float" style={{ animationDelay: '2s' }}>🌿</div>
        <div className="absolute bottom-16 sm:bottom-20 right-6 sm:right-10 text-5xl sm:text-6xl opacity-20 animate-float" style={{ animationDelay: '0.5s' }}>🌸</div>
        <div className="absolute top-1/2 left-3 sm:left-5 text-3xl sm:text-4xl opacity-15 animate-float" style={{ animationDelay: '1.5s' }}>💫</div>
      </div>

      <div className="w-full max-w-4xl mx-auto text-center relative z-10">
        {/* Header - only show on non-welcome screens */}
        {currentStep !== 'welcome' && (
          <header className="mb-6 sm:mb-8 animate-fade-in flex items-center justify-between">
            <div className="w-20" /> {/* Spacer */}
            <Logo size="md" />
            <Link to="/saved">
              <Button
                variant="ghost"
                className="text-purple-600 hover:text-purple-800 hover:bg-purple-100/50"
                aria-label="View saved stories"
              >
                <Heart className="h-5 w-5 mr-1" />
                Saved
              </Button>
            </Link>
          </header>
        )}

        {/* Main content area */}
        <main className="min-h-[450px] sm:min-h-[500px] flex items-center justify-center">
          {currentStep === 'welcome' && (
            <WelcomeScreen onStart={handleStart} />
          )}
          
          {currentStep === 'mood' && (
            <MoodSelector userName={userName} onSelectMood={handleMoodSelect} onBack={handleBack} />
          )}
          
          {currentStep === 'story' && selectedMood && (
            <StoryDisplay 
              mood={selectedMood} 
              userName={userName}
              onPickAnotherMood={handlePickAnotherMood}
            />
          )}
        </main>

        {/* Footer - improved contrast */}
        <footer className="mt-10 sm:mt-12 animate-fade-in">
          <p className="text-purple-700/80 text-sm sm:text-base font-medium">
            You are loved. You are enough. You matter.{' '}
            <span role="img" aria-label="star">🌟</span>
          </p>
        </footer>
      </div>
    </div>
  );
};

export default Index;
