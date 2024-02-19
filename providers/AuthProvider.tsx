"use client";
import { isLoggedIn } from "@/utils/cookies";
import { getCookies } from "cookies-next";
import { useRouter } from "next/navigation";
import React, { Fragment, ReactNode, useEffect } from "react";

const AuthProvider = ({ children }: { children: ReactNode }) => {
  const router = useRouter();
  useEffect(() => {
    const cookies = getCookies();
    if (!cookies.csrftoken && !cookies.access_token) return;
    if (isLoggedIn()) return router.back();
  }, [router]);
  return <Fragment>{children}</Fragment>;
};

export default AuthProvider;
