import React from 'react';

export default ({ data }) => (
    <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
            __html: JSON.stringify(data)
        }}
    />
)