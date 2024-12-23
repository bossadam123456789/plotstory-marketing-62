import { useEffect, useState } from "react";

const NewsBar = () => {
  const [position, setPosition] = useState(-100);

  useEffect(() => {
    const animateText = () => {
      setPosition((prev) => {
        if (prev > window.innerWidth) return -100;
        return prev + 1;
      });
    };

    const interval = setInterval(animateText, 20);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-[#FEF7CD] text-primary py-3 overflow-hidden whitespace-nowrap relative">
      <div
        className="inline-block"
        style={{ transform: `translateX(${position}px)` }}
      >
        <span className="text-sm md:text-base font-medium">
          🎉 Festive Season Offer: Buy 2+ Plots & Get Up to 10% OFF! 🎉 Limited
          Time Only! Don't miss your chance to save big this holiday season. Act
          Now! Contact us to secure your deal today.
        </span>
      </div>
    </div>
  );
};

export default NewsBar;