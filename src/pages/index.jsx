import React from 'react';
import { graphql } from 'gatsby';
import SEO from '../components/seo';

import Layout, { LayoutContent } from '../components/page-blocks/Layout';
import Navbar from '../components/page-blocks/Navbar';
import Hero from '../components/page-blocks/Hero';
import NewsGridBlock from '../components/page-blocks/NewsGridBlock';
import NewsletterBlock from '../components/page-blocks/NewsLetterBlock';
import FeaturedBuildBlock from '../components/page-blocks/FeaturedBuildBlock';
import Footer from '../components/page-blocks/Footer';

import NewsGridItem from '../components/NewsGridItem';

import featuredImage from '../images/featured.jpg';

const IndexPage = ({ data }) => {
    const videos = data.allYoutubeVideo.edges;
    const tweets = data.allTweet.edges;

    return (
        <Layout>
            <SEO title="" keywords={[`car`, `hotrod`, `racing`]} />

            <Navbar />
            <Hero />
            <LayoutContent>
                <NewsGridBlock>
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
                        date={tweets[0].node.created_at}
                        service="Twitter"
                        content={tweets[0].node.full_text}
                        readMoreLink="https://twitter.com/GearheadForge"
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
                </NewsGridBlock>
                <NewsletterBlock />
                <FeaturedBuildBlock
                    title="The Forged ST"
                    subTitle="Latest Build"
                    link="/builds/thelastst"
                    imageUrl={featuredImage}
                />
                <NewsGridBlock flipped>
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
                        date={tweets[0].node.created_at}
                        service="Twitter"
                        content={tweets[0].node.full_text}
                        readMoreLink="https://twitter.com/GearheadForge"
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
                </NewsGridBlock>
            </LayoutContent>
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
        allTweet {
            edges {
                node {
                    full_text
                    created_at
                }
            }
        }
    }
`;

export default IndexPage;
