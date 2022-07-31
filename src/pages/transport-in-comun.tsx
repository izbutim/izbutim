import * as React from 'react';
import Page from '../components/layout';
import TimisoaraMap from '../components/common/TimisoaraMap';
import { useMapEvents } from 'react-leaflet';
import { LatLng } from 'leaflet';
import { generateHoneycombCoordinates } from '../components/PublicTransportPage/honeycomb';
import Hexagon from '../components/PublicTransportPage/Hexagon';
import TRANSPORT_ROUTES from '../content/transportRoutes';
import TransportRoute from '../components/PublicTransportPage/TransportRoute';

type LocatorProps = {
  consumer: (latLng: LatLng) => void;
};

const alertLatLngArray = (arr: LatLng[]) => {
  const pathArr = arr.map((l) => `[${l.lat.toFixed(5)}, ${l.lng.toFixed(5)}]`);
  alert(`path: [${pathArr}]`);
};

const Locator = ({ consumer }: LocatorProps) => {
  useMapEvents({
    click(e) {
      consumer(e.latlng);
    },
  });

  return null;
};

const PublicTransportPage = () => {
  const [usingLocator, setUsingLocator] = React.useState(false);
  const [showHoneycomb, setShowHoneycomb] = React.useState(true);
  const [path, setPath] = React.useState<LatLng[]>([]);

  const toggleHoneycomb = () => {
    setShowHoneycomb((prevState) => !prevState);
  };

  const handleLocatorClick = () => {
    if (usingLocator) {
      // We don't want the last element because that's the place of the locator button (overlapping).
      alertLatLngArray(path.slice(0, -1));
    }

    setUsingLocator((prevState) => !prevState);
    setPath([]);
  };

  const locatorConsumer = (latLng: LatLng) => {
    setPath((prevState) => [...prevState, latLng]);
  };

  return (
    <Page title="Transportul în comun">
      <TimisoaraMap>
        {showHoneycomb &&
          generateHoneycombCoordinates(45.78487, 21.1742, 80, 40).map(
            (h, i) => <Hexagon key={i} startLat={h.lat} startLng={h.lng} />
          )}
        {TRANSPORT_ROUTES.map((r) => (
          <TransportRoute key={r.id} route={r} />
        ))}
        <div className="leaflet-bottom leaflet-left">
          <div className="leaflet-control leaflet-bar">
            <button onClick={toggleHoneycomb}>
              {showHoneycomb ? 'Ascunde' : 'Arată'} celule
            </button>
            <button onClick={handleLocatorClick}>
              {usingLocator ? 'Finalizează' : 'Alege rută'}
            </button>
          </div>
        </div>
        {usingLocator && <Locator consumer={locatorConsumer} />}
      </TimisoaraMap>
    </Page>
  );
};

export default PublicTransportPage;
