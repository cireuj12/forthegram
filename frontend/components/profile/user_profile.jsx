import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { fetchUser } from '../../actions/user_actions';
import { fetchPostsbyUser } from '../../actions/post_actions';
import { fetchFollows } from '../../actions/follow_actions';
import FollowButtonContainer from '../follows/follow_button_container';

const mapStateToProps = (state, ownProps) => {
    // debugger
    return {
        user: state.entities.users[ownProps.match.params.userId],
        posts: Object.values(state.entities.posts),
        follows: Object.values(state.entities.follows)
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchUser: userId => dispatch(fetchUser(userId)),
        fetchPostsbyUser: userId => dispatch(fetchPostsbyUser(userId)),
        fetchFollows: userId => dispatch(fetchFollows(userId)),
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
        this.props.fetchFollows(this.props.match.params.userId);
        // debugger
    }

   componentDidUpdate(prevProps) { 
        if (prevProps.user && (prevProps.user.id != this.props.match.params.userId)) {
            this.props.fetchUser(this.props.match.params.userId);
            this.props.fetchPostsbyUser(this.props.match.params.userId);
            this.props.fetchFollows(this.props.match.params.userId);
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
        } else if (count !== 1) {
            return (
                <div>
                    {count} posts
                </div>
            )
        }
        
    }

    countFollowers() {
        // console.log(this.props.follows)
        const follow_array_iterate = this.props.follows
        const followers_array = []
        for (let i = 0; i < follow_array_iterate.length; i++) {
            if (follow_array_iterate[i].following_id === parseInt(this.props.match.params.userId)) {
                followers_array.push(follow_array_iterate[i].following_id)
            }
        }
        
        const followers = followers_array.length
        // debugger
        return (
            <div>
               {followers} followers
            </div>
        )
    }

    countFollowing() {

        const follow_array_iterate = this.props.follows
        const following_array = []
        for (let i = 0; i < follow_array_iterate.length; i++) {
            if (follow_array_iterate[i].follower_id === parseInt(this.props.match.params.userId)) {
                following_array.push(follow_array_iterate[i].follower_id)
            }
        }
        
        const following = following_array.length
        return (
            <div>
                {following} following
            </div>
        )
    }
    
    render() {
        // console.log(this.props)
        // debugger
        if (!this.props.user) return null; // this fixed fails to load

        const posts = this.props.posts.reverse().map(post => {
            if (this.props.user.id === post.author_id) {
                return (
                    <div key={post.id} className="img-div">
                        <Link to={`/posts/${post.id}`}>
                        <img className="profile-photos" src={post.photoUrl}>
                        </img>
                        </Link>
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
                            <FollowButtonContainer user={this.props.user}
                            follows={this.props.follows} />
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
                        <ul className="ul-post-index">
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