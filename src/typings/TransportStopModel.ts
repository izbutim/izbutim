import { LatLngExpression } from 'leaflet';

export type TransportStopModel = {
  id: number;
  location: LatLngExpression;
  name: string;
};
