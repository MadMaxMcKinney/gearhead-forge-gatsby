import React from 'react';
import SEO from '../components/seo';

import Layout from '../components/Layout';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import NewsGrid from '../components/NewsGrid';
import FeaturedBuild from '../components/FeaturedBuild';
import Footer from '../components/Footer';

import NewsGridItem from '../components/NewsGridItem';

const IndexPage = () => (
    <Layout>
        <SEO title="Home" keywords={[`car`, `hotrod`, `racing`]} />

        <Navbar />
        <Hero />
        <NewsGrid>
            <NewsGridItem
                date="March 30th"
                service="YouTube"
                title="Offroad Miata Kart"
                content="We are a group of enthusiasts passionately keeping the flame of V8’s and hot rodding alive by building uniquely aggressive cars and forging a lifestyle."
                readMoreLink="https://www.youtube.com/watch?v=FjBrz5H0MSc"
            />
            <NewsGridItem
                date="March 29th"
                service="Twitter"
                content="We are a group of enthusiasts passionately keeping the flame of V8’s and hot rodding alive by building uniquely aggressive cars and forging a lifestyle."
                readMoreLink="https://www.youtube.com/watch?v=FjBrz5H0MSc"
            />
            <NewsGridItem
                date="March 30th"
                service="YouTube"
                title="Offroad Miata Kart"
                content="We are a group of enthusiasts passionately keeping the flame of V8’s and hot rodding alive by building uniquely aggressive cars and forging a lifestyle."
                readMoreLink="https://www.youtube.com/watch?v=FjBrz5H0MSc"
            />
        </NewsGrid>
        <FeaturedBuild title="The Forged ST" subTitle="Latest Build" />
        <NewsGrid>
            <NewsGridItem
                date="March 30th"
                service="YouTube"
                title="Offroad Miata Kart"
                content="We are a group of enthusiasts passionately keeping the flame of V8’s and hot rodding alive by building uniquely aggressive cars and forging a lifestyle."
                readMoreLink="https://www.youtube.com/watch?v=FjBrz5H0MSc"
            />
            <NewsGridItem
                date="March 29th"
                service="Twitter"
                content="We are a group of enthusiasts passionately keeping the flame of V8’s and hot rodding alive by building uniquely aggressive cars and forging a lifestyle."
                readMoreLink="https://www.youtube.com/watch?v=FjBrz5H0MSc"
            />
            <NewsGridItem
                date="March 30th"
                service="YouTube"
                title="Offroad Miata Kart"
                content="We are a group of enthusiasts passionately keeping the flame of V8’s and hot rodding alive by building uniquely aggressive cars and forging a lifestyle."
                readMoreLink="https://www.youtube.com/watch?v=FjBrz5H0MSc"
            />
        </NewsGrid>
        <Footer />
    </Layout>
);

export default IndexPage;
