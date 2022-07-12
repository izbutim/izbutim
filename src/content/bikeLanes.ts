import { BikeLaneModel, BikeLaneState } from '../typings/BikeLaneModel';

const BIKE_LANES: BikeLaneModel[] = [
  {
    id: 1,
    path: [
      [45.7565, 21.229],
      [45.757, 21.229],
    ],
    location: 'Test',
    state: BikeLaneState.GOOD,
    observations: 'Test',
  },
];

export default BIKE_LANES;
