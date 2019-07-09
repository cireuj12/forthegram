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
        super(props);
        this.countPosts = this.countPosts.bind(this);
        this.countFollowers = this.countFollowers.bind(this);
        this.countFollowing = this.countFollowing.bind(this);
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

    countPosts() {
        const count = this.props.posts.length
        if (count === 1) {
            return (
                <div>
                    {count} post
                </div>
            )
        } else if (count !== 0) {
            return (
                <div>
                    {count} posts
                </div>
            )
        }
        
    }

    countFollowers() {
        return (
            <div>
                followers
            </div>
        )
    }

    countFollowing() {
        return (
            <div>
                following
            </div>
        )
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
                        <img className="profile-photo" src="/assets/userig.png">

                        </img>
                    </div>

                     <div className="profile-box">
                        <div className="profile-box-user">
                            <div className="profile-username">
                                {this.props.user.username}
                            </div>

                            <div>
                                <button className="follow-button">Follow</button>
                            </div>
                        </div>

                        <div className="profile-box-counters">
                            <div className="profile-posts-counter">
                                {this.countPosts()}
                            </div>
                            <div className="profile-followers-counter">
                                {this.countFollowers()}
                            </div>
                            <div className="profile-following-counter">
                                {this.countFollowing()}
                            </div>
                        </div>

                        <div className="profile-box-info">
                            <div className="profile-box-fullname">
                                {this.props.user.fullname}
                            </div>
                        </div>

                        <div className="profile-followed-by">
                            <span>Followed by</span>
                        </div>
                    </div>
                </div>
                <div className="profile-posts-index-container">
                    <div className="profile-posts-index">
                        <ul class="ul-post-index">
                            {posts}
                        </ul>
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