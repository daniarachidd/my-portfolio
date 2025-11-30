"use client";
import { useState, useEffect } from "react";

const quotes = [
  "Clean UI & clean logic",
  "Building practical experiences",
  "Fast learner. Problem solver.",
  "Code with clarity, design with purpose."
];

const RotatingQuoteCard = () => {
  const [index, setIndex] = useState(0);
  const [flip, setFlip] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setFlip((prev) => !prev);
      setIndex((prev) => (prev + 1) % quotes.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-72 h-48 perspective">
      <div
        className={`absolute inset-0 transition-transform duration-700 preserve-3d ${
          flip ? "rotate-y-180" : ""
        }`}
      >
        {/* Front */}
        <div className="absolute inset-0 bg-white/10 border border-white/20 backdrop-blur-xl rounded-xl p-6 flex items-center justify-center text-center text-indigo-300 text-xl font-mono font-semibold backface-hidden">
          “{quotes[index]}”
        </div>

        {/* Back */}
        <div className="absolute inset-0 bg-white/10 border border-white/20 backdrop-blur-xl rounded-xl p-6 flex items-center justify-center text-center text-purple-300 text-xl font-mono font-semibold rotate-y-180 backface-hidden">
          “{quotes[(index + 1) % quotes.length]}”
        </div>
      </div>
    </div>
  );
};

export default RotatingQuoteCard;
