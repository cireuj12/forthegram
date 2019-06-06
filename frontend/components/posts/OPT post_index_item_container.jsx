import { connect } from 'react-redux';

import { logout } from '../../actions/session_actions';
import { openModal, closeModal } from '../../actions/modal_actions'
import PostIndexItem from `./post_index_item`;

const mapStatetoProps = (post) => {
    return {
        post
    };
};

const mapDispatchtoProps = dispatch => {
    return {
        openModal: modal => dispatch(openModal(modal))
    };
};

export default connect(
    null,
    mapDispatchtoProps
)(PostIndexItem);

//put this in post_index_item
//instead of having a separate container