import React, { ReactNode } from 'react';
import { MapContainer, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import * as styles from './TimisoaraMap.module.css';

type Props = {
  children?: ReactNode;
};

const TimisoaraMap = (props: Props) => {
  return typeof window !== 'undefined' ? (
    <MapContainer
      center={[45.7565, 21.229]}
      zoom={15}
      scrollWheelZoom={false}
      className={styles.map}
    >
      <TileLayer
        attribution='Izbutim | &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {props.children}
    </MapContainer>
  ) : null;
};

export default TimisoaraMap;
