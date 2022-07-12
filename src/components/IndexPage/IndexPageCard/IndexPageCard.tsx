import * as styles from './IndexPageCard.module.css';
import React from 'react';
import { Link } from 'gatsby';

type Props = {
  title: string;
  to: string;
};

const IndexPageCard = ({ title, to }: Props) => {
  return (
    <div className={styles.card}>
      <Link to={to}>{title} </Link>
    </div>
  );
};

export default IndexPageCard;
