import React from 'react'
import{
    SidebarContainer,
    Icon,
    CloseIcon,
    SidebarWrapper,
    SidebarMenu,
    SidebarLink,
    SideBtnWrap,
    SidebarRoute,
} from './SidebarElements';

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle} >
        <Icon onClick={toggle} >
            <CloseIcon />
        </Icon>
        <SidebarWrapper>
            <SidebarMenu>
                <SidebarLink to="about" onClick={toggle} > About</SidebarLink>
                <SidebarLink to="experience" onClick={toggle} >Experience</SidebarLink>
                <SidebarLink to="projects" onClick={toggle} >Projects</SidebarLink>
            </SidebarMenu>

            <SideBtnWrap>
                <SidebarRoute to="https://dreamy-khapse-a1e820.netlify.app/" target='_blank'>Contact Me</SidebarRoute>
            </SideBtnWrap>
        </SidebarWrapper>
    </SidebarContainer>
  )
}

export default Sidebar