import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Heart, RefreshCw, ArrowLeft, Share2, Copy, Twitter, Facebook } from 'lucide-react';
import { Story, MoodType, moods, getRandomStoryForMood } from '@/data/stories';
import { useToast } from '@/hooks/use-toast';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

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

  const getShareText = () => {
    if (!story) return '';
    return `"${story.title}" - A story from Little Lift 💜\n\n${story.content.slice(0, 200)}...\n\nFind comfort at`;
  };

  const handleCopyStory = async () => {
    if (!story) return;
    const text = `"${story.title}"\n\n${story.content}\n\n— From Little Lift 💜`;
    await navigator.clipboard.writeText(text);
    toast({
      title: "Copied! 📋",
      description: "Story copied to clipboard. Share the warmth!",
    });
  };

  const handleShareTwitter = () => {
    const text = encodeURIComponent(`"${story?.title}" - A story from Little Lift that made me feel better 💜`);
    const url = encodeURIComponent(window.location.origin);
    window.open(`https://twitter.com/intent/tweet?text=${text}&url=${url}`, '_blank');
  };

  const handleShareFacebook = () => {
    const url = encodeURIComponent(window.location.origin);
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${url}`, '_blank');
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
      <div className="flex flex-wrap items-center justify-center gap-3">
        <Button
          onClick={handleSaveStory}
          disabled={isStorySaved}
          variant="outline"
          aria-label={isStorySaved ? "Story already saved" : "Save this story to favorites"}
          className={`
            rounded-full px-5 sm:px-6 py-3 h-auto
            border-2 border-pink-300
            bg-white/60 hover:bg-pink-100
            text-purple-700 font-medium
            transition-all duration-300
            focus:ring-2 focus:ring-pink-400 focus:ring-offset-2
            ${isStorySaved ? 'opacity-70' : 'hover:scale-105 hover:shadow-glow-purple'}
          `}
        >
          <Heart 
            className={`mr-2 h-5 w-5 transition-colors ${isStorySaved ? 'fill-pink-500 text-pink-500' : ''}`} 
            aria-hidden="true"
          />
          {isStorySaved ? 'Saved!' : 'Save story'}
        </Button>

        {/* Share dropdown */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="outline"
              aria-label="Share this story"
              className="
                rounded-full px-5 sm:px-6 py-3 h-auto
                border-2 border-pink-300
                bg-white/60 hover:bg-pink-100
                text-purple-700 font-medium
                hover:scale-105
                hover:shadow-glow-purple
                transition-all duration-300
                focus:ring-2 focus:ring-pink-400 focus:ring-offset-2
              "
            >
              <Share2 className="mr-2 h-5 w-5" aria-hidden="true" />
              Share
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-48 bg-white/95 backdrop-blur-sm border-2 border-pink-200 rounded-xl">
            <DropdownMenuItem 
              onClick={handleCopyStory}
              className="cursor-pointer hover:bg-pink-50 rounded-lg"
            >
              <Copy className="mr-2 h-4 w-4 text-purple-600" />
              Copy story
            </DropdownMenuItem>
            <DropdownMenuItem 
              onClick={handleShareTwitter}
              className="cursor-pointer hover:bg-pink-50 rounded-lg"
            >
              <Twitter className="mr-2 h-4 w-4 text-blue-500" />
              Share on X
            </DropdownMenuItem>
            <DropdownMenuItem 
              onClick={handleShareFacebook}
              className="cursor-pointer hover:bg-pink-50 rounded-lg"
            >
              <Facebook className="mr-2 h-4 w-4 text-blue-600" />
              Share on Facebook
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        <Button
          onClick={handleNewStory}
          variant="outline"
          aria-label="Read another story for this mood"
          className="
            rounded-full px-5 sm:px-6 py-3 h-auto
            border-2 border-pink-300
            bg-white/60 hover:bg-pink-100
            text-purple-700 font-medium
            hover:scale-105
            hover:shadow-glow-purple
            transition-all duration-300
            focus:ring-2 focus:ring-pink-400 focus:ring-offset-2
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
            border-2 border-pink-300
            bg-white/60 hover:bg-pink-100
            text-purple-700 font-medium
            hover:scale-105
            hover:shadow-glow-purple
            transition-all duration-300
            focus:ring-2 focus:ring-pink-400 focus:ring-offset-2
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
