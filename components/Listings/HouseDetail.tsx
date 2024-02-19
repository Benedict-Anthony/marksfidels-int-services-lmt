"use client";
import { fetchHouse } from "@/lib/fetchHouses";
import {
  Box,
  Divider,
  HStack,
  Heading,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import React, { ComponentType } from "react";
import { useQuery } from "react-query";
import { Loader } from "../shared/Loader";
import SwiperSlider from "../shared/SwiperSlider";
import { SwiperSlide } from "swiper/react";
import Image from "next/image";
import noPhoto from "@/assets/icons/no-photo.png";
import { CheckCircleIcon, SmallCloseIcon } from "@chakra-ui/icons";
import { colors } from "@/constants/colors";
import { formatCurrency } from "@/utils/currencyFormatter";
import { formatDate } from "@/utils/dateFormaatter";
import PageContainer from "../shared/PageContainer";
const timeFormat = "MMMM Do YYYY";

const HouseDetail = ({ slug }: { slug: string }) => {
  const { isLoading, data, error } = useQuery({
    queryKey: ["houses", slug],
    queryFn: () => fetchHouse(slug),
  });

  if (isLoading) return <Loader />;
  return (
    <Stack mt={5} bg={"gray.30"}>
      <PageContainer>
        <Box>
          <Stack
            flexDirection={["row"]}
            w={"100%"}
            bg={"gray.300"}
            className="p-2 rounded"
          >
            <SwiperSlider>
              {data?.images.map((image) => (
                <SwiperSlide key={image.id}>
                  <Image
                    src={image.image}
                    width={400}
                    height={400}
                    alt={data.title}
                    className="w-full border rounded"
                  />
                </SwiperSlide>
              ))}
            </SwiperSlider>
            <VStack w={"100%"}>
              {/* @ts-ignore */}
              {data?.images.length > 2 &&
                data?.images.slice(0, 2).map((image) => (
                  <Box key={image.id} w={"100%"}>
                    <Image
                      src={image.image}
                      width={400}
                      height={400}
                      alt={data.title}
                      className="w-full rounded"
                    />
                  </Box>
                ))}
            </VStack>
          </Stack>

          <Stack
            direction={["column", "row"]}
            alignItems={"start"}
            justifyContent={"space-between"}
            mt={6}
          >
            <Box>
              <Heading as="h4">{data?.title}</Heading>
              <Text className="font-semibold my-3 ">
                {formatCurrency(data?.price as number)}
              </Text>
              <Text
                textColor={colors.dark}
                fontSize={15}
                fontWeight={"500"}
                className="mb-2"
              >
                Listed {formatDate(data?.created_at as string, timeFormat)}
                <Divider />
              </Text>
              <Heading as={"h4"} fontWeight={"600"} mb={1} fontSize={24}>
                Description
              </Heading>
              <Text>{data?.description}</Text>

              <Heading as={"h4"} fontWeight={"600"} mb={1} mt={3} fontSize={24}>
                Terms and Conditions
              </Heading>
              <Text>{data?.terms_and_condition}</Text>
              <Stack direction={["column", "row"]} mt={5}>
                {/* address */}
                <Box className="shadow px-3 py-4" w={"100%"}>
                  <Text className="mb-2 font-semibold">Adress Details</Text>
                  <Divider />

                  <Text className="text-primary mt-1">
                    State:{" "}
                    <span className="font-semibold text-dark">
                      {data?.address.state}
                    </span>{" "}
                  </Text>
                  <Text className="text-primary">
                    City:{" "}
                    <span className="font-semibold text-dark">
                      {data?.address.city}
                    </span>{" "}
                  </Text>
                  <Text className="text-primary">
                    {" "}
                    Town: {""}
                    <span className="font-semibold text-dark">
                      {data?.address.town}
                    </span>{" "}
                  </Text>
                  <Text className="text-primary">
                    Description:
                    <span className="font-semibold text-dark">
                      {" "}
                      {data?.address.description}
                    </span>
                  </Text>
                </Box>

                {/* features  */}

                <Box className="shadow px-3 py-4" w={"100%"}>
                  <Text className="mb-2 font-semibold">Features</Text>
                  <Divider />
                  <Text className="text-primary mt-1">
                    Bedrooms:{" "}
                    <span className="font-semibold text-dark">
                      {data?.features.bedrooms}
                    </span>{" "}
                  </Text>
                  <Text className="text-primary">
                    Bathrooms:{" "}
                    <span className="font-semibold text-dark">
                      {data?.features.bathrooms}
                    </span>{" "}
                  </Text>

                  <Text className="text-primary">
                    Balcony:{" "}
                    {data?.features.balcony ? (
                      <CheckCircleIcon color={colors.primary} />
                    ) : (
                      <SmallCloseIcon color={colors.secondary} />
                    )}
                  </Text>
                </Box>
              </Stack>
            </Box>
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
          </Stack>
        </Box>
      </PageContainer>
    </Stack>
  );
};

export default HouseDetail;
