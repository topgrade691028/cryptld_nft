import React from "react";
import { ContainerWrapper } from "./Container.styles";

const Container: React.FC = ({ children }) => {
  return <ContainerWrapper>{children}</ContainerWrapper>;
};

export default Container;
