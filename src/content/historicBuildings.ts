import {
  HistoricBuildingModel,
  HistoricBuildingState,
} from '../typings/HistoricBuildingModel';

const HISTORIC_BUILDINGS: HistoricBuildingModel[] = [
  {
    id: 1,
    perimeter: [
      [45.74438, 21.2262],
      [45.74435, 21.22645],
      [45.74417, 21.22642],
      [45.7442, 21.22616],
    ],
    name: 'Casa Mühle',
    state: HistoricBuildingState.UNDER_RENOVATION,
    observations: '',
  },
  {
    id: 2,
    perimeter: [
      [45.75411, 21.22527],
      [45.75454, 21.22512],
      [45.75479, 21.22514],
      [45.75478, 21.22561],
      [45.75414, 21.22553],
    ],
    name: 'Hotel Timișoara',
    state: HistoricBuildingState.RENOVATED,
    observations: '',
  },
  {
    id: 3,
    perimeter: [
      [45.74796, 21.20912],
      [45.74779, 21.2086],
      [45.7475, 21.2089],
      [45.74766, 21.20933],
    ],
    name: 'Palatul Gemeinhardt',
    state: HistoricBuildingState.DEGRADATION,
    observations: '',
  },
  {
    id: 4,
    perimeter: [
      [45.75218, 21.22266],
      [45.75259, 21.22195],
      [45.75271, 21.22186],
      [45.75286, 21.22189],
      [45.75301, 21.22202],
      [45.75311, 21.22252],
      [45.75302, 21.22257],
      [45.75282, 21.22224],
      [45.75273, 21.2222],
      [45.75228, 21.22276],
    ],
    name: 'Liceul Teologic Romano-Catolic Gerhardinum',
    state: HistoricBuildingState.DEGRADATION,
    observations: '',
  },
  {
    id: 5,
    perimeter: [
      [45.75177, 21.22344],
      [45.75187, 21.22353],
      [45.75179, 21.22373],
      [45.75198, 21.22394],
      [45.75196, 21.22402],
      [45.75165, 21.22371],
    ],
    name: 'Casa Politehnicii nr. 1',
    state: HistoricBuildingState.RENOVATED,
    observations: '',
  },
  {
    id: 6,
    perimeter: [
      [45.74943, 21.21922],
      [45.74933, 21.21957],
      [45.74914, 21.21962],
      [45.74894, 21.21928],
      [45.74906, 21.21912],
      [45.74926, 21.21912],
    ],
    name: 'Palatul Apelor',
    state: HistoricBuildingState.RENOVATED,
    observations: '',
  },
  {
    id: 7,
    perimeter: [
      [45.75663, 21.22598],
      [45.75662, 21.22633],
      [45.75629, 21.22628],
      [45.75628, 21.22594],
    ],
    name: 'Sinagoga din Cetate',
    state: HistoricBuildingState.RENOVATED,
    observations: 'Renovată în 2022',
  },
  {
    id: 8,
    perimeter: [
      [45.75611, 21.22576],
      [45.75765, 21.22597],
      [45.75769, 21.22514],
      [45.75613, 21.22494],
    ],
    name: 'Spitalul Militar',
    state: HistoricBuildingState.RENOVATED,
    observations: '',
  },
  {
    id: 9,
    perimeter: [
      [45.75902, 21.22743],
      [45.75851, 21.22737],
      [45.75847, 21.22816],
      [45.75899, 21.2282],
    ],
    name: 'Cazarma U',
    state: HistoricBuildingState.DEGRADATION,
    observations: '',
  },
];

export default HISTORIC_BUILDINGS;
