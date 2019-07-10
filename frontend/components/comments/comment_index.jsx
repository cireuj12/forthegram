import React from 'react';
import { Link } from 'react-router-dom';

class CommentIndex extends React.Component {

     constructor(props) {
     super(props);
     this.handleDeleteComment = this.handleDeleteComment.bind(this);
     this.isLoggedIn = this.isLoggedIn.bind(this);///
     }
     
    componentDidMount() {
        // this.props.fetchComments();
        this.props.fetchCommentsbyPost(this.props.post.id)
        //only fetching comments by post
    }
    
    handleDeleteComment(commentId) {
        this.props.deleteComment(commentId)
    }
    
    isLoggedIn(comment) {
        if (comment.user_id === this.props.session_id) {
            return true
        }
    }

    render() {
        // debugger

        //conditional delete for comments and likes
        const comments = this.props.comments.map(comment =>{
            if (this.props.post.id === comment.post_id) {
                // debugger
                    if (this.isLoggedIn(comment)) {
                        return (
                            <div key={comment.id}>
                                <div className="initial-comment" >
                                    <div className="initial-comment-username">
                                        <Link to={`/users/${comment.user_id}`}>
                                        {comment.username}
                                        </Link>
                                    </div> 
                                    <div className="initial-comment-comment" onClick={() => {this.props.deleteComment(comment.id)}}>{comment.body}
                                        <span className="tooltiptext">Delete Comment</span>
                                    </div>
            
                                </div>
                            </div>
                        );}
                    else {
                        return (
                            <div key={comment.id}>
                                <div className="initial-comment" >
                                    <div className="initial-comment-username">
                                        <Link to={`/users/${comment.user_id}`}>
                                            {comment.username}
                                        </Link>
                                    </div> 
                                    <div className="initial-comment-comment">{comment.body}</div>
                                </div>
                            </div>
                        )
                    }
                };
            });

        return (
            <div>
                <ul>
                    {comments}
                </ul>
            </div>
        );
    }
}


export default CommentIndex