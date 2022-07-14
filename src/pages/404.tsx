import * as React from 'react';
import { Link } from 'gatsby';
import Page from '../components/layout';

const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
};

const paragraphStyles = {
  marginBottom: 48,
};

const NotFoundPage = () => {
  return (
    <Page title="404">
      <h1 style={headingStyles}>Această pagină nu există</h1>
      <p style={paragraphStyles}>
        <Link to="/">Acasă</Link>
      </p>
    </Page>
  );
};

export default NotFoundPage;
