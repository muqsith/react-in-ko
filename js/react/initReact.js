import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import ListContainer from './components/ListContainer.jsx';
import * as storeHelper from './storeHelper';
import * as actions from './actions';

const initReact = (app) => {
    storeHelper.initStore(app);
    actions.initActions(app);
    const store = storeHelper.getStore();
    app.store = store; // redux store
    ReactDOM.render(
        <Provider store={store}>
            <ListContainer />
        </Provider>,
        document.querySelector('#employees-list'));
}

export default initReact;
