import React from 'react';
import Youtube from 'react-youtube';

import DataItem from '../DataItem';

import '../../styles/section.scss';
import '../../styles/expanded-card.scss';

export default ({ data }) => (
    <div className="section expanded-card">
        <DataItem data={data} />


        <div className="description" dangerouslySetInnerHTML={{__html: data.description}} />

        {
            data.videoLink
            ? (
                <Youtube
                videoId={data.videoLink.substr(data.videoLink.lastIndexOf('/') + 1, data.videoLink.length)}
                className="youtube-player"
                />
            )
            : (
                null
            )
        }

        {
            data.slidesLink
                ? (
                    <a href={data.slidesLink} className="link t-bold chevron">View Slides <span>›</span></a>
                )
                : (
                    null
                )
        }

        {
            data.eventLink
                ? (
                    <a href={data.eventLink} className="link t-bold chevron">View Event <span>›</span></a>
                )
                : (
                    null
                )
        }

        {
            data.githubLink
                ? (
                    <a href={data.githubLink} className="link t-bold chevron">View Repository <span>›</span></a>
                )
                : (
                    null
                )
        }
    </div>
);