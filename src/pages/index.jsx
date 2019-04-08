import React from 'react';
import { graphql } from 'gatsby';
import SEO from '../components/seo';

import Layout from '../components/Layout';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import NewsGrid from '../components/NewsGrid';
import FeaturedBuild from '../components/FeaturedBuild';
import Footer from '../components/Footer';

import NewsGridItem from '../components/NewsGridItem';

import featuredImage from '../images/featured.jpg';

const IndexPage = ({ data }) => {
    const videos = data.allYoutubeVideo.edges;
    const tweets = '';

    return (
        <Layout>
            <SEO title="Home" keywords={[`car`, `hotrod`, `racing`]} />

            <Navbar />
            <Hero />
            <NewsGrid>
                <NewsGridItem
                    date={videos[0].node.publishedAt}
                    service="YouTube"
                    title={videos[0].node.title}
                    imageUrl={videos[0].node.thumbnail.url}
                    content={videos[0].node.description}
                    readMoreLink={`https://www.youtube.com/watch?v=${
                        videos[0].node.videoId
                    }`}
                    limitWords
                />
                <NewsGridItem
                    date="March 29th"
                    service="Twitter"
                    content="We are a group of enthusiasts passionately keeping the flame of V8’s and hot rodding alive by building uniquely aggressive cars and forging a lifestyle."
                    readMoreLink="https://www.youtube.com/watch?v=FjBrz5H0MSc"
                />
                <NewsGridItem
                    date={videos[1].node.publishedAt}
                    service="YouTube"
                    title={videos[1].node.title}
                    imageUrl={videos[1].node.thumbnail.url}
                    content={videos[1].node.description}
                    readMoreLink={`https://www.youtube.com/watch?v=${
                        videos[1].node.videoId
                    }`}
                    limitWords
                />
            </NewsGrid>
            <FeaturedBuild
                title="The Forged ST"
                subTitle="Latest Build"
                imageUrl={featuredImage}
            />
            <NewsGrid>
                <NewsGridItem
                    date={videos[0].node.publishedAt}
                    service="YouTube"
                    title={videos[0].node.title}
                    imageUrl={videos[0].node.thumbnail.url}
                    content={videos[0].node.description}
                    readMoreLink={`https://www.youtube.com/watch?v=${
                        videos[0].node.videoId
                    }`}
                    limitWords
                />
                <NewsGridItem
                    date={videos[0].node.publishedAt}
                    service="YouTube"
                    title={videos[0].node.title}
                    imageUrl={videos[0].node.thumbnail.url}
                    content={videos[0].node.description}
                    readMoreLink={`https://www.youtube.com/watch?v=${
                        videos[0].node.videoId
                    }`}
                    limitWords
                />
                <NewsGridItem
                    date={videos[1].node.publishedAt}
                    service="YouTube"
                    title={videos[1].node.title}
                    imageUrl={videos[1].node.thumbnail.url}
                    content={videos[1].node.description}
                    readMoreLink={`https://www.youtube.com/watch?v=${
                        videos[1].node.videoId
                    }`}
                    limitWords
                />
            </NewsGrid>
            <Footer />
        </Layout>
    );
};

export const query = graphql`
    query {
        allYoutubeVideo {
            edges {
                node {
                    title
                    thumbnail {
                        url
                    }
                    description
                    videoId
                    publishedAt
                }
            }
        }
    }
`;

export default IndexPage;
