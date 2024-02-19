import ResetPassword from "@/components/auth/ResetPassword";
import { colors } from "@/constants/colors";
import { Params } from "@/types/params";
import { Box, Heading, Stack, Text } from "@chakra-ui/react";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Reset Password | MarksFildel",
};
const page = ({ params }: Params) => {
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
      <ResetPassword params={params} />
    </Stack>
  );
};

export default page;
