import {
    IconContainer,
    TechDesc,
    TechIcon,
    TechnologiesContainer,
    TechnologiesIconContainer,
    TechnologiesTitle,
    TechTitle,
} from './Technologies.styles';

const Technologies = () => {
    return (
        <TechnologiesContainer>
            <TechnologiesTitle>Tech Stack</TechnologiesTitle>
            <TechnologiesIconContainer>
                <IconContainer>
                    <TechIcon
                        className='fab fa-react fa-3x'
                        animation={true}
                    ></TechIcon>
                    <TechTitle>React JS</TechTitle>
                    <TechDesc>Redux, Router, Lazy loading</TechDesc>
                </IconContainer>
                <IconContainer>
                    <TechIcon className='fab fa-node-js fa-3x'></TechIcon>
                    <TechTitle>Node</TechTitle>
                    <TechDesc>Express, Event Loop, NPM, Yarn</TechDesc>
                </IconContainer>
                <IconContainer>
                    <TechIcon className='fas fa-database fa-3x'></TechIcon>
                    <TechTitle>Databases</TechTitle>
                    <TechDesc>PostgreSQL, MongoDB, Firebase</TechDesc>
                </IconContainer>
                <IconContainer>
                    <TechIcon className='fab fa-css3-alt fa-3x'></TechIcon>
                    <TechTitle>CSS</TechTitle>
                    <TechDesc>Styled-Components, Material-UI, Sass</TechDesc>
                </IconContainer>
                <IconContainer>
                    <TechIcon className='fas fa-vial fa-3x'></TechIcon>
                    <TechTitle>Testing</TechTitle>
                    <TechDesc>Jest, Enzyme</TechDesc>
                </IconContainer>
                <IconContainer>
                    <TechIcon className='fab fa-jenkins fa-3x'></TechIcon>
                    <TechTitle>CI/CD</TechTitle>
                    <TechDesc>Jenkins, GitHub Actions</TechDesc>
                </IconContainer>
            </TechnologiesIconContainer>
        </TechnologiesContainer>
    );
};

export default Technologies;
