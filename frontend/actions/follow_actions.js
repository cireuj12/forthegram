import * as FollowApiUtil from '../utils/follow_api_util';

export const RECEIVE_ALL_FOLLOWS = 'RECEIVE_ALL_FOLLOW';
export const RECEIVE_FOLLOW = "RECEIVE_FOLLOW";
export const REMOVE_FOLLOW = "REMOVE_FOLLOW";



export const fetchFollows = (userId) => dispatch => (
    FollowApiUtil.fetchFollows(userId).then(follows => dispatch(receiveAllFollows(follows)))
);

export const createFollow = follow => dispatch => (
    FollowApiUtil.createFollow(follow).then(follows => dispatch(receiveFollow(follow)))
);

export const deleteFollow = followId => dispatch => (
    FollowApiUtil.deleteFollow(followId).then(follow => dispatch(removeFollow(followId)))
)

const receiveAllFollows = follows => {
    return {
        type: RECEIVE_ALL_FOLLOWS,
        follows
    }
}

const receiveFollow = (follow) => {
    return {
        type: RECEIVE_FOLLOW,
        follow
    }
}

const removeFollow = followId => {
    return {
        type: REMOVE_FOLLOW,
        followId
    }
}