import * as React from 'react';
import Page from '../components/layout';
import TimisoaraMap from '../components/common/TimisoaraMap';
import HISTORIC_BUILDINGS from '../content/historicBuildings';
import HistoricBuilding from '../components/HistoricBuildingsPage/HistoricBuilding';
import { LatLng } from 'leaflet';
import { useMapEvents } from 'react-leaflet';

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
    <Page title="Reabilitarea clădirilor istorice">
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
    </Page>
  );
};

export default HistoricBuildingsPage;
