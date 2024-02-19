import House from "@/components/Listings/House";
import Property from "@/components/Listings/Property";
import PageContainer from "@/components/shared/PageContainer";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Listings | Marksfidel",
};

const page = () => {
  return (
    <PageContainer>
      <House />
      <Property />
    </PageContainer>
  );
};

export default page;
