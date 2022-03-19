import styled from "styled-components";

export const AppLogoWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;

  padding: 0 23px;
  img {
    width: 46px;
    height: 46px;
  }
  @media screen and (max-width: 650px) {
    ::after {
      display: none;
    }
  }
  ::after {
    content: "";
    width: 3px;
    height: 58px;
    background: linear-gradient(
      180deg,
      rgba(116, 116, 116, 0.5456) 0%,
      rgba(58, 58, 58, 0.62) 100%
    );
    position: absolute;
    right: 0;
    border-radius: 22px;
  }
`;
