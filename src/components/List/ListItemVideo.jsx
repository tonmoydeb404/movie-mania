import { Skeleton } from '@mui/material';
import React from 'react';
import ReactPlayer from 'react-player';

const ListItemVideo = ({ loading, error, data }) => {
    if (!data.length && !loading && error) {
        return <div className="info">There Is An Error</div>;
    }

    if (!data.length && !loading && !error) {
        return <div className="info"> There Is No Data</div>;
    }

    if (data.length) {
        return data.map((vid) => (
            <ReactPlayer
                key={vid.key}
                width="inherit"
                height="inherit"
                url={`https://www.youtube.com/watch?v=${vid.key}`}
                controls
            />
        ));
    }

    // LOADING
    return (
        <>
            {Array.from(Array(10)).map((_, index) => (
                <Skeleton key={index} style={{ width: '100%', height: '500px' }} />
            ))}
        </>
    );
};

export default ListItemVideo;
