import * as apiutil from '../utils/session_api_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';

const receiveCurrentUser = (currentUser) => {
    return {
        type: RECEIVE_CURRENT_USER,
        currentUser
    };
};

const logoutCurrentUser = () => {
    return {
        type: RECEIVE_CURRENT_USER,
        currentUser
    };
};

//does errors come in as an array already?
const receiveErrors = (errors) => {
    return {
        type: RECEIVE_ERRORS,
        errors
    };
};

export const login = (user) => dispatch => {
    return (
        apiutil.login(user)
            .then(user => dispatch(receiveCurrentUser(user)),
                res => dispatch(receiveErrors(res.responseJSON)))
    );
};

export const logout = () => dispatch => {
    return (
        apiutil.logout()
            .then(() => dispatch(logoutCurrentUser()),
                res => dispatch(receiveErrors(res.responseJSON)))
    );
};

export const signup = (user) => dispatch => {
    return (
        apiutil.signup(user)
            .then((user) =>dispatch(receiveCurrentUser(user)),
                res => dispatch(receiveErrors(res.responseJSON)))
    );
};


