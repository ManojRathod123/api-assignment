import axios from "axios";
import { API_BASE_PATH } from "./BASE_URL";

export const genres = axios
  .get(`${API_BASE_PATH}/genres`)
  .then((res) => {
    console.log(res.data);
    return res.data;
  })
  .catch((err) => {
    return err.response;
  });
