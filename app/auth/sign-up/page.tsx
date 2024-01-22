import Signup from "@/components/auth/Signup";
import Image from "next/image";
import { Box, Stack } from "@chakra-ui/react";
import React, { Fragment } from "react";
import signupImage from "@/assets/images/signupimage.jpg";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sign up",
  description: "Marfidels sign up account",
};
const page = () => {
  return (
    <Fragment>
      <Stack
        display={"flex"}
        justify={"space-between"}
        align={"center"}
        flexDirection={"row"}
        w={"100%"}
        bg={"gray.50"}
      >
        <Box w={"100%"} h={"100vh"} display={["none", "block"]}>
          <Image
            src={signupImage}
            width={200}
            height={200}
            alt="Sign Up"
            className="w-full h-full object-cover"
          />
        </Box>
        <Signup />
      </Stack>
    </Fragment>
  );
};

export default page;
