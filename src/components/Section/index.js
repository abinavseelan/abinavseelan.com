import React from 'react';

import DataItem from '../DataItem';

import '../../styles/section.scss';

export default ({ title, data, inverted, children }) => (
    <section className={`section ${inverted ? 'section-inverted' : ''}`} id={title}>
        <div className="container">
            <h2 className="heading t-bold">{title}</h2>
            
            { data.map(d => <DataItem key={d.id} data={d} />) }

            {children}
        </div>
    </section>
);