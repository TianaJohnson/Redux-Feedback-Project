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






// store of reducers
const storeInstance = createStore(
    combineReducers({
        //store reducers here
        feelingsReducer

    }),
    applyMiddleware(logger),
);

// updated with provider and store 
ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
