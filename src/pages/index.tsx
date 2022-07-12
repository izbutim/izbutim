import * as React from 'react';
import { Link } from 'gatsby';
import { Helmet } from 'react-helmet';

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
      <p>
        <Link to="/piste-de-biciclete">Starea pistelor de biciclete</Link>
      </p>
      <p>
        <Link to="/cladiri-istorice">Reabilitarea clădirilor istorice</Link>
      </p>
      <p>
        <Link to="/transport-in-comun">Transport în comun</Link>
      </p>
      <p>
        <Link to="/primaria">Primăria</Link>
      </p>
      <p>
        <Link to="/consiliul-local">Consiliul local</Link>
      </p>
      <p>
        <Link to="/consiliul-judetean">Consiliul județean</Link>
      </p>
    </main>
  );
};

export default IndexPage;
