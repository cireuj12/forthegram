import React from 'react';
import { Link } from 'react-router-dom';

//map and mount the modal in this container and then start testing it

//this will now be a class item

class PostIndexItem extends React.Component {
    //const hackypost = post.id - 1 //This is a huge problem. The array of posts starts with position 0, but the actual id starts with 1
    constructor(props) {
        super(props);
        this.state = this.props.post;
    }
    
    render() {
    return (
        <li className="post-index-item">
            <div className= "post-index-container">
                    <h2 className="post-user-header"><span>User info will be here</span>
                    <div className="post-three-dots-container"> 
                    {/* <button className="navBar-addphoto" onClick={() => openModal('uploadPhotoForm')}> */}
                    <Link className="post-index-item-caption" to={`/posts/${this.state.id}`}>
                            <img className="post-three-dots" src="https://static.thenounproject.com/png/658625-200.png"
                                title="instagram-three-dots"
                            alt="instagram-three-dots"></img></Link>
                            {/* </button> */}
                        </div>
                    </h2>
                <img className="post-index-item-image" src={this.state.photoUrl} />
                    <div className="post-buttons-container">
                        <img className="heart" src="https://freepngimg.com/thumb/instagram/1-2-instagram-heart-transparent.png"
                            title="heart"
                            alt="heart"></img>
                        <img className="comment" src="https://buzzhostingservices.com/images/instagram-comment-icon-1.png"
                            title="comment"
                            alt="comment"></img>
                        <img className="flag" src="https://cdn3.iconfinder.com/data/icons/basic-user-interface-application/32/INSTAGRAM_ICON_SETS-07-512.png"
                            title="flag"
                            alt="flag"></img>
                    </div>
                    <div className="like-counter">like counter here with state refresh</div>
                    <div className="comments-container">
                    <div>{this.state.caption}</div>
                </div>

            </div>
        </li>

        )
    }
}

export default PostIndexItem;