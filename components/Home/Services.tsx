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
import SwiperSlider from "../shared/SwiperSlider";
import { SwiperSlide } from "swiper/react";

const Services = () => {
  return (
    <SwiperSlider
      slidePerView={{ mobile: 120, desktop: 4, ipad: 3, xdesktop: 5 }}
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
    </SwiperSlider>
  );
};

export default Services;
