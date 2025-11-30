"use client";
import { useState, useEffect } from "react";

const quotes = [
  "Clean UI & clean logic",
  "Building practical experiences",
  "Fast learner. Problem solver.",
  "Code with clarity, design with purpose."
];

const StackedQuoteCards = () => {
  const [list, setList] = useState(quotes);

  useEffect(() => {
    const interval = setInterval(() => {
      // Animate the top card by shifting it
      const topCard = document.getElementById("top-card");
      if (topCard) {
        topCard.classList.add("slide-away");
      }

      // After animation ends → rotate cards
      setTimeout(() => {
        setList((prev) => [...prev.slice(1), prev[0]]);
        if (topCard) topCard.classList.remove("slide-away");
      }, 600); // matches animation duration
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-80 h-48 mx-auto">
      {list.slice(0, 3).map((quote, i) => (
        <div
          key={quote}
          id={i === 0 ? "top-card" : undefined}
          className={`
            absolute inset-0 
            flex items-center justify-center
            bg-indigo border border-fuchsia-900 backdrop-blur-xl
            rounded-xl p-6 text-center font-mono text-lg text-gradient
            transition-all duration-500
            shadow-xl
            ${i === 0 ? "z-30" : ""}
            ${i === 1 ? "scale-[0.96] translate-y-2 z-20 opacity-90" : ""}
            ${i === 2 ? "scale-[0.92] translate-y-4 z-10 opacity-70" : ""}
          `}
        >
          “{quote}”
        </div>
      ))}
    </div>
  );
};

export default StackedQuoteCards;
