import React, { ReactNode } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { Stack } from "@chakra-ui/react";

type Slider = {
  children: ReactNode;
  slidePerView?: {
    mobile?: number;
    ipad?: number;
    desktop?: number;
    xdesktop?: number;
  };
};
const SwiperSlider = ({ children, slidePerView }: Slider) => {
  return (
    <Swiper
      slidesPerView={3}
      spaceBetween={30}
      pagination={{
        clickable: true,
      }}
      breakpoints={{
        "120": {
          slidesPerView: slidePerView?.mobile ? slidePerView?.mobile : 1,
          spaceBetween: 20,
        },
        "500": {
          slidesPerView: slidePerView?.ipad ? slidePerView?.ipad : 1,
          spaceBetween: 20,
        },
        "800": {
          slidesPerView: slidePerView?.desktop ? slidePerView?.desktop : 1,
          spaceBetween: 20,
        },
        "900": {
          slidesPerView: slidePerView?.xdesktop ? slidePerView?.xdesktop : 1,
          spaceBetween: 20,
        },
      }}
      modules={[Pagination]}
      className="mySwiper"
    >
      <Stack
        display={"flex"}
        flexDirection={"row"}
        justifyContent={"space-between"}
        align={"center"}
        mt={10}
        mb={5}
        flexWrap={["wrap", "nowrap"]}
      >
        {children}
      </Stack>
    </Swiper>
  );
};

export default SwiperSlider;
