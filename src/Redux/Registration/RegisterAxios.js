import axios from "axios";

export const postUser = (payload) => (dispatch) => {
  dispatch({ type: "REQUEST_STARTED" });
  axios
    .post("http://localhost:8000/api/users", {
      name: payload.name,
      email: payload.email,
      password: payload.password, 
    })
    .then((res) => {
      console.log(res)
      dispatch({
        type: "REQUEST_SUCCEEDED",
        data: res.data,
      });
    })
    .catch((error) => {
      console.log(error)
      dispatch({
        type: "REQUEST_FAILED",
        error: error,
      });
    });
};