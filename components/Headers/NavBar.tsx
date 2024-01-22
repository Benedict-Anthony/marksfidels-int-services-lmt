"use client";
import { navItems } from "@/constants/nav";
import { Box, List, ListItem } from "@chakra-ui/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const NavBar = () => {
  const pathname = usePathname();
  return (
    <Box as={"nav"} display={["none", null, "flex"]}>
      <List display={"flex"} flexDirection={"row"} gap={"10"}>
        {navItems.map((item) => (
          <ListItem key={item.id}>
            <Link
              href={item.path}
              className={` text-md capitalize ${
                pathname === item.path &&
                "rounded-md py-1 px-2 font-semibold bg-light shadow-inner text-secondary  border-b-2"
              }`}
            >
              {item.name}
            </Link>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default NavBar;
