import { colors } from "@/constants/colors";
import { ButtonGroup, Button } from "@chakra-ui/react";
import React from "react";

const AboutNav = () => {
  return (
    <ButtonGroup
      mx={"auto"}
      w={"100%"}
      display={"flex"}
      justifyContent={"space-around"}
      alignItems={"center"}
      mt={10}
      variant={"solid"}
      className="shadow py-1 rounded-md"
      bgColor={colors.light}
    >
      <Button
        className="btn shadow-md border-0"
        fontWeight={"400"}
        fontSize={["12", "16"]}
      >
        About us
      </Button>

      <Button
        className="btn shadow-md border-0"
        fontWeight={"400"}
        fontSize={["12", "16"]}
      >
        Services
      </Button>
      <Button
        className="btn shadow-md border-0"
        fontWeight={"400"}
        fontSize={["12", "16"]}
      >
        Pricing
      </Button>
    </ButtonGroup>
  );
};

export default AboutNav;
