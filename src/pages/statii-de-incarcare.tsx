import * as React from 'react';
import PageLayout from '../components/layout';
import { Helmet } from 'react-helmet';

const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
};

const ChargingStationsPage = () => {
  return (
    <PageLayout>
      <Helmet
        title="Izbutim | Stații de încărcare autovehicule electrice"
        defer={false}
      />
      <h1 style={headingStyles}>Stații de încărcare autovehicule electrice</h1>
    </PageLayout>
  );
};

export default ChargingStationsPage;
