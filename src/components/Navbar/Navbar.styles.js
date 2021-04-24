import Styled, { css } from 'styled-components';
import { Link } from 'react-scroll';

const scrolled = css`
    position: sticky;
    top: 0;
    color: #f0f0f0;
    z-index: 100;
`;

const isScrolled = (props) => {
    if (props.scrolled) {
        return scrolled;
    }
};

export const NavbarContainer = Styled.div`
    width: 100%;
    height: 4rem;
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #eee;
    transition: all .7s ease-in;
    background-color: #242222;
    border-bottom: 5px solid #bf1327;
    color: #f0f0f0;
    position: relative;
    z-index: 100;
    margin-top: 1rem;
    ${isScrolled}
`;

export const NavbarNav = Styled.nav`
    width: 100%;
`;

export const NavbarUl = Styled.ul`
    padding: 0;
    display: flex;
    justify-content: space-around;
    list-style: none;

    @media screen and (min-width: 800px) {
        width: 60%;
        margin: 0 auto;
    }
`;

export const NavBarItem = Styled.li`
    padding: 0;
    text-align: center;
    width: fit-content;

    @media screen and (min-width: 1024px) {
        transition: color .09s ease-in-out;
        &:hover {
            color: #bf1327;
        }
    }
`;

export const NavBarLink = Styled(Link)`
    padding: 0;
    text-decoration: none;
    font-weight: bold;
    cursor: pointer;
    transition: color .09s ease-in-out;

    &.active {
        color: #bf1327;
    }
`;

export const NavBarIcon = Styled.i`
    display: block;
    margin: 2px auto;
`;
