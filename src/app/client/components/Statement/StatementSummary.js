import React, { PropTypes } from 'react'

import StatementDay from './StatementDay';
import AccountDetails  from './AccountDetails';

const StatementSummary = ({accountDetails, transactionDays, transactions}) => {
  const days = transactionDays.map((day, index) => (
    <StatementDay key={index} statementDay={day} />
  ))
  return (
    <div className="statement-summary" >
      <AccountDetails account={accountDetails} />
      <div className="statement-description">
        <p>
          Your transactions for the last 30 days
        </p>
      </div>
      <div className="statement-lines">
      {days}
      </div>
    </div>
  )
}
StatementSummary.propTypes = {
  accountDetails: PropTypes.object.isRequired,
  transactionDays: PropTypes.array
};
export default StatementSummary;
