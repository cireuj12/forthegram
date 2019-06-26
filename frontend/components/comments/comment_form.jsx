import React from 'react';
import {Link} from 'react-router-dom';


export default class CommentForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            body: '',
            postId: this.props.comment.postId  
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        if (event.keyCode === 13) { // for enter key
            e.preventDefault();
            if (this.state.body) {
                const commentForm = {
                    body: this.state.body,
                    post_id: this.state.postId,
                    user_id: this.props.user_id
                }
                this.props.createComment(commentForm).then(()=>{
                    this.setState({body: ''})
                })
            }
        }
    }

    handleField(field) {
        return e => {
            this.setState({ [field]: e.currentTarget.value })
        }
    }

    render() {
        // debugger

        //input ref attached for a reference to this specific area
        const { currentUser, comment, inputRef } = this.props;
        return (
            <div className="comment-form">
                <form>
                    <textarea 
                    className="comment-text"
                    name="body"
                    ref={inputRef}
                    value={this.state.body}
                    onChange={this.handleField('body')}
                    placeholder="Add a comment..."
                    onKeyUp={this.handleSubmit}>
                    </textarea>
                </form>
            </div>
        )
    }

}
