import { ChargingStationModel } from '../typings/ChargingStationModel';

const CHARGING_STATIONS: ChargingStationModel[] = [
  {
    id: 1,
    position: [45.74672, 21.22539],
    location: 'Facultatea de Mecanică',
    capacity: 4,
    observations: '',
  },
  {
    id: 2,
    position: [45.75513, 21.23312],
    location: 'Hotel Continental',
    capacity: -1,
    observations: '',
  },
  {
    id: 3,
    position: [45.76502, 21.22809],
    location: 'Parcare Iulius Town',
    capacity: -1,
    observations: '',
  },
];

export default CHARGING_STATIONS;
