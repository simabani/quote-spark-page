
import React from 'react';
import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

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

const QuoteDisplay = () => {
  const [currentQuote, setCurrentQuote] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const nextQuote = () => {
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentQuote((prev) => (prev + 1) % quotes.length);
      setIsAnimating(false);
    }, 500);
  };

  useEffect(() => {
    const timer = setInterval(nextQuote, 10000);
    return () => clearInterval(timer);
  }, []);

  return (
    <Card className="w-full max-w-2xl p-8 backdrop-blur-sm bg-white/10 border-white/20">
      <div className={`transition-opacity duration-500 ${isAnimating ? 'opacity-0' : 'opacity-100'}`}>
        <blockquote className="text-2xl md:text-3xl font-light text-white mb-4 leading-relaxed">
          "{quotes[currentQuote].text}"
        </blockquote>
        <cite className="block text-lg text-white/80 mt-4">
          — {quotes[currentQuote].author}
        </cite>
      </div>
      <Button 
        onClick={nextQuote}
        className="mt-8 bg-white/20 hover:bg-white/30 text-white border-white/20"
      >
        Next Quote
      </Button>
    </Card>
  );
};

export default QuoteDisplay;
