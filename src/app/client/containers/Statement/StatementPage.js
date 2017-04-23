import React, {Component} from 'react';
import { connect } from 'react-redux';
import { Layout } from '../../components';
import StatementSummary from '../../components/Statement/StatementSummary';
import StatementActions from '../../components/Statement/StatementActions';
import { getTransactions } from '../../redux/actions/transactionActions';
import {browserHistory} from 'react-router';

class StatementPage extends Component {
  constructor(props, context) {
    super(props, context);
    this.showMore= this.showMore.bind(this);
  }
  showMore() {
    this.props.getTransactions();
  }
  componentWillReceiveProps() {
    if (!this.props.loggedIn) {
      this.context.router.push('/');
    }
  }
  componentWillMount() {
    this.props.getTransactions();
  }
  render() {
    return (
      <Layout title="nopa | statement">
        <StatementSummary accountDetails={this.props.loginDetails}
                          transactionDays={this.props.transactionDays}
                          transactions={this.props.transactionList} />
        <StatementActions onClickShowMore={this.showMore} />
      </Layout>
    );
  }
}

const mapStateToProps = (state) => {
  const { transactionReducer, loginReducer } = state;
  const { transactions } = transactionReducer;
  const { loginDetails, loggedIn } = loginReducer;

  const dayList = transactions !== undefined
    ? transactions.reduce((result, current)=> {
      result[current.dateStr] = result[current.dateStr] || [];
      result[current.dateStr].push(current );
      return result;
    }, [])
    : [];
  let transactionDays = [];
  for (let key in dayList) {
    if (dayList.hasOwnProperty(key)) {
      transactionDays.push(dayList[key]);
    }
  }
  const transactionList = transactions !== undefined ? transactions : [];
  return {
    loggedIn,
    loginDetails,
    transactionDays,
    transactionList
  }
}
const mapDispatchToEvents = (dispatch) => {
  return {
    getTransactions: () => {
      dispatch(getTransactions())
    }
  };
};
export default connect(mapStateToProps, mapDispatchToEvents)(StatementPage);
