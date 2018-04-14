import { combineReducers } from 'redux';
import { appReducer } from './app/index.js';


export default combineReducers({ app: appReducer});