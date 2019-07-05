import React from 'react';

export default class LikeCounter extends React.Component {
    constructor(props) {
        super(props);
        this.likesCount = this.likesCount.bind(this)
    }

    likesCount() {
        var likes_object = this.props.likes
        const count_likes = [] //array of likeable_ids
        if (Object.keys(likes_object).length !== 0 && likes_object.constructor === Object) {
            const likeable_array_iterate = Object.values(likes_object)
            for (let i = 0; i < likeable_array_iterate.length; i++) {
                if (likeable_array_iterate[i].likeable_id === this.props.post.id) {
                count_likes.push(likeable_array_iterate[i].likeable_id)
                }
            }
        }

        if (count_likes.length < 1) {
            return 0
        } else {
            return count_likes.length;
        }

    }
    // Missing logic will be implemented here:
        // last person that you follow will show that they liked the comment
        // Liked by hello5 and __ others
        // follow and user_profile logic needed
    render() {

        if (this.likesCount() === 0) {
            return (
                <div className="like-counter-box">
                <div className="like-counter">
                </div>
            </div>
            )
        } else if (this.likesCount() === 1) {
            return (
            <div className="like-counter-box">
                <div className="like-counter">
                    <span>{this.likesCount()}</span>
                    <span> like</span>
                </div>
            </div>
            )
        } else {
            return(
            <div className="like-counter-box">
                <div className="like-counter">
                    <span>{this.likesCount()}</span>
                    <span> likes</span>
                </div>
            </div>
            )
        }
    }
}