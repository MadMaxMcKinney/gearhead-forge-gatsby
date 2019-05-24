import React from 'react';
import SEO from '../components/seo';
import styled from 'styled-components';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Layout, { LayoutContent } from '../components/page-blocks/Layout';
import Navbar from '../components/page-blocks/Navbar';
import HeroArticle from '../components/page-blocks/HeroArticle';
import Footer from '../components/page-blocks/Footer';

import profileImage from '../images/profile-max.jpg';

const ArticleTemplate = ({ data }) => {
    const article = data.markdownRemark;
    return (
        <Layout>
            <SEO
                title={article.frontmatter.title}
                keywords={[`car`, `hotrod`, `racing`]}
            />

            <Navbar />
            <HeroArticle
                title={article.frontmatter.title}
                imageUrl={
                    article.frontmatter.thumbnail.childImageSharp.fluid.src
                }
            />
            <LayoutContent>
                <ArticleContentContainer>
                    <ArticleMeta>
                        <ArticleIconContainer>
                            <ArticleProfileImage src={profileImage} />
                            <p>{article.frontmatter.author}</p>
                        </ArticleIconContainer>
                        <ArticleIconContainer>
                            <p>
                                <FontAwesomeIcon icon={['fal', 'calendar']} />
                            </p>
                            <p>{article.frontmatter.date}</p>
                        </ArticleIconContainer>
                    </ArticleMeta>
                    <ArticleContent
                        dangerouslySetInnerHTML={{ __html: article.html }}
                    />
                </ArticleContentContainer>
            </LayoutContent>
            <Footer />
        </Layout>
    );
};

const ArticleMeta = styled.div`
    display: flex;
    justify-content: space-between;
    color: var(--accent-color);
    margin-bottom: 32px;
`;

const ArticleIconContainer = styled.div`
    display: grid;
    grid-auto-flow: column;
    grid-gap: 8px;
    justify-content: center;
    align-items: center;
`;

const ArticleProfileImage = styled.img`
    border-radius: 100%;
    border: 1px solid var(--black-color);
    width: 32px;
    height: 32px;
`;

const ArticleContentContainer = styled.div`
    display: flex;
    padding: 0px 40px;
    flex-direction: column;
    width: 100%;
    max-width: 800px;
    margin: 24px auto;
`;

const ArticleContent = styled.div`
    p {
        line-height: 2.8rem;
    }
    img {
        width: 100%;
        border-radius: 4px;
    }
    * {
        margin-bottom: 24px;
    }
`;

ArticleTemplate.propTypes = {
    title: PropTypes.string,
    author: PropTypes.string,
    authorImageUrl: PropTypes.string,
    date: PropTypes.string,
};

// Slug is coming from the createPage context for the query variable
export const query = graphql`
    query($slug: String!) {
        markdownRemark(fields: { slug: { eq: $slug } }) {
            html
            frontmatter {
                title
                author
                date
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
`;

export default ArticleTemplate;
