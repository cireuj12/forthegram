import {
    RECEIVE_CURRENT_USER,
    LOGOUT_CURRENT_USER,
} from '../actions/session_actions';

import merge from 'lodash/merge';

const _nullSesion = {
    currentUser: null,
}   

export default (state =_nullSesion, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            return merge({}, { currentUser: action.user }); // no old state
        case LOGOUT_CURRENT_USER:
            return _nullSesion;
        default:
            return state;
    }
};