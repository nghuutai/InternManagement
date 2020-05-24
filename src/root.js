import React from 'react';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import routes from './routes';
import { Router, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';

// Create an enhanced history that syncs navigation events with the store
export const store = configureStore();
// Create an enhanced history that syncs navigation events with the store
const history = syncHistoryWithStore(browserHistory, store);

function Root() {
    return (
        <div className="wrapper">
        <Provider store={store} >
            <Router history={history} routes={routes} />
        </Provider>
        </div>
    );
}

export default Root;