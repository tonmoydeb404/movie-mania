import { Box, CircularProgress, Typography } from '@mui/material';
import React from 'react';

const Rating = ({ rate = 0 }) => (
    <Box sx={{ position: 'relative', display: 'inline-flex' }}>
        <CircularProgress variant="determinate" value={rate} />
        <Box
            sx={{
                top: 0,
                left: 0,
                bottom: 0,
                right: 0,
                position: 'absolute',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
            }}
        >
            <Typography variant="caption" component="div" color="text.secondary">
                {`${Math.round(rate)}%`}
            </Typography>
        </Box>
    </Box>
);

export default Rating;
