import axios from "axios";
import jsCookie from "js-cookie";
import jwt_decode from "jwt-decode";

const BASE_URL = "http://localhost:5000/api";

const ACCESS_TOKEN = jsCookie.get("access");
const REFRESH_TOKEN = jsCookie.get("refresh");

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  headers: { authorization: `Bearer ${ACCESS_TOKEN}` },
});

const refreshToken = async () => {
  try {
    const res = await axios.post(`${BASE_URL}/users/refresh`, {
      token: REFRESH_TOKEN,
    });
    return res.data;
  } catch (err) {
    console.log(err);
  }
};

userRequest.interceptors.request.use(
  async (config) => {
    let currentDate = new Date();
    const decodedToken = jwt_decode(ACCESS_TOKEN);
    if (decodedToken.exp * 1000 < currentDate.getTime()) {
      const data = await refreshToken();
      config.headers.authorization = "Bearer " + data.accessToken;
    }
    return config;
  },
  (err) => {
    return Promise.reject(err);
  }
);
