import React from 'react';

export default class HeartForm extends React.Component {
    constructor(props) {
        super(props);
        this.handleCreateLike = this.handleCreateLike.bind(this);
        this.liked = this.liked.bind(this);
    }

    handleCreateLike() {
        const likeData = {
            likeable_id:  this.props.post.id,
            likeable_type: 'Post',
            user_id: this.props.session
        }
        //if likeable_id && user_id is in the array as a pair already do not createlike
        //but instead deletes the like
        //else


        if (this.liked(likeData.likeable_id,likeData.user_id) === false) {
            this.props.createLike(likeData)
            console.log("Liked Added to the db")
        }
        else {
            // this.props.removeLike(this.props.)
            console.log("Like has been removed")
        }
    }
    //Checking if this photo is already liked by the user that is loggged in
    //So Like should now show if user is not in
    //Separate like counter for a different user needs to be implemented
    //Array of likes - how many have this post_id
    liked(likeable,user) {
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
        

        if (likeable_array.includes(likeable) && user_array.includes(user)) {
            return true
        } else {
            return false 
        }

    }

    render() {
        if (this.liked(this.props.post.id,this.props.session) === false) {
        return (
            <div className="heart-container">
             <img onClick={this.handleCreateLike} className="heart" src="https://freepngimg.com/thumb/instagram/1-2-instagram-heart-transparent.png"
                     title="heart"
                     alt="heart"></img>
            </div>
        )} else {
            return (
            <div className="heart-container">
                 <img onClick={this.handleCreateLike} className="heart" src="/assets/heart.png"
                         alt="heart"></img>
            </div>
        )}
    }


}
//change image of heart

