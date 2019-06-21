import { combineReducers } from 'redux';
import users from './users_reducer';
import PostsReducer from './posts_reducer';
import CommentsReducer from './comments_reducers';

const entitiesReducer = combineReducers({
    users,
    posts: PostsReducer,
    comments: CommentsReducer,
});

export default entitiesReducer;