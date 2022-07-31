import {
  TransportRouteModel,
  TransportRouteType,
} from '../typings/TransportRouteModel';

const TRANSPORT_ROUTES: TransportRouteModel[] = [
  {
    id: 'Tramvaiul 1',
    path: [
      [45.75047, 21.20733],
      [45.75036, 21.20775],
      [45.7453, 21.21113],
      [45.74508, 21.2114],
      [45.74509, 21.21164],
      [45.74636, 21.21551],
      [45.74665, 21.21635],
      [45.74679, 21.21663],
      [45.7477, 21.21745],
      [45.7482, 21.21812],
      [45.74875, 21.21915],
      [45.74955, 21.22065],
      [45.75058, 21.22254],
      [45.75118, 21.22364],
      [45.75132, 21.22374],
      [45.75149, 21.22373],
      [45.75249, 21.22187],
      [45.7527, 21.22156],
      [45.75303, 21.22136],
      [45.75329, 21.22133],
      [45.75414, 21.22138],
      [45.75447, 21.22135],
      [45.75501, 21.22122],
      [45.75549, 21.22115],
      [45.75613, 21.2212],
      [45.75635, 21.22127],
      [45.75641, 21.22147],
      [45.75633, 21.22327],
      [45.75626, 21.22432],
      [45.75612, 21.22485],
      [45.75608, 21.22586],
      [45.75602, 21.2267],
      [45.75591, 21.22863],
      [45.75596, 21.22912],
      [45.75584, 21.23108],
      [45.75575, 21.23255],
      [45.75562, 21.23387],
      [45.7556, 21.23682],
      [45.75569, 21.23839],
      [45.75593, 21.23989],
      [45.75623, 21.24168],
      [45.75652, 21.24328],
      [45.75682, 21.24494],
      [45.75686, 21.24531],
      [45.7576, 21.24711],
      [45.75767, 21.24764],
      [45.75754, 21.24918],
      [45.75763, 21.24936],
      [45.75909, 21.24961],
      [45.76013, 21.24887],
      [45.76058, 21.24858],
      [45.76157, 21.24813],
      [45.7628, 21.24759],
      [45.7637, 21.24712],
      [45.76418, 21.24679],
      [45.76522, 21.24576],
      [45.76605, 21.24492],
      [45.76638, 21.24477],
      [45.76659, 21.24492],
      [45.77069, 21.25309],
      [45.77169, 21.25518],
      [45.77184, 21.25771],
      [45.77193, 21.25977],
      [45.77168, 21.26026],
      [45.7674, 21.26052],
      [45.76515, 21.2606],
      [45.76409, 21.26078],
      [45.76317, 21.26083],
      [45.7628, 21.26081],
      [45.76221, 21.26044],
      [45.76121, 21.25978],
      [45.76043, 21.25926],
      [45.75977, 21.2587],
      [45.75922, 21.25809],
      [45.75794, 21.25658],
      [45.75755, 21.2561],
      [45.75693, 21.25561],
      [45.7569, 21.2551],
      [45.75729, 21.25152],
      [45.75754, 21.24924],
    ],
    type: TransportRouteType.TRAM,
    color: '#2d3193',
    stops: [
      { location: [45.75049, 21.20733], name: 'Gara de Nord' },
      { location: [45.74509, 21.21142], name: 'Regele Carol' },
      { location: [45.74642, 21.21565], name: 'Piața Mocioni' },
      { location: [45.74865, 21.21891], name: 'Piața Maria' },
      { location: [45.75139, 21.22375], name: 'Catedrală' },
      { location: [45.75517, 21.22118], name: 'Spitalul de copii' },
      { location: [45.75636, 21.22301], name: 'Piața 700' },
      { location: [45.75603, 21.22656], name: 'Piața Libertății' },
      { location: [45.75565, 21.23372], name: 'Continental' },
      { location: [45.7557, 21.23843], name: 'Prefectură' },
      { location: [45.75678, 21.24472], name: '3 August 1919' },
      { location: [45.75754, 21.24926], name: 'Piața Traian' },
      { location: [45.76264, 21.24766], name: 'Badea Cârțan' },
      { location: [45.76639, 21.24477], name: 'Gara de Est' },
      { location: [45.77011, 21.25195], name: 'Arena Electrica' },
      { location: [45.77174, 21.25594], name: 'UMT' },
      { location: [45.77192, 21.25966], name: 'Stația Meteo' },
      { location: [45.7622, 21.26044], name: 'Victor Babeș' },
      { location: [45.76547, 21.2606], name: 'Pța. V. Economu' },
      { location: [45.7622, 21.26044], name: 'Lalelelor' },
      { location: [45.75936, 21.25824], name: 'Sarmisegetuza' },
      { location: [45.75695, 21.25555], name: 'P. Turcesc' },
    ],
  },
];

export default TRANSPORT_ROUTES;
