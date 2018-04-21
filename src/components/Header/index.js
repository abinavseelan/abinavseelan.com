import React from 'react'

import NavItem from './NavItem';

import '../../styles/header.scss';

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
            path: '/articles',
          },
        ].map(navItem => (<NavItem info={navItem} key={navItem.label} />))
      }
    </div>
  </nav>
)

export default Header;
