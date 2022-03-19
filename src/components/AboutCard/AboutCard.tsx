import React from "react";
import { CardWrapper } from "./AboutCard.styles";

export interface AboutCardProps {
  style?: any;
}

const AboutCard: React.FC<AboutCardProps> = ({ style }) => {
  return (
    <CardWrapper style={style}>
      <p>Icon and text here</p>
    </CardWrapper>
  );
};

export default AboutCard;
