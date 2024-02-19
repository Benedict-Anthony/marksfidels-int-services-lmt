"use client";
import { colors } from "@/constants/colors";
import {
  Flex,
  Box,
  Input,
  Heading,
  FormControl,
  FormErrorMessage,
  FormLabel,
  FormHelperText,
  Button,
} from "@chakra-ui/react";
import { yupResolver } from "@hookform/resolvers/yup";
import React, { Fragment, useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { IoIosSend } from "react-icons/io";
import * as yup from "yup";
import ProgressSpinner from "../shared/ProgressSpiner";
import { useRouter } from "next/navigation";
import PopUpModal from "../shared/Modal";
import { auth } from "@/lib/auth";

const modalProps = {
  title: "Reset token sent!",
  // subtitle: "Hi, Thank for creating an account with Markfidel",
  bodyText:
    "An email have been forward to you, please verify the email to reset your password",
  extraText: "Please check your span folder if having any issues",
};

const schema = yup.object({
  email: yup
    .string()
    .email("Please enter a valid email address")
    .required("Please enter your email address"),
});

type ForgottenPasswordType = {
  email: string;
};
const ForgottenPassword = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [isOpen, setIsOpen] = useState(false);
  const {
    handleSubmit,
    register,
    setError,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ForgottenPasswordType>({
    resolver: yupResolver(schema),
  });

  useEffect(() => {
    const input = formRef.current?.querySelector("input");
    input?.focus();
  }, []);

  const onSubmit = async (data: ForgottenPasswordType) => {
    try {
      const response = await auth(`verify-email/`, data);
      if (response.status === 200) {
        reset();
        setIsOpen(true);
      }
    } catch (error) {
      setError("email", {
        message: "Email does not exist",
      });
    }
  };
  return (
    <Fragment>
      <PopUpModal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        {...modalProps}
      />

      <Flex
        align={"flex-start"}
        justify={"center"}
        flexDirection={"column"}
        flex={1}
        bg={colors.gray}
        h={"90vh"}
        px={2}
      >
        <Heading mb={8} fontWeight={"500"} fontSize={["25px", "30px"]}>
          Recover your password
        </Heading>
        <form
          ref={formRef}
          className="w-full"
          onSubmit={handleSubmit(onSubmit)}
          noValidate
        >
          <Box className="w-full">
            <FormControl isInvalid={errors.email as unknown as boolean}>
              <FormLabel>Enter your email</FormLabel>
              <FormErrorMessage my={1}>
                {errors.email?.message}
              </FormErrorMessage>
              <Input
                type="email"
                placeholder="youremail@gmail.com"
                border={2}
                {...register("email")}
                id="input"
              />
              <FormHelperText>
                Make sure its an email used in registration
              </FormHelperText>
            </FormControl>
          </Box>

          <Box>
            {!isSubmitting ? (
              <Button
                variant={"outline"}
                type="submit"
                bg={"blue.400"}
                textColor={"white"}
                rightIcon={<IoIosSend />}
                mt={7}
              >
                Submit
              </Button>
            ) : (
              <ProgressSpinner />
            )}
          </Box>
        </form>
      </Flex>
    </Fragment>
  );
};

export default ForgottenPassword;
