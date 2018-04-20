import React from 'react'
import Link from 'gatsby-link'

import '../styles/header.scss';

const Header = () => (
  <nav className='nav'>
    <div className="nav-list">
      {
        [
          {
            label: 'Talks',
            path: '/talks',
          },
          {
            label: 'Experience',
            path: '/experience',
          },
          {
            label: 'Work',
            path: '/work',
          },
          {
            label: 'Articles',
            path: '#Articles',
          },
        ].map(navItem => (
            <Link
              to={navItem.path}
              className="nav-item"
            >
              {navItem.label}
            </Link>
        ))
      }
    </div>
  </nav>
)

export default Header
