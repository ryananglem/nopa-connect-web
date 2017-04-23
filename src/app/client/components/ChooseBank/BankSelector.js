import React, { PropTypes} from 'react';
import BankList from './BankList';

const BankSelector = ({banks, onChooseBank, onSelectBank}) => {
  return (
    <div className="select-bank">
      <h2>Which bank does this account belong to?</h2>
      <p>
        Choose your bank
      </p>
     <BankList bankList={banks} onSelectBank={onSelectBank} />
        <div className="bank-selector-actions">
          <button className="choose-bank-button" onClick={onChooseBank}>Continue</button>
        </div>
    </div>
  );
};
BankSelector.propTypes = {
  banks: PropTypes.array,
  onChooseBank: PropTypes.func.isRequired
};
export default BankSelector;
