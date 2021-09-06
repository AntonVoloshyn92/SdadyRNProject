import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://newsapi.org/v2/",
  // timeout: 60000,
  // headers: {
  //   "content-type": "application/json",
  //   Accept: "application/json",
  // },
});
