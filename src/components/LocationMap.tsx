import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { ExternalLink } from 'lucide-react';

const LocationMap = () => {
  const center = {
    lat: -1.3647876977920532,
    lng: 36.97661590576172
  };

  const openInGoogleMaps = () => {
    window.open(`https://www.google.com/maps?q=${center.lat},${center.lng}&z=17&hl=en`, '_blank');
  };

  // Generate a static map URL using Google Maps Static API
  const staticMapUrl = `https://maps.googleapis.com/maps/api/staticmap?center=${center.lat},${center.lng}&zoom=17&size=800x400&maptype=satellite&key=${window.env?.GOOGLE_MAPS_API_KEY}`;

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
          className="w-full h-[400px] rounded-lg overflow-hidden cursor-pointer"
          onClick={openInGoogleMaps}
        >
          {window.env?.GOOGLE_MAPS_API_KEY ? (
            <img 
              src={staticMapUrl} 
              alt="Location Map" 
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="w-full h-full bg-gray-100 flex items-center justify-center flex-col gap-4">
              <p className="text-gray-500">Please set up your Google Maps API key to view the map.</p>
              <Button onClick={openInGoogleMaps} variant="outline">
                <ExternalLink className="w-4 h-4 mr-2" />
                View on Google Maps
              </Button>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default LocationMap;