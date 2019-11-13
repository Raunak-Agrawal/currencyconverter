import { combineReducers } from 'redux';
import currencies from './currencies';
import themeReducer from './theme';

export default combineReducers({
  currencies,
  theme: themeReducer,
});
