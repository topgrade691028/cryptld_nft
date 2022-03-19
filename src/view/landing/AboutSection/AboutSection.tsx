import React from "react";
import {
  AboutBG,
  AboutCardWrapper,
  AboutImg,
  AboutSectionWrapper,
} from "./AboutSection.styles";
import bgImg from "assets/images/card-bg.png";
import AboutCard from "components/AboutCard/AboutCard";
import { Container } from "components";

const AboutSection: React.FC = () => {
  return (
    <AboutSectionWrapper>
      <Container>
        <AboutCardWrapper>
          {[1, 2, 3, 4, 5].map((item: any, key: any) => (
            <AboutCard
              key={key}
              style={{ marginTop: 10 * item + "%", marginBottom: "auto" }}
            />
          ))}
        </AboutCardWrapper>
      </Container>
      <AboutImg src={bgImg.src} alt="aboutCardbg" />
      <AboutBG />
    </AboutSectionWrapper>
  );
};

export default AboutSection;
