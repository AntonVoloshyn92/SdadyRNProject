import axios from 'axios';

export const axiosNewsInstance = axios.create({
  baseURL: 'https://newsapi.org/v2/',
  // timeout: 60000,
  // headers: {
  //   "content-type": "application/json",
  //   Accept: "application/json",
  // },
});

export const axiosYouTubeInstance = axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3/',
});
