import { LatLngExpression } from 'leaflet';

export enum BikeLaneState {
  GOOD = 'GOOD',
  NEEDS_RENOVATION = 'NEEDS_RENOVATION',
  NEEDS_MARKINGS = 'NEEDS_MARKINGS',
  WANTED = 'WANTED',
}

export type BikeLaneModel = {
  id: number;
  path: LatLngExpression[];
  location: string;
  state: BikeLaneState;
  observations: string;
};

export const colorFromState = (state: BikeLaneState): string => {
  switch (state) {
    case BikeLaneState.GOOD:
      return '#00FF00';
    case BikeLaneState.NEEDS_RENOVATION:
      return '#FF8000';
    case BikeLaneState.NEEDS_MARKINGS:
      return '#FFFF00';
    default:
      return '#FF0000';
  }
};