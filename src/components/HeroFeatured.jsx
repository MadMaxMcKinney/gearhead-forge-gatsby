import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { GH1, GH4 } from '../design/typography';

import heroBG from '../images/featured.jpg';

export default function HeroFeatured(props) {
    return (
        <HeroContainer>
            <FeaturedTitleContainer>
                <GH4>Featured Build</GH4>
                <GH1>{props.title}</GH1>
            </FeaturedTitleContainer>
        </HeroContainer>
    );
}

const HeroContainer = styled.div`
    width: 100%;
    height: 100vh;
    max-height: 570px;

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
        background: var(--accent-color);
        opacity: 0.7;
    }
`;

const FeaturedTitleContainer = styled.div`
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 36px;
    right: 36px;
    padding: 32px;
    background: var(--black-color);
    z-index: 10;

    ${GH1} {
        color: white;
    }
    ${GH4} {
        color: var(--light-gray-color);
    }

    @media (max-width: 1200px) {
        top: initial;
        right: 0;
    }
`;

HeroFeatured.propTypes = {
    title: PropTypes.string,
};
