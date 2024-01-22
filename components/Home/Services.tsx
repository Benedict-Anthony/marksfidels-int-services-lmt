"use client";
import { services } from "@/constants/services";
import {
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  Stack,
  Text,
} from "@chakra-ui/react";
import { FaAngleDoubleDown } from "react-icons/fa";
import Image from "next/image";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
const Services = () => {
  return (
    <Swiper
      slidesPerView={3}
      spaceBetween={30}
      pagination={{
        clickable: true,
      }}
      breakpoints={{
        "120": {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        "500": {
          slidesPerView: 3,
          spaceBetween: 20,
        },
        "800": {
          slidesPerView: 4,
          spaceBetween: 20,
        },
        "900": {
          slidesPerView: 5,
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
        {services.map((item) => (
          <SwiperSlide key={item.id}>
            <Card
              key={item.id}
              w={["100%"]}
              h={["100%", "16rem"]}
              className="shadow-inner"
            >
              <CardBody
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}
                flexDirection={"column"}
                textAlign={"center"}
              >
                <Box width={100} height={75}>
                  <Image
                    src={item.imageUrl}
                    alt={""}
                    width={300}
                    height={300}
                    className="w-full h-full rounded-md object-cover"
                  />
                </Box>
                <Text className="text-md mt-4">{item.name}</Text>
              </CardBody>
              <CardFooter
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}
                flexDirection={"column"}
                textAlign={"center"}
              >
                <Button
                  rightIcon={<FaAngleDoubleDown />}
                  textColor={"blue.400"}
                  variant={"solid"}
                  colorScheme="white"
                  className=" text-secondary-content shadow-inner"
                >
                  Check it out
                </Button>
              </CardFooter>
            </Card>
          </SwiperSlide>
        ))}
      </Stack>
    </Swiper>
  );
};

export default Services;
