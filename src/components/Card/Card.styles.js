import Styled from 'styled-components';
import Particles from 'react-particles-js';

export const CardWrapper = Styled.div`
    background-color: #f0f0f0;
    position: relative;
`;

export const CardTopLine = Styled.div`
    width: 100%;
    background-color: #bf1327;
    height: 2vh;
    position: relative;

    &::after {
        content: '';
        top:0;
        bottom: 0;
        left: 0;
        right: 0;
        position: absolute;
        background-color: #00000015;
    }
`;
export const CardContent = Styled.div`
    padding: 24px;
    color: #bf1327;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 91vh;
    overflow: hidden;
`;

export const HeaderParticles = Styled(Particles)`
    position: absolute;
    top: 2vh;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: 0;
`;
