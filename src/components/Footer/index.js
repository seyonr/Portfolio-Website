import React from 'react';
import { FaLinkedin , FaGithub } from 'react-icons/fa';
import { animateScroll as scroll } from 'react-scroll';
import {
    FooterContainer,
    FooterWrap,
    SocialMedia,
    SocialMediaWrap,
    SocialLogo,
    WebsiteRights,
    SocialIcons,
    SocialIconLink,
} from './FooterElements';
import logo from '../../images/logo.png';

const Footer = () => {
    const toggleHome = () => {
        scroll.scrollToTop();
    }
  return (
    <FooterContainer>
        <FooterWrap>
            <SocialMedia>
                <SocialMediaWrap>
                    <SocialLogo to="/" onClick={toggleHome}><img src={logo} alt='Logo' to="/" onClick={toggleHome} className="logo" style={{ width: '70px   ' }}></img></SocialLogo>
                    <WebsiteRights>Seyon Ranjithkumar © {new Date().getFullYear()} All rights reserved.</WebsiteRights>
                    <SocialIcons>
                        <SocialIconLink href="https://www.linkedin.com/in/seyonranjithkumar/" target="_blank" arial-label="Linkedin"><FaLinkedin /></SocialIconLink>
                        <SocialIconLink href="https://github.com/seyonr" target="_blank" arial-label="Github"><FaGithub /></SocialIconLink>
                    </SocialIcons>
                </SocialMediaWrap>
            </SocialMedia>
        </FooterWrap>
    </FooterContainer>
  )
}

export default Footer
