import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import styled from 'styled-components';
import { GH5 } from '../design/typography';
import Button from './Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import image from '../images/featured.jpg';

const ArticleBuildItem = props => {
    return (
        <ArticleBuildItemContainer>
            <ArticleTitleContainer>
                <GH5>{props.title}</GH5>
                <ArticleDate>
                    <p>
                        <FontAwesomeIcon icon={['fal', 'calendar']} />
                    </p>
                    <p>{props.date}</p>
                </ArticleDate>
            </ArticleTitleContainer>
            <ArticleImageContainer imageUrl={props.imageUrl}>
                <ArticleBuildOrderNumber>
                    #{props.buildNumber}
                </ArticleBuildOrderNumber>
            </ArticleImageContainer>
            <ArticleContentContainer>
                <p>{props.excerpt}</p>
                <ArticleLink to={props.link}>
                    <Button text="View Details" type="secondary" size="small" />
                </ArticleLink>
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
    background: url(${props => props.imageUrl});
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

const ArticleLink = styled(Link)`
    justify-self: end;
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

ArticleBuildItem.propTypes = {
    title: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    excerpt: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
    buildNumber: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
};

export default ArticleBuildItem;
