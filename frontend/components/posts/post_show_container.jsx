import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'
import PostShow from './post_show';
import { fetchPost } from '../../actions/post_actions';

const mapStateToProps = (state, ownProps) => {
    return {
    post: state.entities.posts[ownProps.match.params.postId]}
    //add current user later to make edit/delete optiosn based on user only
};

const mapDispatchToProps = dispatch => ({
    fetchPost: id => dispatch(fetchPost(id))
});

export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(PostShow));

// export default connect(mapStateToProps,mapDispatchToProps)(PostShow)