import Link from 'gatsby-link';
import React from 'react';

const NavItem = ({ info }) => (
    info.external
        ? (
            <a href={info.path} className="nav-item">
                {info.label}
            </a>
        )
        : (
            <Link
                to={info.path}
                className="nav-item"
            >
                {info.label}
            </Link>
        )
);

export default NavItem;