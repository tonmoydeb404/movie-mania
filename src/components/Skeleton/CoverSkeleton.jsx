import { Container, Grid, Skeleton } from '@mui/material';
import React, { forwardRef } from 'react';
import { CONTENT, HEADER, IMAGEWRAPPER } from '../../assets/styles/MediaCover.styles';

const CoverSkeleton = () => (
    <HEADER>
        <Container maxWidth="md">
            <Grid container spacing={5} justifyContent="center" alignItems="center">
                <Grid item md={4}>
                    <IMAGEWRAPPER>
                        <Skeleton widtht="100%" height="400px" animation="wave" />
                    </IMAGEWRAPPER>
                </Grid>
                <CONTENT item xs={12} md={8}>
                    <Skeleton width="60%" height="50px" animation="wave" />

                    <div width="100%">
                        <Skeleton width="80%" height="30px" animation="wave" />
                        <Skeleton width="80%" height="30px" animation="wave" />
                        <Skeleton width="80%" height="30px" animation="wave" />
                    </div>

                    <Skeleton width="200px" height="60px" animation="wave" />
                </CONTENT>
            </Grid>
        </Container>
    </HEADER>
);

export default forwardRef(CoverSkeleton);
