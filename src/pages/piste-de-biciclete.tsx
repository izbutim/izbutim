import * as React from 'react';
import TimisoaraMap from '../components/common/TimisoaraMap';
import BikeLane from '../components/BikeLanesPage/BikeLane';
import BIKE_LANES from '../content/bikeLanes';
import { Helmet } from 'react-helmet';
import PageLayout from '../components/layout';

const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
};

const BikeLanesPage = () => {
  return (
    <PageLayout>
      <Helmet title="Izbutim | Starea pistelor de biciclete" defer={false} />
      <h1 style={headingStyles}>Starea pistelor de biciclete</h1>
      <TimisoaraMap>
        {BIKE_LANES.map((l) => (
          <BikeLane key={l.id} bikeLane={l} />
        ))}
      </TimisoaraMap>
    </PageLayout>
  );
};

export default BikeLanesPage;
