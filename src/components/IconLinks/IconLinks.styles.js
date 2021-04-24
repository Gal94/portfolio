import Styled from 'styled-components';

export const IconLinksContainer = Styled.div`
    display: flex;
    width: fit-content;
    margin: 0 auto;
`;

export const IconContainer = Styled.div`
    background-color: #bf1327;
    width: 40px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    margin: 0 8px;

    @media screen and (min-width: 800px) {
        width: 50px;
        height: 50px;
        transition: background-color .09s ease-in-out;

        &:hover {
            background-color: #bf1327c0;
        }
    }
`;

export const IconLink = Styled.a`
    text-decoration: none;
    width: 55px;
`;
