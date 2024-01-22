import { Container } from "@chakra-ui/react";
import React, { ReactNode } from "react";

const PageContainer = ({ children }: { children: ReactNode }) => {
  return <Container maxW={"1200px"}>{children}</Container>;
};

export default PageContainer;
