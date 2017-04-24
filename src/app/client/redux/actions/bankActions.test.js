import * as types from './actionTypes';
import { getBanks, selectBank } from './bankActions';

describe ('bank actions', () => {

  it('should get list of banks', () => {

    const expectedAction = {
      type: types.BANK_GET_LIST,
      bankList: banks
    };
    expect(getBanks()).toEqual(expectedAction);
  });


  it('should select a bank', () => {
    const bank = { id: 1, name: 'HSBC'};
    const expectedAction = {
      type: types.BANK_SELECT,
      bank: bank
    };
    expect(selectBank(bank)).toEqual(expectedAction);
  });

  const banks = [{
    id: 1,
    name: 'Barclays',
    image: 'Barclays.png'
  },
    {
      id:2,
      name: 'Natwest',
      image: 'LogoNatwest.png'
    },
    {
      id: 3,
      name: 'Lloyds Bank',
      image: 'LogoLloyds.png'
    },
    {
      id: 4,
      name: 'HSBC',
      image: 'LogoHSBC.png'
    },
    {
      id: 5,
      name: 'TSB',
      image: 'LogoTSB.png'
    },
    {
      id: 6,
      name: 'Santander',
      image: 'LogoSantander.png'
    }
  ];


})
