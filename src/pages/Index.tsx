
import React from 'react';
import QuoteDisplay from '../components/QuoteDisplay';

const Index = () => {
  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-gradient-to-br from-purple-600 via-blue-500 to-purple-700">
      <div className="w-full max-w-4xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-8 animate-fade-in">
          Daily Inspiration
        </h1>
        <QuoteDisplay />
        <footer className="mt-12 text-white/60 text-sm">
          Stay inspired, stay motivated
        </footer>
      </div>
    </div>
  );
};

export default Index;
