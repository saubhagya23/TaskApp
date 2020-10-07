import { combineReducers } from 'redux';
import authenticateReducer from './authenticateReducer';
import userReducer from './userReducer';

const rootReducer = combineReducers({
  authenticateReducer,
  userReducer,
});

export default rootReducer;