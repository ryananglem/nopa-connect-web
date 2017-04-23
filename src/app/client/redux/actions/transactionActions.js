import { getTransactionData } from '../api/transactionApi'
import * as types from '../actions/actionTypes';

export const requestTransactions = () => ({
  type: types.GET_TRANSACTIONS_REQUEST,
  isFetching: true
})

export const receiveTransactions = (transactions) => ({
  type: types.GET_TRANSACTIONS_SUCCESS,
  isFetching: false,
  transactions
})

export const getTransactionsError = () => ({
  type: types.GET_TRANSACTIONS_ERROR,
  isFetching: false
})

export const getTransactions = () => {
  return (dispatch) => {
    dispatch(requestTransactions());
    return getTransactionData()
      .then((data) => {
        dispatch(receiveTransactions(data))
      }).catch((err)=> {
        dispatch(getTransactionsError (err.message));
      });
  }
}
