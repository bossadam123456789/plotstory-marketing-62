import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <div 
      className="relative min-h-[80vh] flex items-center justify-center bg-cover bg-center"
      style={{ 
        backgroundImage: 'url("/lovable-uploads/1b5d436e-04ee-486f-b4af-767a490451a0.png")',
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundColor: '#f5f5f5'
      }}
    >
      <div className="absolute inset-0 bg-black/60" />
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