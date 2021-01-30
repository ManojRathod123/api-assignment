import axios from "axios";
import { API_BASE_PATH } from "./BASE_URL";

export const movies = axios
  .get(`${API_BASE_PATH}/movies`)
  .then((res) => {
    console.log(res.data);
    return res.data;
  })
  .catch((err) => {
    return err.res;
  });
