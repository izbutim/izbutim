import { LatLngExpression } from 'leaflet';

export enum HistoricBuildingState {
  GOOD = 'GOOD',
  NEEDS_RENOVATION = 'NEEDS_RENOVATION',
  UNDER_RENOVATION = 'UNDER_RENOVATION',
}

export type HistoricBuildingModel = {
  id: number;
  perimeter: LatLngExpression[];
  name: string;
  state: HistoricBuildingState;
  observations: string;
};

export const buildingColorFromState = (
  state: HistoricBuildingState
): string => {
  switch (state) {
    case HistoricBuildingState.GOOD:
      return '#00FF00';
    case HistoricBuildingState.UNDER_RENOVATION:
      return '#0000FF';
    default:
      return '#FF0000';
  }
};
