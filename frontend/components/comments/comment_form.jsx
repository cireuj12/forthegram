import React from 'react';
import {Link} from 'react-router-dom';


export default class CommentForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            body: '',
            post_id: this.props.postId  
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        if (this.state.body) {
            const commentForm = {
                body: this.state.body,
                post_id: this.props.comment.postId
            }
            this.props.createComment(commentForm)// .then
        }
    }

    handleField(field) {
        return e => {
            this.setState({ [field]: e.currentTarget.value })
        }
    }

    render() {
        // debugger
        const { currentUser, comment } = this.props;
        return (
            <div className="comment-form">
                <form onSubmit={this.handleSubmit}>
                    <textarea 
                    name="body"
                    value={this.state.body}
                    onChange={this.handleField('body')}
                    placeholder="Add a comment...">
                    </textarea>
                </form>
            </div>
        )
    }

}
