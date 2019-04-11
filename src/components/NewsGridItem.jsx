import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { GPTall, GLabel, GSmallLabel } from '../design/typography';
import moment from 'moment';

const NewsGridItem = props => {
    // If limit words is true, only keep the first 45 words, and append "..." to the end.
    const content = props.limitWords
        ? props.content
              .split(/\s+/)
              .slice(0, 45)
              .join(' ')
              .concat('...')
        : props.content;

    const date = parseDateFormat(props.date);

    return (
        <GridItemContainer>
            <GridItem>
                <GridItemMetaContainer>
                    <GLabel>{date}</GLabel>
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
                    <GPTall>{content}</GPTall>
                </GridItemContentContainer>
                <GridItemReadMore href={props.readMoreLink}>
                    <GLabel>View more</GLabel>
                </GridItemReadMore>
            </GridItem>
        </GridItemContainer>
    );
};

function parseDateFormat(dateToFormat) {
    const milisecs = Date.parse(dateToFormat);
    const newDateFormat = new Date(milisecs);
    return moment(newDateFormat).format('MMMM D');
}

const GridItemContainer = styled.div`
    justify-content: center;
    align-items: center;
    display: flex;
    @media (max-width: 790px) {
        justify-content: flex-start;
    }
`;

const GridItem = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 350px;

    @media (max-width: 790px) {
        max-width: 100%;
        padding: 0px 40px;
    }
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
    @media (max-width: 790px) {
        width: 100%;
    }
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
    limitWords: PropTypes.bool,
    readMoreLink: PropTypes.string,
};

export default NewsGridItem;
