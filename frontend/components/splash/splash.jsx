import React from 'react';
import { Link } from 'react-router-dom';
import SignUpFormContainer from '../user_form/signup_form_container';
import PostIndexContainer from '../posts/post_index_container';
import DemoLoginContainer from '../user_form/demo_login_container';

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
                        {/* <Link to="/login" className="login-link-button">
                            <button type="button" className="login-button">
                                Log in</button>
                        </Link> */}
                        <DemoLoginContainer />
                    </div >
                    <div className="or-container">
                        <div className="or-border"></div>
                        <span className="or-text">OR</span>
                        <div className="or-border"></div>
                    </div>
                    <nav className="login-signup">
                        <SignUpFormContainer /> 
                        <div>
                                {/* Put demo login directly in SignUpFormContainer */}
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
                        <p className="have-an-account-p">Have an account? 
                            <Link to="/login" className="login-link"> Log in</Link> 
                        </p>
                    </div>
            </div>
                <div className="footer-login">  
                <div><a href="http://www.linkedin.com/in/eric-ju">LinkedIn</a></div>
                        <div><a>Website</a></div>
                <div><a href="http://www.github.com/cireuj12">GitHub</a></div>
                <div><a href="http://www.instagram.com">Instagram</a></div>
                </div>
        </div>
    );
                        //post index container on the side
    const splashnotneeded = () => (
        <div className="overall-div">
            <PostIndexContainer />
                <div className="right-side-container">
                    <div className="profiles-box">
                        <div></div>
                    </div>
                    <div className="stories-box">
                        <div></div>
                    </div>
                    <div className="suggestions-box">
                        <div></div>
                    </div>
                </div>
                <div className="footer-index">  
                <div><a href="http://www.linkedin.com/in/eric-ju">LinkedIn</a></div>
                    <div><a>Website</a></div>
                <div><a href="http://www.github.com/cireuj12">GitHub</a></div>
                <div><a href="http://www.instagram.com">Instagram</a></div>
                </div>
        </div>
    )

    return currentUser ? splashnotneeded() : splashsignupform();    

}

export default splash;