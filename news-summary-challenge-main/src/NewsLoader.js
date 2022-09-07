import React from 'react';
import ContentLoader from 'react-content-loader';

const NewsLoader = props => (
    <ContentLoader
        title="Loading news..."
        {...props}
        width={800}
        height={800}
        viewBox="0 0 400 200"
        style={{ width: '100%' }}
    >
        <rect x="42.84" y="9.93" rx="5" ry="5" width="143.55" height="86.59" />
        <rect x="192.84" y="9.67" rx="0" ry="0" width="148.72" height="12.12" />
        <rect x="192.84" y="25.67" rx="0" ry="0" width="89" height="9" />

        <rect x="42.84" y="107" rx="5" ry="5" width="143.55" height="86.59" />
        <rect x="192.84" y="107" rx="0" ry="0" width="148.72" height="12.12" />
        <rect x="192.84" y="123" rx="0" ry="0" width="89" height="9" />

    </ContentLoader>
)

NewsLoader.metadata = {
    name: 'Arthur Falcão',
    github: 'arthurfalcao',
    description: 'News List',
    filename: 'News',
}

export default NewsLoader