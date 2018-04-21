import React from 'react';
import Link from 'gatsby-link';

import ExpandedCard from '../components/ExpandedCard';

import articles from '../data/Articles';

const ArticlesPage = () => (
    <div className="container">
        <Link to="/" className="transparent-button">‹ Back</Link>
        <h2 className="heading t-bold">Articles.</h2>
        {
            articles.map(article => <ExpandedCard key={article.id} data={article} />)
        }
    </div>
);

export default ArticlesPage;