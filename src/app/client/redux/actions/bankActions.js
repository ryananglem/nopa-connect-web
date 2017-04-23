import * as types from '../actions/actionTypes';

export const selectBank = (bank) => ({
    type: types.BANK_SELECT,
    bank
});

export const getBanks = () => ({
  type: types.BANK_GET_LIST,
  bankList
});

const bankList = [{
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
]
