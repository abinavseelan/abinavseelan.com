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
            {
                data.subHeadings.map(subHeading => <h4 key={subHeading} className="data-sub-heading t-regular">{subHeading}</h4>)
            }
        </div>
    </div>
);