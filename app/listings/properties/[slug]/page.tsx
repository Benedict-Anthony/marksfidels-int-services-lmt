import PropertyDetail from "@/components/Listings/PropertyDetail";
import PageContainer from "@/components/shared/PageContainer";
import { fecthMetadata } from "@/lib/fecthMetadata";
import { Params } from "@/types/params";
import React from "react";

export async function generateMetadata({ params: { slug } }: Params) {
  const data = await fecthMetadata(`listings/properties/detail/${slug}`);
  return {
    title: `${data.title} | Markfidels`,
  };
}

const page = ({ params: { slug } }: Params) => {
  return (
    <PageContainer>
      <PropertyDetail slug={slug} />
    </PageContainer>
  );
};

export default page;
