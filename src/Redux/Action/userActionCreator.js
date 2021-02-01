import { REQUEST_STARTED, REQUEST_SUCCEEDED,REQUEST_FAILED} from './userActionType';

// Action creator
const request_started = () => {
    return {
        type = REQUEST_STARTED
  }
}
const request_successed = () => {
    return {
        type = REQUEST_SUCCEEDED,
        payload: {
          name:" ",
          email: " ",
          password: " "
        }
        
  }
}
const request_failed = () => {
    return {
        type = REQUEST_FAILED,
        payload: error,        
    };
  };
  
export {request_started, request_successed, request_failed} 