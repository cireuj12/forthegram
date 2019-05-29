import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';
import * as actions from './actions/session_actions';

document.addEventListener('DOMContentLoaded', () => {
    const store = configureStore();
    window.getState = store.getState;
    window.dispatch = store.dispatch;
    window.signup = actions.signup;
    window.login = actions.login;
    const root = document.getElementById('root');
    ReactDOM.render(<Root store={store} />, root);
}); 