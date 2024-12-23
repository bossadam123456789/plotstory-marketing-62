import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { ExternalLink } from 'lucide-react';

// Declare the window interface to include our env property
declare global {
  interface Window {
    env?: {
      GOOGLE_MAPS_API_KEY?: string;
    };
  }
}

const LocationMap = () => {
  const center = {
    lat: -1.3647876977920532,
    lng: 36.97661590576172
  };

  const openInGoogleMaps = () => {
    window.open(`https://www.google.com/maps?q=${center.lat},${center.lng}&z=17&hl=en`, '_blank');
  };

  // Use a default static satellite image URL that doesn't require an API key
  const staticImageUrl = `https://maps.googleapis.com/maps/api/staticmap?center=${center.lat},${center.lng}&zoom=17&size=800x400&maptype=satellite&key=YOUR_API_KEY_HERE`;

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="text-2xl font-bold flex justify-between items-center">
          Location
          <Button onClick={openInGoogleMaps} variant="outline" size="sm">
            <ExternalLink className="w-4 h-4 mr-2" />
            View on Google Maps
          </Button>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div 
          className="w-full h-[400px] rounded-lg overflow-hidden cursor-pointer relative"
          onClick={openInGoogleMaps}
        >
          {/* Default static image */}
          <img 
            src="/lovable-uploads/satellite-map.jpg" 
            alt="Location Map"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 flex items-center justify-center bg-black/50">
            <p className="text-white text-center px-4">
              Click to view location on Google Maps
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default LocationMap;