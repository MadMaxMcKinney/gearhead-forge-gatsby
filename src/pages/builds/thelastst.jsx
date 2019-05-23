import React from 'react';
import { graphql } from 'gatsby';
import SEO from '../../components/seo';
import styled from 'styled-components';

import Layout, { LayoutContent } from '../../components/page-blocks/Layout';
import Navbar from '../../components/page-blocks/Navbar';
import HeroFeatured from '../../components/page-blocks/HeroFeatured';
import ArticleBuildItem from '../../components/ArticleBuildItem';
import Footer from '../../components/page-blocks/Footer';

const FeaturedBuildTheLastST = ({ data }) => {
    let buildPosts = data.allMarkdownRemark.edges;

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
                    {buildPosts.map(post => {
                        let postDetails = post.node;
                        return (
                            <ArticleBuildItem
                                title={postDetails.frontmatter.title}
                                buildNumber={
                                    postDetails.frontmatter.buildNumber
                                }
                                date="March 20th"
                                link="/article"
                                excerpt={postDetails.excerpt}
                            />
                        );
                    })}
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

export const query = graphql`
    query {
        allMarkdownRemark(
            filter: { frontmatter: { build: { eq: "thelastst" } } }
        ) {
            edges {
                node {
                    html
                    excerpt
                    frontmatter {
                        title
                        buildNumber
                        build
                        postType
                        thumbnail {
                            childImageSharp {
                                fluid {
                                    src
                                }
                            }
                        }
                    }
                }
            }
        }
    }
`;

export default FeaturedBuildTheLastST;
