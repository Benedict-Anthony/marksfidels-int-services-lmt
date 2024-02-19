"use client";
import React, { Fragment, useEffect, useState } from "react";
import Logo from "./Logo";
import {
  Box,
  Button,
  ButtonGroup,
  Container,
  IconButton,
  Stack,
} from "@chakra-ui/react";
import NavBar from "./NavBar";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { isLoggedIn as loggin } from "@/utils/cookies";
import { FaUser } from "react-icons/fa";

const Header = () => {
  const pathname = usePathname();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    setIsLoggedIn(loggin());
  }, [pathname]);
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
        {!isLoggedIn ? (
          <Fragment>
            <ButtonGroup spacing={"30px"} variant={"solid"}>
              <Button bg={"blue.500"} textColor={"white"}>
                <Link href={"/auth/sign-in"}>Sign in</Link>
              </Button>
              <Button bg={"red.600"} textColor={"white"}>
                <Link href={"auth/sign-up"}>Sign up</Link>
              </Button>
            </ButtonGroup>
          </Fragment>
        ) : (
          <Link href={"/dashboard"}>
            <IconButton icon={<FaUser />} aria-label="Dashbord" />
          </Link>
        )}
      </Container>
    </Stack>
  );
};

export default Header;
