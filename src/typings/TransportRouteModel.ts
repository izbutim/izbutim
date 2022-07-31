import { LatLngExpression } from 'leaflet';

export enum TransportRouteType {
  TRAM = 'TRAM',
  TROLLEY = 'TROLLEY',
  BUS = 'BUS',
}

export type TransportRouteModel = {
  id: string;
  path: LatLngExpression[];
  type: TransportRouteType;
  color: string;
};
