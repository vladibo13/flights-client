import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import root from './reducers.ts';
const compose = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(root, compose(applyMiddleware(thunk)));
export default store;
