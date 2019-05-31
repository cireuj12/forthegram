import React from 'react';
import { Link } from 'react-router-dom';
import SignUpFormContainer from '../user_form/signup_form_container';

const Greeting = ({currentUser, logout}) => {
    const sessionLinks = () => (
        <div className ="main-box">
            <div className="instagram-photo-container">
                <div className="instagram-photo-holder">

                </div>
            </div>
            <div className="splash-content-container">
                <div className="splash-content">
                    <div className="instagram">FortheGram</div>
                    <h2 className="greeting-h2">Sign up to see photos and videos from your friends.</h2>
                        <div className="login-signup-container">
                            <Link to="/login" className="login-link-button">
                                <button type="button" className="login-button">
                                    Log in</button>
                            </Link>
                        </div >
                        <div className="or-container">
                            <span className="or-text">OR</span>
                        </div>
                        <nav className="login-signup">
                                {/* <SignUpFormContainer /> */}
                            <div>

                            </div>
                    
                            <div className="login-signup-container">
                                <Link to="/signup"><button type="button" className="signup-button">
                                    Sign Up!</button>
                                </Link>
                            </div>
                        </nav>
            </div>
            </div>
        </div>
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

