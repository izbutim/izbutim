import * as React from 'react';
import PageLayout from '../components/layout';
import TimisoaraMap from '../components/common/TimisoaraMap';
import HISTORIC_BUILDINGS from '../content/historicBuildings';
import HistoricBuilding from '../components/HistoricBuildingsPage/HistoricBuilding';
import { Helmet } from 'react-helmet';

const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
};

const HistoricBuildingsPage = () => {
  return (
    <PageLayout>
      <Helmet
        title="Izbutim | Reabilitarea clădirilor istorice"
        defer={false}
      />
      <h1 style={headingStyles}>Reabilitarea clădirilor istorice</h1>
      <TimisoaraMap>
        {HISTORIC_BUILDINGS.map((b) => (
          <HistoricBuilding key={b.id} historicBuilding={b} />
        ))}
      </TimisoaraMap>
    </PageLayout>
  );
};

export default HistoricBuildingsPage;
