import {
    NavbarContainer,
    NavBarIcon,
    NavBarItem,
    NavBarLink,
    NavbarNav,
    NavbarUl,
} from './Navbar.styles';
import { useEffect, useState } from 'react';

//TODO proper navbar
const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);

    // ? Get 100vh size and make navbar sticky if scrolled beyond that
    const handleScroll = () => {
        const windowHeight = window.innerHeight;
        const offset = window.scrollY;
        if (offset > windowHeight) {
            setScrolled(true);
        } else {
            setScrolled(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
    });
    return (
        <NavbarContainer scrolled={scrolled}>
            <NavbarNav>
                <NavbarUl>
                    <NavBarItem>
                        <NavBarLink to='about' spy={true} smooth={true}>
                            <NavBarIcon className='far fa-address-card'></NavBarIcon>
                            About
                        </NavBarLink>
                    </NavBarItem>
                    <NavBarItem>
                        <NavBarLink to='projects' spy={true} smooth={true}>
                            <NavBarIcon className='fas fa-briefcase'></NavBarIcon>
                            Projects
                        </NavBarLink>
                    </NavBarItem>
                    <NavBarItem>
                        <NavBarLink to='contact' spy={true} smooth={true}>
                            <NavBarIcon className='fas fa-briefcase'></NavBarIcon>
                            Contact
                        </NavBarLink>
                    </NavBarItem>
                </NavbarUl>
            </NavbarNav>
        </NavbarContainer>
    );
};
export default Navbar;
