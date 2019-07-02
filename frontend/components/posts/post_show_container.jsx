import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'
import PostShow from './post_show';
import { fetchPost, deletePost } from '../../actions/post_actions';
import { openModal, closeModal } from '../../actions/modal_actions';
import { fetchLikes, deleteLike, createLike } from '../../actions/like_actions';
import { fetchComments } from '../../actions/comment_actions';

const mapStateToProps = (state, ownProps) => {
    return {
    post: state.entities.posts[ownProps.match.params.postId],
    session_id: state.session.id,
    likes: state.entities.likes
    }
    //add current user later to make edit/delete optiosn based on user only
};

const mapDispatchToProps = dispatch => ({
    fetchPost: id => dispatch(fetchPost(id)),
    deletePost: id => dispatch(deletePost(id)),
    fetchLikes: (userId) => dispatch(fetchLikes(userId)),
    // make a fetchLikesbyPost based on postId?
    createLike: like => dispatch((createLike(like))),
    deleteLike: (likeId) => dispatch((deleteLike(likeId))),
    fetchComments: () => dispatch((fetchComments())),
 // make a fetchCommentsbyPost based on postId
});

export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(PostShow));

// export default connect(mapStateToProps,mapDispatchToProps)(PostShow)