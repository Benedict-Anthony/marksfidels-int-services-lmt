"use client";
import { axiosInstance } from "./axios";
export const fetchHouses = async () => {
  const response = await axiosInstance.get("listings/houses");
  const data: ResultResponse = response.data;
  return data;
};

export const fetchHouse = async (slug: string) => {
  const response = await axiosInstance.get(`listings/houses/${slug}`);
  const data: Listing = response.data;
  return data;
};
