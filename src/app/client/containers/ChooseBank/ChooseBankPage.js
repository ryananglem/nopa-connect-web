import React, {Component} from 'react';
import { connect } from 'react-redux';
import { Layout } from '../../components';
import BankSelector from '../../components/ChooseBank/BankSelector';
import { selectBank, getBanks } from '../../redux/actions/bankActions';
import { browserHistory } from 'react-router';

class ChooseBankPage extends Component  {
  constructor(props, context) {
    super(props, context);
    this.chooseBank = this.chooseBank.bind(this);
    this.selectBank = this.selectBank.bind(this);
}
chooseBank() {
  if (this.props.bank!==undefined)
      browserHistory.push('/login');
}
selectBank(bank) {
  this.props.selectBank(bank);
}
render()
  {
    return (
      <Layout title="nopa | choose your bank">
        <BankSelector banks={this.props.bankList}
                      onChooseBank={this.chooseBank}
                      onSelectBank={this.selectBank} />
      </Layout>
    );
  }
}
const mapStateToProps = (state) => {
  const { bankReducer } = state;
  const { bankList, bank } = bankReducer;
  return {
    bankList,
    bank
  }
}
const mapDispatchToEvents = (dispatch) => {
  return {
    selectBank: (bank) => {
      dispatch(selectBank(bank))
    },
    getBanks: () => {
      dispatch(getBanks())
    }
  };
};
export default connect(mapStateToProps, mapDispatchToEvents)(ChooseBankPage);
