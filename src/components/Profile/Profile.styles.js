import Styled, { css } from 'styled-components';

export const ProfileContainer = Styled.div`
    position: relative;
    background: transparent;
`;

export const ImageContainer = Styled.img`
    border-radius:50%;
    background-color: #f0f0f0;
    box-shadow: 0px 0px 5px 1px #bf1327;
    height: 200px;
    width: 200px;
    display: block;
    margin: 0 auto;
    z-index: 1;
`;

export const ProfileTextContainer = Styled.div`
    text-align: center;
    width: fit-content;
    margin: 16px auto;
`;

export const ProfileName = Styled.span`
`;

export const ProfileDescription = Styled.p`
    font-size: 24px;
    color: #242222;
    font-weight: bold;
    margin: 4px 0;
    letter-spacing: -.25px;
`;

const rotate = (props) => {
    if (props.mouseEnter) {
        return css`
            transform: rotate(180deg);
        `;
    }
};

export const ProfileArrowIcon = Styled.i`
    transform: rotate(90deg);
    transition: transform .09s ease-in;
    ${rotate}
`;

export const ProfileButton = Styled.button`
    padding: 10px;
    background-color: #f0f0f0;
    border: 2px solid #bf1327;
    border-radius: 4px;
    outline: none;
    font-size: 18px;
    color: #bf1327;
    cursor: pointer;
    z-index: 1;
    display: block;
    margin: 0 auto;
    font-weight: bold;

    @media screen and (min-width: 1024px) {
        font-size: 20px;
        position: relative;
        background: transparent;
        transition: color 0.09s ease-in;
        
        &:hover {
            color: #f0f0f0;
        }

        &:before {
            content: "";
            position: absolute;
            background: #bf1327;
            bottom: 0;
            left: 0;
            right: 100%;
            top: 0;
            z-index: -1;
            transition: right 0.09s ease-in;
          }
        &:hover:before {
            right: 0;
          }

`;
