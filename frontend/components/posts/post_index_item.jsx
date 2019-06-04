import React from 'react';
import { Link } from 'react-router-dom';

const PostIndexItem = ({post}) => {
    return (
        <li className="post-index-item">
            <div className= "post-index-container">
            <h2>User info will be here</h2>
            <img className="post-index-item-image" src={post.photoUrl} />
            <div className="post-buttons-container">buttons here</div>
            <div className="comments-container"></div>
            <div>{post.caption}</div>
            </div>
        </li>

    )
}

export default PostIndexItem;