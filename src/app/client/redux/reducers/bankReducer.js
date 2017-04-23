import * as types from '../actions/actionTypes';
import initialState from './initialState.js';

export default function bankReducer(state = initialState.bank, action) {
  switch(action.type) {
    case types.BANK_SELECT:
      return {
        bank: action.bank,
        bankList: state.bankList
      }
    case types.BANK_GET_LIST:
      return { bankList: action.bankList }

    default: {
      return state;
    }
  }
}
