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

const BikeLanesPage = () => {
  const [usingLocator, setUsingLocator] = React.useState(false);
  const [path, setPath] = React.useState<LatLng[]>([]);

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
              {usingLocator ? 'Finalizează' : 'Alege rută'}
            </button>
          </div>
        </div>
        {usingLocator && <Locator consumer={locatorConsumer} />}
      </TimisoaraMap>
    </PageLayout>
  );
};

export default BikeLanesPage;
