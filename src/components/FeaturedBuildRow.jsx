import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';

const FeaturedBuildRow = props => {
    return (
        <FeaturedBuildContainer imageUrl={props.imageUrl}>
            <FeaturedBuildLink to={props.link}>
                <FeaturedBuildTitleContainer>
                    <FeaturedBuildSubTitle>
                        {props.subTitle}
                    </FeaturedBuildSubTitle>
                    <FeaturedBuildTitle>{props.title}</FeaturedBuildTitle>
                </FeaturedBuildTitleContainer>
            </FeaturedBuildLink>
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
    transition: color 0.3s;
`;

const FeaturedBuildTitle = styled.h1`
    color: var(--white-color);
`;

const FeaturedBuildLink = styled(Link)`
    width: 100%;
    height: 100%;
    cursor: pointer;
    z-index: 1000;

    &:hover {
        opacity: 1;
    }

    &:hover ${FeaturedBuildSubTitle} {
        color: var(--accent-color);
    }
`;

FeaturedBuildRow.propTypes = {
    subTitle: PropTypes.string,
    title: PropTypes.string,
    imageUrl: PropTypes.string,
    link: PropTypes.string,
};

export default FeaturedBuildRow;
