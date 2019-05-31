import React from 'react';
import { Link } from 'react-router-dom';
import SignUpFormContainer from '../user_form/signup_form_container';

const splash = ({ currentUser, logout }) => {
    const splashsignupform = () => (
        <div className="main-box">
            <div className="instagram-photo-container">
                <div className="instagram-photo-holder">

                </div>
            </div>
            <div className="splash-content-container">
                <div className="splash-content">
                    <h1 className="instagram">FortheGram</h1>
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
                        <SignUpFormContainer />
                        <div>

                        </div>

                        {/* <div className="login-signup-container">
                            <Link to="/signup"><button type="button" className="signup-button">
                                Sign Up!</button>
                            </Link>
                        </div> */}
                    </nav>
                </div>
            </div>
        </div>
    );

    const splashnotneeded = () => (
        <div><span>Splash not needed or render feed</span></div>
    )

    return currentUser ? splashnotneeded() : splashsignupform();    

}

export default splash;