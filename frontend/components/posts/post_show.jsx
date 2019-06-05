import React from 'react';
import { Link } from 'react-router-dom';
import PostIndexItem from './post_index_item';

class PostShow extends React.Component {
    componentDidMount() {
        this.props.fetchPost(this.props.match.params.postId);
    }

    render() {

        return (
            <div>
                {/* {post.caption} */}
                <Link to="/">Back to Index</Link>
            </div>
        );
    }
}

export default PostShow;