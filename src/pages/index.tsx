import React from 'react';
import { Helmet } from 'react-helmet';
import IndexPageCard from '../components/IndexPage/IndexPageCard';
import Page from '../components/layout';
import * as styles from './IndexPage.module.css';
import { StaticImage } from 'gatsby-plugin-image';

const IndexPage = () => {
  return (
    <Page title="">
      <section className={styles.container}>
        <h4>Investim în Zile Bune și Ușoare pentru Timișoreni!</h4>
        <Helmet
          title="Izbutim"
          defer={false}
          meta={[
            {
              name: 'google-site-verification',
              content: 'lBlauKSx59Z-pjYh5WnfjcdKKPsAGoC5XQJi9iuQb9E',
            },
          ]}
        />
        <section className={styles.cardContainer}>
          <IndexPageCard
            title="Starea pistelor de biciclete"
            to="/piste-de-biciclete"
            image={
              <StaticImage
                src="../images/piste.webp"
                alt="Starea pistelor de biciclete"
                className={styles.cardImage}
              />
            }
          />
          <IndexPageCard
            title="Reabilitarea clădirilor istorice"
            to="/cladiri-istorice"
            image={
              <StaticImage
                src="../images/muhle.webp"
                alt="Reabilitarea clădirilor istorice"
                className={styles.cardImage}
              />
            }
          />
          <IndexPageCard
            title="Transportul în comun"
            to="/transport-in-comun"
            image={
              <StaticImage
                src="../images/tram.png"
                alt="Transportul în comun"
                className={styles.cardImage}
              />
            }
          />
          <IndexPageCard
            title="Stații de încărcare autovehicule electrice"
            to="/statii-de-incarcare"
            image={
              <StaticImage
                src="../images/statii.webp"
                alt="Stații de încărcare autovehicule electrice"
                className={styles.cardImage}
              />
            }
          />
          <IndexPageCard
            title="Primăria"
            to="/primaria"
            image={
              <StaticImage
                src="../images/pmt.webp"
                alt="Primăria"
                className={styles.cardImage}
              />
            }
          />
          <IndexPageCard
            title="Consiliul Local"
            to="/consiliul-local"
            image={
              <StaticImage
                src="../images/pmt.webp"
                alt="Consiliul Local"
                className={styles.cardImage}
              />
            }
          />
          <IndexPageCard
            title="Societăți comerciale subordonate Consiliului Local"
            to="/societati-subordonate"
            image={
              <StaticImage
                src="../images/pmt.webp"
                alt="Societăți subordonate"
                className={styles.cardImage}
              />
            }
          />
          <IndexPageCard
            title="Consiliul Județean"
            to="/consiliul-judetean"
            image={
              <StaticImage
                src="../images/logo.png"
                alt="Consiliul Județean"
                className={styles.cardImage}
              />
            }
          />
          <IndexPageCard
            title="Presa locală"
            to="/presa-locala"
            image={
              <StaticImage
                src="../images/logo.png"
                alt="Presa locală"
                className={styles.cardImage}
              />
            }
          />
          <IndexPageCard
            title="Recensământ 2021"
            to="/recensamant-2021"
            image={
              <StaticImage
                src="../images/recensamant.png"
                alt="Recensământ 2021"
                className={styles.cardImage}
              />
            }
          />
          <IndexPageCard
            title="Alegeri 2020"
            to="/alegeri-2020"
            image={
              <StaticImage
                src="../images/alegeri2020.png"
                alt="Alegeri 2020"
                className={styles.cardImage}
              />
            }
          />
          <IndexPageCard
            title="Alegeri 2024"
            to="/alegeri-2024"
            image={
              <StaticImage
                src="../images/logo.png"
                alt="Alegeri 2024"
                className={styles.cardImage}
              />
            }
          />
        </section>
      </section>
    </Page>
  );
};

export default IndexPage;
