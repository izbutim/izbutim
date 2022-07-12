import React from 'react';
import { Helmet } from 'react-helmet';
import IndexPageCard from '../components/IndexPage/IndexPageCard';
import PageLayout from '../components/layout';
import * as styles from './IndexPage.module.css';

const IndexPage = () => {
  return (
    <PageLayout>
      <section className={styles.container}>
        <h4>Investim în Zile Bune și Ușoare pentru Timișoreni!</h4>
        <Helmet title="Izbutim" defer={false} />
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
      </section>
    </PageLayout>
  );
};

export default IndexPage;
