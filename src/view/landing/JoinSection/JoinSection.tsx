import React, { useEffect, useState } from "react";
import { Container, CustomButton } from "components";
import { Polygon3, Polygon4 } from "../PolygonSection/PolygonSection.styles";
import {
  JoinContentWrapper,
  JoinDesc,
  JoinImageWrapper,
  JoinSectionWrapper,
  JoinTitle,
} from "./JoinSection.styles";
import joinImg from "assets/images/join.png";
import polygonImg from "assets/images/polygon.png";

const JoinSection: React.FC = () => {
  const [poly1, setPoly1] = useState("");
  const [poly2, setPoly2] = useState("");

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    let poly: any = [];
    for (let i = 1; i <= 4; i++) {
      let temp = document.getElementById("poly" + i);
      poly.push({ y: temp?.getBoundingClientRect().y, elem: temp });
    }
    if (poly[0].y < window.innerHeight && poly[3].y > -window.innerHeight) {
      // console.log(poly[0].elem.getAttribute("id"));
      setPoly1(
        `translateY(${poly[0].y * 0.08 * -1}%) translateX(${
          poly[0].y * 0.02
        }%) rotate(${poly[0].y * 0.05}deg)`
      );
      setPoly2(
        `translateY(${poly[0].y * 0.08 * -1}%) translateX(${
          poly[0].y * 0.02
        }%) rotate(${poly[0].y * 0.05 * -1}deg)`
      );
    }
  };
  return (
    <Container>
      <Polygon3
        className="polygon"
        src={polygonImg.src}
        id="poly3"
        transform={poly1}
        alt="polygon3"
      />
      <Polygon4
        className="polygon"
        src={polygonImg.src}
        id="poly4"
        transform={poly2}
        alt="polygon4"
      />
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
