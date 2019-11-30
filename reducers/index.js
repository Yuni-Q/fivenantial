import { combineReducers } from 'redux';
import layout from './layout';
import user from './user';
import data from './data';

const rootReducer = combineReducers({
  layout,
  user,
  data,
});

export default rootReducer;
