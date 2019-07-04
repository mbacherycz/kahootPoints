import { combineReducers } from 'redux'
import kahootReducer from './kahootReducer/kahootReducer';
import otherExampleReducer from './otherExampleReducer/otherExampleReducer';

export default combineReducers({ kahootReducer, otherExampleReducer /* , another reducer */ })