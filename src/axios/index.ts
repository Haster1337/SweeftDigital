import axios, { AxiosInstance } from "axios";

export const URL = "https://api.unsplash.com/";

const ACCESS_KEY = "zSwuzttd563lJz0ZzJ65pfpMtM7oYeEeSgHm9HWfQY8";
const ACCEPT_VERSION = "v1";

const authToken = `Client-ID ${ACCESS_KEY}`;

export const $api: AxiosInstance = axios.create({
  baseURL: URL,
  headers: {
    Authorization: authToken,
    "Accept-Version": ACCEPT_VERSION,
    "Content-Type": "application/json",
  },
  withCredentials: false,
});
