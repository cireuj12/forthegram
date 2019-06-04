import { connect } from 'react-redux';
import React from 'react';
import { openModal, closeModal } from '../../actions/modal_actions';
import PhotoUploadForm from '../navbar/photo_upload';
import { createPost } from '../../actions/post_actions';


//author_id
const mapStateToProps = state => {
    return {
        errors: state.errors.session,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        photoForm: (
            <button onClick={() => dispatch(openModal('uploadPhotoForm'))}>
      </button>
        ),
        closeModal: () => dispatch(closeModal()),
        createPost: post => dispatch(createPost(post))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(PhotoUploadForm);