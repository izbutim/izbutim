import { LatLngExpression } from 'leaflet';

export enum TransportRouteType {
  TRAM = 'TRAM',
  TROLLEY = 'TROLLEY',
  BUS = 'BUS',
}

export type TransportRouteStop = {
  location: LatLngExpression;
  name: string;
};

export type TransportRouteModel = {
  id: string;
  path: LatLngExpression[];
  type: TransportRouteType;
  color: string;
  stops: TransportRouteStop[];
};
