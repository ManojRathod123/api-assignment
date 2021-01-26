import axios from "axios";
import { API_BASE3_PATH } from "./BASE3_URL";

export const movies = axios
  .get(`${API_BASE3_PATH}`)
  .then((res) => {
    console.log(res.data);
    return res.data;
  })
  .catch((err) => {
    return err.res;
  });
