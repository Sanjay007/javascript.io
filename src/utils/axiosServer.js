import axios from "axios";

export const API_ROOT = "https://spring-javascript.herokuapp.com";

const axiosInst = axios.create({
  baseURL: API_ROOT
});

axiosInst.interceptors.response.use(response => {
  let res = response;
  console.log("response", response);
  const tokentoSave = response.data.token;
  const data = response.data;
  if (data.hasOwnProperty("ACCESS_TOKEN")) {
    localStorage.setItem("ACCESS_TOKEN", tokentoSave);
  }

  return response;
});

axiosInst.interceptors.request.use(request => {
  if (localStorage.getItem("ACCESS_TOKEN")) {
    request.headers = {
      Authorization: `Bearer ${localStorage.getItem("ACCESS_TOKEN")}`
    };
  }

  return request;
});

export default axiosInst;
