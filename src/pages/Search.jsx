import { Container } from '@mui/material';
import React, { useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import ListWrapper from '../components/List/ListWrapper';
import SearchList from '../components/List/SearchList';
import NavBar from '../components/Navbar';

const Search = () => {
    const { query } = useParams();
    const searchListRef = useRef(null);

    useEffect(() => {
        if (searchListRef.current) {
            searchListRef.current.scrollIntoView();
        }
    }, [query, searchListRef]);

    return (
        <>
            <NavBar />
            <Container
                maxWidth="md"
                style={{ paddingTop: '50px', paddingBottom: '50px' }}
                ref={searchListRef}
            >
                <ListWrapper filters={{ movie: 'movies', tv: 'tv' }} defaultFilter="movie">
                    {(name) => <SearchList name={name} query={query} infinity />}
                </ListWrapper>
            </Container>
        </>
    );
};

export default Search;
