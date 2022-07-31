import { LatLngLiteral } from 'leaflet';

export const SQRT_3 = Math.sqrt(3);
export const SQRT_3_DIV_2 = SQRT_3 / 2;
export const L = 0.001; // side length of a hexagon
export const L_SQRT_3 = L * SQRT_3;
export const L_SQRT_3_DIV_2 = L * SQRT_3_DIV_2;
export const L_0_5 = 0.5 * L;
export const L_1_5 = 1.5 * L;
export const L_3 = 3 * L;

const generateHexagonRowCoordinates = (
  startLng: number,
  lat: number,
  count: number
): LatLngLiteral[] => {
  return Array(count)
    .fill(1)
    .map((_, idx) => {
      return { lat: lat, lng: startLng + idx * L_3 };
    });
};

export const generateHoneycombCoordinates = (
  startLat: number,
  startLng: number,
  countLat: number,
  countLng: number
): LatLngLiteral[] => {
  return Array(countLat)
    .fill(1)
    .flatMap((_, idx) => {
      const rowLng = idx % 2 === 0 ? startLng : startLng + L_1_5;
      return generateHexagonRowCoordinates(
        rowLng,
        startLat - idx * L_SQRT_3_DIV_2,
        countLng
      );
    });
};
