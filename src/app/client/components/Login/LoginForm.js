import React, { PropTypes} from 'react'
import TextInput from '../Input/TextInput';

const LoginForm = ({onChange, onLogin, errors}) => {
  return (
    <div className="login-details">
      <h2>Log in to your online banking</h2>
      <p>
        Enter the same details you use to login to your online banking
      </p>
     <div className="login-details">
       <TextInput name="surname"  placeholder="Surname" onChange={onChange} error={errors.surname} />
       <TextInput name="sortCode" placeholder="Sort code" onChange={onChange} error={errors.sortCode} />
       <TextInput name="accountNumber" placeholder="Account number" onChange={onChange} error={errors.accountNumber}  />
       <TextInput name="passCode" placeholder="Passcode" onChange={onChange} error={errors.passCode}  />
       <TextInput name="memorableWord" placeholder="Memorable word" onChange={onChange} error={errors.memorableWord}  />
     </div>
      <div className="login-actions">
        <input className="login-and-connect-button" type="submit" value="Log in & connect" onClick={onLogin} />
      </div>
    </div>
  )
}
LoginForm.propTypes = {
  onChange: PropTypes.func.isRequired,
  onLogin: PropTypes.func.isRequired,
  errors: React.PropTypes.object
};
export default LoginForm;
