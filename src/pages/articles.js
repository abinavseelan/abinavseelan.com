import React from 'react';
import Link from 'gatsby-link';

import ExpandedCard from '../components/ExpandedCard';
import LDJSON from '../components/LDJSON';
import { articleSEO, aboutMe, aboutCampVanilla } from '../data/seo';

import articles from '../data/Articles';

const ArticlesPage = () => (
    <div className="container">
        <Link to="/" className="transparent-button">‹ Back</Link>
        <h2 className="heading t-bold">Articles.</h2>
        {
            articles.map(article => (
                <div key={article.id}>
                    <ExpandedCard data={article} />
                    <LDJSON data={ articleSEO(aboutMe, aboutCampVanilla, article) } />
                </div>
            ))
        }
    </div>
);

export default ArticlesPage;