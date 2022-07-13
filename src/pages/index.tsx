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
        <section className={styles.cardContainer}>
          <IndexPageCard
            title="Starea pistelor de biciclete"
            to="/piste-de-biciclete"
            imageUrl=""
            imageAlt="Starea pistelor de biciclete"
          />
          <IndexPageCard
            title="Reabilitarea clădirilor istorice"
            to="/cladiri-istorice"
            imageUrl=""
            imageAlt="Reabilitarea clădirilor istorice"
          />
          <IndexPageCard
            title="Transportul în comun"
            to="/transport-in-comun"
            imageUrl=""
            imageAlt="Transportul în comun"
          />
          <IndexPageCard
            title="Primăria"
            to="/primaria"
            imageUrl=""
            imageAlt="Primăria"
          />
          <IndexPageCard
            title="Consiliul Local"
            to="/consiliul-local"
            imageUrl=""
            imageAlt="Consiliul Local"
          />
          <IndexPageCard
            title="Consiliul Județean"
            to="/consiliul-judetean"
            imageUrl=""
            imageAlt="Consiliul Județean"
          />
        </section>
      </section>
    </PageLayout>
  );
};

export default IndexPage;
