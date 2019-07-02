
//// Should this all exist in the post reducer because a post neededs to be pased in the util to generate the comments ////
import * as CommentApiUtil from '../utils/comment_api_util'

export const RECEIVE_ALL_COMMENTS = "RECEIVE_ALL_COMMENTS";
export const RECEIVE_COMMENT = "RECEIVE_COMMENT";
export const REMOVE_COMMENT = "REMOVE_COMMENT";


export const fetchComments = () => dispatch => (
    CommentApiUtil.fetchComments().then(comments => dispatch(receiveAllComments(comments)))
);

// export const createComment = comment => dispatch => (
//     CommentApiUtil.createComment(comment).then(comment => dispatch(receiveComment(comment)))
// );
//write to debug:

export const fetchCommentsbyPost = postId => dispatch => (
    CommentApiUtil.fetchCommentsbyPost(postId)
        .then(comments => dispatch(receiveAllComments(comments)))
);

export const createComment = comment => {
    return (dispatch) => {
        return CommentApiUtil.createComment(comment).then((promiseobj)=> {
            // debugger
            return dispatch(receiveComment(promiseobj));
        })
    }
}

export const deleteComment = commentId => dispatch => (
    CommentApiUtil.deleteComment(commentId).then(comment => dispatch(removeComment(commentId)))
);


const receiveAllComments = comments => {
    return {
        type: RECEIVE_ALL_COMMENTS,
        comments
    }
}

const receiveComment = (comment) => {
    return {
        type: RECEIVE_COMMENT,
        comment
    }
}

const removeComment = commentId => {
    return {
        type: REMOVE_COMMENT,
        commentId
    }
}


