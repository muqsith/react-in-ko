import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import reducer from './reducers';

let koApp = null;
let store = null;

export const initStore = (app) => {
    koApp = app;
    store = createStore(reducer, applyMiddleware(thunk));
};

export const getStore = () => {
    return store;
};
