import styled from "styled-components";

export const CardWrapper = styled.div`
  position: relative;
  width: 100%;
  background-color: #000;
  border-radius: 12px;
  font-weight: 600;
  font-size: 30px;
  line-height: 45px;
  padding-top: 120%;
  text-align: center;
  font-family: Poppins;
  display: flex;
  justify-content: center;
  align-items: center;
  p {
    top: 50%;
    margin: 0;
    transform: translateY(-50%);
    position: absolute;
  }
  @media screen and (max-width: 1024px) {
    margin-top: 0 !important;
  }
`;
