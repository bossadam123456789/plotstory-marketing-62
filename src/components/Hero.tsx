import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { useIsMobile } from "@/hooks/use-mobile";
import React from "react";

const Hero = () => {
  const plugin = React.useMemo(
    () => 
      Autoplay({ delay: 4000, stopOnInteraction: true }),
    []
  );
  
  const isMobile = useIsMobile();

  return (
    <div className="relative bg-white">
      {/* Text Content Section */}
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-8 md:mb-12">
          <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-light mb-4 md:mb-6 tracking-tight text-primary">
            Premium Land Plots
          </h1>
          <p className="text-base sm:text-lg md:text-xl mb-6 md:mb-8 max-w-2xl mx-auto font-light tracking-wide text-secondary">
            31 exclusive plots spread across 4 acres of prime real estate
          </p>
          <Button
            size="lg"
            className="bg-primary text-white hover:bg-primary/90 text-sm sm:text-base tracking-wide w-full sm:w-auto"
            onClick={() => document.getElementById('plots')?.scrollIntoView({ behavior: 'smooth' })}
          >
            View Available Plots <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>

      {/* Image Carousel Section */}
      <div className="bg-sand py-8 md:py-16">
        <div className="container mx-auto px-4">
          <Carousel 
            className="relative max-w-6xl mx-auto" 
            opts={{ loop: true }} 
            plugins={[plugin]}
          >
            <CarouselContent>
              {/* Strategic Location Slide */}
              <CarouselItem>
                <div 
                  className="relative min-h-[40vh] md:min-h-[60vh] bg-cover bg-center rounded-lg overflow-hidden"
                  style={{ 
                    backgroundImage: 'url("/lovable-uploads/a0c5b506-e23f-4381-b75f-5196a80c52b6.png")',
                  }}
                >
                  <div className="absolute inset-0 bg-black/20" />
                </div>
              </CarouselItem>
              <CarouselItem>
                <div 
                  className="relative min-h-[40vh] md:min-h-[60vh] bg-cover bg-center rounded-lg overflow-hidden"
                  style={{ 
                    backgroundImage: 'url("/lovable-uploads/d95bb8df-a8d3-45ba-abab-29137683fdfb.png")',
                  }}
                >
                  <div className="absolute inset-0 bg-black/20" />
                </div>
              </CarouselItem>
            </CarouselContent>
            {!isMobile && (
              <>
                <CarouselPrevious className="hidden md:flex" />
                <CarouselNext className="hidden md:flex" />
              </>
            )}
          </Carousel>
        </div>
      </div>

      {/* Property Description */}
      <div className="container mx-auto py-8 md:py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-light text-primary mb-6 md:mb-8 text-center tracking-wide">About This Property</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 text-secondary">
            <div className="space-y-4 md:space-y-6">
              <div>
                <h3 className="text-base md:text-lg font-medium mb-2">Prime Location</h3>
                <p className="leading-relaxed text-sm md:text-base">
                  Just 500 meters from the Quarry Road exit and 2.6 kilometers from the Expressway exit.
                </p>
              </div>
              
              <div>
                <h3 className="text-base md:text-lg font-medium mb-2">Close to Key Amenities</h3>
                <p className="leading-relaxed text-sm md:text-base">
                  Located near Viraj International School, perfect for development.
                </p>
              </div>
            </div>
            
            <div className="space-y-4 md:space-y-6">
              <div>
                <h3 className="text-base md:text-lg font-medium mb-2">Excellent Infrastructure</h3>
                <p className="leading-relaxed text-sm md:text-base">
                  Direct access via tarmacked road, adjacent to 32-meter-wide main road.
                </p>
              </div>
              
              <div>
                <h3 className="text-base md:text-lg font-medium mb-2">Well-Planned Layout</h3>
                <p className="leading-relaxed text-sm md:text-base">
                  31 plots with 9-meter-wide internal roads.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Aerial Photos */}
      <div className="container mx-auto py-8 md:py-16 px-4 bg-sand">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 max-w-6xl mx-auto">
          <div>
            <img 
              src="/lovable-uploads/a0c5b506-e23f-4381-b75f-5196a80c52b6.png" 
              alt="Strategic Location"
              className="w-full h-[300px] md:h-[400px] object-cover rounded-lg shadow-sm"
            />
          </div>
          <div>
            <img 
              src="/lovable-uploads/d95bb8df-a8d3-45ba-abab-29137683fdfb.png" 
              alt="Plot Layout Plan"
              className="w-full h-[300px] md:h-[400px] object-cover rounded-lg shadow-sm"
            />
          </div>
        </div>
      </div>

      {/* Plot Layout Plan */}
      <div className="container mx-auto py-8 md:py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-light text-primary mb-8 md:mb-12 text-center tracking-wide">Plot Layout Plan</h2>
          <div className="flex justify-center">
            <img 
              src="/lovable-uploads/d95bb8df-a8d3-45ba-abab-29137683fdfb.png" 
              alt="Plot Layout Plan"
              className="max-w-full h-auto rounded-lg shadow-sm"
              style={{ maxHeight: '600px' }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;