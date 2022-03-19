import React from "react";

import { AppLogo } from "components";

import { HeaderNavWrapper, HeaderWrapper, NavItem } from "./Header.styles";

const Header: React.FC = () => {
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
    </HeaderWrapper>
  );
};

export default Header;
