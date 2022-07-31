import * as React from 'react';
import Page from '../components/layout';
import TimisoaraMap from '../components/common/TimisoaraMap';
import { useMapEvents } from 'react-leaflet';
import { LatLng } from 'leaflet';
import { generateHoneycombCoordinates } from '../components/PublicTransportPage/honeycomb';
import Hexagon from '../components/PublicTransportPage/Hexagon';

type LocatorProps = {
  consumer: (latLng: LatLng) => void;
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

  const toggleHoneycomb = () => {
    setShowHoneycomb((prevState) => !prevState);
  };

  const handleLocatorClick = () => {
    setUsingLocator(true);
  };

  const locatorConsumer = (l: LatLng) => {
    alert(`position: [${l.lat.toFixed(5)}, ${l.lng.toFixed(5)}]`);
    setUsingLocator(false);
  };

  return (
    <Page title="Transportul în comun">
      <TimisoaraMap>
        {showHoneycomb &&
          generateHoneycombCoordinates(45.78487, 21.1742, 80, 40).map(
            (h, i) => <Hexagon key={i} startLat={h.lat} startLng={h.lng} />
          )}
        <div className="leaflet-bottom leaflet-left">
          <div className="leaflet-control leaflet-bar">
            <button onClick={toggleHoneycomb}>
              {showHoneycomb ? 'Ascunde' : 'Arată'} celule
            </button>
            <button onClick={handleLocatorClick} disabled={usingLocator}>
              Alege punct
            </button>
          </div>
        </div>
        {usingLocator && <Locator consumer={locatorConsumer} />}
      </TimisoaraMap>
    </Page>
  );
};

export default PublicTransportPage;
