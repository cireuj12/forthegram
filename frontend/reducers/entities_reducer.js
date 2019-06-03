import { combineReducers } from 'redux';
import users from './users_reducer';
import PostsReducer from './posts_reducer';

const entitiesReducer = combineReducers({
    users,
    posts: PostsReducer,
});

export default entitiesReducer;