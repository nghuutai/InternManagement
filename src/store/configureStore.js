

import {createStore, compose, applyMiddleware} from 'redux';
import thunkMiddleware from 'redux-thunk';
import rootReducer from '../reducers/index';

export default function configureStore(initialState) {
    const middewares = [
        thunkMiddleware,
    ];

    return createStore(rootReducer, initialState, compose(
            applyMiddleware(...middewares)
        )
    );
}