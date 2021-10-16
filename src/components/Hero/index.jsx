import { Typography } from '@mui/material';
import React from 'react';
import image from '../../assets/images/hero_bg.jpg';
import { Header, HeaderBg, HeaderSearch, HeaderWrapper } from '../../assets/styles/Hero.styles';

const Hero = ({ title, text }) => (
    <Header className="hero">
        <HeaderBg src={image} alt="title" />
        <HeaderWrapper maxWidth="lg">
            <Typography variant="h4" component="h2">
                {title || 'Unlimited movies, TV shows, and more.'}
            </Typography>
            <Typography variant="body1" component="p">
                {text || 'watch anywhere, anytime so explore now'}
            </Typography>
            <HeaderSearch />
        </HeaderWrapper>
    </Header>
);

export default Hero;
