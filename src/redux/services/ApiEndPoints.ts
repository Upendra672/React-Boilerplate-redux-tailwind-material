import { environment } from "./Environment";

export const EndPoint = {
  BASE_URL : environment.API_PATH,
  LOGIN: `/api/v1/auth/login`,
};