/* eslint-disable react/jsx-props-no-spreading */
import { Skeleton } from '@mui/material';
import React from 'react';

const ItemCardSkeleton = (props) => (
    <div {...props}>
        <Skeleton animation="wave" variant="rectangular" width="100%" height={225} />
        <Skeleton animation="wave" height={30} />
        <Skeleton animation="wave" width="60%" height={20} />
    </div>
);

export default ItemCardSkeleton;
