import merge from 'lodash/merge';

import {RECEIVE_LIKE, REMOVE_LIKE, RECEIVE_ALL_LIKES} from '../actions/like_actions';

const LikesReducer = (oldState = {}, action) => {
    Object.freeze(oldState)
    switch (action.type) {
        case RECEIVE_ALL_LIKES:
            // debugger
            return action.likes;
        case RECEIVE_LIKE:
            return merge({}, oldState, {[action.like.id]: action.like});
        case REMOVE_LIKE:
            let newState = merge({}, oldState);
            delete newState[action.likeId];
            return newState;
        default:
            return oldState;
    }
};

export default LikesReducer;