
import React, { useState } from 'react';
import QuoteDisplay from '../components/QuoteDisplay';
import WelcomeScreen from '../components/WelcomeScreen';

const Index = () => {
  const [userName, setUserName] = useState('');

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-gradient-to-br from-[#9b87f5] via-white to-[#D6BCFA] font-quicksand">
      <div className="w-full max-w-4xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-purple-900 mb-8 animate-fade-in">
          Daily Inspiration
        </h1>
        {!userName ? (
          <WelcomeScreen onStart={setUserName} />
        ) : (
          <QuoteDisplay userName={userName} />
        )}
        <footer className="mt-12 text-purple-600/80 text-sm">
          Stay inspired, stay motivated ✨
        </footer>
      </div>
    </div>
  );
};

export default Index;
