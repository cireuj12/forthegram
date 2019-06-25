import React from 'react';

export default class HeartForm extends React.Component {
    constructor(props) {
        super(props);
        this.handleCreateLike = this.handleCreateLike.bind(this);
    }

    handleCreateLike() {
        const likeData = {
            likeable_id:  this.props.post.id,
            likeable_type: 'Post',
            user_id: this.props.user_id
        }
        this.props.createLike(likeData)
    }

    render() {
        // debugger
        // const { currentUser, comment } = this.props;
        return (
            <div className="heart-container">
             <img onClick={this.handleCreateLike} className="heart" src="https://freepngimg.com/thumb/instagram/1-2-instagram-heart-transparent.png"
                     title="heart"
                     alt="heart"></img>
            </div>
        )
    }

}


//  var liked

// loop through the likes, if likeable_id === the posts ID
//     liked = true
//      else
//     liked = false




//     render

//    if liked
//         <redheard
//      else
//        notredheart