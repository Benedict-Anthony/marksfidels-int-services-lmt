"use client";
import { SearchIcon } from "@chakra-ui/icons";
import {
  Stack,
  Text,
  Box,
  Heading,
  Button,
  Divider,
  VStack,
  HStack,
} from "@chakra-ui/react";
import React from "react";
import Image from "next/image";
import landingImage from "@/assets/images/landing.jpg";

const Landing = () => {
  return (
    <Stack
      display={"flex"}
      flexDirection={["column", "row"]}
      justifyContent={"space-between"}
      alignItems={"center"}
      mt={5}
    >
      <Box w={"100%"}>
        <Heading fontSize={["x-large", "xx-large", "xxx-large"]} mt={5}>
          We Help <span className="text-primary">You Build The Dream Home</span>{" "}
          & Bring You More Than You Expect
        </Heading>

        <Text textColor={"red.400"} w={"100%"} className="mt-5" fontSize={"xl"}>
          Services you can trust...
        </Text>
        <Button
          rightIcon={<SearchIcon />}
          className="bg-primary hover:text-blue-400 shadow-md"
          my={10}
          fontWeight={"700"}
          textColor={"blue.500"}
        >
          {" "}
          Search for home/properties{" "}
        </Button>
      </Box>
      <Box w={"100%"}>
        <Image
          src={landingImage}
          width={200}
          height={200}
          alt="marksfidels"
          className="w-full shadow-xl"
        />
      </Box>
    </Stack>
  );
};

export default Landing;
