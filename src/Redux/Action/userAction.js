// import axios from "axios";

// export const userPost = () => {
//   return (dispatch) => {
//     dispatch({ type: "REQUEST_STARTED" });

//     axios
//       .post("http://localhost:8000/api/users", {
//         name: " ",
//         email: " ",
//         password: " ",
//       })
//       .then((response) =>
//         dispatch({ type: "REQUEST_SUCCEEDED", payload: response })
//       )
//       .catch((error) => dispatch({ type: "REQUEST_FAILED", error: error }));
//   };
// };
//******************************************************************************************************************//


// export const onSubmit = (payload) => (dispatch) => {
//   dispatch({ type: "REQUEST_STARTED" });
//   axios.post(
//       "http://localhost:8000/api/users", {
//         name: " ",
//         email: " ",
//         password: " ",
//       },
//       config
//     )
//     .then((res) => {
//       dispatch({
//         type: "REQUEST_SUCCEEDED",
//         data: res.data,
//       });
//     })
//     .catch((error) => {
//       dispatch({
//         type: "REQUEST_FAILED",
//         error: error,
//       });
//     });
// };
