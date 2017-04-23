import React, {Component} from 'react';
import { connect } from 'react-redux';
import { Layout } from '../../components';
import LoginForm from '../../components/Login/LoginForm';
import { loginSuccess } from '../../redux/actions/loginActions';
import {browserHistory} from 'react-router';

  class LoginPage extends Component {
    constructor(props, context) {
      super(props, context);
      this.state = {
        login: {
          bank: this.props.bank,
          surname: '',
          sortCode: '',
          accountNumber: '',
          passCode: '',
          memorableWord: ''
        },
        errors: {}
      };
      this.updateLoginState = this.updateLoginState.bind(this);
      this.login = this.login.bind(this);
    }
    updateLoginState(event) {
      const field = event.target.name;
      let login = this.state.login;
      login[field] = event.target.value;
      return this.setState({login: login});
    }
    login() {
      if (!this.loginFormIsValid()) {
        return;
      }
      this.props.login(this.state.login);
      browserHistory.push("/statement")
    }
    loginFormIsValid() {
      let formIsValid = true;
      let errors = {};
      if (this.state.login.accountNumber.length !== 8) {
        errors.accountNumber = 'Account number must be 8 digits long';
        formIsValid = false;
      }
      if (this.state.login.surname.length === 0) {
        errors.surname = 'Please enter your surname';
        formIsValid = false;
      }
      if (this.state.login.sortCode.length !== 6) {
        errors.sortCode= 'Sort code must be 6 digits long';
        formIsValid = false;
      }
      this.setState({errors: errors});
      return formIsValid;
    }
    render() {
      return (
        <Layout title="nopa | login">
          <LoginForm onChange={this.updateLoginState} onLogin={this.login} errors={this.state.errors} />
        </Layout>
      );
    }
  }
const mapStateToProps = (state) => {
  const { loginReducer, bankReducer } = state;
  const {bank } = bankReducer;
  const { loggedIn } = loginReducer;
  return {
    loggedIn,
    bank
  }
}
const mapDispatchToEvents = (dispatch) => {
  return {
    login: (details) => {
      dispatch(loginSuccess(details))
    }
  };
};
export default connect(mapStateToProps, mapDispatchToEvents)(LoginPage);
