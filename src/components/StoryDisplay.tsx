import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Heart, RefreshCw, ArrowLeft } from 'lucide-react';
import { Story, MoodType, moods, getRandomStoryForMood } from '@/data/stories';
import { useToast } from '@/hooks/use-toast';

interface StoryDisplayProps {
  mood: MoodType;
  userName: string;
  onPickAnotherMood: () => void;
}

const StoryDisplay = ({ mood, userName, onPickAnotherMood }: StoryDisplayProps) => {
  const [story, setStory] = useState<Story | null>(null);
  const [savedStories, setSavedStories] = useState<string[]>([]);
  const [isAnimating, setIsAnimating] = useState(false);
  const { toast } = useToast();

  const currentMood = moods.find(m => m.id === mood);

  useEffect(() => {
    setStory(getRandomStoryForMood(mood));
    const saved = localStorage.getItem('savedStories');
    if (saved) {
      setSavedStories(JSON.parse(saved));
    }
  }, [mood]);

  const handleSaveStory = () => {
    if (story && !savedStories.includes(story.id)) {
      const newSavedStories = [...savedStories, story.id];
      setSavedStories(newSavedStories);
      localStorage.setItem('savedStories', JSON.stringify(newSavedStories));
      toast({
        title: "Story saved! 💜",
        description: "This story is now in your heart collection.",
      });
    }
  };

  const handleNewStory = () => {
    setIsAnimating(true);
    setTimeout(() => {
      setStory(getRandomStoryForMood(mood));
      setIsAnimating(false);
    }, 300);
  };

  const isStorySaved = story && savedStories.includes(story.id);

  if (!story) return null;

  return (
    <div className="animate-fade-in space-y-6 w-full max-w-2xl mx-auto px-4">
      {/* Header with mood indicator */}
      <div className="text-center space-y-2">
        <span 
          className="text-5xl sm:text-6xl block"
          role="img" 
          aria-label={`${currentMood?.label} mood`}
        >
          {currentMood?.emoji}
        </span>
        <p className="text-base sm:text-lg text-purple-700 font-medium">
          A story for you, {userName} 💜
        </p>
        <p className="text-sm text-purple-600/70">
          When you're feeling {currentMood?.label.toLowerCase()}...
        </p>
      </div>

      {/* Story card */}
      <Card 
        className={`
          p-6 sm:p-8 
          ${currentMood?.color} 
          border-2 border-purple-200/50
          shadow-soft-lg
          rounded-3xl
          transition-all duration-500
          ${isAnimating ? 'opacity-0 scale-95 translate-y-4' : 'opacity-100 scale-100 translate-y-0'}
        `}
      >
        <h3 className="text-xl sm:text-2xl font-bold text-purple-800 mb-4">
          {story.title}
        </h3>
        <div className="text-purple-700/90 leading-relaxed whitespace-pre-line text-base sm:text-lg">
          {story.content}
        </div>
      </Card>

      {/* Action buttons */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
        <Button
          onClick={handleSaveStory}
          disabled={isStorySaved}
          variant="outline"
          aria-label={isStorySaved ? "Story already saved" : "Save this story to favorites"}
          className={`
            rounded-full px-5 sm:px-6 py-3 h-auto
            border-2 border-purple-300
            bg-white/60 hover:bg-purple-100
            text-purple-700 font-medium
            transition-all duration-300
            focus:ring-2 focus:ring-purple-400 focus:ring-offset-2
            ${isStorySaved ? 'opacity-70' : 'hover:scale-105 hover:shadow-glow-purple'}
          `}
        >
          <Heart 
            className={`mr-2 h-5 w-5 transition-colors ${isStorySaved ? 'fill-red-400 text-red-400' : ''}`} 
            aria-hidden="true"
          />
          {isStorySaved ? 'Saved!' : 'Save story'}
        </Button>

        <Button
          onClick={handleNewStory}
          variant="outline"
          aria-label="Read another story for this mood"
          className="
            rounded-full px-5 sm:px-6 py-3 h-auto
            border-2 border-purple-300
            bg-white/60 hover:bg-purple-100
            text-purple-700 font-medium
            hover:scale-105
            hover:shadow-glow-purple
            transition-all duration-300
            focus:ring-2 focus:ring-purple-400 focus:ring-offset-2
          "
        >
          <RefreshCw className="mr-2 h-5 w-5" aria-hidden="true" />
          Another story
        </Button>

        <Button
          onClick={onPickAnotherMood}
          variant="outline"
          aria-label="Go back and choose a different mood"
          className="
            rounded-full px-5 sm:px-6 py-3 h-auto
            border-2 border-purple-300
            bg-white/60 hover:bg-purple-100
            text-purple-700 font-medium
            hover:scale-105
            hover:shadow-glow-purple
            transition-all duration-300
            focus:ring-2 focus:ring-purple-400 focus:ring-offset-2
          "
        >
          <ArrowLeft className="mr-2 h-5 w-5" aria-hidden="true" />
          Different mood
        </Button>
      </div>
    </div>
  );
};

export default StoryDisplay;
