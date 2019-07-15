import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'
import spiceReducer from './reducer'
import styleReducer from './styleReducer'



const rootReducer = combineReducers({spiceReducer: spiceReducer, styleReducer: styleReducer})

const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())


ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
