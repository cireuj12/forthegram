import merge from 'lodash/merge';
import {
    RECEIVE_ALL_POSTS,
    RECEIVE_POST,
    REMOVE_POST
} from '../actions/post_actions';

const PostsReducer = (oldState = {}, action) => {
    Object.freeze(oldState)
    switch (action.type) {
        case RECEIVE_ALL_POSTS:
            return action.posts;
        case RECEIVE_POST:
            return merge({},oldState,{[action.type.pos.id]: action.post });
        case REMOVE_POST:
            let newState = merge({},oldState);
            delete newState[action.postId]
            return newState;
        default:
            return oldState;
    }
};

export default PostsReducer;