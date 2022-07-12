import React from 'react';
import { MapContainer, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const TimisoaraMap = () => {
  return (
    <MapContainer
      center={[45.7565, 21.229]}
      zoom={15}
      scrollWheelZoom={false}
      style={{ minHeight: '100vh', minWidth: '100vw' }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
    </MapContainer>
  );
};

export default TimisoaraMap;
