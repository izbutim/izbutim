import * as styles from './IndexPageCard.module.css';
import React from 'react';
import { Link } from 'gatsby';

type Props = {
  title: string;
  to: string;
  imageUrl: string;
  imageAlt: string;
};

const IndexPageCard = ({ title, to, imageUrl, imageAlt }: Props) => {
  return (
    <div className={styles.card}>
      <Link to={to}>
        <div className={styles.cardImageContainer}>
          <img src={imageUrl} alt={imageAlt} className={styles.cardImage} />
        </div>
      </Link>
      <div className={styles.titleContainer}>{title}</div>
    </div>
  );
};

export default IndexPageCard;
