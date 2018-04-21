import React from 'react';
import Link from 'gatsby-link';

import ExpandedCard from '../components/ExpandedCard';

import talks from '../data/Talks';

const TalksPage = () => (
    <div className="container">
        <Link to="/" className="transparent-button">‹ Back</Link>
        <h2 className="heading t-bold">Talks.</h2>
        {
            talks.map(talk => <ExpandedCard key={talk.id} data={talk} />)
        }
    </div>
);

export default TalksPage;