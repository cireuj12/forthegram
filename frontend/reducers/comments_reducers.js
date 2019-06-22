import merge from 'lodash/merge';
import {
    RECEIVE_ALL_COMMENTS,
    RECEIVE_COMMENT,
    REMOVE_COMMENT,
} from '../actions/comment_actions';

const CommentsReducer = (oldState = {}, action) => {
    Object.freeze(oldState)
    switch (action.type) {
        case RECEIVE_ALL_COMMENTS:
            return action.comments;
        case RECEIVE_COMMENT:
            debugger
            return merge({},oldState,{[action.comment.id]: action.comment });
        case REMOVE_COMMENT:
            let newState = merge({},oldState);
            delete newState[action.commentId]
            return newState;
        default:
            return oldState;
    }
};

export default CommentsReducer;