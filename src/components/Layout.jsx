import React from 'react';
import styled from 'styled-components';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faChevronRight, faCalendar } from '@fortawesome/pro-light-svg-icons';

import './styles/normalize.css';
import './styles/layout.css';
import './styles/vars.css';

// The fontawesome library component allows us to add any icon here for use throughout the application
library.add(faChevronRight, faCalendar);

export default ({ children }) => {
    return <LayoutContainer>{children}</LayoutContainer>;
};

export const LayoutContent = styled.div`
    flex: 1;
`;

const LayoutContainer = styled.div`
    min-height: 100vh;
    display: flex;
    flex-direction: column;
`;
