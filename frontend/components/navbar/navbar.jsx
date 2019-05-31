import React from 'react';
import * as ReactDOM from 'react-dom'
import { Link } from 'react-router-dom';


const NavBar = ({ currentUser, logout }) => (
    <nav>
        <div className="navBar">
            <div className="navBarContainer">

                <div className="navBar-left-side">

                    <a className="navBar-instagram-logo" href="/">
                        <img src="https://image.flaticon.com/icons/png/512/87/87390.png"
                            title="instagram-logo"
                             alt="instagram"></img>
                    </a>
                    <div className="navBar-line"></div>
                    <a className="navBar-instagram" href="/">FortheGram</a>
                </div>

                <div className="navBar-right-side">
                    <a href="explore"></a>
                    <a href="postphoto"></a>
                    <a href="userprofile"></a>
                    <button className="navBar-logout" onClick={logout}>
                        <img src="https://cdn3.iconfinder.com/data/icons/basic-user-interface-application/32/INSTAGRAM_ICON_SETS-12-512.png"
                             title="logout"
                             alt ="logout1"></img>
                    </button>
                </div>
            </div>
        </div>
    </nav>
 );

 export default NavBar;
