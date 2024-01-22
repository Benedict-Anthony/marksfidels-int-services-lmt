"use client";
import {
  Box,
  Button,
  FormControl,
  HStack,
  IconButton,
  Input,
  NumberInput,
  NumberInputField,
  Stack,
  Text,
  Wrap,
  useNumberInput,
} from "@chakra-ui/react";
import React from "react";
import { MinusIcon, SearchIcon, SmallAddIcon } from "@chakra-ui/icons";

const HomeSearch = () => {
  const {
    getInputProps: bathroomInput,
    getIncrementButtonProps: increaseBathroom,
    getDecrementButtonProps: decreaseBathroom,
  } = useNumberInput({
    step: 1,
    defaultValue: 0,
    min: 1,
    max: 6,
  });

  const {
    getInputProps: bedRoomInput,
    getIncrementButtonProps: increaseBedRoom,
    getDecrementButtonProps: deccreaseBedRoom,
  } = useNumberInput({
    step: 1,
    defaultValue: 0,
    min: 1,
    max: 6,
  });
  const {
    getInputProps: packingInput,
    getIncrementButtonProps: increasePacking,
    getDecrementButtonProps: decreasePacking,
  } = useNumberInput({
    step: 1,
    defaultValue: 0,
    min: 1,
    max: 6,
  });

  return (
    <Stack
      maxW={"700px"}
      mx={"auto"}
      mt={4}
      as={"main"}
      py={10}
      flexWrap={"wrap"}
    >
      <form className="form-control flex flex-row relative w-full">
        <FormControl className="shadow rounded">
          <Input
            type="text"
            placeholder="search for a property name, agent locality... "
            className="input border-none shadow-inner rounded outline-none focus:outline-none"
            outline={0}
            variant={"solid"}
          />
        </FormControl>
        <Button
          rightIcon={<SearchIcon />}
          aria-label="Search"
          className="ml-3"
          colorScheme={"blue"}
        >
          Search
        </Button>
      </form>
      <Box
        display={"flex"}
        flexDirection={"row"}
        justifyContent={"space-between"}
        alignItems={"center"}
        columnGap={"10"}
        rowGap={["10px", null]}
        as={"section"}
        mt={5}
        flexWrap={["wrap", "nowrap"]}
      >
        <Box>
          <Text>Bedrooms</Text>
          <HStack>
            <IconButton aria-label={"decrease"} {...deccreaseBedRoom()}>
              <MinusIcon />
            </IconButton>
            <Input {...bedRoomInput()} />
            <IconButton aria-label={"increase"} {...increaseBedRoom()}>
              <SmallAddIcon />
            </IconButton>
          </HStack>
        </Box>

        <Box>
          <Text>Bathrooms</Text>
          <HStack>
            <IconButton aria-label={"decrease"} {...decreaseBathroom()}>
              <MinusIcon />
            </IconButton>
            <Input {...bathroomInput()} />
            <IconButton aria-label={"increase"} {...increaseBathroom()}>
              <SmallAddIcon />
            </IconButton>
          </HStack>
        </Box>
        <Box>
          <Text>Packing space</Text>
          <HStack>
            <IconButton aria-label={"decrease"} {...decreasePacking()}>
              <MinusIcon />
            </IconButton>
            <Input {...packingInput()} />
            <IconButton aria-label={"increase"} {...increasePacking()}>
              <SmallAddIcon />
            </IconButton>
          </HStack>
        </Box>
      </Box>
    </Stack>
  );
};

export default HomeSearch;
