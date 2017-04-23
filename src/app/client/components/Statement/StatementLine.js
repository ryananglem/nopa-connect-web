import React, { PropTypes} from 'react'

const StatementLine = ({statementLine}) => {
  return (
    <div className="statement-line" >
      <div className="statement-line-beneficiary">{statementLine.beneficary}</div>

      <div className="statement-line-value">{statementLine.value}</div>
    </div>
  )
}
StatementLine.propTypes = {
  statementLine: PropTypes.object.isRequired
};
export default StatementLine;
