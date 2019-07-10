import React from 'react';
import { createFollow, deleteFollow} from '../../actions/follow_actions';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

const msp = (state, ownProps ) => {
    return {
        follows: state.entities.follows,
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
        this.deleteFollow = this.deleteFollow.bind(this)
        this.followed = this.followed.bind(this)
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

    deleteFollow() {
        
        const follows_array_iterate = Object.values(this.props.follows)
        //The array of followers in the state return the User page's followers
        for (let i = 0; i < follows_array_iterate.length; i++) {
            if (follows_array_iterate[i].following_id === this.props.user.id) {
                if (follows_array_iterate[i].follower_id === this.props.session.id) {
                    var user = follows_array_iterate[i].id
                } 
            }
        }
        // debugger
        this.props.deleteFollow(user)
    }

    followed() {
            var session = this.props.session.id
            var follows_array = [] //array of likeable_ids
            var follows_object = this.props.follows
            if (Object.keys(follows_object).length !== 0 && follows_object.constructor === Object) {
                const follows_array_iterate = Object.values(follows_object)
                for (let i = 0; i < follows_array_iterate.length; i++) {
                    if (follows_array_iterate[i].follower_id === session) {
                    follows_array.push(follows_array_iterate[i].follower_id)
                    }
                }
            }
            // debugger
            if (follows_array.includes(session)) {
                return true
            } else {
                return false 
            }
    
        }
  

    //Logic only render button if the user_page does not have the current_user
    //fetch follows by user_page
    render() {
        if (this.props.user.id === this.props.session.id) {
            return (<div></div>)
        } else {    
                // debugger
                if (this.followed()) {
                    // debugger
                    return (
                        <div>
                            <button className="follow-button" onClick={this.deleteFollow}>UnFollow</button>
                        </div>
                    )
                } else {
                    // debugger
                    return (
                        <div>
                            <button className="follow-button" onClick={this.handleFollow}>Follow</button>
                        </div>
                    )
                }
        }
    }
}
//follow button logic incorrect
//500 error when deleting

export default connect(msp,mdp)(FollowButton);

