import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const Hero = () => {
  return (
    <div className="relative">
      {/* Hero Carousel */}
      <Carousel className="relative">
        <CarouselContent>
          {/* First slide - Original aerial view */}
          <CarouselItem>
            <div 
              className="relative min-h-[60vh] md:min-h-[80vh] flex items-center justify-center bg-cover bg-center"
              style={{ 
                backgroundImage: 'url("/lovable-uploads/d68412fd-1bcd-4b39-860f-02b30255e58a.png")',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            >
              <div className="absolute inset-0 bg-black/60" />
              <div className="container relative z-10 text-center text-white px-4 md:px-0">
                <h1 className="text-3xl md:text-5xl lg:text-7xl font-bold mb-4 md:mb-6 animate-float">
                  Premium Land Plots
                </h1>
                <p className="text-lg md:text-xl lg:text-2xl mb-6 md:mb-8 max-w-2xl mx-auto">
                  31 exclusive plots spread across 4 acres of prime real estate, connected by well-planned 9M wide roads
                </p>
                <Button
                  size="lg"
                  className="bg-sand text-forest hover:bg-sand-dark w-full md:w-auto"
                  onClick={() => document.getElementById('plots')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  View Available Plots <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </CarouselItem>

          {/* Second slide - New aerial view with plot layout */}
          <CarouselItem>
            <div 
              className="relative min-h-[60vh] md:min-h-[80vh] flex items-center justify-center bg-cover bg-center"
              style={{ 
                backgroundImage: 'url("/lovable-uploads/a0c5b506-e23f-4381-b75f-5196a80c52b6.png")',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            >
              <div className="absolute inset-0 bg-black/60" />
              <div className="container relative z-10 text-center text-white px-4 md:px-0">
                <h1 className="text-3xl md:text-5xl lg:text-7xl font-bold mb-4 md:mb-6 animate-float">
                  Strategic Location
                </h1>
                <p className="text-lg md:text-xl lg:text-2xl mb-6 md:mb-8 max-w-2xl mx-auto">
                  Prime plots with excellent accessibility via 32M wide main road
                </p>
                <Button
                  size="lg"
                  className="bg-sand text-forest hover:bg-sand-dark w-full md:w-auto"
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
      <div className="container mx-auto py-8 md:py-12 px-4 md:px-6">
        <div className="bg-white/90 rounded-lg shadow-xl p-6 md:p-8 max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-forest mb-6">About This Property</h2>
          <div className="space-y-4 text-gray-700">
            <p className="font-medium text-lg">
              This exceptional 4-acre parcel of land is situated in the highly sought-after Syokimau area, Mavoko, offering an ideal investment opportunity.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <h3 className="font-bold text-forest">Prime Location</h3>
                <p>Just 500 meters from the Quarry Road exit and 2.6 kilometers from the Expressway exit, ensuring quick and convenient access to major transportation routes.</p>
                
                <h3 className="font-bold text-forest">Close to Key Amenities</h3>
                <p>Located a short distance from Viraj International School, this land is perfect for residential, educational, or commercial development.</p>
              </div>
              
              <div className="space-y-3">
                <h3 className="font-bold text-forest">Excellent Infrastructure</h3>
                <p>The land is directly accessible via a tarmacked road and is adjacent to a 32-meter-wide main road, offering excellent visibility and access.</p>
                
                <h3 className="font-bold text-forest">Well-Planned Layout</h3>
                <p>The land is divided into 31 plots, each accessible via a network of 9-meter-wide internal roads, as illustrated in the layout plan.</p>
                
                <h3 className="font-bold text-forest">Utilities Ready</h3>
                <p>Electricity is readily available, facilitating seamless development.</p>
              </div>
            </div>
            
            <p className="text-forest font-medium mt-4">
              This strategically located property offers a perfect blend of accessibility, proximity to amenities, and infrastructure, making it an ideal choice for residential, commercial, or mixed-use projects in the rapidly expanding Syokimau area.
            </p>
          </div>
        </div>
      </div>

      {/* New aerial photos section */}
      <div className="container mx-auto py-8 md:py-16 px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
          <div className="bg-white rounded-lg shadow-xl p-2 md:p-4">
            <img 
              src="/lovable-uploads/cbe36140-3ab3-435c-ade8-be8e366a8961.png" 
              alt="Aerial View of Plot"
              className="w-full h-auto rounded-lg"
            />
          </div>
          <div className="bg-white rounded-lg shadow-xl p-2 md:p-4">
            <img 
              src="/lovable-uploads/5facca90-233e-4e32-b698-9670f5dfe243.png" 
              alt="Plot Layout Overview"
              className="w-full h-auto rounded-lg"
            />
          </div>
        </div>
      </div>

      {/* Plot Layout Plan */}
      <div className="container mx-auto py-8 md:py-16 px-4 md:px-6">
        <div className="bg-white rounded-lg shadow-xl p-4 md:p-8">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-4 md:mb-8">Plot Layout Plan</h2>
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