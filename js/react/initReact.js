import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import ListContainer from './components/ListContainer.jsx';
import getStore from './store';

const initReact = (app) => {
    const store = getStore(app);
    ReactDOM.render(
        <Provider store={store}>
            <ListContainer />
        </Provider>,
        document.querySelector('#employees-list'));
}

export default initReact;
