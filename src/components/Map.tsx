import React, { useRef, useEffect, useState } from 'react';
import mapboxgl from 'mapbox-gl'
mapboxgl.accessToken = 'pk.eyJ1Ijoicm9iZXJ0c3RpcHAiLCJhIjoiY2wwc2licW1jMDFrYTNkbXVqZHJtNDl4ZiJ9.U9CB8Sx-I1rU2lwH_iXIqw';
import plane from '../assets/plane-icon.png'
import services from '../services'

export const MapComponent = () => {
  const mapContainer = useRef(null);
  const marker = useRef(null);
  const map = useRef(null);
  const [lng, setLng] = useState<number>(-70.9);
  const [lat, setLat] = useState<number>(42.35);
  const [zoom, setZoom] = useState<number>(9);

  useEffect(() => {
    if (map.current) return; // initialize map only once
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v12',
      center: [lng, lat],
      zoom: zoom
    });

    const el = document.createElement('div');
        el.className = 'marker';
        el.style.backgroundImage = `url(${plane})`;
        el.style.width = '50px'; // Set the icon size
        el.style.height = '50px';
        el.style.transform = 'rotate(90deg) scale(1.2)';

    marker.current = new mapboxgl.Marker(el,{rotation: 210})
      .setLngLat([lng, lat])
      .addTo(map.current);

  });



  useEffect(() => {
    const intervalId = setInterval(()=>{
      const { latitude, longitude } =  services.getLocation()
      setLng(longitude); setLat(latitude)
      map.current.flyTo({
        center: [longitude, latitude],
        zoom: zoom,
      });
      marker.current.setLngLat([longitude, latitude])
    },1000)
    
    return () => {
      clearInterval(intervalId)
    }
  }, [])
  

  
  return (
    <div style={{position: "relative"}}>
      <div className='sidebar'>
      Longitude: {lng} | Latitude: {lat} | Zoom: {zoom}
      </div>
      <div ref={mapContainer} className="map-container"></div>
    </div>
    
  )
}


