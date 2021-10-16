import { createGlobalStyle } from 'styled-components';

const Global = createGlobalStyle`

*,
*::after,
*::before{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html{
    scroll-behavior: smooth;
}

input {
    outline: none;

    &:focus {
        outline: none;
    }
}

.grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    justify-items: center;
    gap: 20px;
    row-gap: 30px;
}

.info{
    width: 100% !important;
    height: 100% !important;
    min-width: 100% !important;
    min-height: 100% !important;
    display: flex !important;
    align-items: center !important;
    justify-content: center !important;
    text-align: center !important;
}

`;

export default Global;
