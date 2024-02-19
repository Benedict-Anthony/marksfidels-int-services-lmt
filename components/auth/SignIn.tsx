"use client";
import {
  Box,
  FormControl,
  FormLabel,
  Input,
  FormErrorMessage,
  Stack,
  Button,
  Heading,
} from "@chakra-ui/react";
import { yupResolver } from "@hookform/resolvers/yup";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { IoIosSend } from "react-icons/io";
import Navigation from "./Navigation";
import GoogleAuth from "./GoogleAuth";
import ProgressSpinner from "../shared/ProgressSpiner";
import { toast } from "react-toastify";
import { auth } from "@/lib/auth";
import { useRouter } from "next/navigation";
import Link from "next/link";
type SigninForm = {
  email: string;
  password: string;
};
const SignIn = () => {
  const [message, setMessage] = useState("");
  const router = useRouter();
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
    setError,
    formState: { errors, isSubmitting },
  } = useForm<SigninForm>({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data: SigninForm) => {
    try {
      const response = await auth("login/", data);
      console.log(response.data.data);
      toast("Login Successsful");
      router.replace("/dashboard");
    } catch (error) {
      setMessage("Invalid email or password");
      setError("email", {
        message: "",
      });

      setTimeout(() => {
        setMessage("");
      }, 5000);
    }
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
              {message && <FormErrorMessage mb={4}>{message}</FormErrorMessage>}
              <FormLabel textColor={"blue.400"}>Email</FormLabel>

              <Input type="email" {...register("email")} />
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
          <Link
            href={"/auth/forgotten-password"}
            className=" block text-left mt-3 border-0 text-primary text-sm"
          >
            Forgotten password?
          </Link>
          <Box>
            {!isSubmitting ? (
              <Button
                type="submit"
                bg={"blue.400"}
                textColor={"white"}
                rightIcon={<IoIosSend />}
                disabled={isSubmitting}
              >
                Login
              </Button>
            ) : (
              <ProgressSpinner />
            )}
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
