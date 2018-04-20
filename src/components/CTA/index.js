import React from 'react';
import Link from 'gatsby-link';

import '../../styles/cta.scss';

const CTA = ({ children, inline, type, to, external, title, className }) => {
    const classNames = `${className} ${type}-cta cta t-bold ${inline ? 'inline-cta' : ''}`;

    return (
        external
            ? (
                <a className={classNames} href={to} title={title}>
                    {children}
                </a>
            )
            : (
                <Link to={to} className={classNames}>
                    {children}
                </Link>
            )
    )
}

export default CTA;