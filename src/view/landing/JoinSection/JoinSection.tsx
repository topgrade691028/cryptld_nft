import React from "react";
import { Container, CustomButton } from "components";
import {
  JoinContentWrapper,
  JoinDesc,
  JoinImageWrapper,
  JoinSectionWrapper,
  JoinTitle,
} from "./JoinSection.styles";
import joinImg from "assets/images/join.png";

const JoinSection: React.FC = () => {
  return (
    <Container>
      <JoinSectionWrapper>
        <JoinContentWrapper>
          <JoinTitle>Join The Discord</JoinTitle>
          <CustomButton
            onClick={() => {}}
            borderColor={"#CB5BFF, #A660FF"}
            fColor={"#A34AEA"}
            width={627}
            shadow="#CB5BFF"
          >
            {"Join Server"}
          </CustomButton>
          <JoinDesc>
            {
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            }
            <br />
            <br />
            {
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "
            }
            <br />
            <br />
            {
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "
            }
          </JoinDesc>
        </JoinContentWrapper>
        <JoinImageWrapper>
          <img src={joinImg.src} alt="joinImg" />
        </JoinImageWrapper>
      </JoinSectionWrapper>
    </Container>
  );
};

export default JoinSection;
