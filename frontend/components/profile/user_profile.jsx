import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { fetchUser } from '../../actions/user_actions';
import { fetchPostsbyUser } from '../../actions/post_actions';

const mapStateToProps = (state, ownProps) => {
    // debugger
    return {
        user: state.entities.users[ownProps.match.params.userId],
        posts: Object.values(state.entities.posts)
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchUser: userId => dispatch(fetchUser(userId)),
        fetchPostsbyUser: userId => dispatch(fetchPostsbyUser(userId))
        //fetch posts by userId
    }
}

class UserProfile extends React.Component {

    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.fetchUser(this.props.match.params.userId);
        this.props.fetchPostsbyUser(this.props.match.params.userId);
        // debugger
    }

   componentDidUpdate(prevProps) { 
        if (prevProps.user && (prevProps.user.id != this.props.match.params.userId)) {
            this.props.fetchUser(this.props.match.params.userId);
            this.props.fetchPostsbyUser(this.props.match.params.userId);
        }
    }
    
    render() {
        console.log(this.props)
        // debugger
        if (!this.props.user) return null; // this fixed fails to load

        const posts = this.props.posts.map(post => {
            if (this.props.user.id === post.author_id) {
                return (
                    <div key={post.id} className="img-div">
                        <img src={post.photoUrl}>
                        </img>
                    </div>
                )
            }
        })

        return (
            <div className="user-profile">

                <div className="profile-header-container">
                    <div className="profile-picture-container">
                        photo here
                    </div>

                     <div className="profile-box">
                        <div className="profile-box-user">
                            <div className="profile-username">
                                {this.props.user.username}
                            </div>
                        </div>

                        <div className="profile-box-counters">
                            <div></div>
                            <div></div>
                            <div></div>
                        </div>

                        <div className="profile-box-info">

                        </div>
                    </div>
                </div>
                <div className="profile-posts-index-container">
                    <div className="profile-posts-index">
                        <ul class="ul-post-index">
                            {posts}
                        </ul>
                    <span>
                        Two components will be rendered
                        <br></br>
                        The user profile top box
                        <br></br>
                        An Index of posts
                    </span>
                    </div>
                </div>
            </div>
        )
    }

}

export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(UserProfile));