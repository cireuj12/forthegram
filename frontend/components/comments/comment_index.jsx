import React from 'react';

class CommentIndex extends React.Component {

     constructor(props) {
     super(props);
     };

    componentDidMount() {
        this.props.fetchComments();
    }
    
    render() {
        // debugger
        const comments = this.props.comments.map(comment =>{
            if (this.props.post.id === comment.post_id) {
                    return (
                        <div key={comment.id}>
                            <div className="initial-caption">
                            {/* Need to change all these labels for caption */}
                            <div className="initial-caption-username">{comment.username}</div> 
                            <div className="initial-caption-caption">{comment.body}</div>
                            </div>
                        </div>
                    );
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