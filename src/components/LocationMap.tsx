import React, { useEffect, useRef } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';

const LocationMap = () => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);

  useEffect(() => {
    if (!mapContainer.current) return;

    // Replace this with your actual Mapbox public token
    mapboxgl.accessToken = 'pk.YOUR_MAPBOX_PUBLIC_TOKEN';
    
    // Explicitly type the coordinates as [number, number]
    const coordinates: [number, number] = [36.97661590576172, -1.3647876977920532]; // Longitude, Latitude

    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/satellite-streets-v12', // Changed to satellite view
      center: coordinates,
      zoom: 14, // Reduced zoom level to show more area
      pitch: 45, // Added pitch for better area perspective
      bearing: -45, // Added bearing for better area view
    });

    // Add navigation controls
    map.current.addControl(new mapboxgl.NavigationControl(), 'top-right');

    // Add marker for the location
    new mapboxgl.Marker()
      .setLngLat(coordinates)
      .addTo(map.current);

    return () => {
      map.current?.remove();
    };
  }, []);

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="text-2xl font-bold">Location</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="w-full h-[400px] rounded-lg overflow-hidden">
          <div ref={mapContainer} className="w-full h-full" />
        </div>
      </CardContent>
    </Card>
  );
};

export default LocationMap;