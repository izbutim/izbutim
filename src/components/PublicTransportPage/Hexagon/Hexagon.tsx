import { LatLngExpression } from 'leaflet';
import { Polygon } from 'react-leaflet';
import React from 'react';
import { L, L_0_5, L_1_5, L_SQRT_3, L_SQRT_3_DIV_2 } from '../honeycomb';

type HexagonProps = {
  startLat: number;
  startLng: number;
};

export const Hexagon = ({ startLat, startLng }: HexagonProps) => {
  const positions = [
    [startLat, startLng],
    [startLat, startLng + L],
    [startLat - L_SQRT_3_DIV_2, startLng + L_1_5],
    [startLat - L_SQRT_3, startLng + L],
    [startLat - L_SQRT_3, startLng],
    [startLat - L_SQRT_3_DIV_2, startLng - L_0_5],
  ] as LatLngExpression[];

  return (
    <Polygon
      pathOptions={{ color: '#ffffff' }}
      positions={positions}
      fillColor="#ffffff"
      stroke={false}
      fillOpacity={0.5}
    />
  );
};

export default Hexagon;
