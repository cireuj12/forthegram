import merge from 'lodash/merge';
import {
    RECEIVE_ALL_FOLLOWS,
    RECEIVE_FOLLOW,
    REMOVE_FOLLOW
} from '../actions/follow_actions';


const FollowsReducer = (oldState = {}, action) => {
    Object.freeze(oldState)
    switch (action.type) {
        case RECEIVE_ALL_FOLLOWS:
            return action.follows;
        case RECEIVE_FOLLOW:
            // debugger
            return merge({},oldState,{[action.follow.id]: action.follow });
        case REMOVE_FOLLOW:
            let newState = merge({},oldState);
            delete newState[action.followId]
            return newState;
        default:
            return oldState;
    }
};

export default FollowsReducer;