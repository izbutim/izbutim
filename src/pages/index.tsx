import * as React from 'react';
import { Helmet } from 'react-helmet';
import IndexPageCard from '../components/IndexPage/IndexPageCard';

const pageStyles = {
  color: '#232129',
  padding: 96,
  fontFamily: '-apple-system, Roboto, sans-serif, serif',
};

const IndexPage = () => {
  return (
    <main style={pageStyles}>
      <Helmet title="Izbutim" defer={false} />
      <h1>Izbutim</h1>
      <h2>Investim în Zile Bune și Ușoare pentru Timișoreni!</h2>
      <br />
      <IndexPageCard
        title="Starea pistelor de biciclete"
        to="/piste-de-biciclete"
      />
      <IndexPageCard
        title="Reabilitarea clădirilor istorice"
        to="/cladiri-istorice"
      />
      <IndexPageCard title="Transportul în comun" to="/transport-in-comun" />
      <IndexPageCard title="Primăria" to="/primaria" />
      <IndexPageCard title="Consiliul local" to="/consiliul-local" />
      <IndexPageCard title="Consiliul județean" to="/consiliul-judetean" />
    </main>
  );
};

export default IndexPage;
