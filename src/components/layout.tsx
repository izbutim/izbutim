import React, { ReactNode } from 'react';
import '../global.css';
import * as styles from './PageLayout.module.css';

type Props = {
  children: ReactNode;
};

const PageLayout = (props: Props) => {
  return (
    <main>
      <header className={styles.header}>
        <h1>Izbutim</h1>
      </header>
      {props.children}
    </main>
  );
};

export default PageLayout;
