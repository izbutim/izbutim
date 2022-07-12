import * as React from 'react';
import PageLayout from '../components/layout';

const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
  maxWidth: 320,
};

const HistoricBuildingsPage = () => {
  return (
    <PageLayout>
      <title>Consiliul județean</title>
      <h1 style={headingStyles}>Consiliul județean</h1>
    </PageLayout>
  );
};

export default HistoricBuildingsPage;
