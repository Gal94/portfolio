import Styled, { css } from 'styled-components';

export const ProjectContainer = Styled.div`
    width: 100%;
    margin: .5rem 0;
    
    @media screen and (min-width: 800px) {
        width: 35rem;
    }
`;

const setBackground = (props) => {
    return css`
        background: url(${props.background});
        background-size: cover;
        background-position: center;
    `;
};

export const ProjectWrapper = Styled.div`
    height: 400px;
    width: 90%;
    margin: 0 auto;
    ${setBackground}
    position: relative;

    &::after {
       position: absolute;
       display: flex;
       justify-content: center;
       align-items: center;
       font-style: normal;
       font-variant: normal;
       text-rendering: auto;
       font-family: "Font Awesome 5 Free";
       font-weight: 900;
       font-size: 20px;
       content: "\f8cc";
       color: white;
       bottom: 0;
       right: 0;
       height: 35px;
       width: 35px;
       background-color: #00000090;
    }
`;

const toFadeIn = (props) => {
    if (props.toFadeIn) {
        return css`
            opacity: 1;
        `;
    } else {
        return css`
            opacity: 0;
        `;
    }
};

export const ProjectDetailsContainer = Styled.div`
    width: 100%;
    height: 100%;
    background-color: #f0f0f0ef;
    position: relative;
    display: flex;
    flex-direction: column;
    ${toFadeIn}
    transition: opacity 0.5s ease-in-out
`;

const fadeTopContainerIn = (props) => {
    if (props.toFadeIn) {
        return css`
            transform: translateY(0rem);
            opacity: 1;
        `;
    }
    return css`
        transform: translateY(-2.5rem);
        opacity: 0;
    `;
};

export const ProjectDetailTop = Styled.div`
    height: 55%;
    padding-top: 1rem;
    ${fadeTopContainerIn}
    transition: all .5s ease-in-out;
`;

export const ProjectTitle = Styled.h1`
    margin: 12px 0 6px 0;
    color: #bf1327;
    font-size: 26px;
`;

export const ProjectStack = Styled.p`
    margin: 0;
    color: #242222;
    font-size: 12px;

    @media screen and (min-width: 800px) {
        font-size: 16px;
    }
`;

const fadeBottomContainerIn = (props) => {
    if (props.toFadeIn) {
        return css`
            transform: translateY(0rem);
            opacity: 1;
        `;
    }
    return css`
        transform: translateY(2.5rem);
        opacity: 0;
    `;
};

export const ProjectBottomContainer = Styled.div`
    height: 40%;
    padding: 0 2rem;
    ${fadeBottomContainerIn}
    transition: all .5s ease-in-out;

`;

const showBtn = (props) => {
    if (props.show) {
        return css`
            display: flex;
        `;
    }
    return css`
        display: none;
    `;
};

export const ButtonsContainer = Styled.div`
    ${showBtn}
    justify-content: center;
    transition-delay: 1s;
`;

export const ProjectButton = Styled.a`
    cursor: pointer;
    outline: none;
    border: 2px solid #242222;
    padding: 10px 8px;
    display: inline-block;
    margin-top: 1rem;
    text-decoration: none;
    color: #bf1327;
    width: 6rem;
    font-size: 14px;
    margin: 20px 4px;

    @media screen and (min-width: 800px) {
        width: 8rem;
        font-size: 16px;
        transition: all .09s ease-in-out; 
        &:hover {
            background-color: #bf1327;
            color: #f0f0f0;
        }
    }
`;
