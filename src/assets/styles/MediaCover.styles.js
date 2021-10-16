import { Grid, Typography } from '@mui/material';
import styled from 'styled-components';

export const HEADER = styled.header`
    width: 100%;
    min-height: 500px;
    padding-top: 30px;
    padding-bottom: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    background-image: ${(props) =>
        props.background
            ? `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),url(${props.background})`
            : `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7))`};
    background-repeat: no-repeat;
    background-size: cover;
`;

export const IMAGEWRAPPER = styled.div`
    position: relative;
    width: 100%;
    height: 100%;

    & > img {
        width: 100%;
        height: 350px;
        border-radius: 10px;
    }
`;

export const CONTENT = styled(Grid)`
    display: flex;
    flex-direction: column;
    gap: 20px;

    @media (max-width: 899px) {
        & {
            text-align: center;
        }
    }
`;

export const TITLE = styled(Typography)`
    font-size: 28px;
    font-weight: bold;
`;

export const RATINGWRAPPER = styled.div`
    position: absolute;
    bottom: 20px;
    left: 20px;

    & > * {
        background-color: #000;
        border-radius: 50%;
    }
`;

export const ACTIONS = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
    margin-top: 20px;

    @media (max-width: 899px) {
        & {
            justify-content: center;
        }
    }
`;
