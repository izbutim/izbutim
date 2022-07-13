import * as React from 'react';
import TimisoaraMap from '../components/common/TimisoaraMap';
import BikeLane from '../components/BikeLanesPage/BikeLane';
import BIKE_LANES from '../content/bikeLanes';
import { Helmet } from 'react-helmet';
import PageLayout from '../components/layout';
import { useMapEvents } from 'react-leaflet';
import { LatLng } from 'leaflet';

const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
};

type LocatorProps = {
  consumer: (latLng: LatLng) => void;
};

const logLatLngArray = (arr: LatLng[]) => {
  alert(arr.map((l) => `[${l.lat.toFixed(4)}, ${l.lng.toFixed(4)}]`));
};

const Locator = ({ consumer }: LocatorProps) => {
  useMapEvents({
    click(e) {
      consumer(e.latlng);
    },
  });

  return null;
};

const BikeLanesPage = () => {
  const [usingLocator, setUsingLocator] = React.useState(false);
  const [path, setPath] = React.useState<LatLng[]>([]);

  const handleLocatorClick = () => {
    if (usingLocator) {
      // We don't want the last element because that's the place of the locator button (overlapping).
      logLatLngArray(path.slice(0, -1));
    }

    setUsingLocator((prevState) => !prevState);
    setPath([]);
  };

  const locatorConsumer = (latLng: LatLng) => {
    setPath((prevState) => [...prevState, latLng]);
  };

  return (
    <PageLayout>
      <Helmet title="Izbutim | Starea pistelor de biciclete" defer={false} />
      <h1 style={headingStyles}>Starea pistelor de biciclete</h1>
      <TimisoaraMap>
        {BIKE_LANES.map((l) => (
          <BikeLane key={l.id} bikeLane={l} />
        ))}
        <div className="leaflet-bottom leaflet-left">
          <div className="leaflet-control leaflet-bar">
            <button onClick={handleLocatorClick}>
              {usingLocator ? 'Locator On' : 'Locator Off'}
            </button>
          </div>
        </div>
        {usingLocator && <Locator consumer={locatorConsumer} />}
      </TimisoaraMap>
    </PageLayout>
  );
};

export default BikeLanesPage;
