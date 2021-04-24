import { useState } from 'react';
import { Link } from 'react-scroll';
import ScrollAnimation from 'react-animate-on-scroll';
import image from './profile-no-bg.png';
import {
    ImageContainer,
    ProfileArrowIcon,
    ProfileButton,
    ProfileContainer,
    ProfileDescription,
    ProfileName,
    ProfileTextContainer,
} from './Profile.styles';
const Profile = () => {
    const [mouseEnter, setMouseEnter] = useState(false);

    return (
        <ProfileContainer>
            <ScrollAnimation
                animateIn='fadeInDown'
                initiallyVisible={false}
                animateOnce={true}
            >
                <ImageContainer src={image} />
            </ScrollAnimation>
            <ScrollAnimation
                animateIn='fadeInUp'
                initiallyVisible={false}
                animateOnce={true}
            >
                <ProfileTextContainer>
                    <ProfileDescription>
                        Hello, I'm{' '}
                        <ProfileName style={{ color: '#bf1327' }}>
                            Gal Yacobi
                        </ProfileName>
                        .
                    </ProfileDescription>
                    <ProfileDescription>
                        I'm a full-stack developer.
                    </ProfileDescription>
                </ProfileTextContainer>
            </ScrollAnimation>
            <ScrollAnimation
                animateIn='fadeInUpBig'
                initiallyVisible={false}
                animateOnce={true}
            >
                <Link to='about' spy={true} smooth={true}>
                    <ProfileButton
                        onMouseEnter={() => setMouseEnter(true)}
                        onMouseLeave={() => setMouseEnter(false)}
                    >
                        Let's get started{' '}
                        <ProfileArrowIcon
                            mouseEnter={mouseEnter}
                            className='fas fa-arrow-up fa-xs'
                        ></ProfileArrowIcon>
                    </ProfileButton>
                </Link>
            </ScrollAnimation>
        </ProfileContainer>
    );
};

export default Profile;
