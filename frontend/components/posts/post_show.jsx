import React from 'react';
import { Link } from 'react-router-dom';
import HeartForm from '../likes/heart';
import CommentFormContainer from '../comments/comment_form_container';
import CommentIndexContainer from '../comments/comment_index_container';
// import PostIndexItem from './post_index_item';

class PostShow extends React.Component {
    // debugger
    constructor(props) {
        super(props);
        this.handleDelete = this.handleDelete.bind(this);
        this.commentButton = this.commentButton.bind(this);
        this.enterComment = React.createRef();
    }

    componentDidMount() {
        // debugger
        this.props.fetchPost(this.props.match.params.postId);
        this.props.fetchLikes(this.props.session_id);
        // this.props.fetchComments()
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

    commentButton() {
        this.enterComment.current.focus();
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
                                <div className="post-show-comments">
                        
                                    <div className="post-show-caption-box">
                                        <div className="post-show-caption-username">{this.props.post.username}</div>
                                        <div className="post-show-caption">{this.props.post.caption}</div>
                                    </div>

                                    <div className="show-comments-list-box">
                                        <CommentIndexContainer post={this.props.post}/>
                                    </div>

                                </div>
                                <div className="show-comment-form-container">
                                    <div className="post-buttons-container">
                                            <HeartForm createLike={this.props.createLike}
                                                deleteLike={this.props.deleteLike}
                                                likes={this.props.likes}
                                                post={this.props.post}
                                                session={this.props.session_id}
                                            />
                                        <img className="comment-button" src="https://buzzhostingservices.com/images/instagram-comment-icon-1.png"
                                                title="comment"
                                                alt="comment"
                                                onClick={() => {this.commentButton()} }
                                                ></img>
                                        <img className="flag-show" src="https://cdn3.iconfinder.com/data/icons/basic-user-interface-application/32/INSTAGRAM_ICON_SETS-07-512.png"
                                                title="flag"
                                                alt="flag"></img>
                                    </div>
                                    <div className="liked-by"></div>
                                    <div className="date-posted"></div>
                                    <div className="show-add-comment-container">
                                        <CommentFormContainer postId={this.props.post.id} inputRef={this.enterComment} />
                                    </div>
                                </div>
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