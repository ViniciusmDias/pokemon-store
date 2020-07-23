import { combineReducers } from 'redux';

import cardsReducer from './Cards';
import toastReducer from './Toast';


export default combineReducers({
  cardsReducer,
  toastReducer
});
