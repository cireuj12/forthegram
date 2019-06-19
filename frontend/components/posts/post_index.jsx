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
        // debugger
        const posts = this.props.posts.reverse().map(post => { //reverse makes the most recent picture show up but disrupts show page for first post
            return (
                <div className="index-container" key={post.id}>
                <PostIndexItem
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