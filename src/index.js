import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import logger from 'redux-logger';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';




const feelingsReducer = (state = 0, action) => {
    if (action.type === 'SET_FEELINGS') {
        return action.payload;
    }
    return state;
};

const understandingReducer = (state = 0, action) => {
    if (action.type === 'SET_UNDERSTANDING') {
        return action.payload;
    }
    return state;
};
const supportReducer = (state = 0, action) => {
    if (action.type === 'SET_SUPPORT') {
        return action.payload;
    }
    return state;
};
const commentReducer = (state = ' ', action) => {
    if (action.type === 'SET_COMMENT') {
        return action.payload;
    }
    return state;
};





// store of reducers
const storeInstance = createStore(
    combineReducers({
        //store reducers here
        feelingsReducer,
        understandingReducer,
        supportReducer,
        commentReducer

    }),
    applyMiddleware(logger),
);

// updated with provider and store 
ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
