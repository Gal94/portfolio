import ScrollAnimation from 'react-animate-on-scroll';
import { AboutMeTitle, StyledHr } from '../AboutMe/AboutMe.styles';
import Project from './Project/Project.component';
import {
    ProjectsContainer,
    ProjectsSection,
    ProjectsWrapper,
} from './Projects.styles';
import mymenu from '../../assets/images/mymenu.png';
import pchip from '../../assets/images/pchip.png';
import cs20 from '../../assets/images/cs20.png';
import ecom from '../../assets/images/ecom.jpg';
import socialzy from '../../assets/images/socialzy.png';

const Projects = () => {
    return (
        <ProjectsSection id='projects'>
            <ProjectsContainer>
                <ScrollAnimation
                    animateIn='fadeInRight'
                    initiallyVisible={false}
                    animateOnce={true}
                >
                    <AboutMeTitle>PROJECTS</AboutMeTitle>
                    <StyledHr />
                </ScrollAnimation>
                <ScrollAnimation
                    animateIn='fadeInLeft'
                    initiallyVisible={false}
                    animateOnce={true}
                >
                    <ProjectsWrapper>
                        <Project
                            title='MyMenu'
                            stack='react JS / Node / Styled-Components'
                            description='MyMenu is a free web application where users can insert their micronutrients, build a menu and see how it compares to their daily values.'
                            link='https://mymenu-client.herokuapp.com'
                            code='https://github.com/Gal94/My-Menu'
                            image={mymenu}
                        />
                        <Project
                            title='PChip'
                            stack='react JS / Node / CSS-Modules'
                            description='PChip is a mock website for a startup company. Owners can publish new positions and change the employees in the homepage.'
                            link='https://pchip-front.herokuapp.com'
                            code='https://github.com/Gal94/PChip'
                            image={pchip}
                        />
                        <Project
                            title='CS20'
                            stack='react JS / Styled-Components'
                            description='CS20 is a repository website serving the students of Holon Institute of Technology'
                            link='https://cs20.co.il'
                            code='https://github.com/Gal94/cs2020'
                            image={cs20}
                        />
                        <Project
                            title='Socialzy'
                            stack='react JS / Node / Material-UI'
                            description='A social website application. Registered users can post, comment, upload images, follow users and like other users posts.'
                            code='https://github.com/Gal94/socialzy'
                            image={socialzy}
                        />
                        <Project
                            title='E-COM'
                            stack='react JS / Node / Firebase'
                            description='E-COM is an online clothing shop. Users can add products to cart, purchase and review past orders'
                            code='https://github.com/Gal94/E-com'
                            image={ecom}
                        />
                    </ProjectsWrapper>
                </ScrollAnimation>
            </ProjectsContainer>
        </ProjectsSection>
    );
};

export default Projects;
