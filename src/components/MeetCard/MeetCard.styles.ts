import styled from "styled-components";

export const CardWrapper = styled.div`
  background: linear-gradient(#ffc75b, #956b1b);
  width: 100%;
  box-shadow: 0px 0px 15px #916b21;
  position: relative;
  min-height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  ::after {
    position: absolute;
    width: calc(100% - 12px);
    height: calc(100% - 12px);
    background: #0b0b0b;
    content: "";
  }
`;

export const CardContent = styled.div`
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 35px 0;
`;

export const CardImg = styled.div`
  max-width: 117px;
  width: 90%;
`;

export const CardTitle = styled.h3`
  margin: 0;
  font-family: Poppins;
  font-style: normal;
  font-weight: 600;
  font-size: 27px;
  line-height: 40px;
  margin: 10px 0;
  background: linear-gradient(188.06deg, #ffc75b 16.11%, #a37214 111.01%),
    linear-gradient(0deg, #cba74a, #cba74a), #cba74a;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

export const CardDesc = styled.p`
  margin: 0;
  font-family: Poppins;
  font-weight: 500;
  font-size: 14px;
  line-height: 21px;
  text-align: center;
  width: 80%;
  background: linear-gradient(188.06deg, #ffc75b 16.11%, #a36f0a 111.01%),
    linear-gradient(0deg, #cba74a, #cba74a), #cba74a;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;
