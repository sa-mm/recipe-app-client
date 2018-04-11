import axios from "axios";

const baseURL =
  process.env.NODE_ENV === "production" && "https://recipe-api.mcmyler.com";

export const axiosInstance = axios.create({
  baseURL
});
