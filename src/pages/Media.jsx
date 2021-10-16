import { Container } from '@mui/material';
import React, { useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import Cover from '../components/Cover';
import CastList from '../components/List/CastList';
import ListWrapper from '../components/List/ListWrapper';
import SimilarList from '../components/List/SimilarList';
import VideosList from '../components/List/VideosList';
import NavBar from '../components/Navbar';

const Media = ({ media }) => {
    const videosRef = useRef(null);
    const castRef = useRef(null);
    const { id } = useParams();

    useEffect(() => {
        document.body.scrollIntoView();
    }, [id]);

    const scrolltoVideo = () => videosRef.current && videosRef.current.scrollIntoView();
    const scrolltoCast = () => castRef.current && castRef.current.scrollIntoView();

    return (
        <>
            <NavBar />
            <Cover name={media} id={id} toVideo={scrolltoVideo} toCast={scrolltoCast} />
            <Container maxWidth="lg">
                <ListWrapper title="Cast" scroller ref={castRef}>
                    <CastList id={id} />
                </ListWrapper>
                <ListWrapper
                    scroller
                    title="Watch Videos"
                    contentWidth="400px"
                    isVideo
                    ref={videosRef}
                >
                    <VideosList name={media} id={id} />
                </ListWrapper>
                <ListWrapper scroller title="Similar">
                    <SimilarList name={media} id={id} />
                </ListWrapper>
            </Container>
        </>
    );
};

export default Media;
