import React, { PropTypes} from 'react'

const AccountDetails = ({account}) => {
  return (
    <div className="account-details" >
    <div className="account-details-left">
      <h3>{ account.bank.name } </h3>
      <h3>{ account.surname }</h3>
    </div>
    <div className="account-details-right">
      <h3> Current account </h3>
      <h3> { account.accountNumber} </h3>
      <h3> { account.sortCode } </h3>
      </div>
    </div>
  )
}
AccountDetails.propTypes = {
  account: PropTypes.object.isRequired
};
export default AccountDetails;
