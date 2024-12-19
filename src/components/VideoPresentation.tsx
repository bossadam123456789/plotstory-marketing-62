import React, { useEffect, useRef } from 'react';
import { Phone, MapPin, Zap } from 'lucide-react';
import { Button } from './ui/button';

const VideoPresentation = () => {
  const videoRef = useRef<HTMLDivElement>(null);

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
    <div className="bg-forest text-white py-16">
      <div className="container mx-auto px-4">
        <div ref={videoRef} className="space-y-16 opacity-0 transition-opacity duration-1000">
          {/* Opening Scene */}
          <div className="space-y-8 animate-slide-up">
            <h1 className="text-5xl md:text-7xl font-bold text-center text-sand">
              Premium Plots in Syokimau, Mavoko
            </h1>
            <div className="aspect-video rounded-lg overflow-hidden shadow-2xl">
              <img 
                src="/lovable-uploads/d68412fd-1bcd-4b39-860f-02b30255e58a.png"
                alt="Aerial View"
                className="w-full h-full object-cover animate-ken-burns"
              />
            </div>
          </div>

          {/* Key Features */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* Location */}
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <MapPin className="w-8 h-8 text-sand" />
                <h2 className="text-2xl font-bold text-sand">Prime Location</h2>
              </div>
              <p className="text-lg">
                500m from Quarry Road exit, 2.6km from Expressway exit. Near Viraj International School.
              </p>
            </div>

            {/* Development Ready */}
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <Zap className="w-8 h-8 text-sand" />
                <h2 className="text-2xl font-bold text-sand">Ready for Development</h2>
              </div>
              <p className="text-lg">
                31 plots with electricity and 9m wide internal roads.
              </p>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center space-y-8 bg-forest-light p-8 rounded-2xl">
            <h2 className="text-3xl md:text-4xl font-bold text-sand">
              Secure Your Plot Today!
            </h2>
            <Button
              size="lg"
              className="bg-sand text-forest hover:bg-sand/90 text-lg px-8 py-6 h-auto"
              onClick={() => window.location.href = 'tel:0729113327'}
            >
              <Phone className="mr-2 h-6 w-6" />
              Call Now: 0729 113 327
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoPresentation;