import styled from "styled-components";

export const JoinSectionWrapper = styled.div`
  display: flex;
  z-index: 1;
  justify-content: space-between;
  @media screen and (max-width: 1024px) {
    flex-direction: column;
  }
`;

export const JoinContentWrapper = styled.div`
  z-index: 1;
  width: 43%;
  @media screen and (max-width: 1024px) {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
`;

export const JoinImageWrapper = styled.div`
  z-index: 1;
  width: 55%;
  @media screen and (max-width: 1560px) {
    width: 52%;
  }
  iframe {
    margin-top: 40px;
    width: 100%;
    height: 600px;
    border: none;
    border-radius: 20px;
  }
  @media screen and (max-width: 1024px) {
    width: 100%;
    iframe {
      margin-top: 0;
    }
  }
`;

export const JoinTitle = styled.h1`
  margin: 0;
  margin-bottom: 30px;
  font-family: steamwreck;
  font-weight: 400;
  font-size: 140px;
  line-height: 174px;
  transition: all 0.3s;
  -webkit-text-stroke: 1px #ffffff50;
  @media screen and (max-width: 1560px) {
    font-size: 120px;
  }
  @media screen and (max-width: 1340px) {
    font-size: 105px;
  }
  @media screen and (max-width: 1270px) {
    font-size: 90px;
  }
  @media screen and (max-width: 1024px) {
    font-size: clamp(60px, 18vw, 140px);
  }

  background: linear-gradient(188.06deg, #cb5bff 16.11%, #3706c1 111.01%),
    linear-gradient(188.06deg, #ffc75b 16.11%, #69390c 111.01%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

export const JoinDesc = styled.p`
  font-family: Poppins;
  font-weight: 600;
  font-size: 27px;
  line-height: 40px;
  margin: 0 auto;
  max-width: 1300px;
  width: 100%;
  margin-top: 50px;
  margin-bottom: 70px;
  @media screen and (max-width: 1024px) {
    font-size: clamp(20px, 5vw, 27px);
  }
  background: linear-gradient(188.06deg, #cb5bff 16.11%, #882be6 111.01%),
    linear-gradient(188.06deg, #ffc75b 16.11%, #69490c 111.01%),
    linear-gradient(0deg, #cba74a, #cba74a), #cba74a;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;
