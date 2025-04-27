
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Sparkles } from 'lucide-react';

const quotes = [
  {
    text: "The only way to do great work is to love what you do.",
    author: "Steve Jobs"
  },
  {
    text: "Success is not final, failure is not fatal: it is the courage to continue that counts.",
    author: "Winston Churchill"
  },
  {
    text: "It does not matter how slowly you go as long as you do not stop.",
    author: "Confucius"
  },
  {
    text: "Believe you can and you're halfway there.",
    author: "Theodore Roosevelt"
  },
  {
    text: "Everything you've ever wanted is on the other side of fear.",
    author: "George Addair"
  }
];

interface QuoteDisplayProps {
  userName: string;
}

const QuoteDisplay = ({ userName }: QuoteDisplayProps) => {
  const [currentQuote, setCurrentQuote] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const nextQuote = () => {
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentQuote((prev) => (prev + 1) % quotes.length);
      setIsAnimating(false);
    }, 500);
  };

  return (
    <Card className="w-full max-w-2xl p-8 bg-white/80 border-purple-200 shadow-lg">
      <p className="text-purple-600 mb-6 font-medium">
        Here's your daily inspiration, {userName} ✨
      </p>
      <div className={`transition-opacity duration-500 ${isAnimating ? 'opacity-0' : 'opacity-100'}`}>
        <blockquote className="text-2xl md:text-3xl font-light text-purple-800 mb-4 leading-relaxed">
          "{quotes[currentQuote].text}"
        </blockquote>
        <cite className="block text-lg text-purple-600 mt-4">
          — {quotes[currentQuote].author}
        </cite>
      </div>
      <Button 
        onClick={nextQuote}
        className="mt-8 bg-purple-600 hover:bg-purple-700 text-white"
      >
        Next Quote <Sparkles className="ml-2" />
      </Button>
    </Card>
  );
};

export default QuoteDisplay;
