import * as React from 'react';
import { Link } from 'gatsby';
import PageLayout from '../components/layout';
import { Helmet } from 'react-helmet';

const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
};

const paragraphStyles = {
  marginBottom: 48,
};

const NotFoundPage = () => {
  return (
    <PageLayout>
      <Helmet title="Izbutim | 404" defer={false} />
      <h1 style={headingStyles}>Această pagină nu există</h1>
      <p style={paragraphStyles}>
        <Link to="/">Acasă</Link>
      </p>
    </PageLayout>
  );
};

export default NotFoundPage;
