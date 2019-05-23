import React from 'react';
import SEO from '../components/seo';

import Layout from '../components/page-blocks/Layout';
import Navbar from '../components/page-blocks/Navbar';
import Hero from '../components/page-blocks/Hero';

const NotFoundPage = () => (
    <>
        <SEO title="404: Not found" />
        <h1>NOT FOUND</h1>
        <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    </>
);

export default NotFoundPage;
