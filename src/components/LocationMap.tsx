import React, { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';

const LocationMap = () => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const [mapboxToken, setMapboxToken] = useState('');

  useEffect(() => {
    if (!mapContainer.current || !mapboxToken) return;

    mapboxgl.accessToken = mapboxToken;
    
    const syokimauCoordinates = [36.9750, -1.3833]; // Longitude, Latitude for Syokimau

    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v12',
      center: syokimauCoordinates,
      zoom: 14,
    });

    // Add navigation controls
    map.current.addControl(new mapboxgl.NavigationControl(), 'top-right');

    // Add marker for the location
    new mapboxgl.Marker()
      .setLngLat(syokimauCoordinates)
      .addTo(map.current);

    return () => {
      map.current?.remove();
    };
  }, [mapboxToken]);

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="text-2xl font-bold">Location</CardTitle>
      </CardHeader>
      <CardContent>
        {!mapboxToken ? (
          <div className="space-y-4">
            <p className="text-muted-foreground">Please enter your Mapbox public token to view the map:</p>
            <input
              type="text"
              className="w-full p-2 border rounded"
              placeholder="Enter Mapbox public token"
              onChange={(e) => setMapboxToken(e.target.value)}
            />
            <p className="text-sm text-muted-foreground">
              You can get your public token from{' '}
              <a href="https://mapbox.com/" target="_blank" rel="noopener noreferrer" className="text-primary underline">
                Mapbox.com
              </a>
            </p>
          </div>
        ) : (
          <div className="w-full h-[400px] rounded-lg overflow-hidden">
            <div ref={mapContainer} className="w-full h-full" />
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default LocationMap;