import * as React from 'react';
import PageLayout from '../components/layout';
import { Helmet } from 'react-helmet';

const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
};

const HistoricBuildingsPage = () => {
  return (
    <PageLayout>
      <Helmet title="Izbutim | Consiliul Județean" defer={false} />
      <h1 style={headingStyles}>Consiliul Județean</h1>
    </PageLayout>
  );
};

export default HistoricBuildingsPage;
