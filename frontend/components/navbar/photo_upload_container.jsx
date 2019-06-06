import { connect } from 'react-redux';
import React from 'react';
import { openModal, closeModal } from '../../actions/modal_actions';
import PhotoUploadForm from '../navbar/photo_upload';
import { createPost } from '../../actions/post_actions';


//author_id
const mapStatetoProps = (state) => {
    const testForm = {
        //need to change -- currently hardcoded author_id:""
        author_id: state.session.id,
        caption: "",
        photoFile: null,
        photoUrl: null
    }
    return {
        testForm
    };
};

const mapDispatchToProps = dispatch => {
    return {
        photoForm: (
            <button onClick={() => dispatch(openModal('uploadPhotoForm'))}>
      </button>
        ), // is this photoForm even neccesary?? this reference is incorrect
        closeModal: () => dispatch(closeModal()),
        createPost: post => dispatch(createPost(post))
    };
};

export default connect(mapStatetoProps, mapDispatchToProps)(PhotoUploadForm);