"use client";

import { useState, useEffect } from "react";

interface TypewriterProps {
  phrases: string[];
  prefix?: string;
}

export default function Typewriter({ phrases, prefix = "" }: TypewriterProps) {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [reverse, setReverse] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;

    const currentPhrase = phrases[index];
    
    // Typing forward complete
    if (!reverse && subIndex === currentPhrase.length) {
      setIsPaused(true);
      setTimeout(() => {
        setIsPaused(false);
        setReverse(true);
      }, 2500); // Pause to let them read the full sentence
      return;
    }

    // Erasing backwards complete
    if (reverse && subIndex === 0) {
      setIsPaused(true);
      setTimeout(() => {
        setIsPaused(false);
        setReverse(false);
        setIndex((prev) => (prev + 1) % phrases.length);
      }, 600); // Pause before starting the next word
      return;
    }

    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (reverse ? -1 : 1));
    }, Math.max(reverse ? 40 : 80, Math.random() * (reverse ? 60 : 120))); 
    // Organic randomized typing and erasing speeds

    return () => clearTimeout(timeout);
  }, [subIndex, index, reverse, isPaused, phrases]);

  const currentText = phrases[index].substring(0, subIndex);
  
  // Highlight periods "." with green
  const renderText = () => {
    return currentText.split('').map((char, i) => {
      if (char === '.') {
        return <span key={i} className="text-emerald-500">{char}</span>;
      }
      return <span key={i}>{char}</span>;
    });
  };

  return (
    <>
      {prefix && <span>{prefix}</span>}
      {renderText()}
      <span className="inline-block w-[3px] sm:w-[4px] h-[1em] bg-emerald-500 ml-1 animate-[pulse_1s_ease-in-out_infinite] align-middle -mt-[4px]" style={{ animationDuration: '0.8s' }} />
    </>
  );
}
