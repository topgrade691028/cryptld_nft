import React from "react";
import { Container, CustomButton } from "components";
import { MintDesc, MintSectionWrapper, MintTitle } from "./MintSection.styles";

const MintSection: React.FC = () => {
  return (
    <Container>
      <MintSectionWrapper>
        <MintTitle>Mint A Lycan</MintTitle>
        <MintDesc>
          {
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          }
        </MintDesc>
        <CustomButton
          onClick={() => {}}
          borderColor={"#CB5BFF, #A660FF"}
          fColor={"#A34AEA"}
          width={732}
          shadow="#CB5BFF"
          title="Mint Yours Now >"
        >
          {"Mint Yours Now >"}
        </CustomButton>
      </MintSectionWrapper>
    </Container>
  );
};

export default MintSection;
