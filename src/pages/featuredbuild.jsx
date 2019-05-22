import React from 'react';
import SEO from '../components/seo';
import styled from 'styled-components';

import Layout, {LayoutContent} from '../components/Layout';
import Navbar from '../components/Navbar';
import HeroFeatured from '../components/HeroFeatured';
import ArticleBuildItem from '../components/ArticleBuildItem';
import Footer from '../components/Footer';

const FeaturedBuildPage = () => {
    return (
        <Layout>
            <SEO
                title="Featured Build - The Last ST"
                keywords={[`car`, `hotrod`, `racing`]}
            />

            <Navbar />
            <HeroFeatured title="The Last ST" />

            <LayoutContent>
                <BuildList>
                    <ArticleBuildItem />
                    <ArticleBuildItem />
                </BuildList>
            </LayoutContent>
            <Footer />
        </Layout>
    );
};

const BuildList = styled.div`
    max-width: 1100px;
    width: 100%;
    margin: 64px auto;
    padding: 0px 40px;
    display: grid;
    grid-auto-flow: row;
    grid-gap: 64px;
`;

export default FeaturedBuildPage;
