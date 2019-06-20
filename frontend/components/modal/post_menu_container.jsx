import { connect } from 'react-redux';
import React from 'react';
import { openModal, closeModal } from '../../actions/modal_actions';
import PostMenu from './post_menu';
import { fetchPost, updatePost, deletePost  } from '../../actions/post_actions';
//delete, edit and show

//author_id
const mapStatetoProps = (state, ownProps) => {
    // return {
    //     // post: state.entities.post 
    //     post: state.entities.post[ownProps.match.params.postId]
    // }
};

const mapDispatchToProps = dispatch => {
    return {
        /*
        testchange: (
            <button onClick={() => dispatch(openModal('PostMenu'))}>
            </button>
        ),
        openModal: modal => dispatch(openModal(modal)),
        closeModal: () => dispatch(closeModal()),
          None of the above code is neccesary  */
        fetchPost: id => dispatch(fetchPost(id)), // I don't need to pass this?
        //Modal component exists in App - I cant fetch. I need to build in modal to the components
        deletePost: postId => dispatch(deletePost(postId)),
        updatePost: post => dispatch(updatePost(post))
    };
};

export default connect(null, mapDispatchToProps)(PostMenu);