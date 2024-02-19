import {
  Box,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Stack,
} from "@chakra-ui/react";
import Image from "next/image";
import React from "react";

const CreateProfile = () => {
  return (
    <Stack direction={["column", "row"]}>
      <form>
        <Box>
          <FormControl isInvalid={true}>
            {/* {message && <FormErrorMessage mb={4}>{message}</FormErrorMessage>} */}
            <FormLabel textColor={"blue.400"}>Email</FormLabel>
            <Input type="email" />
            <FormErrorMessage>Invalid</FormErrorMessage>
          </FormControl>
        </Box>
      </form>
    </Stack>
  );
};

export default CreateProfile;
