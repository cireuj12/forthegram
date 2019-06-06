import React from 'react';
import { Link } from 'react-router-dom';

export default class PostMenu extends React.Component {

    constructor(props) {
        super(props);

        // this.props = this.props.post;
    };
    render() { //this is rendering
        console.log(this.state);
        console.log(this.props);
        return (
            <div className="post-menu-container">
            <Link className="post-index-item-caption" to={`/posts/${this.props.postId}`}>Go To Post</Link>
            <button className="delete-post-button">Delete Post</button>
            </div>
        )
    }

}
