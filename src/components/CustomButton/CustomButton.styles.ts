import styled from "styled-components";

import { ButtonProps } from "./CustomButton";

export const ButtonWrapper = styled.div<ButtonProps>`
  background: linear-gradient(#ffc75b, #956b1b);
  max-width: ${({ width }) => width}px;
  width: 100%;
  filter: drop-shadow(0px 0px 20.096px ${({ shadow }) => shadow});
  font-weight: 600;
  font-size: 30px;
  font-family: Poppins;
  line-height: 45px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ fColor }) => fColor};
  padding: 20px 0;
  position: relative;
  ::before {
    position: absolute;
    content: "";
    width: calc(100% - 12px);
    height: calc(100% - 12px);
    z-index: -1;
    background: #0b0b0b;
  }
`;
