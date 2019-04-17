import { createStore } from 'redux';

import reducer from './reducers';

const getStore = (app) => {
    const store = createStore(reducer);
    return store;
};

export default getStore;
