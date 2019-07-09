import React from 'react';

export default class FollowButton extends React.Component {
    constructor(props) {
        super(props);

    }
    // The same follower cannot 
    handleFollow() {
        const follow = {
            follower_id: this.props.session.id
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