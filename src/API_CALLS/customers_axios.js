import axios from "axios";
import { API_BASE_PATH } from "./BASE_URL";

export const customers = axios
  .get(`${API_BASE_PATH}/customers`)
  .then((res) => {
    console.log('*****************************************************************************************')
    console.log(res.data);
    return res.data;
  })
  .catch((err) => {
    return err.response;
  });
