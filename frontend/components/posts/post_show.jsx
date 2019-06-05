import React from 'react';
import { Link } from 'react-router-dom';
// import PostIndexItem from './post_index_item';

class PostShow extends React.Component {
    
    componentDidMount() {
        this.props.fetchPost(this.props.match.params.postId);
    }

    render() {

        return (
            <div className="post-show-page">
                <div className="post-show-container">
                <div className="post-show-caption">{this.props.post.caption}</div>
                <img className="post-index-item-image" src={this.props.post.photoUrl} />
                <Link to="/">Back to Index</Link>
                </div>
            </div>
        );
    }
}

export default PostShow;