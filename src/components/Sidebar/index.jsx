import React from 'react';
import {
    SidebarContainer,
    CloseIcon,
    Icon,
    SidebarBtnWrap,
    SidebarLink,
    SidebarRoute,
    SidebarWrapper,
    SidebarMenu
} from './SidebarElements';

const Sidebar = ({onToggle, isOpen}) => {

    return (
        <SidebarContainer isOpen={isOpen}>
            <Icon>
                <CloseIcon onClick={onToggle} />
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to="about" onClick={onToggle}>
                        About
                    </SidebarLink>
                    <SidebarLink to="discover" onClick={onToggle}>
                        Discover
                    </SidebarLink>
                    <SidebarLink to="services" onClick={onToggle}>
                        Services
                    </SidebarLink>
                    <SidebarLink to="signup" onClick={onToggle}>
                        Sign Up
                    </SidebarLink>
                </SidebarMenu>
                <SidebarBtnWrap>
                    <SidebarRoute to="/signin">
                        Sign In
                    </SidebarRoute>
                </SidebarBtnWrap>
            </SidebarWrapper>
        </SidebarContainer>
    );
};

export default Sidebar;