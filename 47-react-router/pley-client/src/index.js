import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App';
import { BrowserRouter } from 'react-router-dom'

// What do we want to add to the page
// Where do we want to add it
ReactDOM.render(<BrowserRouter><App /></BrowserRouter>, document.getElementById('root'));
