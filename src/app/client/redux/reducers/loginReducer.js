import * as types from '../actions/actionTypes';
import initialState from './initialState.js';

export default function transactionReducer(state = initialState.login, action) {
  switch(action.type) {
    case types.LOGIN_SUCCESS:
     return {
        loggedIn: true,
        loginDetails: action.loginDetails
     }
    case types.LOGOUT_SUCCESS:
      return {
        loggedIn: false,
        loginDetails: {}
      }
    default:
      return state;
  }
}
