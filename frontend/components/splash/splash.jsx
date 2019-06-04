import React from 'react';
import { Link } from 'react-router-dom';
import SignUpFormContainer from '../user_form/signup_form_container';
import PostIndexContainer from '../posts/post_index_container';

const splash = ({ currentUser, logout }) => {
    const splashsignupform = () => (
        <div className="main-box">
            <div className="instagram-photo-container">
                <div className="instagram-photo-holder">
                    <div className="iphone-image"></div>
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
                        <div className="or-border"></div>
                        <span className="or-text">OR</span>
                        <div className="or-border"></div>
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
                    <div>
                        <p className="p-terms">By signing up, you agree to our Terms, Data Policy and Cookies Policy</p>
                    </div>
                </div>
                <div className="have-an-account">
                    <p className="have-an-account-p">Have an account? Log in.
                        </p>
                    </div>
            </div>
        </div>
    );
                        //post index container on the side
    const splashnotneeded = () => (
        <div className="overall-div">
            <PostIndexContainer />
        </div>
    )

    return currentUser ? splashnotneeded() : splashsignupform();    

}

export default splash;