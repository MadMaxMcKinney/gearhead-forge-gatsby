import React from 'react';

import './styles/normalize.css';
import './styles/layout.css';
import './styles/vars.css';

!(function(c, h, i, m, p) {
    (m = c.createElement(h)),
        (p = c.getElementsByTagName(h)[0]),
        (m.async = 1),
        (m.src = i),
        p.parentNode.insertBefore(m, p);
})(
    document,
    'script',
    'https://chimpstatic.com/mcjs-connected/js/users/ae763632ad6fbccfe6298225f/a50022801e6a1977fc43e7981.js'
);

export default ({ children }) => <div>{children}</div>;
