const NewsBar = () => {
  return (
    <div className="bg-[#FEF7CD] text-primary py-3 overflow-hidden whitespace-nowrap relative">
      <div className="animate-marquee inline-block">
        <span className="text-sm md:text-base font-medium">
          🎉 Festive Season Offer: Buy 2+ Plots & Get Up to 10% OFF! 🎉 Limited
          Time Only! Don't miss your chance to save big this holiday season. Act
          Now! Contact us to secure your deal today.
        </span>
      </div>
      <div className="animate-marquee2 inline-block absolute top-3">
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