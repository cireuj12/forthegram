import { connect } from 'react-redux';

import { logout } from '../../actions/session_actions';
import splash from './splash';

const mapStatetoProps = ({ session, entities: { users } }) => {
    return {
        currentUser: users[session.id]
    };
};

const mapDispatchtoProps = dispatch => {
    return {
        logout: () => dispatch((logout()))
    };
};

export default connect(
    mapStatetoProps,
    mapDispatchtoProps
)(splash);