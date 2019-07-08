import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'
import { fetchUser } from '../../actions/user_actions'

const mapStateToProps = (state, ownProps) => {
    // debugger
    return {
        user: state.entities.users[ownProps.match.params.userId],
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchUser: userId => dispatch(fetchUser(userId)),

        //fetch posts by userId
    }
}

class UserProfile extends React.Component {

    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.fetchUser(this.props.match.params.userId)
    }

    render() {
        console.log(this.props.user.username);
        return (
            <div className="user-profile">

                <div className="profile-header-container">
                    <div className="profile-picture-container">
                        photo here
                    </div>

                     <div className="profile-box">
                        <div className="profile-box-user">
                            <div className="profile-username">
                                {this.props.user.username}
                            </div>
                        </div>

                        <div className="profile-box-counters">
                            <div></div>
                            <div></div>
                            <div></div>
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