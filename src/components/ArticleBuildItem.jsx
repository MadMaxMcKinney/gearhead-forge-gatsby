import React from 'react';
import styled from 'styled-components';
import { GH5 } from '../design/typography';
import Button from './Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import image from '../images/featured.jpg';

const ArticleBuildItem = () => {
    return (
        <ArticleBuildItemContainer>
            <ArticleTitleContainer>
                <GH5>Installing Bigger Turbo</GH5>
                <ArticleDate>
                    <p><FontAwesomeIcon icon={['fal', 'calendar']} /></p>
                    <p>March 20th</p>
                </ArticleDate>
            </ArticleTitleContainer>
            <ArticleImageContainer>
                <ArticleBuildOrderNumber>#1</ArticleBuildOrderNumber>
            </ArticleImageContainer>
            <ArticleContentContainer>
                <p>
                    The best way to make more power is with a bigger turbo.
                    Follow along as we bring the stock 250hp to a whopping
                    400whp!
                </p>
                <Button text="View Details" type="secondary" size="small" />
            </ArticleContentContainer>
        </ArticleBuildItemContainer>
    );
};

const ArticleBuildItemContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`;

const ArticleTitleContainer = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
    margin-bottom: 16px;
    color: white;
`;

const ArticleDate = styled.div`
    color: var(--accent-color);
    display: grid;
    grid-auto-flow: column;
    grid-gap: 8px;
`;

const ArticleImageContainer = styled.div`
    width: 100%;
    display: flex;
    position: relative;
    align-items: center;
    padding: 24px;
    height: 250px;
    background: url(${image});
    background-size: cover;
    background-position: center;
    border: 1px solid #3f3f3f;

    &::after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: linear-gradient(
            to right,
            rgba(0, 0, 0, 1) 0%,
            rgba(0, 0, 0, 0) 100%
        );
    }
`;

const ArticleBuildOrderNumber = styled.h1`
    color: var(--accent-color);
    opacity: 0.1;
    font-size: 180px;
    z-index: 10;
`;

const ArticleContentContainer = styled.div`
    margin-top: 24px;
    width: 100%;
    display: grid;
    grid-auto-flow: column;
    grid-gap: 64px;

    p {
        line-height: 2.8rem;
    }

    @media (max-width: 710px) {
        grid-auto-flow: row;
        grid-gap: 24px;
    }
`;

export default ArticleBuildItem;
