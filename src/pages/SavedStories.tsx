import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Heart, Trash2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { stories, moods, Story, MoodType } from '@/data/stories';
import Logo from '@/components/Logo';
import { useToast } from '@/hooks/use-toast';

const SavedStories = () => {
  const [savedStoryIds, setSavedStoryIds] = useState<string[]>([]);
  const { toast } = useToast();

  useEffect(() => {
    const saved = localStorage.getItem('savedStories');
    if (saved) {
      setSavedStoryIds(JSON.parse(saved));
    }
  }, []);

  const savedStories = stories.filter(story => savedStoryIds.includes(story.id));

  // Group stories by mood
  const storiesByMood = savedStories.reduce((acc, story) => {
    if (!acc[story.mood]) {
      acc[story.mood] = [];
    }
    acc[story.mood].push(story);
    return acc;
  }, {} as Record<MoodType, Story[]>);

  const handleRemoveStory = (storyId: string) => {
    const newSavedStories = savedStoryIds.filter(id => id !== storyId);
    setSavedStoryIds(newSavedStories);
    localStorage.setItem('savedStories', JSON.stringify(newSavedStories));
    toast({
      title: "Story removed 💔",
      description: "This story has been removed from your collection.",
    });
  };

  const getMoodInfo = (moodId: MoodType) => {
    return moods.find(m => m.id === moodId);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#9b87f5] via-white to-[#D6BCFA] py-8 px-4">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <Link to="/">
            <Button
              variant="ghost"
              className="text-purple-600 hover:text-purple-800 hover:bg-purple-100/50"
              aria-label="Go back to home"
            >
              <ArrowLeft className="h-5 w-5 mr-1" />
              Back
            </Button>
          </Link>
          <div className="w-12 h-12">
            <Logo size="sm" />
          </div>
        </div>

        {/* Title */}
        <div className="text-center mb-8 animate-fade-in">
          <h1 className="text-3xl sm:text-4xl font-bold text-purple-800 mb-2">
            Your Heart Collection 💜
          </h1>
          <p className="text-purple-600/80">
            Stories you've saved for when you need them most
          </p>
        </div>

        {/* Empty state */}
        {savedStories.length === 0 && (
          <Card className="p-8 text-center bg-white/60 border-2 border-purple-200/50 rounded-3xl animate-fade-in">
            <Heart className="h-16 w-16 text-purple-300 mx-auto mb-4" />
            <h2 className="text-xl font-semibold text-purple-700 mb-2">
              No saved stories yet
            </h2>
            <p className="text-purple-600/70 mb-6">
              When you find a story that touches your heart, save it here to read again later.
            </p>
            <Link to="/">
              <Button className="rounded-full bg-purple-600 hover:bg-purple-700 text-white">
                Find your first story
              </Button>
            </Link>
          </Card>
        )}

        {/* Stories grouped by mood */}
        {Object.entries(storiesByMood).map(([moodId, moodStories]) => {
          const moodInfo = getMoodInfo(moodId as MoodType);
          if (!moodInfo) return null;

          return (
            <div key={moodId} className="mb-8 animate-fade-in">
              {/* Mood header */}
              <div className="flex items-center gap-3 mb-4">
                <span className="text-3xl" role="img" aria-label={moodInfo.ariaLabel}>
                  {moodInfo.emoji}
                </span>
                <h2 className="text-xl font-bold text-purple-800">
                  {moodInfo.label}
                </h2>
                <span className="text-sm text-purple-500">
                  ({moodStories.length} {moodStories.length === 1 ? 'story' : 'stories'})
                </span>
              </div>

              {/* Stories for this mood */}
              <div className="space-y-4">
                {moodStories.map((story) => (
                  <Card
                    key={story.id}
                    className={`
                      p-5 sm:p-6
                      ${moodInfo.color}
                      border-2 border-purple-200/50
                      rounded-2xl
                      transition-all duration-300
                      hover:shadow-lg
                    `}
                  >
                    <div className="flex justify-between items-start gap-4">
                      <div className="flex-1">
                        <h3 className="text-lg font-bold text-purple-800 mb-2">
                          {story.title}
                        </h3>
                        <p className="text-purple-700/80 text-sm line-clamp-3">
                          {story.content.split('\n')[0]}...
                        </p>
                      </div>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => handleRemoveStory(story.id)}
                        className="text-purple-400 hover:text-red-500 hover:bg-red-50 shrink-0"
                        aria-label={`Remove ${story.title} from saved stories`}
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>

                    {/* Expand to read full story */}
                    <details className="mt-3">
                      <summary className="text-sm text-purple-600 cursor-pointer hover:text-purple-800 font-medium">
                        Read full story
                      </summary>
                      <div className="mt-3 text-purple-700/90 leading-relaxed whitespace-pre-line text-sm border-t border-purple-200/50 pt-3">
                        {story.content}
                      </div>
                    </details>
                  </Card>
                ))}
              </div>
            </div>
          );
        })}

        {/* Footer */}
        <div className="text-center mt-12 text-purple-600/70 text-sm">
          <p>You are loved. You are enough. You matter. 🌟</p>
        </div>
      </div>
    </div>
  );
};

export default SavedStories;