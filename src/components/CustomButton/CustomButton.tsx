import React from "react";

import { ButtonDiv, ButtonWrapper } from "./CustomButton.styles";

export interface ButtonProps {
  borderColor: string;
  fColor?: string;
  width: number;
  onClick: VoidFunction;
  shadow: string;
  title?: string;
}

const CustomButton: React.FC<ButtonProps> = ({
  children,
  borderColor,
  width,
  title,
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
      <ButtonDiv title={title}>{children}</ButtonDiv>
    </ButtonWrapper>
  );
};

export default CustomButton;
