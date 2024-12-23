import { Megaphone, Phone } from "lucide-react";
import { Button } from "./ui/button";

const NewsBar = () => {
  const handleCall = () => {
    window.location.href = 'tel:+254729113327';
  };

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
      <div className="absolute right-4 top-1/2 -translate-y-1/2 z-10">
        <Button
          onClick={handleCall}
          size="sm"
          className="bg-primary hover:bg-primary/90 text-white font-medium flex items-center gap-2"
        >
          <Phone className="h-4 w-4" />
          Call Now
        </Button>
      </div>
    </div>
  );
};

export default NewsBar;