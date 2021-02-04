import {REQUEST_STARTED, REQUEST_SUCCEEDED,REQUEST_FAILED} from "./ActionType";

// here we initiate the state
const initialState = {
  email: " ",
  password: " ",
};

// create reducer
export const LoginReducer = (state = initialState, action) => {
  switch (action.type) {
    case REQUEST_STARTED:
      return {
        ...state,
      };
    case REQUEST_SUCCEEDED:
      return {
        ...state,
        email: action.payload,
        password: action.payload,
      };
    case REQUEST_FAILED:
      return {
        error: action.payload,
      };
    default:
      return state;
  }
};
