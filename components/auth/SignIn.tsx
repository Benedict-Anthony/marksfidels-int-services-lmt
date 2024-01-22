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
type SigninForm = {
  email: string;
  password: string;
};
const SignIn = () => {
  const schema = yup.object({
    email: yup
      .string()
      .email("invalid email address")
      .required("This field is required"),
    password: yup.string().required("This field is required"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SigninForm>({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: SigninForm) => {
    console.log(data);
  };
  return (
    <Box as={"section"} w={"100%"}>
      <form
        className="w-full px-2 py-3 md:px-10"
        onSubmit={handleSubmit(onSubmit)}
      >
        <Stack spacing={"10px"} direction={"column"}>
          <Heading fontSize={["large", "x-large", "xx-large"]}>
            Login to continue
          </Heading>

          <Box>
            <FormControl isInvalid={errors.email as unknown as boolean}>
              <FormLabel textColor={"blue.400"}>Email</FormLabel>

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
            <Button
              type="submit"
              bg={"blue.400"}
              textColor={"white"}
              rightIcon={<IoIosSend />}
            >
              Login
            </Button>
          </Box>
        </Stack>
        <GoogleAuth />
        <Navigation
          text={"Don't have an account?"}
          path={"/auth/sign-up"}
          pathName="Sign Up"
        />
      </form>
    </Box>
  );
};

export default SignIn;
