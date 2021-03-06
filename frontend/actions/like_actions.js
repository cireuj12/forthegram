import * as LikeApiUtil from '../utils/like_api_util';

export const RECEIVE_LIKE = "RECEIVE_LIKE";
export const REMOVE_LIKE = "REMOVE_LIKE";
export const RECEIVE_ALL_LIKES = "RECEIVE_ALL_LIKES"

export const createLike = like => dispatch => (
    LikeApiUtil.createLike(like).then(like => dispatch(receiveLike(like)))
);

export const deleteLike = likeId => dispatch => (
    LikeApiUtil.deleteLike(likeId).then(like => dispatch(removeLike(likeId)))
)

export const fetchLikesbyUser = (userId) => dispatch => (
    LikeApiUtil.fetchLikesbyUser(userId).then(likes => dispatch(receiveAllLikes(likes)))
)

export const fetchLikesbyPost = (postId) =>  {
    return (dispatch) => {
        return LikeApiUtil.fetchLikesbyPost(postId).then((promiseobj) => {
            // debugger
            return dispatch(receiveAllLikes(promiseobj))
        })
    }
}

export const fetchAllLikes = () => dispatch => (
    LikeApiUtil.fetchAllLikes().then(likes => dispatch(receiveAllLikes(likes)))
)

const receiveLike = (like) => {
    return {
        type: RECEIVE_LIKE,
        like
    }
}

const removeLike = likeId => {
    return {
        type: REMOVE_LIKE,
        likeId
    }
}

const receiveAllLikes = likes => {
    return {
        type: RECEIVE_ALL_LIKES,
        likes
    }
}