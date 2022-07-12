import * as React from 'react';

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

const HistoricBuildingsPage = () => {
  return (
    <main style={pageStyles}>
      <title>Reabilitarea clădirilor istorice</title>
      <h1 style={headingStyles}>Reabilitarea clădirilor istorice</h1>
    </main>
  );
};

export default HistoricBuildingsPage;
