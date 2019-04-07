import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const NewsGrid = props => {
    return <NewsGridContainer>{props.children}</NewsGridContainer>;
};

const NewsGridContainer = styled.div`
    width: 100%;
    height: 100vh;
    /*max-height: 900px;*/
    min-height: 900px;

    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr;
    grid-template-areas:
        'firstItem secondItem'
        'firstItem thirdItem'
        'firstItem thirdItem';

    > *:first-child {
        grid-area: firstItem;
        border-right: 1px solid #2a2a2a;
    }
    > *:nth-child(2) {
        grid-area: secondItem;
        border-bottom: 1px solid #2a2a2a;
    }
    > *:nth-child(3) {
        grid-area: thirdItem;
    }
`;

export default NewsGrid;
