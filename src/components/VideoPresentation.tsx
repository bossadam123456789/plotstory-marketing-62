import React, { useEffect, useRef } from 'react';
import { Phone } from 'lucide-react';
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
    <div className="bg-forest text-white">
      <div className="container mx-auto py-16 px-4">
        <div ref={videoRef} className="space-y-16 opacity-0 transition-opacity duration-1000">
          {/* Scene 1 */}
          <div className="space-y-6 animate-slide-up">
            <h2 className="text-4xl md:text-6xl font-bold text-center text-sand">
              Welcome to Your Next Investment Opportunity!
            </h2>
            <p className="text-xl text-center max-w-3xl mx-auto">
              Nestled in the heart of Syokimau, Mavoko, lies this prime 4-acre piece of land—a perfect blend of convenience, accessibility, and opportunity.
            </p>
            <div className="aspect-video rounded-lg overflow-hidden shadow-xl">
              <img 
                src="/lovable-uploads/d68412fd-1bcd-4b39-860f-02b30255e58a.png"
                alt="Aerial View"
                className="w-full h-full object-cover animate-ken-burns"
              />
            </div>
          </div>

          {/* Scene 2 */}
          <div className="space-y-6 animate-slide-up delay-500">
            <h3 className="text-3xl md:text-4xl font-bold text-center text-sand">
              Strategically Located. Fully Accessible.
            </h3>
            <div className="aspect-video rounded-lg overflow-hidden shadow-xl">
              <img 
                src="/lovable-uploads/a0c5b506-e23f-4381-b75f-5196a80c52b6.png"
                alt="Location Features"
                className="w-full h-full object-cover animate-ken-burns"
              />
            </div>
            <p className="text-xl text-center max-w-3xl mx-auto">
              Located just 500 meters from the Quarry Road exit and 2.6 kilometers from the Expressway exit, this property offers seamless connectivity to Nairobi and beyond.
            </p>
          </div>

          {/* Scene 3 */}
          <div className="space-y-6 animate-slide-up delay-1000">
            <h3 className="text-3xl md:text-4xl font-bold text-center text-sand">
              Well-Designed Layout. Ready for Development.
            </h3>
            <div className="aspect-video rounded-lg overflow-hidden shadow-xl">
              <img 
                src="/lovable-uploads/f137931d-8aa1-4652-9372-3d24ddc1b06b.png"
                alt="Layout Plan"
                className="w-full h-full object-cover animate-ken-burns"
              />
            </div>
            <p className="text-xl text-center max-w-3xl mx-auto">
              The land is thoughtfully divided into 31 plots, each with access to a network of 9-meter-wide internal roads, making it ideal for residential or commercial projects.
            </p>
          </div>

          {/* Scene 4 */}
          <div className="space-y-6 animate-slide-up delay-1500">
            <h3 className="text-3xl md:text-4xl font-bold text-center text-sand">
              Utilities Ready. Endless Possibilities.
            </h3>
            <div className="aspect-video rounded-lg overflow-hidden shadow-xl">
              <img 
                src="/lovable-uploads/cbe36140-3ab3-435c-ade8-be8e366a8961.png"
                alt="Development Potential"
                className="w-full h-full object-cover animate-ken-burns"
              />
            </div>
            <p className="text-xl text-center max-w-3xl mx-auto">
              Electricity is already connected, offering you a hassle-free start for your dream development. Whether you're looking to invest in residential, commercial, or mixed-use projects, this property is your canvas.
            </p>
          </div>

          {/* Call to Action */}
          <div className="text-center space-y-6 animate-slide-up delay-2000">
            <h2 className="text-4xl md:text-6xl font-bold text-sand">
              Your Dream Investment Awaits!
            </h2>
            <p className="text-xl max-w-3xl mx-auto">
              Contact us today for more details or to schedule a site visit.
            </p>
            <Button
              size="lg"
              className="bg-sand text-forest hover:bg-sand/90"
              onClick={() => window.location.href = 'tel:0729113327'}
            >
              <Phone className="mr-2 h-4 w-4" />
              Call Now: 0729 113 327
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoPresentation;