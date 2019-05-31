import React from 'react';
import { Link } from 'react-router-dom';
import SignUpFormContainer from '../user_form/signup_form_container';
import { NavBarContainer } from '../navbar/navbar';

const Greeting = ({currentUser, logout}) => {
    const sessionLinks = () => (
       <div></div>
    );                           

    const personalGreeting = () => (
        <hgroup className="header-group">
            
            <h2 className="header-name">Hello, {currentUser.username}!</h2>
            <button className="header-button" onClick={logout}>Log Out</button>
        </hgroup>
        //Insert Nav Bar here? or insert Nav bar in App to generate at login
    );

    return currentUser ? personalGreeting() : sessionLinks();
};

export default Greeting;

