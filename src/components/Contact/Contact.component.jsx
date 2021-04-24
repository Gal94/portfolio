import ScrollAnimation from 'react-animate-on-scroll';
import { StyledHr } from '../AboutMe/AboutMe.styles';
import IconLinks from '../IconLinks/IconLinks.component';
import {
    ContactContainer,
    ContactMeText,
    ContactSection,
    ContactText,
    ContactTextDiv,
    ContactTitle,
} from './Contact.styles';

const Contact = () => {
    return (
        <ContactSection id='contact'>
            <ContactContainer>
                <ScrollAnimation
                    animateIn='fadeInDown'
                    initiallyVisible={false}
                    animateOnce={true}
                >
                    <ContactTitle>Contact</ContactTitle>
                </ScrollAnimation>
                <StyledHr />
                <ContactTextDiv>
                    <ScrollAnimation
                        animateIn='fadeInRight'
                        initiallyVisible={false}
                        animateOnce={true}
                    >
                        <ContactText>
                            I'm seeking out new opportunities to collaborate
                            with companies or individuals. The ideal workplace
                            for me would be an environment where co-workers are
                            striving to keep growing as developers, tackling
                            complex problems with open-minded people that have a
                            "get things done" mindset.
                        </ContactText>
                    </ScrollAnimation>
                    <ScrollAnimation
                        animateIn='fadeInLeft'
                        initiallyVisible={false}
                        animateOnce={true}
                    >
                        <ContactText>
                            If you are an individual who's interested in making
                            their ideas into a reality, you have a professional
                            attitude and know what you're looking for in your
                            application, I'd be delighted to work with you on
                            making those ideas into a reality.
                        </ContactText>
                    </ScrollAnimation>
                    <ScrollAnimation
                        animateIn='fadeInUp'
                        initiallyVisible={false}
                        animateOnce={true}
                    >
                        <ContactMeText>You can reach me here:</ContactMeText>
                        <IconLinks />
                    </ScrollAnimation>
                </ContactTextDiv>
            </ContactContainer>
        </ContactSection>
    );
};

export default Contact;
