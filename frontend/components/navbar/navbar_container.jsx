import { connect } from 'react-redux';

import { logout } from '../../actions/session_actions';
import NavBar from './navbar';
import { openModal, closeModal } from '../../actions/modal_actions'

const mapStatetoProps = ({ session, entities: { users } }) => {
    return {
        currentUser: users[session.id]
    };
};

const mapDispatchtoProps = dispatch => {
    return {
        logout: () => dispatch(logout()),
        openModal: modal => dispatch(openModal(modal))
    };
};

export default connect(
    mapStatetoProps,
    mapDispatchtoProps
)(NavBar);