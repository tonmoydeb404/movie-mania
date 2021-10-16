import { Card, CardMedia } from '@mui/material';
import React from 'react';

const VideoCard = (src) => (
    <Card>
        <CardMedia component="video" src={src} />
    </Card>
);

export default VideoCard;
