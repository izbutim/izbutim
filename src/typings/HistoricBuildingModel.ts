import { LatLngExpression } from 'leaflet';

export enum HistoricBuildingState {
  RENOVATED = 'RENOVATED',
  UNDER_RENOVATION = 'UNDER_RENOVATION',
  NEEDS_RENOVATION = 'NEEDS_RENOVATION',
  NOT_RECENTLY_RENOVATED = 'NOT_RECENTLY_RENOVATED',
  DEGRADATION = 'DEGRADATION',
}

export type HistoricBuildingModel = {
  id: number;
  perimeter: LatLngExpression[];
  name: string;
  state: HistoricBuildingState;
  lastRenovationYear: number;
  observations: string;
};

export const buildingColorFromState = (
  state: HistoricBuildingState
): string => {
  switch (state) {
    case HistoricBuildingState.RENOVATED:
      return '#00FF00';
    case HistoricBuildingState.UNDER_RENOVATION:
      return '#0000FF';
    case HistoricBuildingState.NEEDS_RENOVATION:
      return '#FFFF00';
    case HistoricBuildingState.NOT_RECENTLY_RENOVATED:
      return '#FF8000';
    default:
      return '#FF0000';
  }
};

export const buildingStateInRomanian = (
  state: HistoricBuildingState
): string => {
  switch (state) {
    case HistoricBuildingState.RENOVATED:
      return 'Reabilitată';
    case HistoricBuildingState.NEEDS_RENOVATION:
      return 'Necesită reabilitare';
    case HistoricBuildingState.UNDER_RENOVATION:
      return 'În curs de reabilitare';
    case HistoricBuildingState.NOT_RECENTLY_RENOVATED:
      return 'Nereabilitată recent';
    default:
      return 'Degradare';
  }
};
