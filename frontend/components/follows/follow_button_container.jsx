import React from 'react';
import { createFollow, deleteFollow} from '../../actions/follow_actions';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

const msp = (state, ownProps ) => {
    return {
        follows: Object.values(state.entities.follows),
        session: state.session
    }
}

const mdp = dispatch => {
    return {
        createFollow: (follow) => dispatch(createFollow(follow)),
        deleteFollow: (followId) => dispatch(deleteFollow(followId))
    }
}

class FollowButton extends React.Component {
    constructor(props) {
        super(props);
        this.handleFollow = this.handleFollow.bind(this)
    }

    // The same follower cannot follow the same person
    //following_id and a follower_id
    //is both neccesary? seems redundant
    handleFollow() {
        // debugger
        if (this.props.session.id !== this.props.user.id) {
            const follow = {
                follower_id: this.props.session.id,
                following_id: this.props.user.id
            }

            this.props.createFollow(follow)
        } else {
            console.log("You cannot follow yourself -temp ")
        }
    }
    //Logic only render button if the user_page does not have the current_user
    //fetch follows by user_page
    render() {
        console.log(this.props)
        // debugger
        return (
            <div>
                <button className="follow-button" onClick={this.handleFollow}>Follow</button>
            </div>
        )
    }
}


export default withRouter(connect(msp,mdp)(FollowButton));