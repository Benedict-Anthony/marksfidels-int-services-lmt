import BackButton from "@/components/auth/BackButton";
import AuthProvider from "@/providers/AuthProvider";
import { Container, IconButton } from "@chakra-ui/react";
import { Metadata } from "next";
import { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Auth",
};

export default function AuthLayout({ children }: { children: ReactNode }) {
  return (
    <AuthProvider>
      <Container maxW={"100%"}>
        <BackButton />
        {children}
      </Container>
    </AuthProvider>
  );
}
