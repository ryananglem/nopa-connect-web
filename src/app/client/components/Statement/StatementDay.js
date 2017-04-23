import React, { PropTypes} from 'react'

import StatementLine from './StatementLine';

const StatementDay = ({statementDay}) => {
  const transactionLines = statementDay.map((line) => (
    <StatementLine key={line.id} statementLine={line} />
  ))
  return (
    <div className="statement-summary" >
      <div className="statement-line-header">{statementDay[0].dateStr}</div>
      <div className="transaction-lines">
      {transactionLines}
      </div>
    </div>
  )
}
StatementDay.propTypes = {
  statementDay: PropTypes.array.isRequired
};
export default StatementDay;
