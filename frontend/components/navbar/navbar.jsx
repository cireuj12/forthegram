import React from 'react';
import * as ReactDOM from 'react-dom'
import { Link } from 'react-router-dom';
import Modal from '../modal/modal';
//import photoupload container?


const NavBar = ({ currentUser, openModal, logout }) => (
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

                    <a className="navBar-explore" href="explore">
                        <img src="https://www.freeiconspng.com/uploads/compass-icon-22.png" width="40px" height="40px" alt="Compass Photos Icon" /></a>
                    <button className="navBar-addphoto" onClick={() => openModal('uploadPhotoForm')}>
                        <img src="https://cdn3.iconfinder.com/data/icons/instagram-18/512/199_Instagram_Plus_Sets_Upload-512.png"
                            title="upload"
                            alt ="upload1"></img>
                    </button>
                    <Link to={`/users/${currentUser.id}`} className="navBar-user">
                        <img src="https://cdn3.iconfinder.com/data/icons/basic-user-interface-application/32/INSTAGRAM_ICON_SETS-12-512.png"
                            title="logout"
                            alt="logout1"></img>
                
                    </Link>
                    <button className="navBar-logout" onClick={logout} value="logout">Log Out</button>

                </div>
            </div>
        </div>
    </nav>
 );

 export default NavBar;
