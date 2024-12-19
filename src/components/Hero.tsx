import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <div className="relative min-h-[80vh] flex items-center justify-center bg-gradient-to-b from-forest to-forest-light text-white">
      <div className="absolute inset-0 bg-black/40" />
      <div className="container relative z-10 text-center">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-float">
          Premium Land Plots
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
          31 exclusive plots spread across 4 acres of prime real estate, connected by well-planned 9M wide roads
        </p>
        <Button
          size="lg"
          className="bg-sand text-forest hover:bg-sand-dark"
          onClick={() => document.getElementById('plots')?.scrollIntoView({ behavior: 'smooth' })}
        >
          View Available Plots <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </div>
  );
};

export default Hero;