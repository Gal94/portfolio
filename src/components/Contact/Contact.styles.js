import Styled from 'styled-components';

export const ContactSection = Styled.section`
    background-color: #f0f0f0;
    min-height: 100vh;

`;

export const ContactContainer = Styled.div`
    text-align: center;
    padding: 4rem 2rem;
    
    @media screen and (min-width: 800px) {
        width: 60%;
        margin: 0 auto;
    }
`;

export const ContactTitle = Styled.h1`
    color: #242222;
    font-size: 30px;
    margin: 0;
`;

export const ContactTextDiv = Styled.div`
    display: flex;
    flex-direction: column;
`;

export const ContactText = Styled.p`
    margin: 1rem 0;

    @media screen and (min-width: 800px) {
        width: 35rem;
        margin: 2rem auto;
        font-size: 20px;
    }
`;

export const ContactMeText = Styled.p`
    color: #bf1327;
    margin-top: 3rem;
    margin-bottom: 2rem;

    @media screen and (min-width: 800px) {
        font-size: 18px;
        font-weight: bold;
    }
`;
