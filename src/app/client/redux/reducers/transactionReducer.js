import * as types from '../actions/actionTypes';
import initialState from './initialState.js';

export default function transactionReducer(state = initialState.transaction, action) {
  switch(action.type) {
    case types.GET_TRANSACTIONS_REQUEST:
      return {
          isFetching: true
      };
    case types.GET_TRANSACTIONS_SUCCESS:
     return {
       isFetching: false,
       transactions: action.transactions
     };
    case types.GET_TRANSACTIONS_ERROR:
      return {
        isFetching: false,
        message: action.message
      }
    default:
      return state;
  }
}
