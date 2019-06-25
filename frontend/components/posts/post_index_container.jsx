import { connect } from 'react-redux';
import PostIndex from './post_index';
import { fetchPosts } from '../../actions/post_actions';
import { openModal, closeModal } from '../../actions/modal_actions';
import { fetchLikes } from '../../actions/like_actions';

const mapStateToProps = state => {
    return {
        posts: Object.values(state.entities.posts),
        fetchuser: state.session.id
        // posts: Object.keys(state.entities.posts).map(id => state.entities.posts[id])
    };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchPosts: () => dispatch(fetchPosts()),
        fetchLikes: (userId) => dispatch(fetchLikes(userId)),
        // fetchComments: () => dispatch(fetchComments()),
        openModal: modal => dispatch(openModal(modal)),
        closeModal: () => dispatch(closeModal())
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(PostIndex);
