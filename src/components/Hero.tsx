import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <div className="relative">
      {/* First image - Aerial view */}
      <div 
        className="relative min-h-[80vh] flex items-center justify-center bg-cover bg-center"
        style={{ 
          backgroundImage: 'url("/lovable-uploads/9215dba2-1191-4ad8-a08b-321ea4a5db4d.png")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-black/60" />
        <div className="container relative z-10 text-center text-white">
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

      {/* Second image - Plot Layout */}
      <div className="container mx-auto py-16">
        <div className="bg-white rounded-lg shadow-xl p-8">
          <h2 className="text-3xl font-bold text-center mb-8">Plot Layout Plan</h2>
          <div className="flex justify-center">
            <img 
              src="/lovable-uploads/d95bb8df-a8d3-45ba-abab-29137683fdfb.png" 
              alt="Plot Layout Plan"
              className="max-w-full h-auto rounded-lg"
              style={{ maxHeight: '600px' }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;