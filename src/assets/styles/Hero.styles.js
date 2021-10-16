import { Container } from '@mui/material';
import styled from 'styled-components';
import SearchBox from '../../components/Hero/SearchBox';

export const Header = styled.header`
    width: 100%;
    min-height: 500px;
    margin: 0;
    padding: 0;
    position: relative;
    background-color: rgba(0, 0, 0, 0.6);
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`;

export const HeaderBg = styled.img`
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: -1;
`;

export const HeaderWrapper = styled(Container)`
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-direction: column;

    h2 {
        font-weight: bold;
    }
`;

export const HeaderSearch = styled(SearchBox)`
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    margin-top: 20px;
    width 50%;

    & > div {
        border-radius: 0;
        flex: 1;
    }

    fieldset {
        border: none;
    }

    input {
        background-color: #fff;
        color: #000;

        &:-webkit-autofill {
            -webkit-box-shadow: 0 0 0 100px #fff inset;
            -webkit-text-fill-color: #000;
            caret-color: #fff;
        }
    }

    & > button {
        height: 40px;
        border-top-left-radius: 0;
        border-bottom-left-radius: 0;
    }

    @media (max-width: 700px){
        &{
            width: 85%;
        }
    }
`;
