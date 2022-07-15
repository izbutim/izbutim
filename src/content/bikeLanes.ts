import { BikeLaneModel, BikeLaneState } from '../typings/BikeLaneModel';

const BIKE_LANES: BikeLaneModel[] = [
  {
    id: 1,
    path: [
      [45.7493, 21.2358],
      [45.7501, 21.235],
      [45.7511, 21.2343],
      [45.7528, 21.2328],
    ],
    location: 'Pasajul Michelangelo - Bd. M. Eminescu',
    state: BikeLaneState.GOOD,
    observations: '',
  },
  {
    id: 2,
    path: [
      [45.7528, 21.2328],
      [45.7531, 21.2327],
      [45.7535, 21.2328],
      [45.7548, 21.2334],
      [45.7555, 21.2338],
    ],
    location: 'Parcul C. D. Loga - Bd. Revoluției din 1989',
    state: BikeLaneState.GOOD,
    observations: '',
  },
  {
    id: 3,
    path: [
      [45.7558, 21.2339],
      [45.7561, 21.2339],
      [45.7564, 21.2339],
      [45.757, 21.234],
      [45.7571, 21.234],
      [45.7573, 21.2342],
      [45.7575, 21.2343],
      [45.7576, 21.2343],
      [45.7578, 21.2341],
      [45.7579, 21.234],
    ],
    location: 'Bd. Revoluției din 1989 - Bd. Take Ionescu',
    state: BikeLaneState.PROPOSED,
    observations: '',
  },
  {
    id: 4,
    path: [
      [45.7587, 21.2326],
      [45.7591, 21.2327],
      [45.7606, 21.2328],
      [45.7619, 21.233],
      [45.7631, 21.2331],
      [45.7631, 21.2333],
    ],
    location: 'Pct. Cardinale - Pasajul Popa Șapcă',
    state: BikeLaneState.NEEDS_MARKINGS,
    observations: '',
  },
  {
    id: 5,
    path: [
      [45.76326, 21.23327],
      [45.76324, 21.23312],
      [45.76342, 21.23312],
      [45.76359, 21.2331],
      [45.76379, 21.23305],
      [45.76394, 21.23295],
      [45.76406, 21.23285],
      [45.76423, 21.23272],
      [45.76458, 21.23244],
      [45.76465, 21.23239],
      [45.76475, 21.23243],
      [45.7648, 21.2326],
    ],
    location: 'Pasajul Popa Șapcă - Gazprom Antenei',
    state: BikeLaneState.NEEDS_MARKINGS,
    observations: '',
  },
  {
    id: 6,
    path: [
      [45.7631, 21.2328],
      [45.7631, 21.2329],
      [45.7619, 21.2328],
      [45.7606, 21.2326],
      [45.7591, 21.2325],
      [45.7587, 21.2324],
    ],
    location: 'Pasajul Popa Șapcă - Pct. Cardinale',
    state: BikeLaneState.NEEDS_MARKINGS,
    observations: '',
  },
  {
    id: 7,
    path: [
      [45.76222, 21.22627],
      [45.76194, 21.22645],
      [45.76119, 21.22683],
      [45.76053, 21.22721],
      [45.76018, 21.2274],
      [45.75983, 21.22761],
      [45.7597, 21.22752],
      [45.75961, 21.22747],
      [45.75943, 21.22747],
      [45.75926, 21.22726],
    ],
    location: 'Str. Ioan Zaicu - Pța. Mărăști',
    state: BikeLaneState.GOOD,
    observations: '',
  },
  {
    id: 8,
    path: [
      [45.7485, 21.2353],
      [45.748, 21.2329],
      [45.7478, 21.2313],
      [45.7476, 21.2293],
      [45.7476, 21.2292],
      [45.7476, 21.2272],
      [45.7477, 21.2256],
    ],
    location: 'Bd. M. Viteazu - Pasajul Michelangelo',
    state: BikeLaneState.GOOD,
    observations: '',
  },
  {
    id: 9,
    path: [
      [45.748, 21.2257],
      [45.7479, 21.2269],
      [45.7478, 21.2285],
      [45.7479, 21.2296],
      [45.748, 21.2304],
      [45.7481, 21.2307],
      [45.7481, 21.2312],
      [45.7482, 21.2321],
      [45.7484, 21.2327],
      [45.7485, 21.2334],
      [45.7487, 21.2344],
      [45.7488, 21.2348],
      [45.749, 21.2353],
    ],
    location: 'Pasajul Michelangelo - Bd. M. Viteazu',
    state: BikeLaneState.GOOD,
    observations: '',
  },
  {
    id: 10,
    path: [
      [45.747, 21.2404],
      [45.7472, 21.2403],
      [45.7475, 21.2401],
      [45.7478, 21.2398],
      [45.748, 21.2396],
      [45.7482, 21.2392],
      [45.7484, 21.2389],
      [45.7487, 21.2384],
      [45.7489, 21.2378],
      [45.749, 21.2371],
      [45.7491, 21.2367],
      [45.7493, 21.2359],
    ],
    location: 'Bd. Eroilor de la Tisa - Pasajul Michelangelo',
    state: BikeLaneState.GOOD,
    observations: '',
  },
  {
    id: 11,
    path: [
      [45.7401, 21.2383],
      [45.7401, 21.2378],
      [45.7383, 21.2328],
      [45.7379, 21.2317],
      [45.7374, 21.2302],
      [45.7367, 21.2282],
      [45.7361, 21.2264],
      [45.735, 21.2235],
      [45.7347, 21.2228],
      [45.7344, 21.2217],
      [45.7342, 21.2208],
      [45.734, 21.2199],
      [45.7339, 21.219],
      [45.7334, 21.2154],
      [45.7334, 21.2151],
      [45.7335, 21.2134],
      [45.7336, 21.2113],
      [45.7338, 21.209],
    ],
    location: 'Eneas-Coresi',
    state: BikeLaneState.GOOD,
    observations: '',
  },
  {
    id: 12,
    path: [
      [45.7647, 21.2313],
      [45.7647, 21.2315],
      [45.7646, 21.2318],
      [45.7645, 21.2321],
      [45.7644, 21.2323],
      [45.7641, 21.2326],
      [45.7638, 21.2329],
      [45.7634, 21.233],
      [45.7632, 21.233],
      [45.7632, 21.2328],
    ],
    location: 'Pasajul Iulius Town - Pasajul Popa Șapca',
    state: BikeLaneState.NEEDS_MARKINGS,
    observations: '',
  },
  {
    id: 13,
    path: [
      [45.75791, 21.23401],
      [45.75802, 21.23379],
      [45.75822, 21.23346],
      [45.75825, 21.23326],
      [45.75832, 21.23303],
      [45.75842, 21.23275],
      [45.75847, 21.23264],
      [45.75864, 21.23259],
    ],
    location: 'Bastion - Pct. Cardinale',
    state: BikeLaneState.NEEDS_MARKINGS,
    observations: 'automobile pe trotuar',
  },
  {
    id: 14,
    path: [
      [45.75869, 21.23228],
      [45.75884, 21.23186],
      [45.75904, 21.2314],
      [45.7592, 21.23098],
      [45.75936, 21.23054],
      [45.7594, 21.23034],
      [45.75944, 21.22994],
      [45.75948, 21.22925],
      [45.75952, 21.22867],
      [45.75953, 21.22849],
      [45.75964, 21.22845],
      [45.75977, 21.22834],
      [45.75985, 21.22817],
      [45.75987, 21.22799],
      [45.75991, 21.22781],
    ],
    location: 'Pct. Cardinale - Pța. Mărăști',
    state: BikeLaneState.PROPOSED,
    observations: '',
  },
  {
    id: 15,
    path: [
      [45.7662, 21.2254],
      [45.7671, 21.2249],
      [45.7683, 21.2243],
    ],
    location: 'Iulius Town - Str. Timiș',
    state: BikeLaneState.PROPOSED,
    observations: '',
  },
  {
    id: 16,
    path: [
      [45.7685, 21.2242],
      [45.77, 21.2234],
    ],
    location: 'Str. Timiș - Str. Amurgului',
    state: BikeLaneState.PROPOSED,
    observations: '',
  },
  {
    id: 17,
    path: [
      [45.76242, 21.22641],
      [45.76319, 21.22595],
      [45.76344, 21.22586],
      [45.76356, 21.22623],
      [45.76375, 21.22655],
      [45.76399, 21.22673],
      [45.76418, 21.22681],
      [45.76445, 21.22677],
      [45.76453, 21.22681],
    ],
    location: 'Str. A. Demetriade - Iulius Town',
    state: BikeLaneState.GOOD,
    observations: '',
  },
  {
    id: 18,
    path: [
      [45.75764, 21.22602],
      [45.75607, 21.22582],
      [45.75531, 21.22572],
      [45.75416, 21.22559],
    ],
    location: 'Str. Mărășești',
    state: BikeLaneState.GOOD,
    observations: '',
  },
  {
    id: 19,
    path: [
      [45.75354, 21.22382],
      [45.75307, 21.22402],
      [45.75189, 21.22316],
    ],
    location: 'Str. Bd. Regele Ferdinand - Str. Piatra Craiului',
    state: BikeLaneState.GOOD,
    observations: '',
  },
  {
    id: 20,
    path: [
      [45.7535, 21.22372],
      [45.7532, 21.22386],
      [45.752, 21.22298],
    ],
    location: 'Bd. Republicii - Str. Piatra Craiului',
    state: BikeLaneState.GOOD,
    observations: '',
  },
  {
    id: 21,
    path: [
      [45.75399, 21.22509],
      [45.75393, 21.225],
      [45.75364, 21.22378],
    ],
    location: 'Pța. Victoriei - Str. Paris',
    state: BikeLaneState.GOOD,
    observations: '',
  },
  {
    id: 22,
    path: [
      [45.75101, 21.2249],
      [45.75094, 21.22496],
      [45.74952, 21.22543],
      [45.74894, 21.22564],
    ],
    location: 'Catedrala Mitropolitană - Podul A. Șaguna',
    state: BikeLaneState.GOOD,
    observations: '',
  },
  {
    id: 23,
    path: [
      [45.74891, 21.22565],
      [45.74846, 21.22552],
      [45.74842, 21.22546],
      [45.74808, 21.22536],
    ],
    location: 'Podul A. Șaguna - Bd. M. Viteazu',
    state: BikeLaneState.PROPOSED,
    observations: '',
  },
  {
    id: 24,
    path: [
      [45.74772, 21.22562],
      [45.74728, 21.22557],
      [45.74693, 21.22555],
      [45.74671, 21.22556],
      [45.74632, 21.22561],
      [45.74534, 21.22573],
      [45.74471, 21.22583],
    ],
    location: 'Fac. de Mecanică',
    state: BikeLaneState.GOOD,
    observations: '',
  },
  {
    id: 25,
    path: [
      [45.74536, 21.23574],
      [45.74517, 21.23451],
      [45.745, 21.23332],
      [45.74483, 21.23213],
      [45.74452, 21.22994],
      [45.74447, 21.22924],
      [45.74448, 21.2285],
      [45.74458, 21.22739],
      [45.74466, 21.2265],
      [45.74469, 21.22585],
    ],
    location: 'Bd. Dr. V. Babeș',
    state: BikeLaneState.NEEDS_RENOVATION,
    observations: '',
  },
  {
    id: 26,
    path: [
      [45.74453, 21.22588],
      [45.74452, 21.22649],
      [45.74448, 21.227],
      [45.74433, 21.22851],
      [45.74434, 21.22927],
      [45.74437, 21.22994],
      [45.74447, 21.23064],
      [45.7447, 21.23216],
      [45.74502, 21.23456],
      [45.74522, 21.23582],
    ],
    location: 'Bd. Dr. V. Babeș',
    state: BikeLaneState.NEEDS_RENOVATION,
    observations: '',
  },
  {
    id: 27,
    path: [
      [45.74541, 21.23601],
      [45.74551, 21.2364],
      [45.74584, 21.23737],
      [45.74638, 21.23897],
      [45.74683, 21.24025],
    ],
    location: 'Aleea F.C. Ripensia - Str. Cluj',
    state: BikeLaneState.GOOD,
    observations:
      'necesită mici renovări aproape de intersecția cu Aleea F.C. Ripensia',
  },
  {
    id: 28,
    path: [
      [45.76219, 21.24538],
      [45.76155, 21.24348],
      [45.76071, 21.24098],
      [45.7601, 21.23924],
      [45.75972, 21.2382],
      [45.75902, 21.23613],
      [45.7586, 21.23494],
      [45.75835, 21.23421],
      [45.75823, 21.23386],
      [45.75822, 21.23354],
    ],
    location: 'str. Enric Baader - Pct. Cardinale',
    state: BikeLaneState.NEEDS_RENOVATION,
    observations: '',
  },
  {
    id: 29,
    path: [
      [45.75795, 21.23394],
      [45.75823, 21.23488],
      [45.75874, 21.23633],
      [45.75915, 21.23757],
    ],
    location: 'Bastion - Str. N. Filipescu',
    state: BikeLaneState.GOOD,
    observations: '',
  },
  {
    id: 30,
    path: [
      [45.7651, 21.23212],
      [45.76503, 21.23229],
      [45.76503, 21.23287],
      [45.76495, 21.23341],
      [45.76485, 21.23406],
      [45.76472, 21.23465],
      [45.76457, 21.23504],
      [45.76446, 21.23545],
      [45.76432, 21.23595],
      [45.7642, 21.23635],
      [45.76408, 21.23683],
      [45.76394, 21.23729],
      [45.76391, 21.23748],
    ],
    location: 'Str. A. Demetriade - Gazprom Antenei',
    state: BikeLaneState.GOOD,
    observations: '',
  },
  {
    id: 31,
    path: [
      [45.765, 21.23999],
      [45.76456, 21.23927],
      [45.76424, 21.23859],
      [45.76408, 21.23814],
      [45.76391, 21.23765],
      [45.76391, 21.23753],
    ],
    location: 'Str. A. Demetriade',
    state: BikeLaneState.PROPOSED,
    observations: '',
  },
  {
    id: 32,
    path: [
      [45.76493, 21.24013],
      [45.76477, 21.24028],
      [45.76453, 21.24059],
      [45.76436, 21.24087],
      [45.76296, 21.24381],
    ],
    location: 'Str. Enric Baader',
    state: BikeLaneState.PROPOSED,
    observations: '',
  },
  {
    id: 33,
    path: [
      [45.75993, 21.22783],
      [45.76096, 21.22726],
      [45.76233, 21.22647],
    ],
    location: 'Pța. Mărăști - Str. A. Demetriade',
    state: BikeLaneState.PROPOSED,
    observations: '',
  },
  {
    id: 34,
    path: [
      [45.76455, 21.22685],
      [45.76457, 21.22751],
      [45.7646, 21.22811],
      [45.76462, 21.22901],
      [45.76467, 21.22972],
      [45.76469, 21.23033],
      [45.76475, 21.23132],
    ],
    location: 'Pasajul Iulius Town',
    state: BikeLaneState.PROPOSED,
    observations: '',
  },
];

export default BIKE_LANES;
