import styled from "styled-components";

export const LycansWrapper = styled.div`
  margin-top: -2%;
  margin-bottom: -3%;
  position: relative;
  overflow: hidden;
  padding: 9% 0 2%;
  ::after,
  ::before {
    z-index: 2;
    position: absolute;
    content: "";
    height: 5%;
    width: 120%;
    background: linear-gradient(90deg, #f096ff 40%, #ffffff, #ffabfc);
    box-shadow: 0 0 30px #ffabfc;
    transform: rotateZ(-3deg);
    left: -30px;
  }

  ::after {
    top: 12%;
  }
  ::before {
    bottom: 12%;
  }
`;

export const UnderLay = styled.div`
  background-color: #000;
  position: absolute;
  width: 120%;
  transform: rotateZ(-3deg);
  height: calc(100% - 180px);
  z-index: 0;
  top: 90px;
  left: -30px;
`;

export const LycansGroup = styled.div`
  display: flex;
  position: relative;
  z-index: 1;
  justify-content: space-between;
`;

export const ImgWrapper = styled.div`
  img {
    width: 100%;
  }
`;
