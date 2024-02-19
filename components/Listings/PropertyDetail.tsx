"use client";
import { fetchProperty } from "@/lib/fetchProperties";
import { Badge, Box, Divider, Heading, Stack, Text } from "@chakra-ui/react";
import React from "react";
import { useQuery } from "react-query";
import { Loader } from "../shared/Loader";
import SwiperSlider from "../shared/SwiperSlider";
import { SwiperSlide } from "swiper/react";
import Image from "next/image";
import noPhoto from "@/assets/icons/no-photo.png";
import { formatCurrency } from "@/utils/currencyFormatter";
import { formatDate } from "@/utils/dateFormaatter";
const timeFormat = "MMMM Do YYYY";

const PropertyDetail = ({ slug }: { slug: string }) => {
  const { isLoading, error, data } = useQuery({
    queryKey: [`property-${slug}`],
    queryFn: () => fetchProperty(slug),
  });

  if (isLoading) return <Loader />;
  return (
    <Stack mt={2}>
      <Box bg={"gray.700"} p={3}>
        <SwiperSlider>
          {data?.images.map((img) => (
            <SwiperSlide key={img.id}>
              <Box w={"100%"} h={["auto", "30rem"]}>
                <Image
                  src={img.image}
                  width={400}
                  height={400}
                  alt={img.id}
                  className="w-full h-full object-contain"
                />
              </Box>
            </SwiperSlide>
          ))}
        </SwiperSlider>
      </Box>

      <Stack direction={["column", "row"]} mt={5}>
        <Box>
          <Box>
            <Heading>{data?.title}</Heading>
            <Text my={4} fontWeight={"600"}>
              {formatCurrency(data?.price as number)}
            </Text>
            <Text fontWeight={"600"}>
              Listed {formatDate(data?.created_at as string, timeFormat)}
            </Text>

            <Badge colorScheme="red" p={2}>
              {data?.category.name}
            </Badge>
          </Box>
          <Text mt={5}>{data?.description}</Text>

          {/* ADDRESS */}

          <Box className="shadow px-3 py-4" w={"100%"}>
            <Text className="mb-2 font-semibold">Adress Details</Text>
            <Divider />

            <Text className="text-primary">
              City:{" "}
              <span className="font-semibold text-dark">
                {data?.address.city}
              </span>{" "}
            </Text>
            <Text className="text-primary">
              {" "}
              State: {""}
              <span className="font-semibold text-dark">
                {data?.address.state}
              </span>{" "}
            </Text>
          </Box>
        </Box>

        <Box>
          {/* <Text>Listed by </Text> */}
          <Box className="bg-white shadow-md px-2 py-5">
            <Box className="flex justify-center items-center w-full mb-5 ">
              <Image
                src={noPhoto}
                width={50}
                height={50}
                alt=""
                className="w-14"
              />
            </Box>
            <Text className="text-center font-semibold text-xl flex flex-col">
              {data?.manager.first_name} {data?.manager.last_name}
              <span className="inline-block font-normal text-sm text-secondary">
                {data?.manager.nickname}
              </span>
            </Text>
            <Box>
              <Heading as={"h4"} fontSize={20} fontWeight={500} my={3}>
                Contact
              </Heading>
              <Box>
                <Text className="flex gap-3 justify-start items-center text-primary">
                  Email:{" "}
                  <span className="text-dark">
                    {data?.manager.contact.email}
                  </span>
                </Text>
                <Text className="flex gap-3 justify-start items-center text-primary">
                  Phone:{" "}
                  <span className="text-dark">
                    {data?.manager.contact.phone_one}
                  </span>
                </Text>
              </Box>
            </Box>
          </Box>
        </Box>
      </Stack>
    </Stack>
  );
};

export default PropertyDetail;
