import HouseDetail from "@/components/Listings/HouseDetail";
import PageContainer from "@/components/shared/PageContainer";
import { fecthMetadata } from "@/lib/fecthMetadata";
import { Params } from "@/types/params";
import React from "react";

export async function generateMetadata({ params }: Params) {
  const data = await fecthMetadata(`listings/houses/${params.slug}`);
  return {
    title: `${data.title} | Marksfildel`,
  };
}

const page = ({ params: { slug } }: Params) => {
  return <HouseDetail slug={slug} />;
};

export default page;
