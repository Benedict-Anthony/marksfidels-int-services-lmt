"use client";
import { Button, Text } from "@chakra-ui/react";
import React from "react";
import { FcGoogle } from "react-icons/fc";
const GoogleAuth = () => {
  return (
    <Button
      w={"100"}
      leftIcon={<FcGoogle size={30} />}
      mt={"5"}
      className="w-full md:w-[15rem] shadow-md bg-white"
    >
      <Text>Continue with Google</Text>
    </Button>
  );
};

export default GoogleAuth;
