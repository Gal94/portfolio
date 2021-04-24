import Technologies from '../Technologies/Technologies.components';
import ScrollAnimation from 'react-animate-on-scroll';
import {
    AboutMeContainer,
    AboutMeText,
    AboutMeTitle,
    StyledHr,
} from './AboutMe.styles';

const AboutMe = () => {
    return (
        <section
            id='about'
            style={{
                minHeight: '100vh',
            }}
        >
            <AboutMeContainer>
                <ScrollAnimation
                    animateIn='fadeInRight'
                    initiallyVisible={false}
                    animateOnce={true}
                >
                    <AboutMeTitle>ABOUT ME</AboutMeTitle>
                    <StyledHr />
                    <AboutMeText>
                        I am a full stack web developer currently residing in
                        Qiryat Eqron, Israel.
                    </AboutMeText>
                    <AboutMeText>
                        My passions lie in creating responsive, fast and robust
                        websites. I also enjoy learning new technologies and
                        optimizing web applications.
                    </AboutMeText>
                    <AboutMeText>
                        In 2021 I graduated from Holon Institute of Technology
                        and currently hold a BS.c in Computer Science.
                    </AboutMeText>
                </ScrollAnimation>
                <ScrollAnimation
                    animateIn='fadeInLeft'
                    initiallyVisible={false}
                    animateOnce={true}
                >
                    <Technologies />
                </ScrollAnimation>
            </AboutMeContainer>
        </section>
    );
};

export default AboutMe;
