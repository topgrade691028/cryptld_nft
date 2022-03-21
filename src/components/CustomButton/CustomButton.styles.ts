import styled, { keyframes } from "styled-components";

import { ButtonProps } from "./CustomButton";

export const ButtonWrapper = styled.div<ButtonProps>`
  cursor: pointer;
  background: ${({ borderColor }) => "linear-gradient(" + borderColor + ")"};
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
  :hover {
    & > div {
      .span0 {
        animation: glitch1 0.5s ease;
      }
      .span1 {
        animation: glitch2 0.5s ease;
      }
      .span2 {
        animation: glitch3 0.5s ease;
      }
    }
  }
  @keyframes glitch1 {
    0% {
      text-shadow: -2px 3px 0 red, 2px -3px 0 blue;
      transform: translate(8px);
    }
    10% {
      text-shadow: 2px -3px 0 red, -2px 3px 0 blue;
    }
    20%,
    100% {
      text-shadow: none;
      transform: none;
    }
  }
  @keyframes glitch2 {
    0% {
      text-shadow: -2px 3px 0 red, 2px -3px 0 blue;
      transform: translate(-8px);
    }
    10% {
      text-shadow: 2px -3px 0 red, -2px 3px 0 blue;
    }
    20%,
    100% {
      text-shadow: none;
      transform: none;
    }
  }
  @keyframes glitch3 {
    0% {
      text-shadow: -2px 3px 0 red, 2px -3px 0 blue;
      transform: translate(8px);
    }
    10% {
      text-shadow: 2px -3px 0 red, -2px 3px 0 blue;
    }
    20%,
    100% {
      text-shadow: none;
      transform: none;
    }
  }
`;

export const ButtonDiv = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  span {
    grid-row-start: 1;
    grid-column-start: 1;
  }

  .span0 {
    clip-path: inset(
      calc(calc(100% / 3 - 1px) * 0) 0
        calc(calc(100% / 3 - 1px) * calc(calc(3 - 1) - 0)) 0
    );
  }
  .span1 {
    clip-path: inset(
      calc(calc(100% / 3 - 1px) * 1) 0
        calc(calc(100% / 3 - 1px) * calc(calc(3 - 1) - 1)) 0
    );
  }
  .span2 {
    clip-path: inset(
      calc(calc(100% / 3 - 1px) * 2) 0
        calc(calc(100% / 3 - 1px) * calc(calc(3 - 1) - 2)) 0
    );
  }
`;
