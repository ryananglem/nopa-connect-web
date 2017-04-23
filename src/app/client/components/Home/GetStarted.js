import React, { PropTypes} from 'react'
import logo from '../../../static/images/Logo_Nopa.svg';

const GetStarted = ({onGetStarted}) => {
  return (
    <div className="get-started">

      <div className="pagelogo">
        <img className="pagelogo-image" alt="logo" src={logo} />
        <h2>
          Your finances in one place
        </h2>

      </div>
      <p>
        Track all of your payments by connecting as many bank accounts
        as you'd like to your Nopa account and get updates to your balance instantly.
      </p>
      <div className="get-started-actions">
        <button className="get-started-button" onClick={onGetStarted}>Get started</button>
      </div>
    </div>
  )
}
GetStarted.propTypes = {
  onGetStarted: PropTypes.func.isRequired
};
export default GetStarted;
