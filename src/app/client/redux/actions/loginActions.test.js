import * as types from './actionTypes';
import { loginSuccess, logoutSuccess} from './loginActions';
import expect from 'expect';

describe('login actions', () => {

  it('should login', () => {

    const loginDetails = { account: 12356};
    const expectedAction = {
      type: types.LOGIN_SUCCESS,
      loggedIn: true,
      loginDetails: loginDetails
    };
    expect(loginSuccess(loginDetails)).toEqual(expectedAction);
  });

  it('should logout', () => {

    const expectedAction = {
      type: types.LOGOUT_SUCCESS,
      loggedIn: false
    };
    expect(logoutSuccess()).toEqual(expectedAction);
  });

})
