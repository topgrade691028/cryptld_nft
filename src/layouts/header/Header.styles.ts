import styled from "styled-components";

export const HeaderWrapper = styled.div`
  background: linear-gradient(0deg, #272727, #272727),
    linear-gradient(269.89deg, #0b0d10 0%, #2a2f35 100%);
  box-shadow: 0px 4px 142px rgba(0, 0, 0, 0.4);
  display: flex;
  width: 100%;
  align-items: center;
  height: 77px;
  @media screen and (max-width: 650px) {
    justify-content: space-between;
    padding-right: 20px;
  }
`;

export const HeaderNavWrapper = styled.div`
  & > * {
    margin-left: 35px;
  }
  display: flex;
  align-items: center;
  @media screen and (max-width: 650px) {
    display: none;
  }
`;

export const NavItem = styled.span`
  font-weight: 400;
  font-family: steamwreck;
  font-size: 45px;
  cursor: pointer;
  line-height: 56px;
  display: block;
`;

export const NavMenuIcon = styled.div`
  display: none;
  @media screen and (max-width: 650px) {
    display: flex;
    font-family: steamwreck;
    font-size: 45px;
    line-height: 56px;
    color: #e2be62;
  }
  svg {
    cursor: pointer;
  }
`;

export const SidebarWrapper = styled.div<{ show: boolean }>`
  padding: 50px 30px;
  width: 280px;
  position: fixed;
  height: 100%;
  top: 0;
  transition: all 0.3s;
  left: -290px;
  background-color: #000000dd;
  backdrop-filter: blur(10px);
  z-index: 9999;
  box-shadow: 0 0 10px #000;
  @media screen and (max-width: 650px) {
    left: ${({ show }) => (!show ? "-290px" : "0")};
  }
`;

export const Overlay = styled.div<{ show: boolean }>`
  position: fixed;
  background-color: #00000080;
  width: 100vw;
  transition: all 0.3s;
  height: 200vh;
  opacity: 0;
  visibility: hidden;

  z-index: 999;
  @media screen and (max-width: 650px) {
    opacity: ${({ show }) => (!show ? "0" : "1")};
    visibility: ${({ show }) => (!show ? "hidden" : "visible")};
  }
`;
