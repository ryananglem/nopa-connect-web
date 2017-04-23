import React, {PropTypes} from 'react';
import logo from '../../../static/images/Logo_Nopa.svg';

const Header = ({loggedIn, onLoginClick, onLogoutClick}) => {
  const button = loggedIn
              ?  <button onClick={onLoginClick} className="header-login-button">Log out</button>
              :  <button onClick={onLogoutClick} className="header-login-button">Log in</button>
  return (
    <div className="header">
      <div className="logo"><img className="logo-image" alt="logo" src={logo} /></div>
      <div className="header-login">
        {button}
      </div>
    </div>

  )
}
Header.propTypes = {
  loggedIn: PropTypes.bool.isRequired,
  onLoginClick: PropTypes.func.isRequired,
  onLogoutClick: PropTypes.func.isRequired
}
export default Header
