"use client";
import {
  Box,
  FormControl,
  FormHelperText,
  FormLabel,
  Input,
  FormErrorMessage,
  Stack,
  Button,
  Heading,
} from "@chakra-ui/react";
import { yupResolver } from "@hookform/resolvers/yup";
import React, { Fragment, useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { IoIosSend } from "react-icons/io";
import Navigation from "./Navigation";
import GoogleAuth from "./GoogleAuth";
import Modal from "../shared/Modal";
import { auth } from "@/lib/auth";
import ProgressSpinner from "../shared/ProgressSpiner";
import { useRouter } from "next/navigation";

const schema = yup.object({
  username: yup.string().required("This field is required"),
  email: yup
    .string()
    .email("invalid email address")
    .required("This field is required"),
  password: yup.string().required("This field is required"),
  confirmPassword: yup.string().required("This field is required"),
});

type SignupForm = {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
};
const modalProps = {
  title: "Account Created Successsfully",
  subtitle: "Hi, Thank for creating an account with Markfidel",
  bodyText:
    "An email have been forward to you, please verify the email to activate your account",
  extraText: "Please check your span folder if having any issues",
};
const Signup = () => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<SignupForm>({
    resolver: yupResolver(schema),
  });

  const handleModal = () => {
    setIsOpen(false);
    router.push("sign-in");
  };

  const onSubmit = async (data: SignupForm) => {
    try {
      await auth("signup/", data);
      reset();
      setIsOpen(true);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Fragment>
      <Modal isOpen={isOpen} onClose={handleModal} {...modalProps} />
      <form
        className="w-full px-2 pb-3 md:px-10"
        onSubmit={handleSubmit(onSubmit)}
      >
        <Stack spacing={"10px"} direction={"column"}>
          <Heading fontSize={["large", "x-large", "xx-large"]} pt={"10"}>
            Sign up for an account
          </Heading>
          <Box>
            <FormControl isInvalid={errors.username as unknown as boolean}>
              <FormLabel textColor={"blue.400"}>Username</FormLabel>
              <FormHelperText>unique name for identification</FormHelperText>
              <FormErrorMessage>{errors.username?.message}</FormErrorMessage>
              <Input type="text" {...register("username")} />
            </FormControl>
          </Box>

          <Box>
            <FormControl isInvalid={errors.email as unknown as boolean}>
              <FormLabel textColor={"blue.400"}>Email</FormLabel>
              <FormHelperText>
                Ensure email does not contain custom domain
              </FormHelperText>
              <Input
                type="email"
                {...register("email")}
                textColor={"blue.400"}
              />
              <FormErrorMessage>{errors.email?.message}</FormErrorMessage>
            </FormControl>
          </Box>

          <Box>
            <FormControl isInvalid={errors.password as unknown as boolean}>
              <FormLabel textColor={"blue.400"}>password</FormLabel>
              <Input type="password" {...register("password")} />
              <FormErrorMessage>{errors.password?.message}</FormErrorMessage>
            </FormControl>
          </Box>
          <Box>
            <FormControl
              isInvalid={errors.confirmPassword as unknown as boolean}
            >
              <FormLabel textColor={"blue.400"}>confirm password</FormLabel>
              <Input type="password" {...register("confirmPassword")} />
              <FormErrorMessage>
                {errors.confirmPassword?.message}
              </FormErrorMessage>
            </FormControl>
          </Box>
          <Box>
            {!isSubmitting ? (
              <Button
                type="submit"
                bg={"blue.400"}
                textColor={"white"}
                rightIcon={<IoIosSend />}
              >
                Submit
              </Button>
            ) : (
              <ProgressSpinner />
            )}
          </Box>
        </Stack>
        <GoogleAuth />
        <Navigation
          text={"Already have an account?"}
          path={"/auth/sign-in"}
          pathName="Sign In"
        />
      </form>
    </Fragment>
  );
};

export default Signup;
