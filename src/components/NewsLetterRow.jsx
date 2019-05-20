import React from 'react';

import styled from 'styled-components';
import { GH2, GH6 } from '../design/typography';

const NewsLetterRow = () => {
    return (
        <NewsLetterRowContainer>
            <GH2>Sign up stay informed</GH2>
            <GH6>Gearhead Forge Newsletter</GH6>
        </NewsLetterRowContainer>
    );
};

const NewsLetterRowContainer = styled.div`
    background: var(--black-color);
    padding: 74px 40px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    ${GH2} {
        color: var(--accent-color);
        padding-bottom: 16px;
    }

    ${GH6} {
        color: var(--light-gray-color);
    }
`;

export default NewsLetterRow;
