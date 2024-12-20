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
import React from "react";

const Hero = () => {
  const plugin = React.useMemo(
    () => 
      Autoplay({ delay: 2000, stopOnInteraction: false }),
    []
  );

  return (
    <div className="relative bg-white">
      <Carousel 
        className="relative" 
        opts={{ loop: true }} 
        plugins={[plugin]}
      >
        <CarouselContent>
          {/* First slide */}
          <CarouselItem>
            <div 
              className="relative min-h-[50vh] md:min-h-[70vh] flex items-center justify-center bg-cover bg-center"
              style={{ 
                backgroundImage: 'url("/lovable-uploads/d68412fd-1bcd-4b39-860f-02b30255e58a.png")',
              }}
            >
              <div className="absolute inset-0 bg-black/30" />
              <div className="container relative z-10 text-center text-white px-4 md:px-0">
                <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-4">
                  Premium Land Plots
                </h1>
                <p className="text-base md:text-lg mb-6 max-w-xl mx-auto">
                  31 exclusive plots spread across 4 acres of prime real estate
                </p>
                <Button
                  size="lg"
                  className="bg-white text-primary hover:bg-gray-100"
                  onClick={() => document.getElementById('plots')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  View Available Plots <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </CarouselItem>

          {/* Second slide */}
          <CarouselItem>
            <div 
              className="relative min-h-[50vh] md:min-h-[70vh] flex items-center justify-center bg-cover bg-center"
              style={{ 
                backgroundImage: 'url("/lovable-uploads/a0c5b506-e23f-4381-b75f-5196a80c52b6.png")',
              }}
            >
              <div className="absolute inset-0 bg-black/30" />
              <div className="container relative z-10 text-center text-white px-4 md:px-0">
                <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-4">
                  Strategic Location
                </h1>
                <p className="text-base md:text-lg mb-6 max-w-xl mx-auto">
                  Prime plots with excellent accessibility
                </p>
                <Button
                  size="lg"
                  className="bg-white text-primary hover:bg-gray-100"
                  onClick={() => document.getElementById('plots')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  View Available Plots <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </CarouselItem>

          {/* Third slide */}
          <CarouselItem>
            <div 
              className="relative min-h-[50vh] md:min-h-[70vh] flex items-center justify-center bg-cover bg-center"
              style={{ 
                backgroundImage: 'url("/lovable-uploads/f137931d-8aa1-4652-9372-3d24ddc1b06b.png")',
              }}
            >
              <div className="absolute inset-0 bg-black/30" />
              <div className="container relative z-10 text-center text-white px-4 md:px-0">
                <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-4">
                  Plot Layout Overview
                </h1>
                <p className="text-base md:text-lg mb-6 max-w-xl mx-auto">
                  Well-planned layout with 9M wide internal roads
                </p>
                <Button
                  size="lg"
                  className="bg-white text-primary hover:bg-gray-100"
                  onClick={() => document.getElementById('plots')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  View Available Plots <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious className="hidden md:flex" />
        <CarouselNext className="hidden md:flex" />
      </Carousel>

      {/* Property Description */}
      <div className="container mx-auto py-8 px-4">
        <div className="bg-white rounded-lg border p-6 max-w-3xl mx-auto">
          <h2 className="text-xl md:text-2xl font-bold text-primary mb-4">About This Property</h2>
          <div className="space-y-4 text-gray-700">
            <p className="text-base md:text-lg">
              This exceptional 4-acre parcel of land is situated in the highly sought-after Syokimau area, Mavoko, offering an ideal investment opportunity.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <h3 className="font-semibold text-primary">Prime Location</h3>
                <p>Just 500 meters from the Quarry Road exit and 2.6 kilometers from the Expressway exit.</p>
                
                <h3 className="font-semibold text-primary">Close to Key Amenities</h3>
                <p>Located near Viraj International School, perfect for development.</p>
              </div>
              
              <div className="space-y-2">
                <h3 className="font-semibold text-primary">Excellent Infrastructure</h3>
                <p>Direct access via tarmacked road, adjacent to 32-meter-wide main road.</p>
                
                <h3 className="font-semibold text-primary">Well-Planned Layout</h3>
                <p>31 plots with 9-meter-wide internal roads.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Aerial Photos */}
      <div className="container mx-auto py-8 px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white rounded-lg border p-2">
            <img 
              src="/lovable-uploads/cbe36140-3ab3-435c-ade8-be8e366a8961.png" 
              alt="Aerial View of Plot"
              className="w-full h-auto rounded-lg"
            />
          </div>
          <div className="bg-white rounded-lg border p-2">
            <img 
              src="/lovable-uploads/5facca90-233e-4e32-b698-9670f5dfe243.png" 
              alt="Plot Layout Overview"
              className="w-full h-auto rounded-lg"
            />
          </div>
        </div>
      </div>

      {/* Plot Layout Plan */}
      <div className="container mx-auto py-8 px-4">
        <div className="bg-white rounded-lg border p-4">
          <h2 className="text-xl md:text-2xl font-bold text-center mb-4 text-primary">Plot Layout Plan</h2>
          <div className="flex justify-center">
            <img 
              src="/lovable-uploads/d95bb8df-a8d3-45ba-abab-29137683fdfb.png" 
              alt="Plot Layout Plan"
              className="max-w-full h-auto rounded-lg"
              style={{ maxHeight: '500px' }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;