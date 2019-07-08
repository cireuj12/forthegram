import * as apiutil from '../utils/session_api_util';

export const RECEIVE_USER = 'RECEIVE_USER';

export const fetchUser = userId => dispatch => (
    apiutil.fetchUser(userId).then(user =>
        dispatch(receiveUser(user)))
);

const receiveUser = (user) => {
    return {
        type: RECEIVE_USER,
        user
    };
};
