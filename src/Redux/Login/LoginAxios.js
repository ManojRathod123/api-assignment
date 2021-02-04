import {REQUEST_FAILED,REQUEST_SUCCEEDED, REQUEST_STARTED} from './ActionType';
import axios from "axios";

export const loginUser = (payload) => (dispatch) => {
  //console.log(payload)
dispatch({ type: REQUEST_STARTED });
  axios
    .post("http://localhost:8000/api/auth", {
        email: payload.email,
        password: payload.password
    })
    .then((res) => {
      console.log(res)
      localStorage.setItem('token', res.data.token)
      dispatch({
        type: REQUEST_SUCCEEDED,
        data: res.data,
      });
    })
    .catch((error) => {
      dispatch({
        type: REQUEST_FAILED,
        error: error,
      });
    });
};  
