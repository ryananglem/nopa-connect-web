import LoginReducer from './loginReducer'
import { logoutSuccess, loginSuccess } from '../actions/loginActions'
import initialState from './initialState'

describe('login reducer', () => {
  it('should logout successfully', () => {

    const action = logoutSuccess();
    const newState = LoginReducer(initialState, action);

    expect(newState.loggedIn).toEqual(false);

  });

  it('should login successfully', () => {

    const details =  { id: 1}
    const action = loginSuccess(details);
    const newState = LoginReducer(initialState, action);

    expect(newState.loginDetails).toEqual(details);
    expect(newState.loggedIn).toEqual(true);


  })
})
