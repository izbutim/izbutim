import {
  HistoricBuildingModel,
  HistoricBuildingState,
} from '../typings/HistoricBuildingModel';

const HISTORIC_BUILDINGS: HistoricBuildingModel[] = [
  {
    id: 1,
    perimeter: [
      [45.7565, 21.229],
      [45.7567, 21.23],
      [45.757, 21.229],
    ],
    name: 'Test',
    state: HistoricBuildingState.GOOD,
    observations: 'Test',
  },
];

export default HISTORIC_BUILDINGS;
