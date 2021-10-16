import styled from 'styled-components';

export const LISTSECTION = styled.div`
    padding: 50px 0;
`;

export const LISTHEADER = styled.section`
    display: flex;
    align-items: center;
    gap: 30px;

    & > h2 {
        font-size: 24px;
        font-weight: bold;
    }

    @media (max-width: 600px) {
        & {
            gap: unset;
            justify-content: space-between;

            & > h2 {
                font-size: 20px;
            }
        }
    }
`;

export const LISTCONTENT = styled.section`
    margin-top: 30px;

    &.scrollable{
        display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 30px;
    overflow-x: auto;
    overflow-y: hidden;
    
    padding-bottom: 20px;
    scroll-behavior: auto;

    & > * ${(props) =>
        props.contentWidth && props.isVideo
            ? `{
                width : ${props.contentWidth} !important;
                min-width : ${props.contentWidth} !important;
                aspect-ratio: 16 / 9 !important;
                height : auto !important;

                @media (max-width: 600px) {
                    & {
                        width: 300px !important;
                        min-width: 300px !important;
                    }
                }

            }`
            : `{width : 200px !important; min-width : 200px !important}`};
  

    & > .loading {
        width: 100%;
        min-height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        align-self: stretch;
    }

    /* Scrollbar height */
    &::-webkit-scrollbar {
        height: 5px;
    }

    /* Scrollbar Track */
    &::-webkit-scrollbar-track {
        border-radius: 10px;
    }

    /* Scrollbar Handle */
    &::-webkit-scrollbar-thumb {
        background: red;
        border-radius: 10px;
    }

    /* Scrollbar Handle on hover */
    &::-webkit-scrollbar-thumb:hover {
        background: #b30000;
    }
    }
`;
