import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Sparkles } from 'lucide-react';

const quotes = {
  happy: [
    { text: "Happiness is not something ready made. It comes from your own actions.", author: "Dalai Lama" },
    { text: "The purpose of our lives is to be happy.", author: "Dalai Lama" },
    { text: "Happiness depends upon ourselves.", author: "Aristotle" },
  ],
  sad: [
    { text: "Every storm runs out of rain.", author: "Maya Angelou" },
    { text: "The sun will rise and we will try again.", author: "Twenty One Pilots" },
    { text: "After every dark night, there is a brighter day.", author: "Tupac Shakur" },
  ],
  stressed: [
    { text: "It does not matter how slowly you go as long as you do not stop.", author: "Confucius" },
    { text: "You don't have to control your thoughts. You just have to stop letting them control you.", author: "Dan Millman" },
    { text: "Almost everything will work again if you unplug it for a few minutes, including you.", author: "Anne Lamott" },
  ],
  motivated: [
    { text: "The only way to do great work is to love what you do.", author: "Steve Jobs" },
    { text: "Believe you can and you're halfway there.", author: "Theodore Roosevelt" },
    { text: "Success is not final, failure is not fatal: it is the courage to continue that counts.", author: "Winston Churchill" },
  ],
  default: [
    { text: "Everything you've ever wanted is on the other side of fear.", author: "George Addair" },
    { text: "The best time to plant a tree was 20 years ago. The second best time is now.", author: "Chinese Proverb" },
    { text: "You are never too old to set another goal or to dream a new dream.", author: "C.S. Lewis" },
  ],
};

const getMoodFromFeeling = (feeling: string): keyof typeof quotes => {
  const lowerFeeling = feeling.toLowerCase();
  if (lowerFeeling.includes('happy') || lowerFeeling.includes('great') || lowerFeeling.includes('good') || lowerFeeling.includes('excited')) return 'happy';
  if (lowerFeeling.includes('sad') || lowerFeeling.includes('down') || lowerFeeling.includes('upset') || lowerFeeling.includes('lonely')) return 'sad';
  if (lowerFeeling.includes('stress') || lowerFeeling.includes('anxious') || lowerFeeling.includes('overwhelm') || lowerFeeling.includes('tired')) return 'stressed';
  if (lowerFeeling.includes('motivat') || lowerFeeling.includes('determin') || lowerFeeling.includes('ready') || lowerFeeling.includes('pumped')) return 'motivated';
  return 'default';
};

interface QuoteDisplayProps {
  userName: string;
}

const QuoteDisplay = ({ userName }: QuoteDisplayProps) => {
  const [feeling, setFeeling] = useState('');
  const [currentQuote, setCurrentQuote] = useState<{ text: string; author: string } | null>(null);
  const [isAnimating, setIsAnimating] = useState(false);

  const generateQuote = () => {
    setIsAnimating(true);
    setTimeout(() => {
      const mood = getMoodFromFeeling(feeling);
      const moodQuotes = quotes[mood];
      const randomQuote = moodQuotes[Math.floor(Math.random() * moodQuotes.length)];
      setCurrentQuote(randomQuote);
      setIsAnimating(false);
    }, 500);
  };

  return (
    <Card className="w-full max-w-2xl p-8 bg-white/80 border-purple-200 shadow-lg">
      <p className="text-purple-600 mb-6 font-medium">
        How are you feeling today, {userName}? ✨
      </p>
      
      <Input
        type="text"
        placeholder="I'm feeling..."
        value={feeling}
        onChange={(e) => setFeeling(e.target.value)}
        className="mb-6 bg-white/50 text-purple-700 placeholder:text-purple-400 border-purple-200 focus:border-purple-400"
      />

      {currentQuote && (
        <div className={`transition-opacity duration-500 mb-6 ${isAnimating ? 'opacity-0' : 'opacity-100'}`}>
          <blockquote className="text-2xl md:text-3xl font-light text-purple-800 mb-4 leading-relaxed">
            "{currentQuote.text}"
          </blockquote>
          <cite className="block text-lg text-purple-600 mt-4">
            — {currentQuote.author}
          </cite>
        </div>
      )}

      <Button 
        onClick={generateQuote}
        className="mt-4 bg-purple-600 hover:bg-purple-700 text-white"
      >
        Inspire Me <Sparkles className="ml-2" />
      </Button>
    </Card>
  );
};

export default QuoteDisplay;
