import Styled, { css, keyframes } from 'styled-components';

export const TechnologiesContainer = Styled.div`
@media screen and (min-width: 800px) {
    margin-top: 4rem;
}
`;

export const TechnologiesTitle = Styled.h1`
    font-size: 24px;
    margin-top: 28px;

    @media screen and (min-width: 800px) {
        font-size: 28px;
    }
`;
export const TechnologiesIconContainer = Styled.div`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;

`;

export const IconContainer = Styled.div`
    width: 30%;
    margin: 8px 0;

    @media screen and (min-width: 800px) {
        margin-top: 20px;
    }
`;

const spin = keyframes`
    0% {
        transform: rotate(0);
    } 50% {
        transform: rotate(180deg)
    } 100% {
        transform: rotate(360deg);
    }
`;

const animation = (props) => {
    if (props.animation) {
        return css`
            animation: ${spin} 10s linear infinite;
        `;
    }
};

// * optional: ${animation}
export const TechIcon = Styled.i`
    color: #bf1327;

    @media screen and (min-width: 800px) {
        font-size: 56px;
    }
`;

export const TechTitle = Styled.h1`
    margin: 0;
    font-size: 20px;
    color: #bf1327;
    @media screen and (min-width: 800px) {
        font-size: 24px;
    }
`;

export const TechDesc = Styled.p`
    font-size: 13px;
    margin: 4px 0;

    @media screen and (min-width: 800px) {
        font-size: 16px;
    }
`;
