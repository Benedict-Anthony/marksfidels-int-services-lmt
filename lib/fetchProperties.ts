import { axiosInstance } from "./axios";

export const fetchProperties = async () => {
  const response = await axiosInstance.get("listings/properties/");
  const data: Property = response.data;
  return data;
};

export const fetchProperty = async (slug: string) => {
  const response = await axiosInstance.get(
    `listings/properties/detail/${slug}`
  );
  const data: PropertyDetail = response.data;
  return data;
};
