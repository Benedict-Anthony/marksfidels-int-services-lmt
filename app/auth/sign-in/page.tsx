import { Box, Stack } from "@chakra-ui/react";
import React from "react";
import Image from "next/image";
import Signup from "@/components/auth/Signup";
import signinImage from "@/assets/images/signinimage.jpg";
import SignIn from "@/components/auth/SignIn";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Login",
  description: "login to marksfidels",
};
const page = () => {
  return (
    <Stack
      display={"flex"}
      justifyContent={"space-between"}
      align={"center"}
      flexDirection={"row"}
      bg={"gray.50"}
      w={"100%"}
    >
      <Box w={"100%"} h={"100vh"} display={["none", "block"]}>
        <Image
          src={signinImage}
          width={200}
          height={200}
          alt="Sign Up"
          className="w-full h-full object-cover"
        />
      </Box>
      <SignIn />
    </Stack>
  );
};

export default page;
