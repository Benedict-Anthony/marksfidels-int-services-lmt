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
import React, { Fragment } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { IoIosSend } from "react-icons/io";
import Navigation from "./Navigation";
import GoogleAuth from "./GoogleAuth";

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
const Signup = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignupForm>({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data: SignupForm) => {
    console.log(data);
  };
  return (
    <Fragment>
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
            <Button
              type="submit"
              bg={"blue.400"}
              textColor={"white"}
              rightIcon={<IoIosSend />}
            >
              Submit
            </Button>
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
