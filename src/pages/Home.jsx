import { Container } from '@mui/material';
import React from 'react';
import Hero from '../components/Hero';
import ListWrapper from '../components/List/ListWrapper';
import PopularList from '../components/List/PopularList';
import TopRatedList from '../components/List/TopRatedList';

const Home = () => (
    <>
        <Hero />
        <Container maxWidth="lg">
            <ListWrapper
                title="Most Popular"
                filters={{ movie: 'movies', tv: 'tv' }}
                defaultFilter="movie"
                scroller
            >
                {(value) => <PopularList name={value} />}
            </ListWrapper>

            <ListWrapper
                title="Top Rated"
                filters={{ movie: 'movies', tv: 'tv' }}
                defaultFilter="movie"
                scroller
            >
                {(value) => <TopRatedList name={value} />}
            </ListWrapper>
        </Container>
    </>
);

export default Home;
