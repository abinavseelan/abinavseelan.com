import React from 'react';

export default ({ data }) => (
    <script type="application/ld+json">
        {
            JSON.stringify(data)
        }
    </script>
)