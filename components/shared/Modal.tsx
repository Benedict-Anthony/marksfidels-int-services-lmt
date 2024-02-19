import {
  Box,
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
} from "@chakra-ui/react";
import React from "react";

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  subtitle?: string;
  bodyText: string;
  extraText?: string;
};

const PopUpModal = ({
  isOpen,
  onClose,
  title,
  bodyText,
  extraText,
  subtitle,
}: ModalProps) => {
  return (
    <Box w={["90%", "50%"]} className={`${!isOpen && "hidden"}`}>
      <Modal isOpen={isOpen} onClose={onClose} size={["sm", "lg", "xl"]}>
        <ModalOverlay
          bg="none"
          backdropFilter="auto"
          backdropInvert="70%"
          backdropBlur="2px"
        />
        <ModalContent>
          <ModalHeader>{title}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text fontWeight={"600"}>{subtitle}</Text>
            <Text mt={3}>{bodyText}</Text>

            <Text mt={3}>{extraText}</Text>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              OK
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
};
export default PopUpModal;
