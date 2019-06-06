import { connect } from 'react-redux';
import PostIndex from './post_index';
import { fetchPosts } from '../../actions/post_actions';
import { openModal, closeModal } from '../../actions/modal_actions';

const mapStateToProps = state => {
    return {
        posts: Object.values(state.entities.posts)
        // posts: Object.keys(state.entities.posts).map(id => state.entities.posts[id])
    };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchPosts: () => dispatch(fetchPosts()),
        openModal: modal => dispatch(openModal(modal)),
        closeModal: () => dispatch(closeModal())
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(PostIndex);
