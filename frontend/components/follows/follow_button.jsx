import React from 'react';

export default class FollowButton extends React.Component {
    constructor(props) {
        super(props);

    }
    // The same follower cannot follow the same person
    //following_id and a follower_id
    //is both neccesary? seems redundant
    handleFollow() {
        const follow = {
            follower_id: this.props.session.id,
            following_id: this.props.user.id
        }

    }

    render() {
        return (
            <div>
                <button className="follow-button">Follow</button>
            </div>
        )
    }
}