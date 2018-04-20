import Link from 'gatsby-link';
import React from 'react';

const NavItem = ({ info }) => (
    <Link
        to={info.path}
        className="nav-item"
    >
        {info.label}
    </Link>
);

export default NavItem;