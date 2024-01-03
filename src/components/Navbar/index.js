import React, {useEffect, useState} from 'react';
import { FaBars } from 'react-icons/fa';
import { animateScroll as scroll } from 'react-scroll';
import { 
    Nav, 
    NavbarContainer, 
    NavLogo, 
    MobileIcon, 
    NavMenu, 
    NavItem, 
    NavLinks,
    NavBtn,
    NavBtnLink, 
} from './NavbarElements';
import logo from '../../images/logo.png';

const Navbar = ({ toggle }) => {
    const [scrollNav, setScrollNav] = useState(false);

    const changeNav = () => {
        if(window.scrollY >= 80){
            setScrollNav(true);
        }else{
            setScrollNav(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', changeNav);
    }, []);

    const toggleHome = () => {
        scroll.scrollToTop();
    }
  return (
    <>
    <Nav scrollNav={scrollNav}>
        <NavbarContainer>
            {/* <img src={logo} to="/" onClick={toggleHome} className="logo"></img> */}
            {/* <NavLogo to='/' onClick={toggleHome} src={Image}>SR</NavLogo> */}
            <NavLogo to='/' onClick={toggleHome} src={Image}><img src={logo} alt='Logo' to="/" onClick={toggleHome} className="logo" style={{ width: '70px' }}></img></NavLogo>
            <MobileIcon onClick={toggle}>
                <FaBars />
            </MobileIcon>
            <NavMenu>
                <NavItem>
                    <NavLinks to='about' smooth={true} duration={500} spy={true} exact='true' offset={-80}>About</NavLinks>
                </NavItem>
                <NavItem>
                    <NavLinks to='experience' smooth={true} duration={500} spy={true} exact='true' offset={-80}>Experience</NavLinks>
                </NavItem>
                <NavItem>
                    <NavLinks to='projects' smooth={true} duration={500} spy={true} exact='true' offset={-80}>Projects</NavLinks>
                </NavItem>
            </NavMenu>
            <NavBtn>
                <NavBtnLink to="https://dreamy-khapse-a1e820.netlify.app/" target='_blank'>Contact Me</NavBtnLink>
            </NavBtn>
        </NavbarContainer>
    </Nav>
    </>
  );
};

export default Navbar;