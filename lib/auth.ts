import { axiosInstance } from "./axios";

type dataTypes = {
  email?: string;
  password?: string;
  username?: string;
};
export const auth = async (endpoint: string, data?: dataTypes) => {
  const response = axiosInstance.post(`auth/${endpoint}`, data);
  return response;
};
