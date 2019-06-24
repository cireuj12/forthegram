import React from 'react';
import { Link } from 'react-router-dom';
// import PostIndexItem from './post_index_item';

class PostShow extends React.Component {
    // debugger
    constructor(props) {
        super(props);
        this.handleDelete = this.handleDelete.bind(this)
    }

    componentDidMount() {
        // debugger
        this.props.fetchPost(this.props.match.params.postId);
    }
 
    // componentDidUpdate(prevProps) { //CHECK IF THIS FIXED 1)
    //     // debugger
    //     if (prevProps.post && (prevProps.post.id != this.props.match.params.postId)) {
    //         this.props.fetchPost(this.props.match.params.postId);
    //     }
    // }
        //need to fix this; does not work when refreshing

    handleDelete(e) {
        e.preventDefault();
        this.props.deletePost(this.props.post.id).then(() => this.props.history.push('/'))
    }

    render() {
        // debugger
        const { post } = this.props; // This line is neccesary
        if (!post) return null; // (!this.props.post)

        // this at least renders part of the page

        return (
            <div className="post-show-page">
                <div className="post-show-container">
                    <img className="post-show-item-image" src={this.props.post.photoUrl} />
                            <div className="post-show-container-right-side">
                                <div className="post-show-username-box">
                                    <img className="show-stock-user" src="https://fntarizona.com/wp-content/uploads/2017/05/shutterstock_624472886.jpg"
                                     title="instagram-user"></img>
                                    <div className="post-show-username">{this.props.post.username}</div>
                                    {/* <button className="button-back-to-index" onClick={() => this.props.openModal('PostMenu')}> */}
                                    <Link to="/" className="button-back-to-index">
                                    <img className="post-three-dots" src="https://static.thenounproject.com/png/658625-200.png"
                                    title="instagram-three-dots"
                                    alt="instagram-three-dots"></img>
                                    </Link>
                                    {/* </button> */}
                                </div>
                                <div className="post-show-caption-box">
                                    <div className="post-show-caption-username">{this.props.post.username}</div>
                                    <div className="post-show-caption">{this.props.post.caption}</div>
                                </div>
                                    <form className="show-comment-form">
                                        <label htmlFor="post-caption"></label>
                                        <input type="text"
                                            placeholder="Add a comment..."
                                            id="post-comment-show" />
                                    </form>
                            </div>
                    </div>
                    <div className="show-delete">
                    <button onClick={this.handleDelete}>Delete this Post</button>
                    </div>
            </div>
        );
    }
}

export default PostShow;