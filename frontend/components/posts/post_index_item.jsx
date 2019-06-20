import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { openModal, closeModal } from '../../actions/modal_actions'

//map and mount the modal in this container and then start testing it

//this will now be a class item

const mapStatetoProps = (state, ownProps) => {
    return {
        username: state.entities.posts[ownProps.post.id].username
    };
};
/*convention is to call it `ownProps` but because we pass in `post` to `PostIndexItem` 
as inline props - if we want access to `post.id`, we first need to make `post` available to msp*/


//FOR LATER!
// const mapDispatchtoProps = dispatch => {
//     return {
//         openModal: modal => dispatch(openModal(modal)),
//         closeModal: () => dispatch(closeModal())
//     };
// };

class PostIndexItem extends React.Component {

    constructor(props) {
        super(props);

    }
    
    render() {
        // debugger
        console.log(this.props)
    return (
        <li className="post-index-item">
            <div className= "post-index-container">
                    <h2 className="post-user-header">
                    <img className="stock-user" src="https://fntarizona.com/wp-content/uploads/2017/05/shutterstock_624472886.jpg" 
                        title="instagram-user"></img>
                        <div className="post-username">{this.props.username}</div>
                        <div className="post-three-dots-container"> 
                        {/* <button className="navBar-addphoto" onClick={() => this.props.openModal('PostMenu')}> */}
                        <Link className="post-index-item-caption" to={`/posts/${this.props.post.id}`}>
                            <img className="post-three-dots-index" src="https://static.thenounproject.com/png/658625-200.png"
                                title="instagram-three-dots"
                            alt="instagram-three-dots"></img>
                            </Link>
                            {/* </button> */}
                        </div>
                    </h2>
                <img className="post-index-item-image" src={this.props.post.photoUrl} />
                    <div className="post-buttons-container">
                        <img className="heart" src="https://freepngimg.com/thumb/instagram/1-2-instagram-heart-transparent.png"
                            title="heart"
                            alt="heart"></img>
                        <img className="comment" src="https://buzzhostingservices.com/images/instagram-comment-icon-1.png"
                            title="comment"
                            alt="comment"></img>
                        <img className="flag" src="https://cdn3.iconfinder.com/data/icons/basic-user-interface-application/32/INSTAGRAM_ICON_SETS-07-512.png"
                            title="flag"
                            alt="flag"></img>
                    </div>
                    <div className="like-counter"></div>
                    <div className="comments-container">
                        <div className="initial-caption">
                            <div className="initial-caption-username">{this.props.username}</div>
                            <div className="initial-caption-caption">{this.props.post.caption}</div>
                        </div>
                        <div className="comment-add-form-container">
                            <form className="comment-form">
                                <label htmlFor="post-caption"></label>
                                <input type="text"
                                    placeholder="Add a comment..."
                                    id="post-comment"/>
                                {/* <button>Make a new Post!</button> */}
                            </form>
                        </div>
                 </div>

            </div>
        </li>

        )
    }
}

// export default PostIndexItem;

export default connect(
    mapStatetoProps,
    null,
)(PostIndexItem);