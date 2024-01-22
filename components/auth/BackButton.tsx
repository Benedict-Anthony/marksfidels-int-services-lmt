"use client";
import { ArrowBackIcon } from "@chakra-ui/icons";
import { IconButton } from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import React from "react";

const BackButton = () => {
  const router = useRouter();
  return (
    <IconButton
      aria-label={"go back"}
      className="mb-1"
      onClick={() => router.back()}
    >
      <ArrowBackIcon />
    </IconButton>
  );
};

export default BackButton;
