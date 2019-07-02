import React from 'react';

class CommentIndex extends React.Component {

     constructor(props) {
     super(props);
     this.handleDeleteComment = this.handleDeleteComment.bind(this);
     this.isLoggedIn = this.isLoggedIn.bind(this);///
     }
     
    componentDidMount() {
        this.props.fetchComments();
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
                                <div className="initial-comment" onClick={() => {this.props.deleteComment(comment.id)}} >
                                    <div className="initial-comment-username">{comment.username}</div> 
                                    <div className="initial-comment-comment">{comment.body}</div>
                                    <span className="tooltiptext">Delete Comment</span>
                                </div>
                            </div>
                        );}
                    else {
                        return (
                            <div key={comment.id}>
                                <div className="initial-comment" >
                                    <div className="initial-comment-username">{comment.username}</div> 
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