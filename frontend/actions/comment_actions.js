
//// Should this all exist in the post reducer because a post neededs to be pased in the util to generate the comments ////
import * as CommentAPIUtil from `../utils/comment_api_util`

export const RECEIVE_ALL_COMMENTS = "RECEIVE_ALL_COMMENTS";
export const RECEIVE_COMMENT = "RECEIVE_COMMENT";


export const fetchComment = () => dispatch => (
    CommentApiUtil.fetchComments().then(comment => dispatch(receiveAllComments(comment)))
);

export const createComment = comment => dispatch => (
    CommentApiUtil.createComment(comment).then(comment => dispatch(receiveComment(comment)))
);


const receiveAllComments = comments => {
    return {
        type: RECEIVE_ALL_COMMENTS,
        comments
    }
}

const receiveComment = comment => {
    return {
        type: RECEIVE_COMMENT,
        comment
    }
}
