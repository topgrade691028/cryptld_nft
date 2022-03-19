import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import { MeetSectionWrapper, MeetTitle } from "./MeetTeamSection.styles";
import { Container, MeetCard } from "components";

import meetImg from "assets/images/meet.png";

const MeetTeamSection: React.FC = () => {
  const handleDrag = () => {
    console.log("adsf");
  };

  return (
    <MeetSectionWrapper>
      <Container>
        <MeetTitle className="gradient-font">Meet The Team</MeetTitle>
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          slidesPerGroup={1}
          loop={true}
          loopFillGroupWithBlank={true}
          className="mySwiper"
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
          onActiveIndexChange={handleDrag}
        >
          {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((item: any) => (
            <SwiperSlide>
              <MeetCard
                key={item}
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
