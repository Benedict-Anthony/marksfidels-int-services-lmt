import { Box, FormControl, Input } from "@chakra-ui/react";
import React from "react";
import { FaSearch } from "react-icons/fa";
import DropDownMenu from "./DropDownSearch";

const Search = () => {
  return (
    <Box mt={4} className="flex  items-end justify-between">
      <DropDownMenu />
      <form className="relative w-full md:w-96">
        <FormControl>
          <Input type="text" pr={15} py={6} />
          <FaSearch className="absolute top-0 right-0 mt-2 mr-4 text-2xl  text-primary cursor-pointer" />
        </FormControl>
      </form>
    </Box>
  );
};

export default Search;
