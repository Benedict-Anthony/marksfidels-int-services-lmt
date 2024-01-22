"use client";
import React from "react";
import Logo from "./Logo";
import { Box, Button, ButtonGroup, Container, Stack } from "@chakra-ui/react";
import NavBar from "./NavBar";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Header = () => {
  const pathname = usePathname();
  return (
    <Stack
      as={"header"}
      className="shadow-lg bg-white px-3 py-2"
      display={pathname.startsWith("/auth") ? "none" : "block"}
    >
      <Container
        display={"Flex"}
        justifyContent={"space-between"}
        alignItems={"center"}
        maxW={"1200px"}
      >
        <Logo />
        <Box>
          <NavBar></NavBar>
        </Box>
        <ButtonGroup spacing={"30px"} variant={"solid"}>
          <Button bg={"blue.500"} _hover={"blue.400"} textColor={"white"}>
            <Link href={"/auth/sign-in"}>Sign in</Link>
          </Button>
          <Button bg={"red.600"} textColor={"white"} _hover={""}>
            <Link href={"auth/sign-up"}>Sign up</Link>
          </Button>
        </ButtonGroup>
      </Container>
    </Stack>
  );
};

export default Header;
