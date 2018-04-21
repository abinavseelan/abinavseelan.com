import React from 'react';

import '../../styles/data-item.scss';

const DataItem = ({ data }) => (
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
                <h3 className={`data-heading t-bold ${data.notify ? 'inline-heading' : ''}`}>{data.heading}</h3>
                {
                    data.notify
                        ? (
                            <span className="notify-tab t-bold">
                                {data.notify.text}
                            </span>
                        )
                        : (
                            null
                        )
                }
            </a>
            {
                data.subHeadings.map(subHeading => <h4 key={subHeading} className="data-sub-heading t-regular">{subHeading}</h4>)
            }
        </div>
    </div>
);

export default DataItem;