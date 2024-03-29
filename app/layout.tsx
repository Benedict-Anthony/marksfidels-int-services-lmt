import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ChakraProviders } from "@/providers/ChakraProvider";
import Header from "@/components/Headers/Header";
import PrimeProvider from "@/providers/PrimeProvider";
import ReduxProvider from "@/providers/ReduxProvider";
import QueryProvider from "@/providers/QueryProvider";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <QueryProvider>
          <ReduxProvider>
            <ChakraProviders>
              <PrimeProvider>
                <ToastContainer position="top-center" limit={1} />
                <Header />
                {children}
              </PrimeProvider>
            </ChakraProviders>
          </ReduxProvider>
        </QueryProvider>
      </body>
    </html>
  );
}
