import TransactionReducer from './transactionReducer'
import { receiveTransactions, requestTransactions } from '../actions/transactionActions'
import initialState from './initialState'

describe('transaction reducer', () => {
  it('should request transaction', () => {

    const action = requestTransactions();
    const newState = TransactionReducer(initialState, action);

    expect(newState.isFetching).toEqual(true);

  });

  it('should receive transactions', () => {

    const transcations = [ { id: 1}, {id: 2} ]
    const action = receiveTransactions(transcations);
    const newState = TransactionReducer(initialState, action);

    expect(newState.transactions).toEqual(transcations);
    expect(newState.isFetching).toEqual(false);


  })
})
