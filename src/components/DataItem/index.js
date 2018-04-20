import React from 'react';

import '../../styles/data-item.scss';

export default ({ data }) => (
    <div className="data-item">
        {
            data.image
                ? (
                    <img className="inline" src={data.image} alt={data.heading} />
                )
                : (
                    null
                )
        }
        <div className="inline">
            <a href={data[data.main]}>
                <h3 className="data-heading t-bold">{data.heading}</h3>
            </a>
            <h4 className="data-sub-heading t-regular">{data.subHeading}</h4>
        </div>
    </div>
);