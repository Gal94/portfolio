import Styled from 'styled-components';

export const StyledFooter = Styled.footer`
    height: 3rem;
    width: 100%;
    background-color: #242222;
    color: #bf1327;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const FooterText = Styled.p`
    text-align: center;
    font-size: 12px;
    margin: 0;

    @media screen and (min-width: 800px) {
        font-size: 16px;
    }
`;
