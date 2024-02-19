import ForgottenPassword from "@/components/auth/ForgottenPassword";
import { colors } from "@/constants/colors";
import { Box, Heading, Stack, Text } from "@chakra-ui/react";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Recover your password | MarksFildel",
};
const page = () => {
  return (
    <Stack
      direction={"row"}
      align={"center"}
      justify={"center"}
      bg={"blue.700"}
    >
      <Box
        flex={2}
        color={colors.light}
        justifyContent={"center"}
        padding={5}
        alignItems={"flex-end"}
        flexDirection={"column"}
        h={"90vh"}
        className="hidden md:flex"
      >
        <Heading>Markfidels Integrated Services</Heading>
        <Text mt={4} color={colors.secondary}>
          Services you can trust...
        </Text>
      </Box>
      <ForgottenPassword />
    </Stack>
  );
};

export default page;
