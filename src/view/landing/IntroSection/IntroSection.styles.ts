import styled from "styled-components";

export const IntroSectionWrapper = styled.div`
  position: relative;
`;

export const IntroImgWrapper = styled.div`
  width: 100%;
  text-align: right;
  img {
    margin-top: -4%;
    width: 65%;
    height: auto;
  }
`;

export const IntroContent = styled.div`
  width: 50%;
  position: absolute;
  margin-top: 30px;
  @media screen and (max-width: 1024px) {
    position: static;
    width: 100%;
    text-align: center;
    & > div:first-child {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }
  }
`;

export const IntroTitle = styled.h1`
  margin: 0;
  margin-bottom: 20px;
  font-family: steamwreck;
  font-weight: 400;
  font-size: 140px;
  line-height: 174px;
  transition: all 0.3s;

  -webkit-text-stroke: 1px #ffffff50;
  @media screen and (max-width: 1440px) {
    font-size: 120px;
  }
  @media screen and (max-width: 1360px) {
    font-size: 110px;
  }
  @media screen and (max-width: 1165px) {
    font-size: 100px;
  }
  @media screen and (max-width: 1024px) {
    font-size: clamp(60px, 18vw, 140px);
  }
`;

export const IntroDesc = styled.p`
  margin: 0;
  margin-top: 30px;
  font-family: Poppins;
  font-weight: 600;
  font-size: 27px;
  line-height: 40px;
  max-width: 600px;
  width: 100%;
  @media screen and (max-width: 1440px) {
    font-size: 24px;
  }
  @media screen and (max-width: 1360px) {
    font-size: 16px;
  }
  @media screen and (max-width: 1024px) {
    font-size: clamp(20px, 5vw, 27px);
  }
`;

export const ButtonWrapper = styled.div`
  width: 90%;
  @media screen and (max-width: 1024px) {
    display: flex;
    justify-content: center;
  }
`;
