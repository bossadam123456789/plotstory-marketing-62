import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';

const LocationMap = () => {
  const center = {
    lat: -1.364734,
    lng: 36.9741269
  };

  const mapContainerStyle = {
    width: '100%',
    height: '400px'
  };

  const options = {
    mapTypeId: 'satellite',
    zoom: 16
  };

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="text-2xl font-bold">Location</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="w-full h-[400px] rounded-lg overflow-hidden">
          <LoadScript googleMapsApiKey="YOUR_GOOGLE_MAPS_API_KEY">
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