import styled from "styled-components";

export const MeetSectionWrapper = styled.div`
  margin-top: -7%;
  transition: all 0.3s;
  margin-bottom: 100px;
  position: relative;
  @media screen and (max-width: 1024px) {
    margin-top: 0;
  }
  @media screen and (max-width: 768px) {
    margin-bottom: 30px;
  }
`;

export const MeetTitle = styled.h1`
  margin: 0;
  margin-bottom: 20px;
  font-family: steamwreck;
  font-weight: 400;
  font-size: 140px;
  line-height: 174px;
  transition: all 0.3s;
  -webkit-text-stroke: 1px #ffffff50;
  @media screen and (max-width: 1360px) {
    font-size: 120px;
  }
  @media screen and (max-width: 1165px) {
    font-size: 105px;
  }
  @media screen and (max-width: 1024px) {
    font-size: clamp(60px, 18vw, 140px);
  }
`;
