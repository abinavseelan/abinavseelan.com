import React from 'react';

import '../../styles/social-links.scss';

export default ({ links }) => (
    <ul className="social-links">
        {
            links.map(({href, title, image}) => (
                <li key={href}>
                    <a href={href} title={title}>
                        <img src={image} alt={title} />
                    </a>
                </li>
            ))
        }
    </ul>
);