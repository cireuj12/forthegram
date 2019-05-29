import React from 'react';
import ReactDOM from 'react-dom';
import * as apiutil from './utils/session_api_util';
import configureStore from './store/store';

document.addEventListener('DOMContentLoaded', () => {
    const store = configureStore();
    window.getState = store.getState;
    window.dispatch = store.dispatch;
    const root = document.getElementById('root');
    ReactDOM.render(<h1>Welcome to FortheGram via React</h1>, root);
}); 