'use client';

import { useEffect, useRef } from 'react';

declare global {
  interface Window {
    google: typeof google;
  }
}


export default function GoogleMap() {
  const mapRef = useRef<HTMLDivElement | null>(null);


  useEffect(() => {
    const loadGoogleMapsScript = (): Promise<void> => {
      return new Promise((resolve, reject) => {
        // If already loaded, skip
        if (window.google && window.google.maps) {
          resolve();
          return;
        }

        const script = document.createElement('script');
        script.src = `https://maps.googleapis.com/maps/api/js?key=${process.env.NEXT_PUBLIC_MAPS_API_KEY}&v=quarterly`;
        script.async = true;
        script.defer = true;

        script.onload = () => resolve();
        script.onerror = () => reject(new Error('Failed to load Google Maps'));

        document.head.appendChild(script);
      });
    };

    const initMap = async () => {
      try {
        await loadGoogleMapsScript();

        const { Map } =
          (await window.google.maps.importLibrary('maps')) as google.maps.MapsLibrary;

        new Map(mapRef.current as HTMLDivElement, {
          center: { lat: 59.9139, lng: 10.7522 }, // Oslo
          zoom: 12,
        });
      } catch (error) {
        console.error('Google Maps failed to load:', error);
      }
    };

    initMap();
  }, []);

  return (
    <div className="map_styles">
      <div
        ref={mapRef}
        style={{
          width: '100%',
          height: '500px',

        }}
      />
      <h3><em>Made with Google Maps API!</em></h3>
    </div>
  );
}