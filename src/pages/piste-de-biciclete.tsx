import * as React from 'react';
import TimisoaraMap from '../components/common/TimisoaraMap';
import BikeLane from '../components/BikeLanesPage/BikeLane';
import BIKE_LANES from '../content/bikeLanes';
import { Helmet } from 'react-helmet';

const pageStyles = {
  color: '#232129',
  padding: '96px',
  fontFamily: '-apple-system, Roboto, sans-serif, serif',
};
const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
  maxWidth: 320,
};

const BikeLanesPage = () => {
  return (
    <main style={pageStyles}>
      <Helmet title="Starea pistelor de biciclete" defer={false} />
      <h1 style={headingStyles}>Starea pistelor de biciclete</h1>
      <TimisoaraMap>
        {BIKE_LANES.map((l) => (
          <BikeLane key={l.id} bikeLane={l} />
        ))}
      </TimisoaraMap>
    </main>
  );
};

export default BikeLanesPage;
