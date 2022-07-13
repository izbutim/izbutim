import { BikeLaneModel, BikeLaneState } from '../typings/BikeLaneModel';

const BIKE_LANES: BikeLaneModel[] = [
  {
    id: 1,
    path: [
      [45.7493, 21.2358],
      [45.7501, 21.235],
      [45.7508, 21.2344],
      [45.7511, 21.2342],
      [45.7528, 21.2328],
    ],
    location: 'Pasajul Michelangelo - Parcul C.D. Loga',
    state: BikeLaneState.GOOD,
    observations: '',
  },
];

export default BIKE_LANES;
