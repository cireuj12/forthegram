import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { openModal, closeModal } from '../../actions/modal_actions'
import { createComment, fetchComments } from '../../actions/comment_actions';
import CommentFormContainer from '../comments/comment_form_container';
import CommentIndexContainer from '../comments/comment_index_container';
import { createLike } from '../../actions/like_actions';
import HeartForm from '../likes/heart';

//map and mount the modal in this container and then start testing it

//this will now be a class item

const mapStatetoProps = (state, ownProps) => {
    return {
        username: state.entities.posts[ownProps.post.id].username,
        user_id: state.session.id,
        likes: state.entities.likes
    };
};
/*convention is to call it `ownProps` but because we pass in `post` to `PostIndexItem` 
as inline props - if we want access to `post.id`, we first need to make `post` available to msp*/


const mapDispatchtoProps = dispatch => {
    return {
        createComment: comment => dispatch((createComment(comment))),
        fetchComments: () => dispatch((fetchComments())),
        createLike: like => dispatch((createLike(like)))
    };
};

class PostIndexItem extends React.Component {

    constructor(props) {
        super(props); //how to handle this?
        // const commentForm = {
        //     author_id = state.session.id,
        //     post_id = '',
        //     body = ''
        // };
    }
    
    componentDidMount() {
        // debugger
        this.props.fetchComments();
    }

    componentDidUpdate(prevProps) { 
        // debugger
        if (prevProps.comments && (prevProps.comments.length != this.props.comments.length)) {
            this.props.fetchComments();
        }
    }

    render() {
        // console.log(this.props)
    return (
        <li className="post-index-item">
            <div className= "post-index-container">
                    <h2 className="post-user-header">
                    <img className="stock-user" src="https://fntarizona.com/wp-content/uploads/2017/05/shutterstock_624472886.jpg" 
                        title="instagram-user"></img>
                        <div className="post-username">{this.props.username}</div>
                        <div className="post-three-dots-container"> 
                        {/* <button className="navBar-addphoto" onClick={() => this.props.openModal('PostMenu')}> */}
                        <Link className="post-index-item-caption" to={`/posts/${this.props.post.id}`}>
                            <img className="post-three-dots-index" src="https://static.thenounproject.com/png/658625-200.png"
                                title="instagram-three-dots"
                            alt="instagram-three-dots"></img>
                            </Link>
                            {/* </button> */}
                        </div>
                    </h2>
                <img className="post-index-item-image" src={this.props.post.photoUrl} />
                    <div className="post-buttons-container">
                            <HeartForm createLike={this.props.createLike}
                                likes={this.props.likes}
                            />
                        <img className="comment" src="https://buzzhostingservices.com/images/instagram-comment-icon-1.png"
                            title="comment"
                            alt="comment"></img>
                        <img className="flag" src="https://cdn3.iconfinder.com/data/icons/basic-user-interface-application/32/INSTAGRAM_ICON_SETS-07-512.png"
                            title="flag"
                            alt="flag"></img>
                    </div>
                    <div className="like-counter"></div>
                    <div className="comments-container">
                        <div className="initial-caption">
                            <div className="initial-caption-username">{this.props.username}</div>
                            <div className="initial-caption-caption">{this.props.post.caption}</div>
                        </div>
                        <div className="comments-list-box">
                            <CommentIndexContainer post={this.props.post}/>
                        </div>
                        <div className="comment-add-form-container">
                            {/*<form className="comment-form">
                                <label htmlFor="post-caption"></label>
                                <input type="text"
                                    placeholder="Add a comment..."
                                    id="post-comment"/>
                            </form> */}
                            <CommentFormContainer postId={this.props.post.id}/>
                        </div>
                 </div>

            </div>
        </li>

        )
    }
}

// export default PostIndexItem;

export default connect(
    mapStatetoProps,
    mapDispatchtoProps,
)(PostIndexItem);