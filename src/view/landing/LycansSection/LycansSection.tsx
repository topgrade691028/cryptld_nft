import React from "react";
import {
  ImgWrapper,
  LycansGroup,
  LycansWrapper,
  UnderLay,
} from "./LycansSection.styles";

import lycanImg1 from "assets/images/lycan1.png";
import lycanImg2 from "assets/images/lycan2.png";

const LycansSection: React.FC = () => {
  return (
    <LycansWrapper>
      <UnderLay />
      <LycansGroup>
        {[lycanImg1, lycanImg2, lycanImg1, lycanImg2].map(
          (item: any, key: any) => (
            <ImgWrapper key={key} style={{ marginTop: `-${key * 1.5}%` }}>
              <img src={item.src} alt="lycanImg1" />
            </ImgWrapper>
          )
        )}
      </LycansGroup>
    </LycansWrapper>
  );
};

export default LycansSection;
