import * as styles from './IndexPageCard.module.css';
import React, { ReactNode } from 'react';
import { Link } from 'gatsby';

type Props = {
  title: string;
  to: string;
  image: ReactNode;
};

const IndexPageCard = ({ title, to, image }: Props) => {
  return (
    <div className={styles.card}>
      <Link to={to}>
        <div className={styles.cardImageContainer}>{image}</div>
      </Link>
      <div className={styles.titleContainer}>{title}</div>
    </div>
  );
};

export default IndexPageCard;
