"use client";
import React, { useEffect, useState } from "react";
import PopUpModal from "../shared/Modal";
import { useRouter } from "next/navigation";
import { auth } from "@/lib/auth";
import { Loader } from "../shared/Loader";

const TokenVerify = ({ token }: { token: string }) => {
  const [isOpen, setIsOpen] = useState(true);
  const [isVerifying, setIsVerifying] = useState(true);
  useEffect(() => {
    console.log(token);
    async function activateAccount() {
      try {
        const response = auth(`activate/${token}`);
        console.log((await response).data);
        setIsVerifying(false);
      } catch (error) {
        console.log(error);
        throw new Error("Something went wrong....");
      }
    }

    activateAccount();
  }, []); // eslint-disable-line
  const router = useRouter();
  const modalProps = {
    title: "Account Activated",
    bodyText: "Please login ",
    onClose: () => {
      setIsOpen(false);
      router.replace("/auth/sign-in");
    },
  };
  return isVerifying ? (
    <Loader />
  ) : (
    <PopUpModal {...modalProps} isOpen={isOpen} />
  );
};

export default TokenVerify;
