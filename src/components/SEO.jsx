// src/components/SEO.jsx
import { Helmet } from 'react-helmet-async';

const SEO = ({ title, description }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      {/* Optional: Add more meta tags */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      
    </Helmet>
  );
};

export default SEO;