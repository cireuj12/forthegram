import React from 'react';
import { Link } from 'react-router-dom';

const PostIndexItem = ({post}) => {
    return (
        <li className="post-index-item">
            <div className= "post-index-container">
                    <h2 className="post-user-header"><span>User info will be here</span>
                        <div className="post-three-dots-container">
                            <img className="post-three-dots" src="https://static.thenounproject.com/png/658625-200.png"
                                title="instagram-three-dots"
                                alt="instagram-three-dots"></img>
                        </div>
                    </h2>
                <img className="post-index-item-image" src={post.photoUrl} />
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
                    <div>{post.caption}</div>
                </div>

            </div>
        </li>

    )
}

export default PostIndexItem;