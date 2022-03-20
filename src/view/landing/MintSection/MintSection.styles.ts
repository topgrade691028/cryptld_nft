import styled from "styled-components";

export const MintSectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 100px 0;
`;

export const MintTitle = styled.h1`
  margin: 0;
  text-align: center;
  font-family: steamwreck;
  font-weight: 400;
  font-size: 140px;
  line-height: 174px;
  -webkit-text-stroke: 2px #daa3f3;
  background: linear-gradient(188.06deg, #cb5bff 16.11%, #3706c1 111.01%),
    linear-gradient(188.06deg, #a35bff 16.11%, #3706c1 111.01%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  -webkit-text-stroke: 1px #ffffff50;
  @media screen and (max-width: 1024px) {
    font-size: clamp(60px, 18vw, 140px);
  }
`;

export const MintDesc = styled.p`
  font-family: Poppins;
  font-weight: 600;
  font-size: 27px;
  line-height: 40px;
  text-align: center;
  margin: 0 auto;
  max-width: 1300px;
  width: 100%;
  margin-top: 20px;
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
