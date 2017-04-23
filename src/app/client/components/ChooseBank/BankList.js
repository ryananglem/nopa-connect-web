import React, { PropTypes } from 'react'
import SelectBank from './SelectBank'

const BankList = ({bankList, onSelectBank}) => {
  const banks = bankList.map((bank) => (
    <div className="banks" key={bank.id}>
        <SelectBank bank={bank} onSelectBank={onSelectBank} />
    </div>))
  return (
    <div className="bank-list">
      {banks}
    </div>
  )
}
BankList.propTypes = {
  bankList: PropTypes.array,
  onSelectBank : PropTypes.func.isRequired
};
export default BankList;
