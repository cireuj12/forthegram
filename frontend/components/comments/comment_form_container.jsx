import { connect } from 'react-redux';
import CommentForm from './comment_form';
import { createComment } from '../../actions/comment_actions';

const mapStatetoProps = (state, ownProps) => {
    const comment = {
        postId: ownProps.postId//|| null,
    }
    // debugger
    return {
        comment,
        user_id: state.session.id
    }
}

const mapDispatchtoProps = dispatch => {
    return {
        createComment: (comment) => dispatch(createComment(comment))
    }
}

export default connect(mapStatetoProps,mapDispatchtoProps)(CommentForm)