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
    div {
      animation: glitch 1s linear infinite;
      ::before {
        animation: glitchTop 1s linear infinite;
      }
      ::after {
        animation: glitchBotom 1.5s linear infinite;
      }
    }
  }
`;

export const ButtonDiv = styled.div`
  position: relative;
  @keyframes glitch {
    2%,
    64% {
      transform: translate(2px, 0) skew(0deg);
    }
    4%,
    60% {
      transform: translate(-2px, 0) skew(0deg);
    }
    62% {
      transform: translate(0, 0) skew(5deg);
    }
  }
  ::before,
  ::after {
    content: attr(title);
    position: absolute;
    left: 0;
  }

  ::before {
    clip-path: polygon(0 0, 100% 0, 100% 33%, 0 33%);
    -webkit-clip-path: polygon(0 0, 100% 0, 100% 33%, 0 33%);
  }

  @keyframes glitchTop {
    2%,
    64% {
      transform: translate(2px, -2px);
    }
    4%,
    60% {
      transform: translate(-2px, 2px);
    }
    62% {
      transform: translate(13px, -1px) skew(-13deg);
    }
  }

  ::after {
    clip-path: polygon(0 67%, 100% 67%, 100% 100%, 0 100%);
    -webkit-clip-path: polygon(0 67%, 100% 67%, 100% 100%, 0 100%);
  }

  @keyframes glitchBotom {
    2%,
    64% {
      transform: translate(-2px, 0);
    }
    4%,
    60% {
      transform: translate(-2px, 0);
    }
    62% {
      transform: translate(-22px, 5px) skew(21deg);
    }
  }
`;
