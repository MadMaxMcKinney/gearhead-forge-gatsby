import React from 'react';
import SEO from '../components/seo';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Layout, { LayoutContent } from '../components/page-blocks/Layout';
import Navbar from '../components/page-blocks/Navbar';
import HeroArticle from '../components/page-blocks/HeroArticle';
import Footer from '../components/page-blocks/Footer';

import profileImage from '../images/profile-max.jpg';

const ArticlePage = () => {
    return (
        <Layout>
            <SEO title="Article" keywords={[`car`, `hotrod`, `racing`]} />

            <Navbar />
            <HeroArticle title="Installing a bigger turbo" />
            <LayoutContent>
                <ArticleContentContainer>
                    <ArticleMeta>
                        <ArticleIconContainer>
                            <ArticleProfileImage src={profileImage} />
                            <p>Max McKinney</p>
                        </ArticleIconContainer>
                        <ArticleIconContainer>
                            <p>
                                <FontAwesomeIcon icon={['fal', 'calendar']} />
                            </p>
                            <p>March 20th</p>
                        </ArticleIconContainer>
                    </ArticleMeta>
                    <ArticleContent>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Maecenas pretium rhoncus elit, et elementum
                            libero lacinia ut. Nulla dapibus risus quis
                            imperdiet malesuada. Interdum et malesuada fames ac
                            ante ipsum primis in faucibus. Donec imperdiet sit
                            amet turpis eget feugiat. Mauris sed consectetur
                            turpis. Etiam eu ultricies ante. Sed sit amet ex
                            convallis, bibendum odio et, laoreet augue.
                        </p>

                        <p>
                            Nulla rhoncus sodales est, vel ornare sem fermentum
                            eu. Proin euismod accumsan enim, malesuada
                            scelerisque libero eleifend ac. Nam tincidunt ac
                            arcu sit amet suscipit. Nulla et massa blandit,
                            rhoncus ligula ut, aliquam lectus. Praesent
                            ultricies risus et rutrum vestibulum. Praesent vitae
                            magna lorem. Maecenas orci sapien, elementum a est
                            vitae, faucibus feugiat tortor. Suspendisse molestie
                            elementum tortor sit amet commodo.
                        </p>

                        <img src="https://source.unsplash.com/random/1200x800" />

                        <p>
                            Nulla rhoncus sodales est, vel ornare sem fermentum
                            eu. Proin euismod accumsan enim, malesuada
                            scelerisque libero eleifend ac. Nam tincidunt ac
                            arcu sit amet suscipit. Nulla et massa blandit,
                            rhoncus ligula ut, aliquam lectus. Praesent
                            ultricies risus et rutrum vestibulum. Praesent vitae
                            magna lorem. Maecenas orci sapien, elementum a est
                            vitae, faucibus feugiat tortor. Suspendisse molestie
                            elementum tortor sit amet commodo.
                        </p>

                        <img src="https://source.unsplash.com/random/1300x800" />
                    </ArticleContent>
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

export default ArticlePage;
