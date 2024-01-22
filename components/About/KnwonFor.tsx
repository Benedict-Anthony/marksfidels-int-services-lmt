import Image from "next/image";
import React from "react";
import ethics from "@/assets/images/about/ethics.png";
import innovation from "@/assets/images/about/innovations.png";
import collaboration from "@/assets/images/about/collaboration.png";
import quality from "@/assets/images/about/quality.png";
import sustainability from "@/assets/images/about/sustainabilty.png";
import mission from "@/assets/icons/mission.png";
import goal from "@/assets/icons/goal.png";
import vision from "@/assets/icons/vision.png";
import vector1 from "@/assets/icons/vector1.png";
import vector2 from "@/assets/icons/vector2.png";
import vector3 from "@/assets/icons/vector3.png";

import { colors } from "@/constants/colors";
import PageContainer from "../shared/PageContainer";
import {
  Box,
  Grid,
  GridItem,
  Heading,
  Text,
  VStack,
  Stack,
  Flex,
  Card,
  CardBody,
} from "@chakra-ui/react";

const KnwonFor = () => {
  return (
    <Stack py={10}>
      <Box
        bg={colors.dark}
        w={"100%"}
        mt={5}
        className="py-3 px-1 md:py-16"
        textColor={colors.light}
      >
        <PageContainer>
          <Box pb={10}>
            <Heading
              as={"h3"}
              textColor={colors.light}
              fontSize={["15", "20"]}
              pb={2}
            >
              What MarksFidels is Known for
            </Heading>
            <Text textColor={colors.gray} w={["100%", 400]}>
              {" "}
              Marks Fidel Integrated Services has a tradition of fine
              performance, founded on a commitment in
            </Text>
          </Box>

          <Grid
            column={3}
            templateColumns={["repeat(2, 1fr)", "repeat(5, 1fr)"]}
            w={"100"}
            alignItems={"end"}
            gap={"10"}
          >
            <GridItem>
              <VStack>
                <Image
                  className=" w-6 md:w-10"
                  src={ethics}
                  width={30}
                  height={30}
                  alt="ethics"
                />
                <Text className="text-md mt-2" fontSize={"14"}>
                  Ethics
                </Text>
              </VStack>
            </GridItem>

            <GridItem>
              <VStack>
                <Image
                  className=" w-6 md:w-10"
                  src={innovation}
                  width={30}
                  height={30}
                  alt="innovation"
                />
                <Text className="text-md mt-2" fontSize={"14"}>
                  Innovations
                </Text>
              </VStack>
            </GridItem>

            <GridItem>
              <VStack>
                <Image
                  className=" w-6 md:w-10"
                  src={collaboration}
                  width={30}
                  height={30}
                  alt="collaboration"
                />
                <Text className="text-md mt-2" fontSize={"14"}>
                  Collaboration
                </Text>
              </VStack>
            </GridItem>

            <GridItem>
              <VStack>
                <Image
                  className=" w-6 md:w-10"
                  src={quality}
                  width={30}
                  height={30}
                  alt="quality"
                />
                <Text className="text-md mt-2" fontSize={"14"}>
                  Qulaity
                </Text>
              </VStack>
            </GridItem>

            <GridItem>
              <VStack>
                <Image
                  className=" w-6 md:w-10"
                  src={sustainability}
                  width={30}
                  height={30}
                  alt="sustainability"
                />
                <Text className="text-md mt-2" fontSize={"14"}>
                  Sustainabilty
                </Text>
              </VStack>
            </GridItem>
          </Grid>
        </PageContainer>
      </Box>
      <PageContainer>
        <Flex
          align={"end"}
          justify={"space-between"}
          gap={10}
          direction={["column", "row"]}
          pt={5}
        >
          <Card w={["100%", "25rem"]}>
            <CardBody
              alignItems={"center"}
              justifyItems={"center"}
              display={"flex"}
              flexDirection={"column"}
            >
              <Image
                src={mission}
                width={100}
                height={100}
                alt="misson"
                className="w-20"
              />
              <Heading as={"h4"} fontWeight={"500"} fontSize={22} mt={5}>
                Mission
              </Heading>
              <Text mt={3} textColor={colors.dark} textAlign={"center"}>
                “To collaborate with skilled professionals from multiple
                verticals of the Nigerians real estate sector providing home
                buyers a convenient & anchored experience.”
              </Text>
            </CardBody>
          </Card>
          <Card w={["100%", "25rem"]}>
            <CardBody
              alignItems={"center"}
              justifyItems={"center"}
              display={"flex"}
              flexDirection={"column"}
            >
              <Image
                src={vision}
                width={100}
                height={100}
                alt="misson"
                className="w-20"
              />
              <Heading as={"h4"} fontWeight={"500"} fontSize={22} mt={5}>
                Vision
              </Heading>
              <Text mt={3} textColor={colors.dark} textAlign={"center"}>
                “To redefine real estate buying experience at the tip of your
                fingers by providing consumer focus web and mobile platform.”
              </Text>
            </CardBody>
          </Card>
          <Card w={["100%", "25rem"]}>
            <CardBody
              alignItems={"center"}
              justifyItems={"center"}
              display={"flex"}
              flexDirection={"column"}
            >
              <Image
                src={goal}
                width={100}
                height={100}
                alt="misson"
                className="w-20"
              />
              <Heading as={"h4"} fontWeight={"500"} fontSize={22} mt={5}>
                Goal
              </Heading>
              <Text mt={3} textColor={colors.dark} textAlign={"center"}>
                “Establish ourselves as a reliable medium between the demand
                side and the supply side of the real estate industry”
              </Text>
            </CardBody>
          </Card>
        </Flex>
      </PageContainer>

      <VStack mt={10} spacing={10} bg={colors.gray} p={10}>
        <Heading
          as={"h3"}
          fontSize={["18px", "xx-large"]}
          fontWeight={["500", "700"]}
        >
          MarksFidels{"'"} Objectives
        </Heading>
        <Flex
          align={"center"}
          justify={"center"}
          gap={5}
          direction={["column", "row"]}
          textAlign={["center", "left"]}
        >
          <Box className="bg-light shadow-2xl p-3 w-16 h-16 rounded-full flex justify-center items-center">
            <Image
              src={vector1}
              width={30}
              height={30}
              alt=""
              className="w-full"
            />
          </Box>
          <Text maxW={700}>
            Introducing to you a UI & UX focused website with a cutting edge
            technology as a platform for digital marketing and lead generation.
          </Text>
        </Flex>
        <Flex
          align={"center"}
          justify={"center"}
          gap={5}
          direction={["column", "row"]}
          textAlign={["center", "left"]}
        >
          <Box className="bg-light shadow-inner p-3 w-16 h-16 rounded-full flex justify-center items-center">
            <Image
              src={vector2}
              width={30}
              height={30}
              alt=""
              className="w-full"
            />
          </Box>
          <Text maxW={700}>
            Establishing the first stepping stone in the micro markets of Abuja,
            and later leaving footprints as a standard bearer in the micro
            markets of Nigeria. We strive to always have a dedicated focus on
            the consumer{"'"}s requirements and expectations
          </Text>
        </Flex>
        <Flex
          align={"center"}
          justify={"center"}
          gap={5}
          direction={["column", "row"]}
          textAlign={["center", "left"]}
        >
          <Box className="bg-light shadow-inner p-3 w-16 h-16 rounded-full flex justify-center items-center">
            <Image
              src={vector3}
              width={30}
              height={30}
              alt=""
              className="w-full"
            />
          </Box>
          <Text maxW={700}>
            We believe in long term orientation with our diversified business
            model thus making us stand out in the industry
          </Text>
        </Flex>
      </VStack>
    </Stack>
  );
};

export default KnwonFor;
