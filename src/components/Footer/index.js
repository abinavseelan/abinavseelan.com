import React from 'react';

import '../../styles/footer.scss';

const Footer = () => (
    <footer className="footer">
        <div className="container">
            <div className="link-container">
                Built with <a className="t-bold" href="gatsbyjs.org/">GatsbyJS ❤️ </a>
            </div>
            <div className="link-container">
                View website <a className="t-bold" href="https://github.com/abinavseelan/abinavseelan.com">source on Github</a>
            </div>
        </div>
    </footer>
);

export default Footer;