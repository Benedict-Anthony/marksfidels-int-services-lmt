import { HStack } from "@chakra-ui/react";
import React from "react";
import { Text } from "@chakra-ui/react";
import Link from "next/link";
type NavigationProps = {
  text: string;
  path: string;
  pathName: string;
};
const Navigation = ({ text, path, pathName }: NavigationProps) => {
  return (
    <HStack mt={"5"} className="shadow bg-gray-50 p-2 rounded-md md:w-1/2">
      <Text>{text}</Text>
      <Link href={path} className="text-primary">
        {pathName}
      </Link>
    </HStack>
  );
};

export default Navigation;
