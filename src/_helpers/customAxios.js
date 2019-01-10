import axios from "axios";

export const API_ROOT = "http://localhost:9000";

const axiosInst = axios.create({
  baseURL: API_ROOT
});

axiosInst.interceptors.response.use(response => {
  const res = response;
  console.log("response", response);
  const tokentoSave = response.data.token;
  const data = response.data;
  if (data.hasOwnProperty("token")) {
    localStorage.setItem("token", tokentoSave);
  }
  if (response.status === 401) {
    return window.location("/");
  }
  return response;
});

axiosInst.interceptors.request.use(request => {
  const res = request;
  const AUTH_TOKEN = localStorage.getItem("token");
  axiosInst.defaults.headers.common.Authorization = `Bearer ${AUTH_TOKEN}`;
  console.log("request", request);
  return request;
});

export default axiosInst;
