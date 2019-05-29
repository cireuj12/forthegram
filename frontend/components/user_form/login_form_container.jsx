import { connect } from 'react-redux';
import React from 'react';
import {login} from '../../actions/session_actions';
import LogInForm from './login_form';

const mapStatetoProps = ({errors}) => {
    return {
        errors: errors.session,
    };
};

const mapDispatchtoProps = dispatch => {
    return {
        processForm: (user) => dispatch(login(user)),
    };
};

export default connect(mapStatetoProps,mapDispatchtoProps)(LogInForm);