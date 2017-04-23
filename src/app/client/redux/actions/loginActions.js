import * as types from '../actions/actionTypes';

export const loginSuccess = (loginDetails) => ({
  type: types.LOGIN_SUCCESS,
  loggedIn: true,
  loginDetails
})

export const loginFailed = () => ({
  type: types.LOGIN_FAIL,
  loggedIn: false
})

export const logoutSuccess = () => ({
  type: types.LOGOUT_SUCCESS,
  loggedIn: false
})
