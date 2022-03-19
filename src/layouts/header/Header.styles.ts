import styled from "styled-components";

export const HeaderWrapper = styled.div`
  background: linear-gradient(0deg, #272727, #272727),
    linear-gradient(269.89deg, #0b0d10 0%, #2a2f35 100%);
  box-shadow: 0px 4px 142px rgba(0, 0, 0, 0.4);
  display: flex;
  width: 100%;
  align-items: center;
  height: 77px;
`;

export const HeaderNavWrapper = styled.div`
  & > * {
    margin-left: 35px;
  }
  display: flex;
  align-items: center;
`;

export const NavItem = styled.span`
  font-weight: 400;
  font-family: steamwreck;
  font-size: 45px;
  line-height: 56px;
`;
