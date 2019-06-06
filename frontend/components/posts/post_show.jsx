import React from 'react';
import { Link } from 'react-router-dom';
// import PostIndexItem from './post_index_item';

class PostShow extends React.Component {
    
    componentDidMount() {
        this.props.fetchPost(this.props.match.params.postId);
    }
        //need to fix this; does not work when refreshing
    render() {

        return (
            <div className="post-show-page">
                <div className="post-show-container">
                    <img className="post-show-item-image" src={this.props.post.photoUrl} />
                            <div className="post-show-container-right-side">
                                <div className="post-show-username-box">
                                    <div className="post-show-username">{this.props.post.username}</div>
                            <Link to="/" className="button-back-to-index"><img className="post-three-dots" src="https://static.thenounproject.com/png/658625-200.png"
                                title="instagram-three-dots"
                                alt="instagram-three-dots"></img></Link>
                                </div>
                                <div className="post-show-caption-box">
                                    <div className="post-show-caption-username">{this.props.post.username}</div>
                                    <div className="post-show-caption">{this.props.post.caption}</div>
                                </div>
                            </div>
                    </div>
            </div>
        );
    }
}

export default PostShow;