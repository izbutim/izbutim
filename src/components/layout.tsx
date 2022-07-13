import React, { ReactNode } from 'react';
import '../global.css';
import * as styles from './PageLayout.module.css';
import { StaticImage } from 'gatsby-plugin-image';

type Props = {
  children: ReactNode;
};

const PageLayout = (props: Props) => {
  return (
    <>
      <header className={styles.header}>
        <h1 className={styles.title}>Izbutim!</h1>
      </header>
      <main>{props.children}</main>
      <footer className={styles.footer}>
        <div>© {new Date().getFullYear()} Izbutim</div>
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

export default PageLayout;
