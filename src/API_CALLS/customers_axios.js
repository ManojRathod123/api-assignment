import axios from "axios";
import { API_BASE2_PATH } from "./BASE2.URL";

export const customers = axios
  .get(`${API_BASE2_PATH}`)
  .then((res) => {
    console.log(res.data);
    return res.data;
  })
  .catch((err) => {
    return err.response;
  });
