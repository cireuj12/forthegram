import { connect } from 'react-redux';
import React from 'react';
import { openModal, closeModal } from '../../actions/modal_actions';
import PostMenu from './post_menu';
import { fetchPost, updatePost, deletePost  } from '../../actions/post_actions';
//delete, edit and show

//author_id
const mapStatetoProps = (state) => {
    return {
        post: state.entities.post 
    }
};

const mapDispatchToProps = dispatch => {
    return {
        testchange: (
            <button onClick={() => dispatch(openModal('PostMenu'))}>
            </button>
        ),
        openModal: modal => dispatch(openModal(modal)),
        closeModal: () => dispatch(closeModal()),
        fetchPost: id => dispatch(fetchPost(id)), // I don't need to pass this?
        deletePost: postId => dispatch(deletePost(postId)),
        updatePost: post => dispatch(updatePost(post))
    };
};

export default connect(mapStatetoProps, mapDispatchToProps)(PostMenu);