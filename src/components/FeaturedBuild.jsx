import React from 'react';
import styled from 'styled-components';
import propTypes from 'prop-types';

const FeaturedBuild = props => {
    return (
        <FeaturedBuildContainer imageUrl={props.imageUrl}>
            <FeaturedBuildTitleContainer>
                <FeaturedBuildSubTitle>{props.subTitle}</FeaturedBuildSubTitle>
                <FeaturedBuildTitle>{props.title}</FeaturedBuildTitle>
            </FeaturedBuildTitleContainer>
        </FeaturedBuildContainer>
    );
};

const FeaturedBuildContainer = styled.div`
    background: url(${props => props.imageUrl});
    background-size: cover;
    background-position: center;
    height: 650px;
    display: flex;
    position: relative;
    padding: 36px;

    &:after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: var(--accent-color);
        opacity: 0.7;
    }
`;

const FeaturedBuildTitleContainer = styled.div`
    background: var(--black-color);
    padding: 32px;
    position: absolute;
    top: 32px;
    right: 32px;
    z-index: 2;
`;

const FeaturedBuildSubTitle = styled.h4`
    color: var(--light-gray-color);
`;

const FeaturedBuildTitle = styled.h1`
    color: var(--white-color);
`;

FeaturedBuild.propTypes = {
    subTitle: propTypes.string,
    title: propTypes.string,
};

export default FeaturedBuild;
