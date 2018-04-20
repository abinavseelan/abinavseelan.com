import React from 'react';

import DataItem from '../DataItem';

import '../../styles/section.scss';

export default ({ title, data, viewAllLink, inverted }) => (
    <section className={`section ${inverted ? 'section-inverted' : ''}`}>
        <div className="container">
            <h2 className="heading t-bold">{title}</h2>
            {
                data.map(d => <DataItem data={d} />)
            }
        </div>
    </section>
);