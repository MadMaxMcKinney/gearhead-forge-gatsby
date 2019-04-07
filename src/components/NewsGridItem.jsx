import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { GPTall, GLabel, GSmallLabel } from '../design/typography';

import thumbnailImage from '../images/thumb.jpg';

const NewsGridItem = props => {
    return (
        <GridItemContainer>
            <GridItem>
                <GridItemMetaContainer>
                    <GLabel>{props.date}</GLabel>
                    <MetaService>
                        <GSmallLabel>{props.service}</GSmallLabel>
                    </MetaService>
                </GridItemMetaContainer>
                <GridItemContentContainer>
                    {props.title && (
                        <GridItemTitle>{props.title}</GridItemTitle>
                    )}
                    {props.imageUrl && (
                        <GridItemFeaturedImage src={props.imageUrl} />
                    )}
                    <GPTall>{props.content}</GPTall>
                </GridItemContentContainer>
                <GridItemReadMore href={props.readMoreLink}>
                    <GLabel>Read more</GLabel>
                </GridItemReadMore>
            </GridItem>
        </GridItemContainer>
    );
};

const GridItemContainer = styled.div`
    justify-content: center;
    align-items: center;
    display: flex;
`;

const GridItem = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 350px;
`;

const GridItemMetaContainer = styled.div`
    display: flex;
    color: var(--light-gray-color);
`;

const MetaService = styled.div`
    display: flex;
    margin-left: 16px;
    padding: 2px 8px;
    color: var(--black-color);
    background: var(--accent-color);
`;

const GridItemContentContainer = styled.div`
    margin-top: 10px;
    margin-bottom: 16px;
`;

const GridItemTitle = styled.h5`
    color: var(--white-color);
    margin-bottom: 24px;
`;

const GridItemFeaturedImage = styled.img`
    height: 200px;
    object-fit: cover;
    margin-bottom: 24px;
`;

const GridItemReadMore = styled.a`
    color: var(--accent-color);
    text-decoration: none;
    transition: all 0.3s;
    &:hover {
        color: var(--accent-color);
        opacity: 0.7;
    }
`;

NewsGridItem.propTypes = {
    date: PropTypes.string,
    service: PropTypes.string,
    title: PropTypes.string,
    imageUrl: PropTypes.string,
    content: PropTypes.string,
    readMoreLink: PropTypes.string,
};

export default NewsGridItem;
