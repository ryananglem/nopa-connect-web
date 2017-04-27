import * as types from './actionTypes';
import expect from 'expect';
import { requestTransactions, receiveTransactions, getTransactions } from './transactionActions';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

jest.mock('../api/transactionApi', () => ({ getTransactionData: jest.fn() }))

describe('transaction actions', () => {

  const middlewares = [thunk];
  const mockStore = configureMockStore(middlewares);

  it('should request transactions', () => {

    const coords = {lat: 10, lng: 15};
    const expectedAction = {
      type: types.GET_TRANSACTIONS_REQUEST,
      isFetching: true
    };
    expect(requestTransactions()).toEqual(expectedAction);
  });

  it('should receive transactions', () => {

    const coords = transactions;
    const expectedAction = {
      type: types.GET_TRANSACTIONS_SUCCESS,
      transactions: transactions,
      isFetching: false
    };
    expect(receiveTransactions(transactions)).toEqual(expectedAction);
  });

  it('should get transaction data from api', () => {

    const expectedActions = [
      {type: types.GET_TRANSACTIONS_REQUEST, isFetching: true},
      {type: types.GET_TRANSACTIONS_SUCCESS, transactions: transactions.transactions, isFetching: false}
    ];

    const transMock = require('../api/transactionApi').getTransactionData.mockImplementation(() => Promise.resolve(transactions.transactions))

    const store = mockStore({ transactions: [] });

    return store.dispatch(getTransactions())
      .then(() => { // return of async actions
        expect(store.getActions()).toEqual(expectedActions)
      });
  });

  const transactions = {
    "transactions": [
      {
        "id": 1,
        "dateStr": "Now",
        "beneficary": "PAYPAL ZARA",
        "value": "- 35.98"
      },
      {
        "id": 2,
        "dateStr": "Now",
        "beneficary": "HOUSE OF FRASER",
        "value": "- 35.98"
      }
    ]
  };


})
