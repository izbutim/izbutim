import React, { ReactNode } from 'react';
import '../global.css';
import * as styles from './PageLayout.module.css';

type Props = {
  children: ReactNode;
};

const PageLayout = (props: Props) => {
  return (
    <>
      <header className={styles.header}>
        <h1>Izbutim!</h1>
      </header>
      <main>{props.children}</main>
      <footer className={styles.footer}>
        © {new Date().getFullYear()} Izbutim
      </footer>
    </>
  );
};

export default PageLayout;
