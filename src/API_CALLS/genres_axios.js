import axios from "axios";
import { API_BASE1_PATH } from "./BASE1_URL";

export const genres = axios
  .get(`${API_BASE1_PATH}`)
  .then((res) => {
    console.log(res.data)
    return res.data;
  })
  .catch((err) => {
    return err.response;
  })
    