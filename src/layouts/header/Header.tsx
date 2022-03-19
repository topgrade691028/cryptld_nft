import React, { useState } from "react";
import { ImMenu } from "react-icons/im";

import { AppLogo } from "components";

import {
  HeaderNavWrapper,
  HeaderWrapper,
  NavItem,
  NavMenuIcon,
  Overlay,
  SidebarWrapper,
} from "./Header.styles";

const Header: React.FC = () => {
  const [show, setShow] = useState(false);

  const handleMenu = () => {
    setShow(true);
  };

  const handleCancel = () => {
    setShow(false);
  };

  return (
    <HeaderWrapper>
      <AppLogo />
      <HeaderNavWrapper>
        <NavItem className="gradient-font">Home</NavItem>
        <NavItem className="gradient-font">About</NavItem>
        <NavItem className="gradient-font">Roadmap</NavItem>
        <NavItem className="gradient-font">Team</NavItem>
        <NavItem className="gradient-font">The mint</NavItem>
      </HeaderNavWrapper>
      <NavMenuIcon>
        <ImMenu onClick={handleMenu} />
      </NavMenuIcon>
      <SidebarWrapper show={show}>
        <NavItem className="gradient-font">Home</NavItem>
        <NavItem className="gradient-font">About</NavItem>
        <NavItem className="gradient-font">Roadmap</NavItem>
        <NavItem className="gradient-font">Team</NavItem>
        <NavItem className="gradient-font">The mint</NavItem>
      </SidebarWrapper>
      <Overlay show={show} onClick={handleCancel} />
    </HeaderWrapper>
  );
};

export default Header;
