import BankReducer from './bankReducer'
import { getBanks, selectBank } from '../actions/bankActions'
import initialState from './initialState'

describe('bank reducer', () => {
  it('should select bank', () => {

    const bank = { id: 1, name: 'ryans bank'}
    const action = selectBank(bank);

    const newState = BankReducer(initialState, action);

    expect(newState.bank).toEqual(action.bank);


  });

  it('should get list of banks', () => {

      const action = getBanks();
      const newState = BankReducer(initialState, action);

      expect(newState.bankList).toEqual(action.bankList);
  })
})
