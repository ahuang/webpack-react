import { combineReducers, createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { appReducer } from '@/store/app/index';


const rootReducers = combineReducers({ app: appReducer });
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export default initState => createStore(
    rootReducers,
    initState,
    composeEnhancers(applyMiddleware(thunk)),
);
