import axios from "axios";
import ShowNotification from "../../utils/ShowNotification";
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
        ShowNotification("error",error.response.data.message)
      } else {
        // Handle other errors
        ShowNotification("error", data.message||"An error occurred.")
      }
    } else {
      ShowNotification("error", "Server is not responding")
    }
    return Promise.reject(error);
  }
);

export default interceptor;
