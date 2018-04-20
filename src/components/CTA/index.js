import React from 'react';

import '../../styles/buttons.scss';

const CTA = ({ children, inline, type }) => (
    <button className={`${type}-button button t-bold ${inline ? 'inline-button' : ''}`}>
        {children}
    </button>
);

export default CTA;