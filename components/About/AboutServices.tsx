import React, { Fragment } from "react";
import {
  Box,
  Card,
  CardBody,
  Flex,
  Grid,
  GridItem,
  HStack,
  Heading,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import design from "@/assets/icons/design.png";
import installing from "@/assets/icons/installing.png";
import planning from "@/assets/icons/planing.png";
import Image from "next/image";
import aboutGb from "@/assets/images/about/aboutbg.png";
import { colors } from "@/constants/colors";
import PageContainer from "../shared/PageContainer";

const AboutServices = () => {
  return (
    <Fragment>
      <PageContainer>
        <Stack>
          <Heading as={"h4"}>What we do</Heading>

          <Grid
            column={3}
            templateColumns={[
              "repeat(1, 1fr)",
              "repeat(2, 1fr)",
              "repeat(3, 1fr)",
            ]}
            w={"100"}
            alignItems={"end"}
            gap={"10"}
          >
            <GridItem>
              <Card>
                <CardBody
                  display={"flex"}
                  justifyContent={"space-between"}
                  alignItems={"center"}
                  flexDirection={"column"}
                  gap={4}
                >
                  <Image src={design} width={100} height={100} alt="" />
                  <Heading
                    as="h4"
                    fontSize={["medium", "x-large"]}
                    fontWeight={"500"}
                  >
                    Architectural Designs{" "}
                  </Heading>
                  <Text textColor={colors.dark} mt={3} textAlign={"center"}>
                    With presenting a cutting-edge architectural design, this
                    residence seamlessly merges modern elegance with timeless
                    appeal. Featuring sleek lines, expansive windows, and
                    premium finishes.
                  </Text>
                </CardBody>
              </Card>
            </GridItem>
            <GridItem>
              <Card>
                <CardBody
                  display={"flex"}
                  justifyContent={"space-between"}
                  alignItems={"center"}
                  flexDirection={"column"}
                  gap={4}
                >
                  <Image src={installing} width={100} height={100} alt="" />
                  <Heading
                    as="h4"
                    fontSize={["medium", "x-large"]}
                    fontWeight={"500"}
                  >
                    Design and Installation
                  </Heading>
                  <Text textColor={colors.dark} mt={3} textAlign={"center"}>
                    We craft personalized wardrobes and kitchen cabinets that
                    not only enhance functionality but also add a touch of your
                    unique style to every corner.
                  </Text>
                </CardBody>
              </Card>
            </GridItem>
            <GridItem>
              <Card>
                <CardBody
                  display={"flex"}
                  justifyContent={"space-between"}
                  alignItems={"center"}
                  flexDirection={"column"}
                  gap={4}
                >
                  <Image src={planning} width={100} height={100} alt="" />
                  <Heading
                    as="h4"
                    fontSize={["medium", "x-large"]}
                    fontWeight={"500"}
                  >
                    Collaboration and planning
                  </Heading>
                  <Text textColor={colors.dark} mt={3} textAlign={"center"}>
                    We help elevate your projects with our collaborative design
                    and project planning services. We blend creativity with
                    strategic planning, ensuring every collaboration is a
                    journey of innovation and efficiency.
                  </Text>
                </CardBody>
              </Card>
            </GridItem>
          </Grid>
        </Stack>
      </PageContainer>

      <Flex
        align={"center"}
        justifyContent={"center"}
        className="bg-dark mt-5 shadow-lg"
      >
        <Image
          src={aboutGb}
          width={400}
          height={200}
          alt=""
          className="w-full h-full hidden md:block"
        />
        <Box className="px-5 bg-dark text-gray">
          <Heading
            as={"h4"}
            textColor={colors.light}
            fontSize={["20", "x-large"]}
            py={5}
          >
            Markfildes provides a quality, consumer driven Real Estate portal
            for buyers
          </Heading>

          <VStack spacing={5} className="text-gray">
            <Text>
              Marksfidles business model is specially designed as a medium for
              Agents to sell their inventory through our vast network of real
              estate brokers.
            </Text>
            <Text>
              We help Professional Agency reach their potential customers and
              connect with them effectively
            </Text>

            <Text>
              Investors around the world looking to invest in real estate can
              now surf through the listings in an innovative way from the most
              distinguished developers in Nigeria via a redefined 3D technology.
            </Text>
          </VStack>
        </Box>
      </Flex>
    </Fragment>
  );
};

export default AboutServices;
