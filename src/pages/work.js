import React from 'react';
import Link from 'gatsby-link';

import ExpandedCard from '../components/ExpandedCard';

import work from '../data/Work';

const WorkPage = () => (
    <div className="container">
        <Link to="/" className="transparent-button">‹ Back</Link>
        <h2 className="heading t-bold">Experience.</h2>
        {
            work.map(w => <ExpandedCard key={w.id} data={w} />)
        }
    </div>
);

export default WorkPage;