import React from "react";

import { AppLogoWrapper } from "./AppLogo.styles";

import logoImg from "assets/images/logo.png";

const AppLogo: React.FC = () => {
  return (
    <AppLogoWrapper>
      <img src={logoImg.src} alt="logoImg" />
    </AppLogoWrapper>
  );
};

export default AppLogo;
