"use client";
import { HamburgerIcon } from "@chakra-ui/icons";
import {
  useDisclosure,
  Button,
  Input,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  DrawerFooter,
  IconButton,
} from "@chakra-ui/react";
import { Fragment } from "react";

export const PropertiesDrawer = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Fragment>
      <IconButton
        ml={4}
        aria-label="open search buuton"
        icon={<HamburgerIcon />}
        onClick={onOpen}
        mt={2}
      />
      <Drawer
        isOpen={isOpen}
        onClose={onClose}
        placement="left"
        size={["sm", "md"]}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Search for a property today</DrawerHeader>

          <DrawerBody>
            <form
              id="my-form"
              onSubmit={(e) => {
                e.preventDefault();
                console.log("submitted");
              }}
            >
              <Input name="nickname" placeholder="Type here..." />
            </form>
          </DrawerBody>

          <DrawerFooter>
            <Button type="submit" form="my-form">
              Search
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </Fragment>
  );
};
