import {LoginReducer} from  '../Login/LoginReducer';
import {RegisterReducer} from '../Registration/RegisterReducer';
import {combineReducers} from 'redux'

export const reducer = combineReducers({
    LoginReducer:LoginReducer,
    RegisterReducer: RegisterReducer
})