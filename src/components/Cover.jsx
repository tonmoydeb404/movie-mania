import { Button, Container, Grid, Typography } from '@mui/material';
import React from 'react';
import image from '../assets/images/hero_bg.jpg';
import {
    ACTIONS,
    CONTENT,
    HEADER,
    IMAGEWRAPPER,
    RATINGWRAPPER,
    TITLE
} from '../assets/styles/MediaCover.styles';
import useDetails from '../hooks/useDetails';
import Rating from './Rating';
import CoverSkeleton from './Skeleton/CoverSkeleton';

const Cover = ({ id, name, toVideo, toCast }) => {
    const { details, loading, error } = useDetails(name, id);

    if (!loading && error) {
        return <HEADER style={{ textAlign: 'center' }}>error</HEADER>;
    }

    if (!loading && !error && details) {
        return (
            <HEADER
                background={
                    details.backdrop_path
                        ? `https://image.tmdb.org/t/p/original/${details.backdrop_path}`
                        : image
                }
            >
                <Container maxWidth="md">
                    <Grid container spacing={5} justifyContent="center" alignItems="center">
                        <Grid item md={4}>
                            <IMAGEWRAPPER>
                                <img
                                    src={
                                        details.poster_path
                                            ? `https://image.tmdb.org/t/p/original/${details.poster_path}`
                                            : 'https://via.placeholder.com/200x350?text=image+not+found'
                                    }
                                    alt={
                                        name === 'movie'
                                            ? details.original_title
                                            : details.original_name
                                    }
                                    style={{ width: '100%' }}
                                />
                                <RATINGWRAPPER>
                                    <Rating rate={details.vote_average * 10} />
                                </RATINGWRAPPER>
                            </IMAGEWRAPPER>
                        </Grid>
                        <CONTENT item xs={12} md={8}>
                            <TITLE component="h1" variant="h3">
                                {name === 'movie' ? details.original_title : details.original_name}
                            </TITLE>

                            <Typography component="p" variant="body2">
                                {details.overview}
                            </Typography>

                            <ACTIONS>
                                <Button variant="contained" onClick={toVideo}>
                                    Watch Videos
                                </Button>
                                <Button onClick={toCast} variant="contained" color="secondary">
                                    Cast
                                </Button>
                            </ACTIONS>
                        </CONTENT>
                    </Grid>
                </Container>
            </HEADER>
        );
    }

    return <CoverSkeleton />;
};

export default Cover;
