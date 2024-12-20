import React, { useEffect, useRef } from 'react';
import { Phone, MapPin, Zap } from 'lucide-react';
import { Button } from './ui/button';
import { motion } from 'framer-motion';
import Autoplay from 'embla-carousel-autoplay';
import { useIsMobile } from '@/hooks/use-mobile';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const VideoPresentation = () => {
  const videoRef = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();
  const plugin = useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => {
      if (videoRef.current) {
        observer.unobserve(videoRef.current);
      }
    };
  }, []);

  return (
    <div className="bg-gradient-primary text-white py-8 md:py-16 lg:py-24">
      <div className="container mx-auto px-4">
        <div ref={videoRef} className="space-y-8 md:space-y-16 opacity-0 transition-opacity duration-1000">
          <div className="space-y-6 md:space-y-8">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-3xl md:text-4xl lg:text-6xl xl:text-7xl font-bold text-center text-secondary max-w-5xl mx-auto leading-tight space-y-2"
            >
              <div className="text-lg md:text-xl lg:text-2xl xl:text-3xl text-primary/80 font-light mb-2">Syokimau Land For Sale</div>
              Adam Boss Mtaa
            </motion.h1>
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="max-w-5xl mx-auto"
            >
              <Carousel 
                className="w-full"
                plugins={[plugin.current]}
                onMouseEnter={plugin.current.stop}
                onMouseLeave={plugin.current.reset}
              >
                <CarouselContent>
                  <CarouselItem>
                    <div className="relative aspect-video md:aspect-[21/9]">
                      <img 
                        src="/lovable-uploads/5d3dc6c9-13f3-43e7-8e32-6638c87553d5.png"
                        alt="Aerial View"
                        className="w-full h-full object-cover rounded-lg md:rounded-2xl shadow-lg md:shadow-2xl"
                      />
                    </div>
                  </CarouselItem>
                  <CarouselItem>
                    <div className="relative aspect-video md:aspect-[21/9]">
                      <img 
                        src="/lovable-uploads/d95bb8df-a8d3-45ba-abab-29137683fdfb.png"
                        alt="Plot Layout Plan"
                        className="w-full h-full object-cover rounded-lg md:rounded-2xl shadow-lg md:shadow-2xl"
                      />
                    </div>
                  </CarouselItem>
                  <CarouselItem>
                    <div className="relative aspect-video md:aspect-[21/9]">
                      <img 
                        src="/lovable-uploads/2c5f8e54-df47-4ed3-9500-36c4edc70410.png"
                        alt="Plot Features"
                        className="w-full h-full object-cover rounded-lg md:rounded-2xl shadow-lg md:shadow-2xl"
                      />
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
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="bg-primary/20 backdrop-blur-sm p-6 md:p-8 rounded-xl md:rounded-2xl hover:bg-primary/30 transition-all duration-300"
            >
              <div className="flex items-center space-x-3 mb-4">
                <MapPin className="w-6 h-6 md:w-8 md:h-8 text-secondary" />
                <h2 className="text-lg md:text-xl font-bold text-secondary">Prime Location</h2>
              </div>
              <p className="text-secondary/90 text-sm md:text-base">
                500m from Quarry Road exit, 2.6km from Expressway exit. Near Viraj International School.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-primary/20 backdrop-blur-sm p-6 md:p-8 rounded-xl md:rounded-2xl hover:bg-primary/30 transition-all duration-300"
            >
              <div className="flex items-center space-x-3 mb-4">
                <Zap className="w-6 h-6 md:w-8 md:h-8 text-secondary" />
                <h2 className="text-lg md:text-xl font-bold text-secondary">Development Ready</h2>
              </div>
              <p className="text-secondary/90 text-sm md:text-base">
                31 plots with electricity and 9m wide internal roads.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-primary/20 backdrop-blur-sm p-6 md:p-8 rounded-xl md:rounded-2xl hover:bg-primary/30 transition-all duration-300"
            >
              <div className="flex items-center space-x-3 mb-4">
                <Phone className="w-6 h-6 md:w-8 md:h-8 text-secondary" />
                <h2 className="text-lg md:text-xl font-bold text-secondary">Contact Us</h2>
              </div>
              <Button
                size="lg"
                className="w-full bg-secondary text-primary-dark hover:bg-secondary/90 text-base md:text-lg mt-4"
                onClick={() => window.location.href = 'tel:+254729113327'}
              >
                Call: +254 729 113 327
              </Button>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoPresentation;