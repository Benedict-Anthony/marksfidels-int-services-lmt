import { Box } from "@chakra-ui/react";
import React from "react";
import logo from "@/assets/images/logo.jpg";
import Image from "next/image";

const Logo = () => {
  return (
    <Box className="max-w-10 h-10 rounded-md">
      <Image
        src={logo}
        width={100}
        height={100}
        alt="Marksfildes"
        className="w-full h-full rounded-md"
      />
    </Box>
  );
};

export default Logo;
