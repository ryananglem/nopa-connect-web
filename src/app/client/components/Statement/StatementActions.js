import React, { PropTypes} from 'react'

const StatementActions = ({onClickShowMore}) => {
  return (
    <div className="statement-actions" >
      <button className="show-more-transactions-button" onClick={onClickShowMore} >Show more</button>
    </div>
  )
}
StatementActions.propTypes = {
  onClickShowMore: PropTypes.func.isRequired
};
export default StatementActions;
