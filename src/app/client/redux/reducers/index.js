import {combineReducers} from 'redux';
import bankReducer from './bankReducer';
import transactionReducer from './transactionReducer'
import loginReducer from './loginReducer'

const rootReducer = combineReducers({
  bankReducer,
  transactionReducer,
  loginReducer
});

export default rootReducer;
