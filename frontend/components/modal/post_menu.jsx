import React from 'react';
import { Link } from 'react-router-dom';

export default class PostMenu extends React.Component {

    constructor(props) {
        super(props);

        // this.props = this.props.post;

        //Modal needs to close, how do i guarantte this
    };

    // componentDidMount() {
    //     debugger
    //     this.props.fetchPost(this.props.match.params.postId);
    // }
    
    render() { //this is rendering
        console.log(this.state);
        console.log(this.props);
        // debugger
        //cannot reference delete post without refactoring modal logic
        return (
            <div className="post-menu-container">
            {/* <Link className="post-index-item-caption" to={`/posts/${this.props.postId}`}> */}
            <Link to="/" className="button-back-to-index">   
                Go to Index</Link>
            {/* <button className="delete-post-button">Delete Post</button> */}
            </div>
        )
    }

}
