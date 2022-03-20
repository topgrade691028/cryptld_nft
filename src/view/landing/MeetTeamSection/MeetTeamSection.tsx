import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import { Container, MeetCard } from "components";
import { MeetSectionWrapper, MeetTitle } from "./MeetTeamSection.styles";
import { Polygon1, Polygon2 } from "../PolygonSection/PolygonSection.styles";

import meetImg from "assets/images/meet.png";
import polygonImg from "assets/images/polygon.png";
import { Autoplay } from "swiper";
const MeetTeamSection: React.FC = () => {
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
          poly[0].y * 0.03 * -1
        }%) rotate(${poly[0].y * 0.05}deg)`
      );
      setPoly2(
        `translateY(${poly[0].y * 0.08 * -1}%) translateX(${
          poly[0].y * 0.03 * -1
        }%) rotate(${poly[0].y * 0.05 * -1}deg)`
      );
    }
  };

  return (
    <MeetSectionWrapper>
      <Polygon1
        className="polygon"
        src={polygonImg.src}
        id="poly1"
        alt="polygon1"
        transform={poly1}
      />
      <Polygon2
        className="polygon"
        src={polygonImg.src}
        id="poly2"
        alt="polygon2"
        transform={poly2}
      />
      <Container>
        <MeetTitle className="gradient-font">Meet The Team</MeetTitle>
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          slidesPerGroup={1}
          loop={true}
          modules={[Autoplay]}
          loopFillGroupWithBlank={true}
          className="mySwiper"
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            475: {
              slidesPerView: 2,
            },
            768: {
              slidesPerView: 3,
            },
            1300: {
              slidesPerView: 4,
            },
            1600: {
              slidesPerView: 5,
            },
            1800: {
              slidesPerView: 6,
            },
          }}
        >
          {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((item: number) => (
            <SwiperSlide key={item}>
              <MeetCard
                img={meetImg}
                name="Max"
                desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    </MeetSectionWrapper>
  );
};

export default MeetTeamSection;
