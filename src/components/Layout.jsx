import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faChevronRight } from '@fortawesome/pro-light-svg-icons';

import './styles/normalize.css';
import './styles/layout.css';
import './styles/vars.css';

library.add(faChevronRight);

export default ({ children }) => {
    return <div>{children}</div>;
};
