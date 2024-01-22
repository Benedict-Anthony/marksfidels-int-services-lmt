import { colors } from "@/constants/colors";
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Stack,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { IoIosSend } from "react-icons/io";

const NewsLetter = () => {
  return (
    <Flex
      w={["100%", "700px"]}
      mx={"auto"}
      mt={5}
      mb={6}
      align={"center"}
      direction={"column"}
      justify={"center"}
      px={2}
    >
      <Box className="flex items-center justify-center flex-col gap-5">
        <Heading fontSize={[18, "x-large"]} textAlign={"center"}>
          Do we have everything you{"'"}re looking for?
        </Heading>
        <Text w={["100%", "400px"]} textAlign={"center"}>
          Drop us your contact details, We are always more than happy to help.
        </Text>
      </Box>
      <Stack
        direction={["column", "row"]}
        align={"center"}
        mt={5}
        justify={"center"}
        w={"100%"}
      >
        <FormControl>
          <Input type="text" placeholder="your name" />
        </FormControl>
        <FormControl>
          <Input type="email" placeholder="your email" />
        </FormControl>
        <FormControl>
          <Button
            rightIcon={<IoIosSend />}
            w={["100%", "initial"]}
            colorScheme={"blue"}
          >
            Get in touch
          </Button>
        </FormControl>
      </Stack>
    </Flex>
  );
};

export default NewsLetter;
