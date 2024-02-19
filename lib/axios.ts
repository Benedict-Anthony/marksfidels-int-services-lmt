"use client";
import axios from "axios";
export const axiosInstance = axios.create({
  baseURL: "http://localhost:8000/api/",
  timeout: 150000,
  withCredentials: true,
  withXSRFToken: true,
});
