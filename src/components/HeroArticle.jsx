import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { GH1 } from '../design/typography';

import heroBG from '../images/featured.jpg';

export default function HeroArticle(props) {
    return (
        <HeroContainer>
            <FeaturedTitleContainer>
                <GH1>{props.title}</GH1>
            </FeaturedTitleContainer>
        </HeroContainer>
    );
}

const HeroContainer = styled.div`
    width: 100%;
    height: 100vh;
    max-height: 340px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;
    padding: 40px;

    background-image: url(${heroBG});
    background-size: cover;
    background-position: center;

    &:after {
        content: '';
        position: absolute;
        top: 0;
        right: 0;
        left: 0;
        bottom: 0;
        background: var(--black-color);
        opacity: 0.7;
    }
`;

const FeaturedTitleContainer = styled.div`
    display: flex;
    flex-direction: column;
    z-index: 10;
    height: 100%;
    width: 100%;
    justify-content: center;
    align-items: center;

    ${GH1} {
        color: white;
    }
`;

HeroArticle.propTypes = {
    title: PropTypes.string,
};
