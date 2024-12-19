import React, { useEffect, useRef } from 'react';
import { Phone, TrendingUp, MapPin, Zap } from 'lucide-react';
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
    <div className="bg-forest text-white min-h-screen">
      <div className="container mx-auto py-16 px-4">
        <div ref={videoRef} className="space-y-24 opacity-0 transition-opacity duration-1000">
          {/* Opening Scene */}
          <div className="space-y-8 animate-slide-up">
            <h1 className="text-5xl md:text-7xl font-bold text-center text-sand">
              Unlock Your Future Investment in Syokimau, Mavoko!
            </h1>
            <p className="text-xl md:text-2xl text-center max-w-4xl mx-auto">
              A rare investment opportunity in the heart of Syokimau, Mavoko—a 4-acre property perfectly positioned for exponential growth in Kenya's booming real estate market.
            </p>
            <div className="aspect-video rounded-lg overflow-hidden shadow-2xl">
              <img 
                src="/lovable-uploads/d68412fd-1bcd-4b39-860f-02b30255e58a.png"
                alt="Aerial View"
                className="w-full h-full object-cover animate-ken-burns"
              />
            </div>
          </div>

          {/* Strategic Location */}
          <div className="space-y-8 animate-slide-up">
            <div className="flex items-center justify-center space-x-2">
              <MapPin className="w-8 h-8 text-sand" />
              <h2 className="text-4xl md:text-5xl font-bold text-sand">
                Strategically Located. Connected to Prosperity.
              </h2>
            </div>
            <div className="aspect-video rounded-lg overflow-hidden shadow-2xl">
              <img 
                src="/lovable-uploads/a0c5b506-e23f-4381-b75f-5196a80c52b6.png"
                alt="Strategic Location"
                className="w-full h-full object-cover animate-ken-burns"
              />
            </div>
            <p className="text-xl md:text-2xl text-center max-w-4xl mx-auto">
              Just 500m from Quarry Road exit and 2.6km from the Expressway exit. Close to Viraj International School and essential amenities.
            </p>
          </div>

          {/* Investment Potential */}
          <div className="space-y-8 animate-slide-up">
            <div className="flex items-center justify-center space-x-2">
              <TrendingUp className="w-8 h-8 text-sand" />
              <h2 className="text-4xl md:text-5xl font-bold text-sand">
                Kenya Real Estate: A Proven Investment
              </h2>
            </div>
            <div className="aspect-video rounded-lg overflow-hidden shadow-2xl">
              <img 
                src="/lovable-uploads/f137931d-8aa1-4652-9372-3d24ddc1b06b.png"
                alt="Investment Potential"
                className="w-full h-full object-cover animate-ken-burns"
              />
            </div>
            <p className="text-xl md:text-2xl text-center max-w-4xl mx-auto">
              Properties in Syokimau have doubled in value over recent years. With ongoing infrastructure developments, this is your chance to capitalize on a rapidly appreciating asset.
            </p>
          </div>

          {/* Development Ready */}
          <div className="space-y-8 animate-slide-up">
            <div className="flex items-center justify-center space-x-2">
              <Zap className="w-8 h-8 text-sand" />
              <h2 className="text-4xl md:text-5xl font-bold text-sand">
                31 Well-Planned Plots. Ready for Development.
              </h2>
            </div>
            <div className="aspect-video rounded-lg overflow-hidden shadow-2xl">
              <img 
                src="/lovable-uploads/cbe36140-3ab3-435c-ade8-be8e366a8961.png"
                alt="Development Ready"
                className="w-full h-full object-cover animate-ken-burns"
              />
            </div>
            <p className="text-xl md:text-2xl text-center max-w-4xl mx-auto">
              Each plot features access to 9-meter-wide internal roads and pre-installed electricity. Perfect for residential or commercial development.
            </p>
          </div>

          {/* Call to Action */}
          <div className="text-center space-y-8 animate-slide-up bg-forest-light p-12 rounded-2xl">
            <h2 className="text-4xl md:text-6xl font-bold text-sand">
              Secure Your Investment Today!
            </h2>
            <p className="text-xl md:text-2xl max-w-4xl mx-auto">
              Don't miss this opportunity to invest in Kenya's thriving real estate market. Contact us now to learn more or schedule a site visit.
            </p>
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