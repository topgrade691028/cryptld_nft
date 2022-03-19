import styled from "styled-components";

export const AboutSectionWrapper = styled.div`
  margin-top: -22%;
  position: relative;
  @media screen and (max-width: 1024px) {
    margin-top: -5%;
  }
  & > div:first-child {
    z-index: 1;
    position: absolute;
    transform: translateX(-50%);
    left: 50%;
    top: 24%;
    @media screen and (max-width: 1024px) {
      position: relative;
      left: 0%;
      padding: 5% 0;
      transform: translateY(0);
    }
  }
  & > img {
    @media screen and (max-width: 1024px) {
      display: none;
    }

    /* height: 100%; */
  }
`;

export const AboutBG = styled.div`
  z-index: 0;
  display: none;
  top: 0;
  width: 100%;
  position: absolute;
  background: linear-gradient(200.04deg, #f5b434 15.16%, #9f632b 90.58%);
  box-shadow: 0px 0px 139px rgba(0, 0, 0, 0.25);
  height: 100%;
  @media screen and (max-width: 1024px) {
    display: block;
  }
`;

export const AboutImg = styled.img`
  width: 100%;
`;

export const AboutCardWrapper = styled.div`
  display: grid;
  top: 10%;
  grid-template-columns: repeat(5, 1fr);
  margin: auto;
  grid-gap: 2%;
  width: 100%;
  @media screen and (max-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 20px;
  }
  @media screen and (max-width: 600px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media screen and (max-width: 425px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;
