import { Megaphone } from "lucide-react";

const NewsBar = () => {
  return (
    <div className="bg-[#FEF7CD] text-primary py-2.5 overflow-hidden whitespace-nowrap border-b shadow-sm relative">
      <div className="flex animate-scroll items-center">
        <span className="inline-flex items-center gap-2 text-sm md:text-base font-medium mx-4">
          <Megaphone className="h-5 w-5 text-primary animate-bounce" />
          🎉 Festive Season Offer: Buy 2+ Plots & Get Up to 10% OFF! 🎉 Limited
          Time Only! Don't miss your chance to save big this holiday season. Act
          Now! Contact us to secure your deal today.
        </span>
        <span className="inline-flex items-center gap-2 text-sm md:text-base font-medium mx-4">
          <Megaphone className="h-5 w-5 text-primary animate-bounce" />
          🎉 Festive Season Offer: Buy 2+ Plots & Get Up to 10% OFF! 🎉 Limited
          Time Only! Don't miss your chance to save big this holiday season. Act
          Now! Contact us to secure your deal today.
        </span>
      </div>
    </div>
  );
};

export default NewsBar;