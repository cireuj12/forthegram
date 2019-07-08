import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'

const mapStateToProps = (state, ownProps) => {

}

const mapDispatchToProps = dispatch => {

}

class UserProfile extends React.Component {

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="user-profile">

                <div className="profile-header-container">
                    <div className="profile-picture-container">
                        photo here
                    </div>

                     <div className="profile-box">
                        <div className="profile-box-user">
                
                        </div>

                        <div className="profile-box-counters">

                        </div>

                        <div className="profile-box-info">

                        </div>
                    </div>
                </div>
                <div>
                <span>
                    Two components will be rendered
                    <br></br>
                    The user profile top box
                    <br></br>
                    An Index of posts
                </span>
                </div>
            </div>
        )
    }

}

export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(UserProfile));