import * as React from 'react';
import Page from '../components/layout';
import TimisoaraMap from '../components/common/TimisoaraMap';
import CHARGING_STATIONS from '../content/chargingStations';
import ChargingStation from '../components/ChargingStationsPage/ChargingStation';
import { LatLng } from 'leaflet';
import { useMapEvents } from 'react-leaflet';

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

const ChargingStationsPage = () => {
  const [usingLocator, setUsingLocator] = React.useState(false);

  const handleLocatorClick = () => {
    setUsingLocator(true);
  };

  const locatorConsumer = (l: LatLng) => {
    alert(`position: [${l.lat.toFixed(5)}, ${l.lng.toFixed(5)}]`);
    setUsingLocator(false);
  };

  return (
    <Page title="Stații de încărcare autovehicule electrice">
      <TimisoaraMap>
        {CHARGING_STATIONS.map((s) => (
          <ChargingStation key={s.id} station={s} />
        ))}
        <div className="leaflet-bottom leaflet-left">
          <div className="leaflet-control leaflet-bar">
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

export default ChargingStationsPage;
