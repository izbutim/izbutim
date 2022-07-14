import React, { ReactNode } from 'react';
import '../global.css';
import * as styles from './PageLayout.module.css';
import { StaticImage } from 'gatsby-plugin-image';
import { Helmet } from 'react-helmet';

type Props = {
  title: string;
  children?: ReactNode;
};

const Page = (props: Props) => {
  return (
    <>
      <Helmet title={`Izbutim | ${props.title}`} defer={false} />
      <header className={styles.header}>
        <h1 className={styles.title}>Izbutim!</h1>
        <div className={styles.headerFiller} />
        <h2 className={styles.subtitle}>{props.title}</h2>
      </header>
      <main className={styles.main}>
        {props.children ?? (
          <div className={styles.underConstruction}>Pagină în lucru</div>
        )}
      </main>
      <footer className={styles.footer}>
        <div>&copy; {new Date().getFullYear()} Izbutim</div>
        <div className={styles.filler} />
        <div>Contribuți pe:&nbsp;</div>
        <a href="https://github.com/izbutim/izbutim">
          <StaticImage
            src="../images/GitHub-Mark-Light-32px.png"
            alt="GitHub"
          />
        </a>
      </footer>
    </>
  );
};

export default Page;
