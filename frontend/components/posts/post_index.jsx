import React from 'react';
import PostIndexItem from './post_index_item';

class PostIndex extends React.Component {
    
    // constructor(props) {
    //     super(props);
    // //     // this.state = {
    // //     //     posts: []
    // //     // };
    // }

    componentDidMount() {
        this.props.fetchPosts();
    }

    render() {
        const posts = this.props.posts.map(post => {
            return (
                <div className="index-container">
                <PostIndexItem
                    key={post.id}
                    post={post}/>
                </div>
            );
    });

    return (
        <div>
            <ul>
                {posts}
            </ul>
        </div>
    );
  }
}

export default PostIndex;