import { createStore } from 'redux';
import rootReducers from './reducer.js';

export default initState => createStore(rootReducers, initState)