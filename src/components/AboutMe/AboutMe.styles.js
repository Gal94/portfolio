import Styled from 'styled-components';

export const AboutMeContainer = Styled.div`
    text-align: center;
    padding: 4rem 2rem;

    @media screen and (min-width: 800px) {
        width: 60%;
        margin: 0 auto;
    }
`;

export const AboutMeTitle = Styled.h1`
    color: #242222;
    font-size: 30px;
    margin: 0;

`;

export const StyledHr = Styled.hr`
    width: 5rem;
    height: 4px;
    outline: none;
    border: none;
    border-radius: 10px;
    background-color: #bf1327;
    margin-bottom: 24px;
    margin-top: 12px;
`;

export const AboutMeText = Styled.p`
    text-align: center;
    font-size: 16px;
    line-height: 1.5rem;
    margin: 18px 0 0 0;
    color: #242222;

    @media screen and (min-width: 800px) {
        font-size: 20px;
        width: 35rem;
        margin: 18px auto;
    }
`;
