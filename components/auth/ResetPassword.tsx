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
import React, { useEffect, useRef } from "react";
import { useForm } from "react-hook-form";
import { IoIosSend } from "react-icons/io";
import * as yup from "yup";
import ProgressSpinner from "../shared/ProgressSpiner";
import { Params } from "@/types/params";
import { auth } from "@/lib/auth";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

const schema = yup.object({
  password: yup
    .string()
    .min(6, "password should not be less 6 charaters")
    .required("Please enter your email address"),
  confirmPassword: yup
    .string()
    .min(6, "password should not be less 6 charaters")
    .oneOf([yup.ref("password")], "Passwords must match")
    .required("Please enter your email address"),
});

type ResetPasswordType = {
  password: string;
  confirmPassword: string;
};
const ResetPassword = ({ params: { token } }: Params) => {
  const formRef = useRef<HTMLFormElement>(null);

  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm<ResetPasswordType>({
    resolver: yupResolver(schema),
  });

  useEffect(() => {
    const input = formRef.current?.querySelector("input");
    input?.focus();
  }, []);

  const router = useRouter();

  const onSubmit = async (data: ResetPasswordType) => {
    const { password } = data;
    try {
      await auth(`reset-password/${token}`, { password });
      toast("Password reset sucessfully");
      router.replace("/auth/sign-in");
    } catch (error) {
      console.log(error);
    }
  };
  return (
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
        Create your new password
      </Heading>
      <form
        ref={formRef}
        className="w-full"
        onSubmit={handleSubmit(onSubmit)}
        noValidate
      >
        <Box className="w-full">
          <FormControl isInvalid={errors.password as unknown as boolean}>
            <FormLabel>New password</FormLabel>
            <FormErrorMessage my={1}>
              {errors.password?.message}
            </FormErrorMessage>
            <Input
              type="password"
              placeholder="type here"
              border={2}
              {...register("password")}
            />
          </FormControl>
        </Box>

        <Box className="w-full mt-6">
          <FormControl isInvalid={errors.confirmPassword as unknown as boolean}>
            <FormLabel>Confirm New password</FormLabel>
            <FormErrorMessage my={1}>
              {errors.confirmPassword?.message}
            </FormErrorMessage>
            <Input
              type="password"
              placeholder="type here"
              border={2}
              {...register("confirmPassword")}
              className="input"
            />
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
  );
};

export default ResetPassword;
