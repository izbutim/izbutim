import { LatLngExpression } from 'leaflet';

export type ChargingStationModel = {
  id: number;
  position: LatLngExpression;
  location: string;
  capacity: number;
  observations: string;
};
