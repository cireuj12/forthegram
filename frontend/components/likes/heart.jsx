import React from 'react';

export default class HeartForm extends React.Component {
    constructor(props) {
        super(props);
        this.handleCreateLike = this.handleCreateLike.bind(this);
        this.liked = this.liked.bind(this);
        this.pulllikeId = this.pulllikeId.bind(this);
    }

    handleCreateLike() {
        const likeData = {
            likeable_id:  this.props.post.id,
            likeable_type: 'Post',
            user_id: this.props.session
        }

        if (!this.liked(likeData.likeable_id,likeData.user_id)) {
            this.props.createLike(likeData)
            // console.log("Liked added to the db") //add it
        }
        else { //remove it
            const likeId = this.pulllikeId(likeData.likeable_id,likeData.user_id)
            this.props.deleteLike(likeId)
            // console.log(this.pulllikeId(likeData.likeable_id,likeData.user_id))
            // console.log("Like has been removed from db")
        }
    }

    pulllikeId(likeable_input, user_input) { //pulls likeId based on the two foreign keys - really hacky
        var likes_object = this.props.likes
        if (Object.keys(likes_object).length !== 0 && likes_object.constructor === Object) {
            const likeable_array_iterate = Object.values(likes_object)
            for (let i = 0; i < likeable_array_iterate.length; i++) {
                if (likeable_array_iterate[i].likeable_id === likeable_input) {
                    if (likeable_array_iterate[i].user_id === user_input) {
                        return likeable_array_iterate[i].id
                    }
                }
            }
        }
    }
    //Checking if this photo is already liked by the user that is loggged in
    //So Like should now show if user is not in
    //Separate like counter for a different user needs to be implemented
    //Array of likes - how many have this post_id
    liked(likeable, user) {
        var likes_object = this.props.likes
        const likeable_array = [] //array of likeable_ids
        const user_array = [] //array of user_ids
        if (Object.keys(likes_object).length !== 0 && likes_object.constructor === Object) {
            const likeable_array_iterate = Object.values(likes_object)
            for (let i = 0; i < likeable_array_iterate.length; i++) {
                likeable_array.push(likeable_array_iterate[i].likeable_id)
                user_array.push(likeable_array_iterate[i].user_id)
            }
        }
        //[1,2,3]
        //[1,2]
        //of course includes [1,2] includes [2] and [1,2,3] includes [2]

        if (likeable_array.includes(likeable) && user_array.includes(user)) {
            // this only works because im only fetching comments for this specific user, but this wont work for a counter
            // ill need too do a separate fetchcomments or refactor this and filter here
            return true
        } else {
            return false 
        }

    }

    render() {
        // debugger
        if (this.liked(this.props.post.id,this.props.session)) {
        return (
            <div className="heart-container">
                 <img onClick={this.handleCreateLike} className="heart-fill" src="/assets/heart.png"
                         alt="heart"></img>
            </div>
        )} else {
            return (
            <div className="heart-container">
            <img onClick={this.handleCreateLike} className="heart" src="https://freepngimg.com/thumb/instagram/1-2-instagram-heart-transparent.png"
                    title="heart"
                    alt="heart"></img>
           </div>
        )}
    }


}
//change image of heart

