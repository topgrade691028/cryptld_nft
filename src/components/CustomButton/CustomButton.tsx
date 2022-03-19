import React from "react";

import { ButtonWrapper } from "./CustomButton.styles";

export interface ButtonProps {
  borderColor: string;
  fColor?: string;
  width: number;
  onClick: VoidFunction;
  shadow: string;
}

const CustomButton: React.FC<ButtonProps> = ({
  children,
  borderColor,
  width,
  onClick,
  fColor,
  shadow,
}) => {
  return (
    <ButtonWrapper
      fColor={fColor}
      borderColor={borderColor}
      onClick={onClick}
      width={width}
      shadow={shadow}
    >
      {children}
    </ButtonWrapper>
  );
};

export default CustomButton;
