import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { ExternalLink } from 'lucide-react';

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

  const mapContainerStyle = {
    width: '100%',
    height: '400px'
  };

  const options = {
    mapTypeId: 'satellite',
    zoom: 17,
    heading: 0,
    tilt: 45
  };

  const openInGoogleMaps = () => {
    window.open(`https://www.google.com/maps?q=${center.lat},${center.lng}&z=17&hl=en`, '_blank');
  };

  // Fallback if API key is not set
  if (!window.env?.GOOGLE_MAPS_API_KEY) {
    return (
      <Card className="w-full">
        <CardHeader>
          <CardTitle className="text-2xl font-bold">Location</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="w-full h-[400px] rounded-lg overflow-hidden bg-gray-100 flex items-center justify-center flex-col gap-4">
            <p className="text-gray-500">Please set up your Google Maps API key to view the map.</p>
            <Button onClick={openInGoogleMaps} variant="outline">
              <ExternalLink className="w-4 h-4 mr-2" />
              View on Google Maps
            </Button>
          </div>
        </CardContent>
      </Card>
    );
  }

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
        <div className="w-full h-[400px] rounded-lg overflow-hidden">
          <LoadScript googleMapsApiKey={window.env.GOOGLE_MAPS_API_KEY}>
            <GoogleMap
              mapContainerStyle={mapContainerStyle}
              center={center}
              options={options}
            >
              <Marker position={center} />
            </GoogleMap>
          </LoadScript>
        </div>
      </CardContent>
    </Card>
  );
};

export default LocationMap;