import { Card, CardContent, CardMedia, Typography } from '@mui/material';
import { red } from '@mui/material/colors';
import styled from 'styled-components';

export const CARD = styled(Card)`
    width: 100%;
    transition: background-image 5s linear;

    &:not(:hover) {
        background-image: none;
    }

    & a {
        text-decoration: none;
        color: inherit;

        &:hover {
            color: ${red[500]};
        }
    }
`;

export const CARDMEDIA = styled(CardMedia)`
    object-fit: unset;
    width: 100%;
`;

export const CARDCONTENT = styled(CardContent)`
    padding-left: 15px;
    padding-right: 15px;
    position: relative;
`;

export const H2 = styled(Typography)`
    font-size: 16px;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
`;

export const P = styled(Typography)`
    font-size: 12px;
`;

export const RATINGWRAPPER = styled.div`
    position: absolute;
    top: -50px;
    left: 15px;
    z-index: 100;

    & > div {
        background-color: rgba(0, 0, 0, 0.8);
        border-radius: 50%;
    }
`;
