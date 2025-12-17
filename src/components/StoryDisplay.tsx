import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Heart, RefreshCw } from 'lucide-react';
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
    // Load saved stories from localStorage
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
        description: "You can find this story in your favorites.",
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
    <div className="animate-fade-in space-y-6 w-full max-w-2xl mx-auto">
      <div className="text-center space-y-2">
        <span className="text-5xl">{currentMood?.emoji}</span>
        <p className="text-muted-foreground">
          A story for when you're feeling {currentMood?.label.toLowerCase()}, {userName}
        </p>
      </div>

      <Card 
        className={`
          p-6 md:p-8 
          ${currentMood?.color} 
          border-2 border-primary/10 
          shadow-soft-lg
          transition-all duration-300
          ${isAnimating ? 'opacity-0 scale-95' : 'opacity-100 scale-100'}
        `}
      >
        <h3 className="text-xl md:text-2xl font-semibold text-foreground mb-4">
          {story.title}
        </h3>
        <div className="text-foreground/80 leading-relaxed whitespace-pre-line text-base md:text-lg">
          {story.content}
        </div>
      </Card>

      <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
        <Button
          onClick={handleSaveStory}
          disabled={isStorySaved}
          variant="outline"
          className={`
            rounded-full px-6 py-3 h-auto
            border-2 border-soft-pink
            bg-soft-pink/50 hover:bg-soft-pink
            text-foreground
            transition-all duration-300
            ${isStorySaved ? 'opacity-70' : 'hover:scale-105'}
          `}
        >
          <Heart 
            className={`mr-2 h-5 w-5 ${isStorySaved ? 'fill-current text-red-400' : ''}`} 
          />
          {isStorySaved ? 'Saved!' : 'Save this story'}
        </Button>

        <Button
          onClick={handleNewStory}
          variant="outline"
          className="
            rounded-full px-6 py-3 h-auto
            border-2 border-baby-blue
            bg-baby-blue/50 hover:bg-baby-blue
            text-foreground
            hover:scale-105
            transition-all duration-300
          "
        >
          <RefreshCw className="mr-2 h-5 w-5" />
          Another story
        </Button>

        <Button
          onClick={onPickAnotherMood}
          variant="outline"
          className="
            rounded-full px-6 py-3 h-auto
            border-2 border-lavender
            bg-lavender/50 hover:bg-lavender
            text-foreground
            hover:scale-105
            transition-all duration-300
          "
        >
          Pick another mood
        </Button>
      </div>
    </div>
  );
};

export default StoryDisplay;
