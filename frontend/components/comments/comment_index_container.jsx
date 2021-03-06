import { connect } from 'react-redux';
import CommentIndex from './comment_index';
import { fetchComments, deleteComment, fetchCommentsbyPost } from '../../actions/comment_actions';

const mapStateToProps = state => {
    return {
        comments: Object.values(state.entities.comments)
    };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchComments: () => dispatch(fetchComments()),
        fetchCommentsbyPost: (postId) => dispatch((fetchCommentsbyPost(postId))),
        deleteComment: (commentId) => dispatch(deleteComment(commentId))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(CommentIndex);
