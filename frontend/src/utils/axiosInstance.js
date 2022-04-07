import axios from "axios";
import jsCookie from "js-cookie";

const BASE_URL = "http://localhost:5000/api";

const TOKEN = jsCookie.get("access");
const REFRESH_TOKEN = jsCookie.get("refresh");

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  headers: { authorization: `Bearer ${TOKEN}` },
});
