import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import intership from './intership.reducer';
import toeic from "./toeic.reducer"

const appReducer = combineReducers({
    intership,
    toeic,
    routing: routerReducer,
});

const rootReducer = (state, action) => {
  return appReducer(state, action);
};

export default rootReducer;