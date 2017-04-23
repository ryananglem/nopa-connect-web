import React from 'react';
import { connect } from 'react-redux';
import { Header, Footer } from '../';
import { logoutSuccess } from '../../redux/actions/loginActions';
import Partners from '../Home/Partners';
import { browserHistory} from 'react-router';

class Layout extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.logIn = this.logIn.bind(this);
    this.logOut = this.logOut.bind(this);
  }
  logIn() {
    this.props.logout();
    browserHistory.push('/');
  }
  logOut() {
    this.props.logout();
    browserHistory.push('/');
  }
  componentDidMount () {
    document.title = this.props.title;
  }
  render () {
    return (
      <div>
        <Header loggedIn={this.props.loggedIn}
                onLoginClick={this.logIn}
                onLogoutClick={this.logOut}  />
        <div className="main-content">
          { this.props.children }
        </div>
        <div className="partner-section">
        <Partners/>
        </div>
        <Footer />
      </div>
    );
  }
}
Layout.propTypes = {
  title: React.PropTypes.string.isRequired
};
const mapStateToProps = (state) => {
  const { loginReducer } = state;
  const { loggedIn } = loginReducer;
  return {
    loggedIn
  }
}
const mapDispatchToEvents = (dispatch) => {
  return {
    logout: () => {
      dispatch(logoutSuccess())
    }
  };
};
export default connect(mapStateToProps, mapDispatchToEvents)(Layout);
