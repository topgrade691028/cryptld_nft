import styled from "styled-components";

export const PolygonWrapper = styled.div``;

export const Polygon1 = styled.img<{ transform: string }>`
  right: -8%;
  z-index: 3;
  top: -20%;
  transform: ${({ transform }) => transform};
`;

export const Polygon2 = styled.img<{ transform: string }>`
  left: -14%;
  transform: rotate(45deg);
  bottom: -30%;
  transform: ${({ transform }) => transform};
  z-index: 3;
  @media screen and (max-width: 768px) {
    bottom: 10%;
  }
`;

export const Polygon3 = styled.img<{ transform: string }>`
  left: 35%;
  z-index: 0;
  transform: ${({ transform }) => transform};
  top: -4%;
`;

export const Polygon4 = styled.img<{ transform: string }>`
  z-index: 3;
  right: -15%;
  transform: ${({ transform }) => transform};
  top: 40%;
`;
