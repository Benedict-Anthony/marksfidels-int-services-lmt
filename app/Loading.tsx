"use client";
import {
  Box,
  Container,
  chakra,
  keyframes,
  shouldForwardProp,
} from "@chakra-ui/react";
import { isValidMotionProp, motion } from "framer-motion";

const ChakraBox = chakra(motion.div, {
  shouldForwardProp: (prop) =>
    isValidMotionProp(prop) || shouldForwardProp(prop),
});
export default function Loading() {
  return (
    <Container
      h="100vh"
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      <ChakraBox
        animate={{
          scale: [1, 2, 2, 1, 1],
          rotate: [0, 0, 270, 270, 0],
          borderRadius: ["20%", "20%", "50%", "50%", "20%"],
        }}
        // @ts-ignore no problem in operation, although type error appears.
        transition={{
          duration: 3,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "loop",
        }}
        padding="2"
        bgGradient={`linear(to-l, , #FF0080)`}
        display="flex"
        justifyContent="center"
        alignItems="center"
        width="100px"
        height="100px"
      >
        Marksfildels
      </ChakraBox>
    </Container>
  );
}