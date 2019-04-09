import React from 'react';
import SEO from '../components/seo';

import Layout from '../components/Layout';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';

const NotFoundPage = () => (
    <>
        <SEO title="404: Not found" />
        <h1>NOT FOUND</h1>
        <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    </>
);

export default NotFoundPage;
