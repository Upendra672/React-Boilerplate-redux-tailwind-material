import axios from "axios";
import toast from "react-hot-toast";
import { EndPoint } from "./ApiEndPoints";

const BASE_URL: string = EndPoint.BASE_URL;
const interceptor = axios.create({
  baseURL: BASE_URL,
});

// request
interceptor.interceptors.request.use(
  (config:any) => {
    config.headers = {
      "Content-Type": "application/json",
    //   Authorization: `Bearer ${token}`,
    };
    return config;
  },
  (error) => {
    return error;
  }
);

// response interceptor
interceptor.interceptors.response.use(
  async (response) => {
    return response;
  },
  (error) => {
    if (error.response) {
      const { status, data } = error.response;
     if (
        (error.response && status === 401) ||
        (error.response && status === 409) ||
        (error.response && status === 404)
      ) {
        toast.error(error.response.data.message);
      } else {
        // Handle other errors
        toast.error(data.message || "An error occurred.");
      }
    } else {
      toast.error("Server not responding.");
    }
    return Promise.reject(error);
  }
);

export default interceptor;
