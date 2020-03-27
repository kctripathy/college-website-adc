import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
//import { promiseMiddleware } from './middleware';
import thunk from 'redux-thunk';
import allReducers from '../reducers';

const getMiddleware = () => {
    if (process.env.NODE_ENV === 'production') {
        return applyMiddleware(thunk);
    } else {
        return applyMiddleware(thunk)
    }
};

export const store = createStore(allReducers, composeWithDevTools(getMiddleware()));