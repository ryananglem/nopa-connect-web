import React, { PropTypes } from 'react';

const SelectBank = ({bank, onSelectBank}) => {
  return (
    <label className="select-bank" >
      <input type="radio" name="bank" value={bank.id} />
      <div className="bank-image-container" onClick={() => onSelectBank(bank)}>
        <img className="bank-image" alt={bank.name} src={require("../../../static/images/" + bank.image)} />
      </div>
    </label>
  )
}
SelectBank.propTypes = {
  bank: PropTypes.object.isRequired,
  onSelectBank: PropTypes.func.isRequired
};
export default SelectBank;
