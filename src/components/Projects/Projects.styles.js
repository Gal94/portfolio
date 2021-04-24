import Styled from 'styled-components';

export const ProjectsContainer = Styled.div`
    text-align: center;
    width: 100%;
    padding: 4rem 0;

    @media screen and (min-width: 800px) {
        width: 80%;
    }
`;

export const ProjectsWrapper = Styled.div`
    @media screen and (min-width: 800px) {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
    }
`;

export const ProjectsSection = Styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    background-color: #d0d0d0;
`;
