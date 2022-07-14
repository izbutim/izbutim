import * as React from 'react';
import PageLayout from '../components/layout';
import TimisoaraMap from '../components/common/TimisoaraMap';
import HISTORIC_BUILDINGS from '../content/historicBuildings';
import HistoricBuilding from '../components/HistoricBuildingsPage/HistoricBuilding';
import { Helmet } from 'react-helmet';
import { LatLng } from 'leaflet';
import { useMapEvents } from 'react-leaflet';

const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
};

type LocatorProps = {
  consumer: (latLng: LatLng) => void;
};

const alertLatLngArray = (arr: LatLng[]) => {
  const pathArr = arr.map((l) => `[${l.lat.toFixed(5)}, ${l.lng.toFixed(5)}]`);
  alert(`perimeter: [${pathArr}]`);
};

const Locator = ({ consumer }: LocatorProps) => {
  useMapEvents({
    click(e) {
      consumer(e.latlng);
    },
  });

  return null;
};

const HistoricBuildingsPage = () => {
  const [usingLocator, setUsingLocator] = React.useState(false);
  const [perimeter, setPerimeter] = React.useState<LatLng[]>([]);

  const handleLocatorClick = () => {
    if (usingLocator) {
      // We don't want the last element because that's the place of the locator button (overlapping).
      alertLatLngArray(perimeter.slice(0, -1));
    }

    setUsingLocator((prevState) => !prevState);
    setPerimeter([]);
  };

  const locatorConsumer = (latLng: LatLng) => {
    setPerimeter((prevState) => [...prevState, latLng]);
  };

  return (
    <PageLayout>
      <Helmet
        title="Izbutim | Reabilitarea clădirilor istorice"
        defer={false}
      />
      <h1 style={headingStyles}>Reabilitarea clădirilor istorice</h1>
      <TimisoaraMap>
        {HISTORIC_BUILDINGS.map((b) => (
          <HistoricBuilding key={b.id} building={b} />
        ))}
        <div className="leaflet-bottom leaflet-left">
          <div className="leaflet-control leaflet-bar">
            <button onClick={handleLocatorClick}>
              {usingLocator ? 'Finalizează' : 'Alege arie'}
            </button>
          </div>
        </div>
        {usingLocator && <Locator consumer={locatorConsumer} />}
      </TimisoaraMap>
    </PageLayout>
  );
};

export default HistoricBuildingsPage;
