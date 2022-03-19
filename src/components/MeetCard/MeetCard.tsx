import React from "react";
import {
  CardContent,
  CardDesc,
  CardImg,
  CardTitle,
  CardWrapper,
} from "./MeetCard.styles";

export interface MeetCardProps {
  img: any;
  name: string;
  desc: string;
}

const MeetCard: React.FC<MeetCardProps> = ({ img, name, desc }) => {
  return (
    <CardWrapper>
      <CardContent>
        <CardImg>
          <img src={img.src} alt="cardimg" />
        </CardImg>
        <CardTitle>{name}</CardTitle>
        <CardDesc>{desc}</CardDesc>
      </CardContent>
    </CardWrapper>
  );
};

export default MeetCard;
