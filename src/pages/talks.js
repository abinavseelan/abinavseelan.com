import React from 'react';
import Link from 'gatsby-link';

import TalkCard from '../components/TalkCard';

import talks from '../data/Talks';

const TalksPage = () => (
    <div className="container">
        <Link to="/" className="transparent-button">‹ Back</Link>
        <h2 className="heading t-bold">Talks.</h2>
        {
            talks.map(talk => <TalkCard data={talk} />)
        }
    </div>
);

export default TalksPage;